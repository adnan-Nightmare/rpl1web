import { db } from '@/lib/db';
import bcrypt from 'bcryptjs'

export async function POST(req){
    try{
        const { username, password} = await req.body;

        const [rows] = await db.query('SELECT * FROM users WHERE username = ?', [username])

        if(rows.length === 0){
            return new Response(JSON.stringify({message: 'User not found'}), {
                status: 404,
            });
        }

        const user = rows[0]

        const isMatch = await bcrypt.compare(password, user.password)

        if(!isMatch) {
            return new Response(JSON.stringify({message: 'Invalid password'}), {
                status: 401,
            });
        }

        return new Response(JSON.stringify({message: 'Logged in successfully', user: {id: user.id, username: user.username}}), {
            status: 200,
        });

    }catch(err){
        return new Response(JSON.stringify({message: 'Internal Server Error'}), {
            status: 500,
        })
    }
}
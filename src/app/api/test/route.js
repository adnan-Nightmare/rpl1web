import db from "@/lib/db";
import Res from "@/lib/response";
import { middleware } from "@/lib/middleware";

export async function GET(req) {
  const deniedResponse = middleware(req);

  if (deniedResponse) return deniedResponse;

  try {
    const [rows] = await db.query("SELECT * FROM users");

    return Res(200, rows, "Users fetched successfully");
  } catch (err) {
    return Res(500, null, err.message);
  }
}

export async function POST(req) {
  try {
    const { username, password } = await req.json();

    console.log({ username, password });

    if (username == "adn" && password == "anStudio") {
      return Res(200, {username, password}, "Login successful");
    } else {
      return Res(401, {username, password}, "Invalid username or password");
    }
  } catch (err) {}
}

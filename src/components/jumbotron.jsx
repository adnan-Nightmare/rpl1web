import React from 'react'

const jumbotron = ({ users }) => {
  return (
    <div className='bg-purple-500 w-full h-44 rounded-xl my-5 flex justify-center items-center text-center relative'>

        <img src="../app/img/jumbotron1.png" alt="" />

        <div className='w-72'>
            <h1 className='font-semibold text-2xl text-white capitalize'>Hi, {users}</h1>
            <p className='text-white mt-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi, consectetur!</p>
        </div>



    </div>
  )
}

export default jumbotron
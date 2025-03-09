import React from 'react';

const Login: React.FC = () => {
  return (
  
    <div className='flex justify-center items-center  w-[center] h-[300px] '>
      <div className='bg-white p-10 rounded-lg w-90 text-center'>
        <div className='flex justify-around mb-4'>
          
          <button className='text-lg font-semibold border-b-2 border-gray-500 mr-4'>Login</button>
          <button className='text-lg front semibold'>Register</button>

        </div>
       
        <div className='mb-3'>

          <input 
          type= "email"
          placeholder='Email'
          className='w-full p-2 border border-gray-300 rounded'
          />
          
        </div>
        <div className='mb-3'>

          <input
          type='password'
          placeholder='Password'
          className='w-full p-2 border border-gray-300 rounded'
          />

        </div>
        <button className='w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600 '>Accept</button>
         
      </div>
      
    </div>
    
  );
};



export default Login;

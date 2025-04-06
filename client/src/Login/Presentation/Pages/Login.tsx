import React, { useState } from 'react';

const Login: React.FC = () => {
  const [isLogin, setIsLogin] = useState <boolean>(true);
  const [formData, setFormData] = useState({
    firstName: "" ,
    lastName:"",
    email:"",
    password:"",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData ({ ...formData, [e.target.name]: e.target.value});
  }
  return (
  
    <div className="flex justify-center items-center py-24 pt-10">
  <div className="bg-white p-5 rounded-lg w-96 text-center shadow-md">
        <div className='flex justify-around mb-4'>
          
          <button className={`text-lg font-semibold border-b-2 ${
              isLogin ? "border-gray-500" : "text-gray-500"
            } mr-4`}
            onClick={() => setIsLogin(true)}
          > Login </button>
          
          <button className={`text-lg font-semibold ${
              !isLogin ? "border-b-2 border-gray-500" : "text-gray-500"
            }`}
            onClick={() => setIsLogin(false)}>Register</button>

        </div>

        <form className='space-y-3'>
          {!isLogin && (
            <>
            <input
            type="text"
            name="firstName"
            placeholder='Nombre'
            value={formData.firstName}
            onChange={handleChange}
            className='w-full p-2 border border-gray-300 rounded'
            />
            <input
            type="text"
            name="lastName"
            placeholder='Apellido'
            value={formData.lastName}
            onChange={handleChange}
            className='w-full p-2 border border-gray-300 rounded'
            />
            </>
          )}
             <input
            type="email"
            name="email"
            placeholder='Email'
            value={formData.email}
            onChange={handleChange}
            className='w-full p-2 border border-gray-300 rounded'
            />
               <input
            type="password"
            name="password"
            placeholder='Password'
            value={formData.password}
            onChange={handleChange}
            className='w-full p-2 border border-gray-300 rounded'
            />
            <button className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600">
              {isLogin ? "Accept" : "Register"}
            </button>
          
        </form>
       
       
         
      </div>
      
    </div>
    
  );
};



export default Login;

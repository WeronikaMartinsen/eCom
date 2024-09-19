import "../styles/index.css";
import Layout from "../Layout/Layout";
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';



const schema = yup.object({
  firstName:yup.string().min(3).max(10).required(),
  age: yup.number().positive().integer().required(),
})
.required();


function Contact() {

  const {register, handleSubmit, formState: {errors}, } = useForm({
      resolver:yupResolver(schema),
  });



  function onSubmit(data) {
      console.log(data);
  }

  return (
<Layout>
  <div className="w-full flex justify-center items-center px-4 sm:px-6 lg:px-8"> 
    <form className="flex flex-wrap justify-center items-center -mx-3 mb-6 w-full" onSubmit={handleSubmit(onSubmit)}>
      <h1 className="mt-12 mb-6 text-3xl text-center">Contact us!</h1>
      
      {/* Username Field */}
      <div className="w-full flex flex-col justify-center items-center px-3 mb-6 md:mb-0">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
          Username
        </label>
        <input 
          {...register('firstName')} 
          className="appearance-none w-full sm:w-full md:w-1/2 lg:w-1/3 bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          type="text" 
          placeholder="Username" 
        />
        <p className="text-red-500 text-xs italic">{errors.firstName?.message}</p>
      </div>
      
      {/* Age Field */}
      <div className="w-full flex flex-col justify-center items-center px-3 mb-6 md:mb-0">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Age
        </label>
        <input 
          {...register('age')} 
          className="appearance-none w-full sm:w-full md:w-1/2 lg:w-1/3 bg-gray-200 text-gray-700 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          type="number" 
          placeholder="Age" 
        />
        <p className="text-red-500 text-xs italic">{errors.age?.message}</p>
      </div>
      
      {/* Submit Button */}
      <div className="w-full flex flex-col justify-center items-center px-3 mb-12">
        <button 
          type="submit" 
          className="w-full sm:w-full md:w-1/2 lg:w-1/3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
      </div>
    </form>
  </div>
</Layout>

  )
}



export default Contact;






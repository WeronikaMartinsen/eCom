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
     <div className="custom-max-width-forms">
     <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
        <h1 className="mt-12 mb-6 text-3xl">Contact us!</h1>
 
      <label className="block text-gray-700 text-sm font-bold mb-2" for="username"/>
        Username

      <input {...register('firstName')} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Username"/>

      <p>{errors.firstName?.message}</p>
      <input {...register('age')} />
      <p>{errors.age?.message}</p>
      <input type="submit" />
    </form>
     </div>
    </Layout>
  )
}



export default Contact;






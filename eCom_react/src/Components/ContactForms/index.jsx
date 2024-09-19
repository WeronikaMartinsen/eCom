import React from "react",
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';


const schema = yup.object({
    firstName:yup.string().min(3).max(10).required(),
    age: yup.number().positive().integer().required(),
})
.required();



function ContactForm() {

    const {contact, handleSubmit, formState: {errors}, } = useForm({
        resolver:yupResolver(schema),
    });



    function onSubmit(data) {
        console.log(data);
    }

    return (


        <form onSubmit={handleSubmit(onSubmit)}>
        <input {...contact('firstName')} />
        <p>{errors.firstName?.message}</p>
        <input {...contact('age')} />
        <p>{errors.age?.message}</p>
        <input type="submit" />
      </form>

    )
}

export default ContactForm;
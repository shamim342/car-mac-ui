import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './addService.css'


const Addservice = () => {
    const { register, handleSubmit,reset } = useForm();
  const onSubmit = data => {
      console.log(data);
      axios.post('https://obscure-brushlands-64553.herokuapp.com/services' , data)
      .then(res=>{
        if(res.data.insertedId){
            alert('added successfull')
            reset();
        }
    })
  };

    return (
        <div style={{marginTop:"4em"}}>
            <h1>add services</h1>

            <div className="add-service">
            <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name", { required: true, maxLength: 20 })} placeholder="service name" />
      <textarea {...register("description")} placeholder="description"/>
      <input type="number" {...register("price")} placeholder="price"/>
      <input type="text" {...register("img")} placeholder="img-url"/>
      <input className="custom-btn" type="submit" />
    </form>
            </div>

        </div>
    );
};

export default Addservice;
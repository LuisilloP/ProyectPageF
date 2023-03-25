import React from 'react'
import {useForm} from "react-hook-form"

interface FormData {
    firstName: string;
    secondName: string;
    email: string;
    password: string;
    confirmPassword: string;
  }

const FormContact = (): JSX.Element => {
    const { register, handleSubmit, getValues } = useForm<FormData>()
    const onSubmit = handleSubmit((values) => {
      alert("Form submit: " + JSON.stringify(values));
    })
    return (
        <div className="w-80  h-96 flex flex-col justify-between items-center bg-teal-800 rounded-lg border-2 border-white text-white shadow-2xl shadow-black/50        ">
            <form onSubmit={onSubmit} className="h-52 w-full p-4 space-y-4">
                <input {...register('firstName', {required: true})} placeholder='Nombre' className='inputClass'/>
                <input {...register('secondName', {required: true})} placeholder='Edad' className='inputClass'/>
                <input {...register('email', {required: true})} placeholder='Email' className='inputClass'/>
                <input {...register('password', {required: true})} placeholder="Password" className='inputClass' type="password" />
                <input {...register('confirmPassword', {required: true, validate: (value) => value === getValues('password')})} placeholder="Confirm password" className='inputClass' type="password" />

                <button type="submit" className="h-8 w-full bg-white text-teal-800 font-bold rounded hover:bg-cyan-200 hover:text-white">Enviar</button>
            
            </form>


                {/**
       *   const { register, handleSubmit } = useForm();

          function onSubmit(datosForm: any){
            console.log(datosForm);
          }
       * <form onSubmit={handleSubmit(onSubmit)}>
      
      <div className="form-control">
        <p>
          <label className="label">Nombre</label>
        </p>
        <input
          type="text"
          {...register("firstName", { required: true, maxLength: 80 })}
        />
      </div>
      <div className="form-control">
        <p>
          <label className="label">Apellidos</label>
        </p>
        <input
          type="text"
          {...register("surname", { required: true, maxLength: 100 })}
        />
      </div>
      <div className="form-control">
        <p>
          <label className="label">Email</label>
        </p>
        <input
          type="text"
          {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
        />
      </div>
      <div className="form-control">
        <p>
          <label className="label">Tipo</label>
        </p>
        <select {...register("type", { required: true })}>
          <option value="frontend">Frontend</option>
          <option value="backend">Backend</option>
          <option value="fullstack">Fullstack</option>
        </select>
      </div>
      <div className="form-control">
        <p>
          <label className="label">Freelance</label>
        </p>
        <label>
          Sí
          <input
            {...register("freelance", { required: true })}
            type="radio"
            value="s"
          />
        </label>
        <label>
          No
          <input
            {...register("freelance", { required: true })}
            type="radio"
            value="n"
          />
        </label>
      </div>
      <button type="submit" className="submit">
        Enviar
      </button>
    </form>
       */}
        </div>
    )
}

export default FormContact
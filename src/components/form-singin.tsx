"use client"

import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(8)
})

type FormFieldsProps = z.infer<typeof schema>

export const FormSingIn = () => {
  
  const {
    register,
    handleSubmit,
    setError,
    formState: {errors, isSubmitting}
  } = useForm<FormFieldsProps>({
    resolver: zodResolver(schema)
  })
  
  const onSubmit: SubmitHandler<FormFieldsProps> = async (data) => {
    try {
      
      await new Promise<void>(async (resolve) => setTimeout(resolve, 3000))
      // throw new Error()
      
      console.log(data)
    } catch (error) {
      setError("root", {
        message: "This email is already in use",
      })
    }
  }
  
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={'mt-4'}
    >
      <Input
        {...register('email')}
        name={'email'}
        type="text"
        placeholder={'Email'}
        className='mb-4'
      />
      {errors.email && (<div className='text-red-600 m-4'>{errors.email?.message}</div>)}
      
      <Input
        {...register('password')}
        name={'password'}
        type="password"
        placeholder={'Password'}
        className='mb-4'
      />
      {errors.password && (<div className='text-red-600 m-4'>{errors.password?.message}</div>)}
      
      <Button
        className='w-full'
        type='submit'
        size='lg'
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Loading...' : 'Submit'}
      </Button>
      {errors.root && (<div className='text-red-600 m-4'>{errors.root?.message}</div>)}
    </form>
  );
};

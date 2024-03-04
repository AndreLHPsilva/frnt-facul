"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { ReactNode, useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { TypeSignupDataProps, signupFormSchema } from "@/types/SignupTypes";

export default function FormSignupComponent() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TypeSignupDataProps>({
    resolver: zodResolver(signupFormSchema),
  });

  const [isVisiblePassword, setIsVisiblePassword] = useState(false);

  async function HandleLogin(data: TypeSignupDataProps) {
    try {
      const resp = await fetch("http://localhost:3001/users/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({...data}),
      });

      const body = await resp.json()

      if(!resp.ok){
        throw new Error(body.message)
      }

      console.log(body)
    } catch (error) {
      console.log('err', error)
    }
  }

  function renderLogo() {
    if (isVisiblePassword) {
      return <Eye className="size-4 text-cyan-600" />;
    }

    return <EyeOff className="size-4 text-cyan-600" />;
  }

  return (
    <>
      <section>
        <h1 className="text-3xl font-medium text-center mb-5">Cadastro</h1>
      </section>
      <form
        onSubmit={handleSubmit(HandleLogin)}
        className="text-sm flex flex-col gap-2 min-w-80 max-w-xs"
      >
        <div className="flex flex-col  gap-1">
          <label className="font-semibold text-xs" htmlFor="email">
            Email
          </label>
          <input
            {...register("email")}
            type="email"
            id="email"
            className="w-full border border-zinc-200 rounded py-1.5 px-2 outline-none focus:shadow focus:shadow-zinc-200 focus:border-cyan-300 transition-all"
          />
          {errors.email && (
            <span className="text-red-500 text-xs">{errors.email.message}</span>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <label className="font-semibold text-xs" htmlFor="password">
            Senha
          </label>
          <div className="relative">
            <input
              {...register("password")}
              type={isVisiblePassword ? "password" : "text"}
              id="password"
              className="w-full border border-zinc-200 rounded py-1.5 pl-2 pr-8 outline-none focus:shadow focus:shadow-zinc-200 focus:border-cyan-300 transition-all"
            />
            <button
              type="button"
              onClick={() => setIsVisiblePassword((prev) => !prev)}
              className="absolute top-2 -right-1 pr-3"
            >
              {renderLogo()}
            </button>
          </div>
          {errors.password && (
            <span className="text-red-500 text-xs">
              {errors.password.message}
            </span>
          )}
        </div>
        {/* <div className="flex flex-col  gap-1">
          <label className="font-semibold text-xs" htmlFor="email">
            Altura
          </label>
          <InputHeight
            control={control}
            getValues={getValues}
            setValue={setValue}
          />
          {errors.height && (
            <span className="text-red-500 text-xs">
              {errors.height.message}
            </span>
          )}
        </div>

        <div className="flex flex-col gap-1">
          <label className="font-semibold text-xs" htmlFor="weight">
            Peso
          </label>

          <InputWeight
            control={control}
            getValues={getValues}
            setValue={setValue}
          />

          {errors.weight && (
            <span className="text-red-500 text-xs">
              {errors.weight.message}
            </span>
          )}
        </div> */}

        <button
          className="w-full text-white uppercase font-bold text-xs py-1.5 bg-cyan-600 rounded-md mt-5"
          type="submit"
        >
          Entrar
        </button>
      </form>
    </>
  );
}

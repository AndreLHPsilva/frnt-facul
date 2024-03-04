"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TypeLoginDataProps, loginFormSchema } from "@/types/LoginTypes";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { signIn } from "next-auth/react";

export default function FormSigninComponent() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TypeLoginDataProps>({
    resolver: zodResolver(loginFormSchema),
  });

  const [isVisiblePassword, setIsVisiblePassword] = useState(false);

  async function HandleLogin(data: TypeLoginDataProps) {
    const result = await signIn("credentials", { ...data, redirect: false });

    if (result?.error) {
      return;
    }

    window.location.replace('/home')
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
        <h1 className="text-3xl font-medium text-center mb-5">Login</h1>
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
            <span className="text-red-500 ">{errors.email.message}</span>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <label className="font-semibold text-xs" htmlFor="password">
            Senha
          </label>
          <div className="relative">
            <input
              {...register("password")}
              type={isVisiblePassword ? "text" : "password"}
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
            <span className="text-red-500 ">{errors.password.message}</span>
          )}
        </div>
        <button
          className="w-full text-white uppercase font-bold text-xs py-1.5 bg-cyan-600 rounded-md mt-5 hover:opacity-90 hover:scale-95 transition-all duration-300"
          type="submit"
        >
          Entrar
        </button>
      </form>
    </>
  );
}

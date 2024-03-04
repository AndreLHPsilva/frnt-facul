"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import InputHeight from "../Inputs/InputHeight";
import InputWeight from "../Inputs/InputWeight";
import { TypeImcDataProps, imcFormSchema } from "@/types/ImcTypes";

interface IFormCalculatorProps {
  HandleCalculateImc: (data: TypeImcDataProps) => void;
  imc: number;
  setDiet: (diet: string) => void;
}

export default function FormCalculator({
  HandleCalculateImc,
  imc,
  setDiet,
}: IFormCalculatorProps) {
  const {
    control,
    setValue,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm<TypeImcDataProps>({
    resolver: zodResolver(imcFormSchema),
  });

  function handleChangeValue(field: "height" | "weight", value: any) {
    setValue(field, value);
  }

  return (
    <form
      onSubmit={handleSubmit(HandleCalculateImc)}
      className="text-sm flex flex-col gap-2 min-w-80 max-w-xs"
    >
      <div className="flex flex-col  gap-1">
        <label className="font-semibold text-xs" htmlFor="email">
          Altura
        </label>
        <InputHeight
          control={control}
          getValues={getValues}
          setValue={handleChangeValue}
        />
      </div>

      <div className="flex flex-col gap-1">
        <label className="font-semibold text-xs" htmlFor="weight">
          Peso
        </label>

        <InputWeight
          control={control}
          getValues={getValues}
          setValue={handleChangeValue}
        />
      </div>

      <button
        className="w-full text-white uppercase font-bold text-xs py-1.5 bg-cyan-600 rounded-md mt-5 hover:opacity-90 transi"
        type="submit"
      >
        Calcular
      </button>
    </form>
  );
}

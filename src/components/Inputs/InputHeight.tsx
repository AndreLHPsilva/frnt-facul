'use client'

import { useState } from "react";
import InputDefault from "./InputDefault";
type FieldType = "height" | "weight"

interface IInputHeightProps {
  control: any;
  getValues: (field: string) => string;
  setValue: (field: FieldType, value: any) => void;
}

export default function InputHeight({ control, getValues, setValue }: IInputHeightProps) {

  const handleInputChange = (event: any) => {
    const value = event.target.value;
    const numDigits = value.replace(/\D/g, "").length;

    if (numDigits > 3) {
      return;
    } else {
      setValue("height", parseFloat(value));
    }
  };

  return (
    <InputDefault
      control={control}
      getValues={getValues}
      handleInputChange={handleInputChange}
      mask={"9.99"}
      name="height"
    />
  );
}

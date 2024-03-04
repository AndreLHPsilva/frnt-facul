'use client'

import { useState } from "react";
import InputDefault from "./InputDefault";
type FieldType = "height" | "weight"

interface IInputWeightProps {
  control: any;
  getValues: (field: string) => string;
  setValue: (field: FieldType, value: any) => void;
}

export default function InputWeight({ control, getValues, setValue }: IInputWeightProps) {

  const [mask, setMask] = useState("999.99");

  const handleInputBlur = (event: any) => {
    const value = event.target.value;
    const numDigits = value.replace(/\D/g, "").length;

    if (numDigits === 4) {
      const newValue = parseFloat(getValues('weight')) / 10
      setValue('weight', newValue.toFixed(2))
      setMask("99.99");
    } else if (numDigits === 5) {
      setMask("999.99");
    } else {
      setMask("999.99");
    }
  };

  const handleInputChange = (event: any) => {
    const value = event.target.value;
    const numDigits = value.replace(/\D/g, "").length;

    if (numDigits === 4 && mask === "99.99") {
      setMask("999.99");
      setValue(
        "weight",
        parseFloat(`${value}${event.nativeEvent.data}`.replaceAll(".", ""))
      );
    } else if (numDigits > 5) {
      return;
    } else {
      setValue("weight", value);
    }
  };

  return (
    <InputDefault
      control={control}
      getValues={getValues}
      handleInputBlur={handleInputBlur}
      handleInputChange={handleInputChange}
      mask={mask}
      name="weight"
    />
  );
}

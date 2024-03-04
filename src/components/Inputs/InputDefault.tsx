import { Controller } from "react-hook-form";
import InputMask from "react-input-mask";


interface IInputDefaultProps {
  control: any;
  mask: string;
  name: string;
  getValues: (field: string) => string;
  handleInputChange: (event: any) => void;
  handleInputBlur?: (event: any) => void;
}

export default function InputDefault({ control, mask, handleInputChange, handleInputBlur, name, getValues }: IInputDefaultProps) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => {
        return (
          <InputMask
          className="w-full border border-zinc-200 rounded py-1.5 pl-2 pr-8 outline-none focus:shadow focus:shadow-zinc-200 focus:border-cyan-300 transition-all"
          mask={mask}
            value={getValues(name)}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
          />
        );
      }}
    />
  );
}

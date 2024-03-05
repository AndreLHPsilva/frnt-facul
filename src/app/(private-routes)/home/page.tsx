"use client";

import FormCalculator from "@/components/forms/FormCalculator";
import TableImc from "@/components/global/TableImc";
import { TypeImcDataProps } from "@/types/ImcTypes";
import { signOut } from "next-auth/react";
import { useState } from "react";

export default function Home() {
  const [imc, setImc] = useState(0);
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [diet, setDiet] = useState("");

  function HandleCalculateImc(data: TypeImcDataProps) {
    const { height, weight } = data;

    const imcValue = weight / (height * height);

    setHeight(height);
    setWeight(weight);

    setImc(imcValue);
  }

  async function handleGenerateDiet() {
    const headers = {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_SECRET_OPENIA}`,
      "Content-Type": "application/json",
    };

    const prompt = `Com base nesses dados:
                      IMC: ${imc.toFixed(2)}
                      Altura: ${height} m
                      Peso: ${weight} kg

                      Você deve montar uma dieta para melhor meu IMC e minha saúde. Lembrando que você é um nutricionista muito experiente e deve criar um plano alimentar.`;

    const bodyData = {
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content: `${prompt}`,
        },
      ],
      max_tokens: 1000,
      temperature: 0.7,
    };

    try {
      const response = await fetch(
        "https://api.openai.com/v1/chat/completions",
        {
          method: "POST",
          headers,
          body: JSON.stringify(bodyData),
        }
      );

      const body = await response.json();

      if (!response.ok) {
        throw new Error("Erro");
      }

      const diet = body.choices[0].message.content;

      setDiet(diet);
    } catch (error) {
      console.error(error);
    }
  }

  async function logout(){
    await signOut({redirect: false})

    window.location.replace('/')
  }

  return (
    <main className="w-full min-h-[85vh] flex justify-center items-center flex-col gap-5 text-cyan-900">
      <button onClick={logout}>Sair sistema</button>
      <section className="w-full flex flex-col justify-center items-center gap-10">
        <div className="text-center">
          <h1 className="text-xl leading-10">
            Calculadora de Índice de Massa Corporal
          </h1>
          <p className="text-sm">
            Insira seus dados abaixo e compare seu resultado com nossa tabela.
          </p>
        </div>
        <FormCalculator
          HandleCalculateImc={HandleCalculateImc}
          imc={imc}
          setDiet={setDiet}
        />
        <TableImc />

        <div className="flex flex-col gap-3 items-center">
          IMC: {imc.toFixed(2)}
          <button onClick={handleGenerateDiet} disabled={imc < 30} className={`${imc < 30 ? 'cursor-not-allowed' : 'cursor-pointer'} border py-1 px-2 rounded bg-slate-400 text-white`} title={`${imc < 30 ? 'Seu IMC está bom' : 'Gerar dieta com IA'}`}>Gerar Dieta</button>
        </div>

        {diet && <div className="sm:max-w-[580px] max-w-80 py-10"><h1 className="text-xl pb-10">Dieta:</h1><p style={{ whiteSpace: "pre-line" }}>{diet}</p></div>}
      </section>
    </main>
  );
}
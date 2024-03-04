import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log('teste')
  res.status(200).json({ message: 'Esta é uma rota de exemplo!' });
}


// const headers = {
//   Authorization: `Bearer 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`,
//   "Content-Type": "application/json",
// };

// const prompt = `Com base nesses dados:
// IMC: 23.63
// Altura: 1.84 m
// Peso: 84 kg

// Você deve montar uma dieta para melhor meu IMC e minha saúde. Lembrando que você é um nutricionista muito experiente e deve criar um plano alimentar.`;

// const bodyData = {
//   model: "gpt-3.5-turbo",
//   messages: [
//     {
//       role: "user",
//       content: `Oi, responda em português brasileiro.`,
//     },
//   ],
//   max_tokens: 2000,
//   temperature: 0.7,
// };

// try {
//   const response = await fetch(
//     "https://api.openai.com/v1/chat/completions",
//     {
//       method: "POST",
//       headers,
//       body: JSON.stringify(bodyData),
//     }
//   );

//   const body = await response.json();

//   console.log(body);
// } catch (error) {
//   console.error(error);
// }
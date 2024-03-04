// IMC	CLASSIFICAÇÃO	OBESIDADE (GRAU)
// Menor que 18,5	Magreza	0
// Entre 18,5 e 24,9	Normal	0
// Entre 25,0 e 29,9	Sobrepeso	I
// Entre 30,0 e 39,9	Obesidade	II
// Maior que 40,0	Obesidade Grave	III
const data = [
  {
    imc: "Menor que 18,5",
    classification: "Magreza",
    degree: 0,
  },
  {
    imc: "Entre 18,5 e 24,9",
    classification: "Normal",
    degree: 0,
  },
  {
    imc: "Entre 25,0 e 29,9",
    classification: "Sobrepeso",
    degree: 1,
  },
  {
    imc: "Entre 30,0 e 39,9",
    classification: "Obesidade",
    degree: 2,
  },
  {
    imc: "Maior que 40,0",
    classification: "Obesidade Grave",
    degree: 3,
  },
];

export default function TableImc() {
  return (
    <table className=" sm:w-[560px] w-[320px] border sm:text-sm text-xs">
      <thead className="border-b">
        <tr>
          <th>IMC</th>
          <th>Classificação</th>
          <th>Obesidade (GRAU)</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index} className="border-b">
            <td className="text-center">
              <span>{item.imc}</span>
            </td>
            <td className="text-center">
              <span>{item.classification}</span>
            </td>
            <td className="text-center">
              <span>{item.degree}</span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

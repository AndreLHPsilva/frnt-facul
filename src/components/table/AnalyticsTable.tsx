import DefaultDataTable from "./DefaultDataTable";

export default function AnalyticsTable() {
  const mock = [
    {
      id: "dsadsada",
      height: 1.84,
      weight: 80.0,
      created_at: '2024-12-12',
      updated_at: '2024-12-12',
    },
    {
      id: "dsadsada",
      height: 1.84,
      weight: 80.0,
      created_at: '2024-12-12',
      updated_at: '2024-12-12',
    },
  ];

  const columns = [
    {
      name: 'Altura',
      selector: (row: any) => row.height,
    },
    {
      name: 'Peso',
      selector: (row: any) => row.weight,
    },
    {
      name: 'Realizado em',
      selector: (row: any) => row.created_at,
    },
  ]

  return <DefaultDataTable columns={columns} data={mock} />;
}

import DataTable from "react-data-table-component";

interface IDefaultDataTableProps {
  columns: {
    name: string;
    selector: (row: any) => any;
  }[];
  data: {
    id: string;
    height: number;
    weight: number;
    created_at: string;
    updated_at: string;
  }[];
}

export default function DefaultDataTable({
  columns,
  data,
}: IDefaultDataTableProps) {
  const customPaginationOptions = {
    rowsPerPageText: "Análises por página",
    rangeSeparatorText: "de",
    selectAllRowsItem: true,
    selectAllRowsItemText: "Todas",
  };
  
  return (
    <DataTable
      columns={columns}
      data={data}
      pagination
      paginationComponentOptions={customPaginationOptions}
    />
  );
}

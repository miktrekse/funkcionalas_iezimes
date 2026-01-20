import TableHeaderCell from "./TableHeaderCell";

function TableHeader() {
  return (
    <thead>
      <tr>
        <TableHeaderCell label="Angļu valodā" />
        <TableHeaderCell label="Latviešu valodā" />
      </tr>
    </thead>
  );
}

export default TableHeader;

import TableCell from "./TableCell";

function TableRow({ en, lv }) {
  return (
    <tr>
      <TableCell content={en} />
      <TableCell content={lv} />
    </tr>
  );
}

export default TableRow;

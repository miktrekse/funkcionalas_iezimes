import TableHeader from "./TableHeader";
import TableRow from "./TableRow";

function Table({ data }) {
  return (
    <table border="1" cellPadding="8">
      <TableHeader />
      <tbody>
        {data.map((row, index) => (
          <TableRow key={index} en={row.en} lv={row.lv} />
        ))}
      </tbody>
    </table>
  );
}

export default Table;

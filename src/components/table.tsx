import {
  TableContainer,
  Table,
  TableHead,
  TableCell,
  TableRow,
  TableBody,
  Typography,
} from "@mui/material";

type Props = {
  columns: string[];
  data: {
    [key: string]: string | number | undefined;
  }[];
};

export const CTable: React.FC<Props> = (props) => {
  const { columns, data } = props;

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell key={column}>
                <Typography
                  style={{
                    textTransform: "capitalize",
                  }}
                >
                  {column}
                </Typography>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>

        <TableBody>
          {data.map((row, idx) => (
            <TableRow key={idx}>
              {columns.map((column, idx) => (
                <TableCell key={idx}>{row[column] ?? "-"}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

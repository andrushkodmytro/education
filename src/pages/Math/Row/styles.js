import makeStyles from "@mui/styles/makeStyles";

export default makeStyles(() => ({
  row: {
    display: "flex",
    alignItems: "center",
    fontSize: 28,
    padding: 12,
  },
  operand: {
    minWidth: 40,
  },
  operator: {
    minWidth: 40,
  },
  input: {
    width: 30,
    fontSize: 28,
    padding: "0 2px,",
    borderRadius: 8,
  },
  success: {
    display: "inline-flex",
    justifyContent: 'center',
    height: 36,
    width: 36,
    borderRadius: 8,
    color: "green",
    marginLeft: 12,
    border: "1px solid green",
  },
  error: {
    display: "inline-flex",
    justifyContent: 'center',
    height: 36,
    width: 36,
    borderRadius: 8,
    color: "red",
    marginLeft: 12,
    border: "1px solid red",
  },
}));

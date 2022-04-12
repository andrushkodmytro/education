import { makeStyles } from "@mui/styles";

export default makeStyles(() => ({
  resultContainer: {
    display: "flex",
    padding: "12px 8px",
    // backgroundColor: "lightgreen",
  },
  resultText: {
    fontSize: 28,
    fontWeight: 500,
  },
  successResultText: {
    marginRight: 24,
    "& > span": {
      color: "green",
    },
  },
  errorResultText: {
    "& > span": {
      color: "red",
    },
  },
  resultBtn: {
    marginLeft: "auto",
    // backgroundColor: 'green'
  },
}));

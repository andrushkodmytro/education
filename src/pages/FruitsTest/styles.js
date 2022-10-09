import makeStyles from "@mui/styles/makeStyles";

export default makeStyles(() => ({
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  imgContainer: {
    width: 300,
    height: 300,
    overflow: "hidden",
    borderRadius: 12,
    marginBottom: "20px",

    "& > img": {
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },
  },

  spellBtnContainer: {
    marginBottom: 20,
  },
  letterContainer: {
    padding: "10px 20px",
    display: " flex",
    justifyContent: "center",
    marginBottom: "20px",
  },
  letter: {
    display: "flex",
    justifyContent: " center",
    alignItems: "center",
    border: "1px solid green",
    borderRadius: "8px",
    margin: "0 4px",
    height: "50px",
    width: "50px",
    fontSize: "24px",
    backgroundColor: "orange",

    "&.hidden-letter": {
      visibility: "hidden",
      PointerEvent: 'none'
    },
  },
}));

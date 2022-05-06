import React, { useEffect, useState } from "react";
import MaterialTable from "material-table";
import { Paper, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import moment from "moment";
import { getStore } from "../../utils/store";

const columns = [
  {
    field: "id",
    title: "ID",
    width: 90,
    editable: false,
    sortable: false,
  },
  {
    field: "date",
    title: "Дата",
    width: 150,
    render: (rowData) => {
      return moment(rowData.date).format("DD.MM.YYYY");
    },
  },
  {
    field: "time",
    title: "Час",
    width: 150,
    render: (rowData) => {
      return moment(rowData.date).format("HH:MM");
    },
  },
  {
    field: "duration",
    title: "Тривалість",
    width: 110,
    editable: false,
    sortable: false,
    flex: 1,
  },
  {
    field: "total",
    title: "Кількість",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    flex: 1,
    render: (rowData) => {
      return rowData?.correct + rowData?.incorrect || 0;
    },
  },
  {
    field: "correct",
    title: "Правильно",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    flex: 1,
  },
  {
    field: "incorrect",
    title: "Неправильно",
    type: "number",
    width: 110,
    editable: false,
    sortable: false,
    flex: 1,
  },
  {
    field: "results percentages",
    title: "Результативність",
    type: "number",
    width: 110,
    editable: false,
    sortable: false,
    flex: 1,
    render: (rowData) => {
      return (
        (rowData.correct / (rowData.correct + rowData.incorrect)) *
        100
      ).toFixed(2);
    },
  },
];

export default function Statistics() {
  const { levelId } = useParams();

  const [data, setData] = useState([]);

  useEffect(() => {
    const newData = getStore();
    setData(newData?.[levelId] || []);
  }, [levelId]);

  return (
    <Paper>
      <Typography variant="h5">Статистика</Typography>
      <MaterialTable
        columns={columns}
        data={data}
        options={{ search: false, toolbar: false }}
        components={{
          Container: (props) => <div {...props}></div>,
        }}
      />
    </Paper>
  );
}

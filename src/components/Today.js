import React from "react";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import { todayTaskItems } from "./listItems";

let date = new Date().toLocaleString("en-us", {
  month: "long",
  year: "numeric",
  day: "numeric"
});

export default function Today() {
  return (
    <List>
      <Typography component="h2" variant="h6" color="primary">
        Today
        <ListSubheader>{date}</ListSubheader>
      </Typography>
      {todayTaskItems}
    </List>
  );
}

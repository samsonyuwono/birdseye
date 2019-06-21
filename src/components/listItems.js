import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DashboardIcon from "@material-ui/icons/Dashboard";
import Typography from "@material-ui/core/Typography";
import Checkbox from "@material-ui/core/Checkbox";

export const outstandingTaskItems = (
  <div>
    <Typography component="h2" variant="h5" />
    <ListItem button>
      <Checkbox />
      <ListItemText primary="Scripts" />
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
    </ListItem>
    <ListItem>
      <Checkbox />
      <ListItemText primary="Scripts" />
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
    </ListItem>
    <ListItem button>
      <Checkbox />
      <ListItemText primary="Scripts" />
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
    </ListItem>
    <ListItem button>
      <Checkbox />
      <ListItemText primary="Scripts" />
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
    </ListItem>
    <ListItem button>
      <Checkbox />
      <ListItemText primary="Scripts" />
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
    </ListItem>
  </div>
);

export const todayTaskItems = (
  <div>
    <ListItem button>
      <Checkbox />
      <ListItemText primary="Fix UX Issues" />
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
    </ListItem>
    <ListItem button>
      <Checkbox />
      <ListItemText primary="Fix UX Issues" />
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
    </ListItem>
    <ListItem button>
      <Checkbox />
      <ListItemText primary="Fix UX Issues" />
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
    </ListItem>
  </div>
);

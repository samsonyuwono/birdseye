import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    height: "100vh"
  },
  image: {
    backgroundColor: "blue",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center"
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start"
  },
  header: {
    marginLeft: theme.spacing(7)
  },
  avatar: {
    margin: "20px auto 35px 55px",
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    padding: theme.spacing(7)
  },
  textField: {
    marginTop: "4px",
    marginBottom: "24px"
  },
  submit: {
    backgroundColor: "#000",
    margin: theme.spacing(0, 0, 2),
    fontSize: "0.5rem",
    borderRadius: "0"
  },
  createAnAccount: {
    fontSize: "0.5rem",
    borderRadius: "0"
  },
  forgotPassword: {
    marginTop: theme.spacing(2.5),
    textTransform: "uppercase",
    textAlign: "center"
  },
  link: {
    color: "#a7a7a9",
    fontSize: "12px"
  }
}));

function LoginPage(props) {
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />

      <Grid item xs={12} sm={7} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar} />
          <Typography component="h1" variant="h5" className={classes.header}>
            Welcome To Birdseye!
          </Typography>
          <form className={classes.form} noValidate>
            Email Address
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              className={classes.textField}
            />
            Password
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              className={classes.textField}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={props.openDashboard}
            >
              Sign In
            </Button>
            <Button
              type="submit"
              fullWidth
              variant="outlined"
              color="inherit"
              className={classes.createAnAccount}
            >
              Create An Account
            </Button>
            <Grid container className={classes.forgotPassword}>
              <Grid item xs>
                <Link href="#" variant="body2" className={classes.link}>
                  Forgot password?
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Grid>
      <Grid item xs={false} sm={5} md={7} className={classes.image} />
    </Grid>
  );
}

export default LoginPage;

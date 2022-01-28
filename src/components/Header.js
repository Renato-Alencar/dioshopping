import { Link } from "react-router-dom";
import { Grid, Typography, Button, makeStyles } from "@material-ui/core/";
import Cart from "./Cart";

const useStyles = makeStyles((theme) => ({
  link: {
    textDecorationLine: "none",
  },
  button: {
    marginTop: "15px",
    color: "#bdc1c6",
  },
  typography: {
    color: "#ffb507",
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      direction="row"
      justify="space-around"
      alignItems="center"
      xs={12}
    >
      <Typography variant="h3" className={classes.typography}>
        Dio Sports
      </Typography>
      <Link to="/" className={classes.link}>
        <Button color="primary" className={classes.button}>
          Home
        </Button>
      </Link>
      <Link to="/sobre" className={classes.link}>
        <Button color="primary" className={classes.button}>
          Sobre
        </Button>
      </Link>
      <Link to="/contato" className={classes.link}>
        <Button color="primary" className={classes.button}>
          Contato
        </Button>
      </Link>
      <Cart />
    </Grid>
  );
};

export default Header;

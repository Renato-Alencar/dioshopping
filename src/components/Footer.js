import { Grid, Typography, makeStyles } from "@material-ui/core/";
import Icons from "./Icons";

const useStyles = makeStyles((theme) => ({
  icon: {
    margin: "10px",
    fontSize: "24px",
  },
  grid: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    listStyle: "none",
    paddingBottom: "15px",
  },
  contact: {
    justifyContent: "center",
    columnGap: "10px",
  },
  container: {
    paddingTop: "15px",
    marginTop: "15px",
  },
  typography: {
    color: "#bdc1c6",
  },
}));

const Footer = () => {
  const media = [
    {
      link: "https://www.facebook.com/digitalinnovationone/",
      content: "fa fa-facebook-f",
      target: "blank",
    },
    {
      link: "https://www.instagram.com/digitalinnovation.one/",
      content: "fa fa-instagram ",
      target: "blank",
    },
    {
      link: "https://www.youtube.com/channel/UCMxqhdELkftE8DuBZiwdPfg",
      content: "fa fa-youtube",
      target: "blank",
    },
    {
      link: "https://twitter.com/dio_me_",
      content: "fa fa-twitter",
      target: "blank",
    },
  ];

  const payments = [
    {
      content: "fa fa-cc-mastercard",
    },
    {
      content: "fa fa-cc-paypal",
    },
    {
      content: "fa fa-cc-visa",
    },
    {
      content: "fa fa-credit-card",
    },
    {
      content: "fa fa-cc-stripe",
    },
  ];

  const classes = useStyles();
  return (
    <Grid container className={`${classes.grid} ${classes.container}`} xs={12}>
      <Grid container alignItems="center" direction="column" xs={4}>
        <Typography variant="h6" className={classes.typography}>
          SIGA NOSSAS REDES SOCIAIS
        </Typography>
        <ul container className={classes.grid}>
          <Icons className={classes.icon}>{media}</Icons>
        </ul>
      </Grid>

      <Grid container alignItems="center" direction="column" xs={4}>
        <Typography variant="h6" className={classes.typography}>
          FORMAS DE PAGAMENTO
        </Typography>
        <ul container className={classes.grid}>
          <Icons className={classes.icon}>{payments}</Icons>
        </ul>
      </Grid>
      <Grid container direction="column" xs={4}>
        <Grid container className={`${classes.grid} ${classes.contact}`}>
          <img src="images/phone.svg" width="25px" alt="telefone" />
          <Typography variant="h6" className={classes.typography}>
            (012) 99345-6780
          </Typography>
        </Grid>
        <Grid container className={`${classes.grid} ${classes.contact}`}>
          <img src="images/mail.svg" width="25px" alt="email" />
          <Typography variant="h6" className={classes.typography}>
            diosports.@gmail.com
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Footer;

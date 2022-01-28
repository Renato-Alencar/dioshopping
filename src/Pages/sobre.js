import { Grid, Typography, makeStyles } from "@material-ui/core/";

const useStyles = makeStyles((theme) => ({
  text: {
    paddingTop: "5%",
    padding: "0 15%",
    textAlign: "center",
    margin: "auto",
  },
  title: {
    color: "#ffb507",
  },
  colorText: {
    color: "snow",
  },
  bgImage: {
    width: "100%",
    height: "65vh",
    backgroundImage: `url("https://static.significados.com.br/foto/tipos-de-esporte-og.jpg")`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    objectFit: "cover",
  },
  typography: { marginTop: "15px", marginBottom: "15px", margin: "auto" },
}));

const AboutPage = () => {
  const classes = useStyles();
  return (
    <Grid container xs={12}>
      <Typography
        margin="auto"
        variant="h4"
        className={`${classes.title} ${classes.typography}`}
      >
        QUEM SOMOS ?
      </Typography>

      <Grid xs={12}>
        <Typography variant="h6" className={classes.bgImage}>
          <p className={`${classes.text} ${classes.colorText}`}>
            Uma empresa que, além de vender artigos esportivos para TODAS as
            pessoas, alegra-se ao ver a felicidade, independente de quem você
            seja e qual seja a sua paixão esportiva, nós procuraremos atender
            você.
          </p>
          <p className={`${classes.text} ${classes.colorText}`}>
            "SUA ALEGRIA É A NOSSA"
          </p>
        </Typography>
      </Grid>

      <Grid container direction="row" alignItems="flex-start" xs={12}>
        <Grid container alignItems="center" direction="column" xs={4}>
          <Typography
            fullWidth
            margin="auto"
            variant="h6"
            className={`${classes.title} ${classes.typography}`}
          >
            MISSÃO
          </Typography>
          <Typography fullWidth variant="h6" className={classes.text}>
            Tornar a vida das pessoas mais prazerosa e o esporte mais acessível.
          </Typography>
        </Grid>
        <Grid container alignItems="center" direction="column" xs={4}>
          <Typography
            fullWidth
            margin="auto"
            variant="h6"
            className={`${classes.title} ${classes.typography}`}
          >
            VISÃO
          </Typography>
          <Typography fullWidth variant="h6" className={classes.text}>
            Mostrar o poder de transformação do esporte/atividade física para o
            ser humano.
          </Typography>
        </Grid>
        <Grid container alignItems="center" direction="column" xs={4}>
          <Typography
            fullWidth
            margin="auto"
            variant="h6"
            className={`${classes.title} ${classes.typography}`}
          >
            VALORES
          </Typography>
          <Typography fullWidth variant="h6" className={classes.text}>
            Dedicação, Respeito, Acessibilidade e Vontade.
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default AboutPage;

import { Grid, List, makeStyles, Paper, Typography } from "@material-ui/core/";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
import Card from "../components/Card";
import Item from "../components/Item";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100vw",
    flexGrow: 1,
    marginTop: "10px",
  },
  paper: {
    height: "100vh",
    backgroundColor: "#202124",
    color: "#bdc1c6",
    padding: theme.spacing(2),
    marginLeft: theme.spacing(3),
    textAlign: "center",
  },
}));

const HomePage = () => {
  const theme = createMuiTheme({
    palette: {
      type: "dark",
    },
  });
  const products = useSelector((state) => state.products);
  const classes = useStyles();

  const categorys = products.map((category) => {
    const container = {};
    container["id"] = category.id_categorys;
    container["name"] = category.name_categorys;
    return container;
  });

  const category = categorys
    .map(JSON.stringify)
    .filter(function (item, index, arr) {
      return arr.indexOf(item, index + 1) === -1;
    })
    .map(JSON.parse);

  const arrayCategory = categorys.map((category) => category.name);
  let count = {};

  for (let i = 0; i < arrayCategory.length; i++) {
    let key = arrayCategory[i];
    count[key] = count[key] ? count[key] + 1 : 1;
  }

  return (
    <ThemeProvider theme={theme}>
      <Grid container spacing={3} className={classes.root}>
        <Grid xs={3}>
          <Paper className={classes.paper}>
            <Typography variant="h5">Categorias</Typography>
            <List>
              {category.map((category) => {
                return (
                  <Item
                    key={category.id}
                    name={category.name}
                    details={count[category.name]}
                  />
                );
              })}
            </List>
          </Paper>
        </Grid>
        <Grid container xs={9} spacing={3} className={classes.root}>
          {products.map((item) => {
            return (
              <Card key={item.id_product} product={item}>
                {item.name_product}
              </Card>
            );
          })}
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default HomePage;

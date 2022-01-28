import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./components/store";
import Routes from "./routes";
import { Container, makeStyles } from "@material-ui/core/";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Header from "./components/Header";
import Footer from "./components/Footer";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 0,
    border: 0,
    boxSizing: "border-box",
    backgroundColor: "#202124",
    color: "#bdc1c6",
  },
}));

const App = () => {
  const theme = createMuiTheme({
    palette: {
      type: "dark",
    },
  });
  const classes = useStyles();
  const localCart = JSON.parse(localStorage.getItem("dioshopping: cart"));

  if (localCart !== null) {
    store.dispatch({ type: "CHANGE_CART", localCart });
  }

  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Container maxWidth="xl" className={classes.root}>
          <Router>
            <Header />
            <Routes />
          </Router>
          <Footer />
        </Container>
      </Provider>
    </ThemeProvider>
  );
};

export default App;

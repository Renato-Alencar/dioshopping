import { useState, useEffect } from "react";
import { Grid, Button, TextField, makeStyles } from "@material-ui/core/";
import { fetchData } from "../components/services/fetchData";
import Comments from "../components/Comments";
import Alert from "../components/Alert";

const useStyles = makeStyles((theme) => ({
  bgColor: {
    backgroundColor: "#202124",
    color: "#bdc1c6",
    padding: "25px",
  },
  btn: {
    marginLeft: "25px",
  },
}));

const Contatos = () => {
  const url = "http://localhost:5000/message";
  const [message, setMessage] = useState([]);
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [validator, setValidator] = useState(false);
  const [render, setRender] = useState(false);
  const [success, setSuccess] = useState(false);
  const classes = useStyles();

  useEffect(() => {
    fetchData(url, setMessage);
  }, [render]);

  const sendMessage = () => {
    setValidator(false);
    if (author.length <= 0 || content.length <= 0) {
      return setValidator(!validator);
    }
    const bodyForm = {
      email: author,
      message: content,
    };

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bodyForm),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.id) {
          setRender(true);
          setSuccess(true);
          setTimeout(() => {
            setSuccess(false);
          }, 5000);
        }
      });

    setAuthor("");
    setContent("");
  };

  return (
    <>
      <Grid container direction="row" xs={12} className={classes.bgColor}>
        <TextField
          id="name"
          label="Name"
          value={author}
          onChange={(event) => {
            setAuthor(event.target.value);
          }}
          fullWidth
        />
        <TextField
          id="message"
          label="Message"
          value={content}
          onChange={(event) => {
            setContent(event.target.value);
          }}
          fullWidth
        />
      </Grid>
      {validator && <Alert exit={true}>Preencha todos os campos!</Alert>}
      {success && <Alert type="success">Mensagem enviada</Alert>}
      <Button
        onClick={sendMessage}
        className={classes.btn}
        variant="contained"
        color="primary"
      >
        Sent
      </Button>
      <Comments className={classes.bgColor}>{message}</Comments>
    </>
  );
};

export default Contatos;

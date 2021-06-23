import logo from "./logo.svg";
import "./App.css";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import Styles from "./styles"; // can i change the name to style 
import ShowStudent from "./components/showStudent/ShowStudent";
import CreateStudent from "./components/createStudent/CreateStudent";


function App() {
  const classes = Styles();
  console.log(classes);
  return (
    <div className="App">
      <h1> hello </h1>
      <Container maxWidth="lg">
        <AppBar className={classes.appBar} position="static" color="inherit">
          <Typography className={classes.heading} variant="h2" align="center">
            Students Create & Show{" "}
          </Typography>
        </AppBar>
        <Grow in>
          <Container>
            <Grid container justify="space-between" alignItems="stretch">
              <Grid item xs={12} sm={7}>
                <AppBar
                  className={classes.appBar}
                  position="static"
                  color="inherit"
                >
                  <ShowStudent />
                </AppBar>
              </Grid>
              <Grid item xs={12} sm={4}>
                <AppBar
                  className={classes.appBar}
                  position="static"
                  color="inherit"
                >
                  <CreateStudent />
                </AppBar>
              </Grid>
            </Grid>
          </Container>
        </Grow>
      </Container>
    </div>
  );
}

export default App;
// className={classes.appBar}

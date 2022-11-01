import { Grid, Link, Paper, Typography } from "@mui/material";
import SignupForm from "./SignupForm";

function App() {
  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <Grid item xs={12} sm={4} md={4} component={Paper} elevation={6}>
        <SignupForm/>
        <Grid item textAlign="center">
          <Typography>
            Já possui uma conta?{" "}
            <Link sx={{ cursor: "pointer" }} underline="hover">
              Faça Login
            </Link>
          </Typography>
        </Grid>
      </Grid>
      <Grid
        item
        xs={false}
        sm={4}
        md={8}
        sx={{
          backgroundImage: "url(https://i.imgur.com/3O5cAbx.gif)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
    </Grid>
  );
}

export default App;

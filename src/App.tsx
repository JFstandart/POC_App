import React from 'react'
import { Redirect, BrowserRouter as Router, Switch } from "react-router-dom";
import { useForm } from "react-hook-form";
import { makeStyles, Box, Container, Typography, TextField, Button, Theme } from "@material-ui/core";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

interface IForm {
  email: string;
  password: string;
}

const schema = yup.object().shape({
  email: yup.string().required().email(),
  password: yup.string().required().min(8).max(20),
})

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  heading: {
    textAlign: 'center',
    margin: theme.spacing(1, 0, 4),
  },
  submitButton: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
}));

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<IForm>(
    { resolver: yupResolver(schema) }
  );

  const onSubmit = (data: IForm) => {
    // todo encrypt password
    sessionStorage.setItem("POCLoginInfo", JSON.stringify(data))
  };
  const { submitButton, container, heading } = useStyles();

  console.log('hey', sessionStorage.getItem("POCLoginInfo"))

  if (sessionStorage.getItem("POCLoginInfo")) {
    return (
      <Redirect push exact strict from="/login" to="/home" />
    );
  } else {
    return (
      <Container maxWidth="xs" className={container}>
        <Box>
          <Typography className={heading} variant="h3">
            Login
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <TextField
              {...register("email")}
              variant="outlined"
              margin="normal"
              label="Email"
              helperText={errors.email?.message}
              error={!!errors.email?.message}
              fullWidth
              required
            />
            <TextField
              {...register("password")}
              variant="outlined"
              margin="normal"
              label="Password"
              type="password"
              helperText={errors.password?.message}
              error={!!errors.password?.message}
              fullWidth
              required
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={submitButton}
            >
              Login Up
            </Button>
          </form>
        </Box>
      </Container>
    )
  }


}

export default App

import React, { useState } from "react";
import { useFormik } from "formik";

import Password from "../../components/Password";

import "./styles.css";

import {
  Typography,
  Grid,
  Button,
  Box,
  FormControl,
  InputLabel,
  InputAdornment,
  IconButton,
  OutlinedInput,
  Hidden,
} from "@material-ui/core";
import {
  Visibility,
  VisibilityOff,
  EmailRounded,
  Lock,
} from "@material-ui/icons";

import logo from "../../assets/logo.png";
import logoWls from "../../assets/logo-wls-horizontal.png";
import puzzle from "../../assets/puzzle.svg";
import speed from "../../assets/speed.svg";
import lock from "../../assets/lock.svg";
import api from "services/Api";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// import {auth} from 'configs/firebase';

export default function Login() {
  //firebase
  // async function onSubmit() {
  //   await auth.signInWithEmailAndPassword("email@email.com", "12345678");
  //   const token = await auth.currentUser.getIdToken(true);
  //   console.log(token)
  // }

  const formFormik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      // Tentar
      try {
        await api.post("/api/Token/pre_login", values);

        toast.success("Login efetuado com sucesso!");
      } catch (error) {
        toast.error("Erro! Tente novamente");
      }
    },
  });

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [values, setValues] = React.useState({
    showPassword: false,
  });

  // function handleForgetPassword() {
  //   setPasswordVisible(true);
  // }

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={formFormik.handleSubmit}>
      <>
        {passwordVisible ? (
          <Password
            onClose={() => {
              setPasswordVisible(false);
            }}
          />
        ) : (
          <Grid item container justify="center" xs={12}>
            {/* Background Verde */}

            {/* Card */}
            {/* QUANDO FOR MD pra baixo ele vai sumir o verde! por exemplo */}
            {/* <Grid>
            <Hidden lgUp>Jordanao</Hidden>
            <Hidden mdUp>Jordana</Hidden>
            <Hidden xsDown>Jordaninha</Hidden>
          </Grid> */}

            <Hidden mdUp>
              <Grid
                item
                xs={12}
                sm={12}
                container
                alignItems="center"
                justify="center"
                className="bg-green-small"
              >
                <Grid className="logo">
                  <img
                    src={logo}
                    alt="Compre Aqui"
                    className="bg-image-small"
                  />
                </Grid>
              </Grid>
            </Hidden>

            <Hidden smDown>
              <Grid
                item
                xs={12}
                sm={5}
                container
                className="bg-green"
                direction="column"
                alignItems="center"
                justify="center"
              >
                <Grid className="logo">
                  <img src={logo} alt="Compre Aqui" className="bg-image" />
                </Grid>

                {/* QUADRADO DE FORA */}
                <Grid>
                  <Box mt={6}>
                    <Box>
                      <Grid
                        container
                        item
                        alignItems="center"
                        className="textos"
                      >
                        <img
                          src={puzzle}
                          alt="Quebra-cabeça"
                          height={64}
                          width={64}
                        />
                        <Grid className="image-icons">Fácil</Grid>
                      </Grid>
                    </Box>

                    <Box mt={8}>
                      <Grid
                        container
                        item
                        alignItems="center"
                        className="textos"
                      >
                        <img src={speed} alt="Foguete" height={64} width={64} />
                        <Grid className="image-icons">Rápido</Grid>
                      </Grid>
                    </Box>

                    <Box mt={8}>
                      <Grid
                        container
                        item
                        alignItems="center"
                        className="textos"
                      >
                        <img src={lock} alt="Cadeado" height={64} width={64} />
                        <Grid className="image-icons">Seguro</Grid>
                      </Grid>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Hidden>
            {/* Quando ha uma GRID dentro de GRID a pai tem que ser container "SEMPRE" */}
            <Grid
              item
              xs={12}
              sm={7}
              container
              justify="center"
              alignContent="center"
              className="cardLogin"
            >
              <Grid
                item
                xs={12}
                sm={10}
                md={10}
                lg={7}
                xl={6}
                className="block-login"
              >
                {/* Mensagem */}
                <Grid>
                  <Box mt={1} mb={3} color="#1C1C1C">
                    <Typography variant="h5">Olá! Seja Bem-vindo.</Typography>
                  </Box>
                </Grid>

                {/* Display: filhos devem estar por volta de uma grid e com "item" e nao esquecer do CONTAINER           */}
                {/* Input */}
                <Grid>
                  <FormControl fullWidth variant="outlined" margin="normal">
                    <InputLabel htmlFor="email">E-mail</InputLabel>
                    <OutlinedInput
                      id="email"
                      value={values.amount}
                      onChange={
                        (handleChange("amount"), formFormik.handleChange)
                      }
                      startAdornment={
                        <InputAdornment position="start">
                          <EmailRounded color="primary" />
                        </InputAdornment>
                      }
                      labelWidth={60}
                    />
                  </FormControl>

                  <FormControl fullWidth variant="outlined" margin="normal">
                    <InputLabel htmlFor="password">Senha</InputLabel>
                    <OutlinedInput
                      id="password"
                      type={values.showPassword ? "text" : "password"}
                      value={values.password}
                      onChange={
                        (handleChange("password"), formFormik.handleChange)
                      }
                      startAdornment={
                        <InputAdornment position="start">
                          <Lock color="primary" />
                        </InputAdornment>
                      }
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                          >
                            {values.showPassword ? (
                              <Visibility />
                            ) : (
                              <VisibilityOff />
                            )}
                          </IconButton>
                        </InputAdornment>
                      }
                      labelWidth={60}
                    />
                  </FormControl>

                  <Grid
                    container
                    item
                    xs={12}
                    spacing={1}
                    alignItems="center"
                  ></Grid>
                </Grid>

                {/* Button */}

                <Box mt={4} color="segundary">
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    fullWidth
                    className="button-login"
                    type="submit"
                  >
                    Entrar
                  </Button>
                </Box>

                <Box mt={2}>
                  <Grid container justify="flex-end" className="check-icon">
                    <Box>
                      <Button
                        href="#text-buttons"
                        color="secondary"
                        size="large"
                        onClick={() => setPasswordVisible(true)}
                      >
                        Esqueceu sua senha?
                      </Button>
                    </Box>
                  </Grid>
                </Box>
              </Grid>
              <Grid
                container
                spacing={1}
                direction="column"
                justify="flex-end"
                alignItems="center"
              >
                <Box mt={3}>
                  <img
                    src={logoWls}
                    alt="Logo da Empresa"
                    width={200}
                    height={50}
                    className="logo-wls"
                  />
                </Box>
              </Grid>
            </Grid>
          </Grid>
        )}
        {/* </Grid> */}
      </>
    </form>
  );
}

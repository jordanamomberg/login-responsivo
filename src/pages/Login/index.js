import React, { useState } from "react";

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
  FormControlLabel,
  Checkbox,
} from "@material-ui/core";
import {
  Visibility,
  VisibilityOff,
  EmailRounded,
  Lock,
} from "@material-ui/icons";
import { green } from "@material-ui/core/colors";
import { withStyles } from "@material-ui/core/styles";

import logo from "../../assets/logo.png";
import logoWls from "../../assets/logo-wls-horizontal.png";
import puzzle from "../../assets/puzzle.svg";
import speed from "../../assets/speed.svg";
import lock from "../../assets/lock.svg";

export default function Login() {
  const [values, setValues] = React.useState({
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const GreenCheckbox = withStyles({
    root: {
      color: green[400],
      "&$checked": {
        color: green[600],
      },
    },
    checked: {},
  })((props) => <Checkbox color="default" {...props} />);

  const [rememberme, setRememberme] = useState(true);

  return (
    <form>
      <>
        <Grid container justify="center" xs={12}>
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
                xs={12}
                sm={12}
                container
                alignItems="center"
                justify="center"
                className="bg-green-small"
              >
                <Grid className="logo">
                  <img src={logo} alt="Compre Aqui" className="bg-image-small" />
                </Grid>
              </Grid> 
          </Hidden>

          <Hidden smDown>
            <Grid
              xs={12}
              sm={5}
              container
              className="bg-green"
              direction="column"
              alignItems="center"
            >
              <Grid className="logo">
                <img src={logo} alt="Compre Aqui" className="bg-image" />
              </Grid>

              {/* QUADRADO DE FORA */}
              <Grid>
                <Box mt={6}>
                  <Box>
                    <Grid container item alignItems="center" className="textos">
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
                    <Grid container item alignItems="center" className="textos">
                      <img src={speed} alt="Foguete" height={64} width={64} />
                      <Grid className="image-icons">Rápido</Grid>
                    </Grid>
                  </Box>

                  <Box mt={8}>
                    <Grid container item alignItems="center" className="textos">
                      <img src={lock} alt="Cadeado" height={64} width={64} />
                      <Grid className="image-icons">Seguro</Grid>
                    </Grid>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Hidden>
          {/* Quando ha uma GRID dentro de GRID a pai tem que ser container "SEMPRE" */}
          <Grid xs={12} sm={7} container justify="center" alignContent="center">
            <Grid xs={12} sm={10} md={10} lg={6} xl={4} className="block-login">
              {/* Mensagem */}
              <Grid>
                <Box mt={1} mb={3} color="#1C1C1C">
                  <Typography variant="h5">Olá! Seja Bem-vindo.</Typography>
                </Box>
              </Grid>

              {/* Display: filhos devem estar por volta de uma grid e com "item" e nao esquecer do CONTAINER           */}
              {/* Input */}
              <Grid>
                {/* <Grid container spacing={1}> */}
                {/* <Grid container item xs={12} spacing={1} alignItems="center">
                    <Grid item>
                      <EmailRounded color="primary" />
                    </Grid>
                    <Grid item xs zeroMinWidth>
                      <TextField
                        id="email"
                        label="E-mail"
                        variant="outlined"
                        color="segundary"
                        fullWidth
                        required
                      />
                    </Grid>
                  </Grid> */}

                <FormControl fullWidth variant="outlined" margin="normal">
                  <InputLabel htmlFor="outlined-adornment-amount">
                    E-mail
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-amount"
                    value={values.amount}
                    onChange={handleChange("amount")}
                    startAdornment={
                      <InputAdornment position="start">
                        <EmailRounded color="primary" />
                      </InputAdornment>
                    }
                    labelWidth={60}
                  />
                </FormControl>

                <FormControl fullWidth variant="outlined" margin="normal">
                  <InputLabel htmlFor="outlined-adornment-amount">
                    Senha
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-password"
                    type={values.showPassword ? "text" : "password"}
                    value={values.password}
                    onChange={handleChange("password")}
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

                <Grid container item xs={12} spacing={1} alignItems="center">
                  {/* <Grid item>
                      <Lock color="primary" />
                    </Grid>
                    <Grid item xs zeroMinWidth>
                      <FormControl fullWidth required variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password">
                          Senha
                        </InputLabel>
                        <OutlinedInput
                          id="outlined-adornment-password"
                          type={values.showPassword ? "text" : "password"}
                          value={values.password}
                          onChange={handleChange("password")}

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
                                )
                              }

                              </IconButton>
                            </InputAdornment>
                          }
                          labelWidth={70}
                        />
                      </FormControl>
                    </Grid> */}
                </Grid>
              </Grid>

              {/* Button */}

              <Box mt={4} color="segundary">
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  fullWidth
                  type="submit"
                  className="button-login"
                >
                  Entrar
                </Button>
              </Box>

              <Box mt={2}>
                <Grid container justify="space-between" className="check-icon">
                  <Box display="flex" alignItems="center">
                    <FormControlLabel
                      control={
                        <GreenCheckbox
                          checked={rememberme}
                          onChange={() => setRememberme(!rememberme)}
                          name="checkedG"
                        />
                      }
                    />
                    <Grid href="#text-buttons" size="large" className="label">
                      Lembre-me
                    </Grid>
                  </Box>

                  <Box>
                    <Button href="#text-buttons" color="secondary" size="large">
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
              <Box mt={4}>
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
        {/* </Grid> */}
      </>
    </form>
  );
}

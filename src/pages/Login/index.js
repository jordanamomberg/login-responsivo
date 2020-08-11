import React, { useState } from "react";

import "./styles.css";

import {
  Typography,
  Grid,
  TextField,
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
  FormHelperText,
} from "@material-ui/core";
import {
  Visibility,
  VisibilityOff,
  EmailRounded,
  Lock,
} from "@material-ui/icons";
import { green } from "@material-ui/core/colors";
import { withStyles } from "@material-ui/core/styles";

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
          <Hidden smDown>
            <Grid xs={12} sm={5} className="bg-green" />
          </Hidden>
          {/* Quando ha uma GRID dentro de GRID a pai tem que ser container "SEMPRE" */}
          <Grid xs={12} sm={7} container justify="center" alignContent="center">
            <Grid md={8} xs={12} className="block-login">
              {/* Mensagem */}
              <Grid>
                <Box mt={1} mb={3} color="#1C1C1C">
                  <Typography variant="h5">Faça seu login</Typography>
                </Box>
              </Grid>

              {/* Display: filhos devem estar por volta de uma grid e com "item"           */}
              {/* Input */}
              <Grid>
                <Grid container spacing={1}>
                  <Grid container item xs={12} spacing={1} alignItems="center">
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
                  </Grid>
                  {/* 
                  <FormControl
                    fullWidth
                    variant="outlined"
                  >
                    <InputLabel htmlFor="outlined-adornment-amount">
                      E-mail
                    </InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-amount"
                      value={values.amount}
                      onChange={handleChange("amount")}
                      startAdornment={
                        <InputAdornment position="start"><EmailRounded color="primary" /></InputAdornment>
                      }
                      labelWidth={60}
                    />
                  </FormControl> */}

                  <Grid container item xs={12} spacing={1} alignItems="center">
                    <Grid item>
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
                                )}
                              </IconButton>
                            </InputAdornment>
                          }
                          labelWidth={70}
                        />
                      </FormControl>
                    </Grid>
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
                      <Button href="#text-buttons" color="primary" size="large">
                        Esqueceu sua senha?
                      </Button>
                    </Box>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </>
    </form>
  );
}

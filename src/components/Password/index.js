import React from "react";

import "./styles.css";

import {
  Typography,
  Grid,
  Button,
  Box,
  FormControl,
  InputLabel,
  InputAdornment,
  OutlinedInput,
  Hidden,
} from "@material-ui/core";

import { EmailRounded } from "@material-ui/icons";

import logo from "../../assets/logo.png";
import logoWls from "../../assets/logo-wls-horizontal.png";
import puzzle from "../../assets/puzzle.svg";
import speed from "../../assets/speed.svg";
import lock from "../../assets/lock.svg";

const Password = ({ onClose = () => {} }) => {
  const handleBack = () => {
    onClose();
  };

  return (
    <form>
      <>
        <Grid item container justify="center" xs={12}>
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
                <img src={logo} alt="Compre Aqui" className="bg-image-small" />
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
              <Grid>
                <Box mt={1} mb={3} color="#1C1C1C">
                  <Typography variant="h5">Redefinir senha</Typography>
                </Box>
                <Box mt={3} mb={1} color="#1C1C1C">
                  <Grid classname="description">
                    Para recuperar sua senha vamos enviar um e-mail com
                    instruções.
                  </Grid>
                </Box>
              </Grid>

              <Grid>
                <FormControl fullWidth variant="outlined" margin="normal">
                  <InputLabel htmlFor="email">E-mail</InputLabel>
                  <OutlinedInput
                    id="email"
                    startAdornment={
                      <InputAdornment position="start">
                        <EmailRounded color="primary" />
                      </InputAdornment>
                    }
                    labelWidth={60}
                  />
                </FormControl>
              </Grid>

              <Box mt={4} color="segundary">
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  fullWidth
                  className="button-login"
                  type="submit"
                >
                  Redefinir senha
                </Button>
              </Box>

              <Box mt={2}>
                <Grid container justify="flex-start" className="check-icon">
                  <Box>
                    <Button onClick={handleBack} color="secondary" size="large">
                      Cancelar
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
      </>
    </form>
  );
};

export default Password;

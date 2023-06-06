import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Modal from "@mui/material/Modal";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { connect } from "react-redux";
import * as actionType from "../store/actions";
import { useState } from "react";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { useNavigate } from "react-router-dom";

const theme = createTheme();

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  height: 150,
  bgcolor: "background.paper",
  boxShadow: 24,
  outline: "none",
};

function AdminSignUp(props) {
  const { actions } = props;
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(true);
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const adminData = {
      email: data.get("email"),
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      number: data.get("phoneNumber"),
      password: data.get("password"),
      role: "admin",
    };
    actions.createAdmin({ data: adminData });
    setOpenModal(true);
  };

  const handleClose = () => {
    setOpenModal(false);
    navigate("/")
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage:
              "url(https://img.freepik.com/premium-photo/profile-icons-with-tick-3d-render_581634-9.jpg?w=740)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "78%",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              mt: 18,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginRight: "140px",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "#9375ea" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h4">
              Admin Sign Up
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="fisrtName"
                    label="First Name"
                    name="firstName"
                    inputProps={{ pattern: "[A-Za-z ]+" }}
                    autoComplete="firstName"
                    sx={{
                      textAlign: "center",
                      border: "2px black",
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="lastName"
                    sx={{
                      textAlign: "center",
                      border: "2px black",
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    type="number"
                    id="phoneNumber"
                    label="Phone Number"
                    name="phoneNumber"
                    autoComplete="phoneNumber"
                    sx={{
                      textAlign: "center",
                      border: "2px black",
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email"
                    type="email"
                    name="email"
                    autoComplete="email"
                    sx={{
                      textAlign: "center",
                      border: "2px black",
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="password"
                    label="Password"
                    type="password"
                    name="password"
                    autoComplete="password"
                    sx={{
                      textAlign: "center",
                      border: "2px black",
                    }}
                  />
                </Grid>
              </Grid>

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                style={{
                  borderRadius: 15,
                  backgroundColor: "#9375ea",
                  padding: "14px 20px",
                  fontSize: "14px",
                }}
              >
                Sign Up
              </Button>
              <Grid container>
                <Grid item xs></Grid>
                <Grid item>
                  <Link href="/login" variant="body2">
                    {"Already have an account? Login"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>

      <Modal open={openModal} onClose={handleClose}>
        <Box sx={modalStyle} p={2}>
          <Stack direction="row" justifyContent="end">
            <Button ><CloseOutlinedIcon sx={{ color: "red" }} onClick={handleClose}/></Button>
          </Stack>
          <Divider sx={{ backgroundColor: "blue" }}/>
          <Typography pt={2}  sx={{ color: "green" }}>You have Successfully Registered.</Typography>
        </Box>
      </Modal>
    </ThemeProvider>
  );
}

const mapDispatchToProps = (dispatch) => ({
  actions: {
    createAdmin: (payload) => {
      dispatch(actionType.createUser(payload));
    },
  },
});

export default connect(null, mapDispatchToProps)(AdminSignUp);

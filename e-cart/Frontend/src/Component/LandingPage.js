import React from "react";
import { Link } from "react-router-dom";
import "../App";
import { makeStyles } from "@material-ui/core/styles";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";

import {
  AppBar,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Toolbar,
  Typography,
} from "@material-ui/core";
import Box from "@mui/material/Box";

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#ffffff",
    boxShadow:
      "0px 1px 2px 0px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.0), 0px 1px 10px 0px rgba(0,0,0,0.12)",
    height: 75,
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
    float: "right",
    marginTop: "10px",
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: "#eee",
    padding: theme.spacing(2),
    boxShadow:
      "0px 1px 2px 0px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.0), 0px 1px 10px 0px rgba(0,0,0,0.12)",
    height: 30,
  },
  title: {
    color: "#004499",
    fontFamily: "Kaushan Script",
    mt: "3px",
    fontSize: "40px",
  },
  description: {
    color: "#022796",
    fontFamily: "Crimson Text",
    // mt: "3px",
    fontSize: "16px",
  },
  heading: {
    color: "#d40080",
    fontFamily: "Lobster",
    mt: "3px",
    fontSize: "20px",
  },
}));

export default function LandingPage() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <AppBar component="nav" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h4" className={classes.title}>
            E
          </Typography>
          <Typography variant="h4" className={classes.title}>
            -cart
          </Typography>
          <Box
            sx={{
              // display: { xs: "none", sm: "block" },
              position: "absolute",
              top: 0,
              right: 0,
              mt: "18px",
              mr: "10px",
            }}
          >
            <Button
              variant="contained"
              sx={{ mt: 3, mb: 2, mr: 2 }}
              style={{
                borderRadius: 15,
                backgroundColor: "#1128bd",
                padding: "8px 16px",
                fontSize: "14px",
                color: "#ffffff",
                marginLeft: "5px",
                marginRight: "5px",
              }}
              component={Link}
              to="/signup/admin"
            >
              Admin's Sign Up
            </Button>
            <Button
              variant="contained"
              sx={{ mt: 3, mb: 2, mr: 2 }}
              style={{
                borderRadius: 15,
                backgroundColor: "#c62624",
                padding: "8px 16px",
                fontSize: "14px",
                color: "#ffffff",
                marginLeft: "5px",
                marginRight: "5px",
              }}
              component={Link}
              to="/signup/user"
            >
              User's Sign Up
            </Button>
            <Button
              variant="contained"
              sx={{ mt: 3, mb: 2, mr: 2 }}
              style={{
                borderRadius: 15,
                backgroundColor: "#8400be",
                padding: "8px 16px",
                fontSize: "14px",
                color: "#ffffff",
                marginLeft: "5px",
                marginRight: "5px",
              }}
              component={Link}
              to="/login"
            >
              Log In
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <main>
        <Grid container>
          <Grid item xs={6}>
            <div>
              <Card
                style={{
                  marginTop: "25%",
                  marginLeft: "14%",
                  boxShadow: "2px 2px 30px rgba(0, 0, 0, 0.25)",
                  borderRadius: 12,
                }}
              >
                <main class="container">
                  <p>Users Please</p>
                  <section class="animation">
                    <div class="first">
                      <div>Shop</div>
                    </div>
                    <div class="second">
                      <div>Choose</div>
                    </div>
                    <div class="third">
                      <div>Order</div>
                    </div>
                  </section>
                </main>
                <CardContent>
                  <Typography
                    variant="h5"
                    component="div"
                    align="center"
                    className={classes.heading}
                  >
                    The New Way To Shop Online..
                  </Typography>
                  <Typography
                    sx={{ marginBottom: "0.5rem" }}
                    style={{ padding: "30px" }}
                    variant="body2"
                    color="text.secondary"
                    className={classes.description}
                  >
                    Ultricies tristique nulla aliquet enim tortor. Id aliquet
                    lectus proin nibh nisl condimentum. Vel fringilla est
                    ullamcorper eget nulla facilisi. Massa enim nec dui nunc
                    mattis. Bibendum ut tristique et egestas. Amet purus gravida
                    quis blandit turpis cursus in. Ut diam quam nulla porttitor
                    massa id. Enim tortor at auctor urna nunc id cursus. A arcu
                    cursus vitae congue mauris rhoncus aenean vel elit.
                  </Typography>
                </CardContent>
              </Card>
            </div>
          </Grid>

          <Grid item xs={6}>
            <div className={classes.heroContent}>
              <Container maxWidth="sm">
                <img
                  src="https://img.freepik.com/free-photo/this-is-same-shoes_329181-1769.jpg?w=1060&t=st=1685622315~exp=1685622915~hmac=bb29befbfd62d641c3792b25a04f7318afe4ae52e8b83a3a63361795160fae29"
                  alt="medical-related"
                  style={{
                    maxWidth: "98%",
                    height: "auto",
                    display: "block",
                    marginTop: "20%",
                  }}
                />
              </Container>
            </div>
          </Grid>
        </Grid>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={4}>
              <Card
                sx={{
                  maxWidth: 345,
                }}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="190"
                    image="https://img.freepik.com/free-photo/delivery-truck-with-cardboard-location-pin-tracking-free-shipping-fast-delivery-car-deliver-express-delivery-transportation-logistics-concept-background-3d-rendering-illustration_56104-2059.jpg?size=626&ext=jpg&ga=GA1.2.2000971037.1685621599&semt=ais"
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                      Free-Shipping
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Excepteur sint occaecat cupidatat non proident, sunt in
                      culpa qui officia deserunt mollit anim id est laborum.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="190"
                    image="https://img.freepik.com/free-photo/3d-hand-using-online-banking-app-smartphone_107791-16639.jpg?size=626&ext=jpg&ga=GA1.2.2000971037.1685621599&semt=ais"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                      Secure Payments
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Excepteur sint occaecat cupidatat non proident, sunt in
                      culpa qui officia deserunt mollit anim id est laborum.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="190"
                    image="https://img.freepik.com/premium-photo/red-headphone-with-yellow-headphone-it_668290-284.jpg?w=740"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                      Customer Support
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Excepteur sint occaecat cupidatat non proident, sunt in
                      culpa qui officia deserunt mollit anim id est laborum.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="190"
                    image="https://img.freepik.com/free-photo/exclusive-premium-quality-brand-graphic-concept_53876-124909.jpg?size=626&ext=jpg&ga=GA1.2.2000971037.1685621599&semt=ais"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                      Superior Quality
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Excepteur sint occaecat cupidatat non proident, sunt in
                      culpa qui officia deserunt mollit anim id est laborum.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="190"
                    image="https://img.freepik.com/free-vector/organic-flat-fruit-collection_23-2148935309.jpg?size=626&ext=jpg&ga=GA1.1.916134240.1681288939&semt=ais"
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                      Grossarry
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Excepteur sint occaecat cupidatat non proident, sunt in
                      culpa qui officia deserunt mollit anim id est laborum.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="190"
                    image="https://img.freepik.com/free-photo/medium-shot-young-people-with-reviews_23-2149394417.jpg?size=626&ext=jpg&ga=GA1.2.2000971037.1685621599&semt=ais"
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                      Customer Feedback
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Excepteur sint occaecat cupidatat non proident, sunt in
                      culpa qui officia deserunt mollit anim id est laborum.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </main>
      <footer className={classes.footer}>
        <Typography variant="subtitle1" align="center">
          Copyright © {new Date().getFullYear()}, E-cart. All rights reserved.
        </Typography>
      </footer>
    </React.Fragment>
  );
}

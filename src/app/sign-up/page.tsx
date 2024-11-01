"use client";
import { Container, Stack, Box, Typography, Grid, Button } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import login from "@/assets/login.png";
import { FieldValues } from "react-hook-form";
import ReuseForm from "@/components/Form/ReuseForm";
import ReuseInputField from "@/components/Form/ReuseInputField";

const SignUpPage = () => {
  const handleRegister = (data: FieldValues) => {
    console.log(data);
  };
  return (
    <Container>
      <Stack
        sx={{ height: "100vh", justifyContent: "center", alignItems: "center" }}
      >
        <Box
          sx={{
            maxWidth: "500px",
            width: "100%",
            boxShadow: 1,
            borderRadius: 2,
            p: 6,
            textAlign: "center",
          }}
        >
          <Box sx={{ width: "60px", height: "60px", margin: "10px auto" }}>
            <Image src={login} alt="login icon" />
          </Box>
          <Box>
            <Typography
              variant="h3"
              fontSize={"30px"}
              fontWeight={700}
              sx={{ fontFamily: "montserrat" }}
            >
              <span className="lg:block hidden">Please</span> Register Here
            </Typography>
          </Box>

          <Box>
            <ReuseForm onSubmit={handleRegister}>
              <Grid spacing={2} my={3}>
                <Grid item md={12} sm={12} my={2}>
                  <ReuseInputField
                    name="name"
                    label="Name"
                    type="text"
                    size="small"
                    fullWidth={true}
                  />
                </Grid>

                <Grid item md={12} sm={12}>
                  <ReuseInputField
                    name="email"
                    type="email"
                    label="Email"
                    size="small"
                    fullWidth={true}
                  />
                </Grid>

                <Grid item md={12} sm={12} my={2}>
                  <ReuseInputField
                    name="password"
                    label="Password"
                    type="password"
                    size="small"
                    fullWidth={true}
                  />
                </Grid>

                <Grid item md={12} sm={12} my={2}>
                  <ReuseInputField
                    name="phone"
                    label="Phone"
                    type="text"
                    size="small"
                    fullWidth={true}
                  />
                </Grid>
                <Grid item md={12} sm={12} my={2}>
                  <ReuseInputField
                    name="address"
                    label="Address"
                    type="text"
                    size="small"
                    fullWidth={true}
                  />{" "}
                </Grid>
              </Grid>

              <Button
                variant="contained"
                fullWidth={true}
                sx={{ fontFamily: "montserrat" }}
              >
                SignUp
              </Button>

              <Typography
                component="p"
                paddingTop={"6px"}
                fontWeight="300"
                sx={{ fontFamily: "montserrat" }}
              >
                <span className="lg:block hidden">Already</span> have an account
                ?{" "}
                <Link className="text-red-400 font-medium" href="/login">
                  login
                </Link>
              </Typography>
            </ReuseForm>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default SignUpPage;

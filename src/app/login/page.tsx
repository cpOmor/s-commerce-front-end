"use client";
import ReuseForm from "@/components/Form/ReuseForm";
import ReuseInputField from "@/components/Form/ReuseInputField";
import {
  Container,
  Stack,
  Box,
  Typography,
  Grid,
  Button,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import login from '@/assets/login.png'

const LoginPage = () => {

     const handleLogin = ()=>{
        
     }


  return (
    <Container>
      <Stack
        sx={{ height: "100vh", justifyContent: "center", alignItems: "center"}}
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
            <Typography variant="h3" fontSize={"30px"} fontWeight={700} sx={{fontFamily:'montserrat'}}>
              Please Login Here
            </Typography>
          </Box>

          <Box>
            <ReuseForm onSubmit={handleLogin}>
              <Grid spacing={2} my={3}>
                <Grid item md={12} sm={12}>
                  <ReuseInputField name='email' label='Email' type='email' size='small' fullWidth={true} />
                </Grid>

                <Grid item md={12} sm={12} my={2}>
                <ReuseInputField name='password' label='Password' type='password' size='small' fullWidth={true} />

                </Grid>

                <Typography
                  component="p"
                  fontWeight="300"
                  textAlign="end"
                  color="red"
                  sx={{fontFamily:'montserrat', fontWeight:'500'}}
                >
                  
                  <Link href='/forget-password'> Forget Password</Link>
                </Typography>
              </Grid>

              {/* <Button type="submit" fontWeight={600} fullWidth={true}>
                Login
              </Button> */}

               <Button variant="contained" fullWidth={true} sx={{fontFamily:'montserrat'}}>Login</Button>

              <Typography sx={{fontFamily:'montserrat'}} component="p" fontWeight="300" my={1}>
                Don&apos;t have an account ?{" "}
                <Link
                  className="text-red-500 font-medium text-[16px] cursor-pointer"
                  href="/sign-up"
                >
                   SignUp
                </Link>
              </Typography>
            </ReuseForm>
          </Box>
        </Box>
      </Stack>
    </Container>
  )
}

export default LoginPage
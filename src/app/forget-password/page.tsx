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

const ForgetPasswordPage = () => {

     const handleForgetPassword = ()=>{
        
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
              Forget your password
            </Typography>
          </Box>

          <Box>
            <ReuseForm onSubmit={handleForgetPassword}>
              <Grid spacing={2} my={3}>
                <Grid item md={12} sm={12}>
                  <ReuseInputField name='email' label='Email' type='email' size='small' fullWidth={true} />
                </Grid>

               
              </Grid>

             

               <Button variant="contained" fullWidth={true} sx={{fontFamily:'montserrat'}}>Send Code</Button>

              
            </ReuseForm>
          </Box>
        </Box>
      </Stack>
    </Container>
  )
}

export default ForgetPasswordPage
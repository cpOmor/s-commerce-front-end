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


const NewPasswordPage = () => {

     const handleNewPassword = ()=>{

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
       
          <Box>
            <Typography variant="h3" fontSize={"30px"} fontWeight={700} sx={{fontFamily:'montserrat'}}>
               Set your new password
            </Typography>
          </Box>

          <Box>
            <ReuseForm onSubmit={handleNewPassword}>
              <Grid spacing={2} my={3}>
               

                <Grid item md={12} sm={12} my={2}>
                <ReuseInputField name='password' label='Password' type='password' size='small' fullWidth={true} />

                </Grid>

                <Grid item md={12} sm={12} my={2}>
                <ReuseInputField name='password' label='Confirm Password' type='password' size='small' fullWidth={true} />

                </Grid>

               
              </Grid>

              

               <Button variant="contained" fullWidth={true} sx={{fontFamily:'montserrat'}}>Submit</Button>

              
            </ReuseForm>
          </Box>
        </Box>
      </Stack>
    </Container>
  )
}

export default NewPasswordPage
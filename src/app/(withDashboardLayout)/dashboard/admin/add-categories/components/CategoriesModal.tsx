import CustomModal from "@/components/CustomModal/CustomModal"
import ReuseFileUploader from "@/components/Form/ReuseFileUploader"
import ReuseForm from "@/components/Form/ReuseForm"
import ReuseInputField from "@/components/Form/ReuseInputField"
import { Button, Grid } from "@mui/material"

type TProps ={
    open:boolean
    setOpen:React.Dispatch<React.SetStateAction<boolean>>
}

const CategoriesModal = ({open,setOpen}:TProps) => {

    
    const handleCatgories =async()=>{
        
    }


  return (
     <CustomModal open={open} setOpen={setOpen} title="Create Categories For Products">
         <ReuseForm onSubmit={handleCatgories}>

            <Grid container spacing={2}>

                <Grid item md={12} sm={12}>
                     <ReuseInputField name='name' fullWidth={true} size='small' label='Categories name'/>
                </Grid> 
                 
                <Grid item md={12} sm={12}>
                     <ReuseFileUploader name='file' label='Upload File' sx={{width:'100%'}}/>
                </Grid>

            </Grid>

            <Button type='submit' fullWidth sx={{marginTop:'14px'}}>
              Create Categories
            </Button>

         </ReuseForm>
     </CustomModal>
  )
}

export default CategoriesModal
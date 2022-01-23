import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Fade from '@mui/material/Fade';
import Modal from '@mui/material/Modal';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { useState } from 'react';

import AddDrugForm from './AddDrugForm';

const MAIN_TITLE = 'ADD DRUG';

const addDrugTheme = createTheme({
  palette: {
    primary: {
      main: '#48cae4',
    },
    secondary: {
      main: '#fcd433',
    },
    common: {
      black: '#000',
      white: '#fff',
    },
    label: {
      main: '1b4c56',
    },
    error: {
      main: '#880e4f',
    },
    background: {
      default: '#48cae4',
    },
    title: {
      main: '#023e8a',
      light: '#059ac8',
    },

    tonalOffset: 0.1,
  },
});

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90vw',
  maxWidth: '700px',
  minHeight: '450px',
  bgcolor: 'background.default',
  border: '2px solid #000',
  borderRadius: '20px',
  boxShadow: 24,
  p: 4,
};

const AddDrugModal = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <ThemeProvider theme={addDrugTheme}>
        <CssBaseline />
        <Button
          onClick={handleOpen}
          variant="contained"
          color="secondary"
          sx={{
            my: 3,
            width: '150px',
            border: 3,
            borderColor: 'black',
            borderRadius: 15,
          }}
        >
          Add drug
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="add-drug-title"
          aria-describedby="add-drug-form"
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <Box sx={modalStyle}>
              <Typography
                id="add-drug-title"
                variant="h4"
                component="h2"
                color="title.main"
                align="center"
                fontWeight="bold"
              >
                {MAIN_TITLE}
              </Typography>
              <Box id="add-drug-form">
                <AddDrugForm onClose={handleClose} />
              </Box>
            </Box>
          </Fade>
        </Modal>
      </ThemeProvider>
    </div>
  );
};

export default AddDrugModal;

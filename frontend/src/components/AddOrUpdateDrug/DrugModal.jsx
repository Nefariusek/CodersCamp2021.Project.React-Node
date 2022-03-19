import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Fade from '@mui/material/Fade';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import { useState } from 'react';

import DrugForm from './DrugForm';

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
  mt: 3,
};

const DrugModal = ({ drugAction, actionName = 'Add' }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
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
        {actionName} drug
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="drug-action-title"
        aria-describedby="drug-action-form"
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        sx={{ overflow: 'scroll' }}
      >
        <Fade in={open}>
          <Box sx={modalStyle}>
            <Typography
              id="drug-action-title"
              variant="h4"
              component="h2"
              color="title.main"
              align="center"
              fontWeight="bold"
            >
              {actionName.toUpperCase()} DRUG
            </Typography>
            <Box id="drug-action-form">
              <DrugForm onClose={handleClose} drugAction={drugAction} actionName={actionName} />
            </Box>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default DrugModal;

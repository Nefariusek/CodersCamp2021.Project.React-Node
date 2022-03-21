import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import WarningAmberOutlinedIcon from '@mui/icons-material/WarningAmberOutlined';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Fade from '@mui/material/Fade';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  p: 4,
  mt: 3,
  width: '500px',
  maxWidth: '90vw',
  minHeight: '50px',
  bgcolor: 'background.default',
  border: '2px solid #000',
  borderRadius: '20px',
  boxShadow: 24,
};

const iconStyle = {
  marginRight: 1,
};

function makeIcon(type) {
  let icon = null;
  if (type === 'info') {
    icon = <InfoOutlinedIcon fontSize="large" sx={iconStyle} />;
  } else if (type === 'error') {
    icon = <ErrorOutlineIcon fontSize="large" sx={iconStyle} />;
  } else if (type === 'warning') {
    icon = <WarningAmberOutlinedIcon fontSize="large" sx={iconStyle} />;
  } else if (type === 'success') {
    icon = <CheckCircleOutlinedIcon fontSize="large" sx={iconStyle} />;
  } else {
    icon = null;
  }
  return icon;
}

/**
 * Popup modal for application messages.
 * @param {string} message - message
 * @param {string} [type=info] - message type which determines the title and icon of the popup (if type is 'info', 'error', 'warning' or 'success' then the appropriate icon will appear)
 * @param {Object} modalState - object that contains boolean modal state (isModalOpen) and method to change this state (setIsModalOpen())
 */

const PopupModal = ({ message, type = 'info', modalState }) => {
  return (
    <div>
      <Modal
        open={modalState.isModalOpen}
        onClose={() => modalState.setIsModalOpen(false)}
        aria-labelledby="popup-modal"
        aria-describedby="popup-modal"
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        sx={{ overflow: 'scroll' }}
      >
        <Fade in={modalState.isModalOpen}>
          <Box sx={modalStyle} align="center">
            <Typography
              id="add-drug-title"
              variant="h4"
              component="h2"
              color="title.main"
              fontWeight="bold"
              sx={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              {makeIcon(type)} {type.toUpperCase()}
            </Typography>
            <Box
              id="message"
              sx={{
                my: 3,
              }}
            >
              {message}
            </Box>
            <Button
              onClick={() => modalState.setIsModalOpen(false)}
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
              Close
            </Button>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default PopupModal;

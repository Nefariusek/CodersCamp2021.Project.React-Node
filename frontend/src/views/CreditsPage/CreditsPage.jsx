import './CreditsPage.scss';

import { Typography } from '@mui/material';
import Button from '@mui/material/Button';

import buttonStyles from '../../components/Button/Button.module.scss';

const CreditsPage = () => {
  return (
    <div className="creditsPage">
      <Typography className="header" variant="h2">
        Meet our team!
      </Typography>
      <div className="container">
        <div className="githubButtons">
          <Button
            variant="contained"
            className={buttonStyles.Button}
            href="https://github.com/Nefariusek"
            target="_blank"
          >
            Szymon
          </Button>
          <Button variant="contained" className={buttonStyles.Button} href="https://github.com/mngweb" target="_blank">
            Sylwia
          </Button>
          <Button
            variant="contained"
            className={buttonStyles.Button}
            href="https://github.com/NataliaCichonska"
            target="_blank"
          >
            Natalia
          </Button>
          <Button
            variant="contained"
            className={buttonStyles.Button}
            href="https://github.com/MariaBanaszkiewicz"
            target="_blank"
          >
            Maria
          </Button>
          <Button variant="contained" className={buttonStyles.Button} href="https://github.com/GRosza" target="_blank">
            Grzegorz
          </Button>
          <Button variant="contained" className={buttonStyles.Button} href="https://github.com/Urszuja" target="_blank">
            Ula
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CreditsPage;

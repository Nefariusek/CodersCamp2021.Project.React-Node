import './CreditsPage.scss';

import { Typography } from '@mui/material';
import Button from '@mui/material/Button';

import buttonStyles from '../../components/Button/Button.module.scss';

const ButtonsComponent = () => {
  const developers = [
    { href: 'https://github.com/Nefariusek', name: 'Szymon' },
    { href: 'https://github.com/mngweb', name: 'Sylwia' },
    { href: 'https://github.com/NataliaCichonska', name: 'Natalia' },
    { href: 'https://github.com/MariaBanaszkiewicz', name: 'Maria' },
    { href: 'https://github.com/Urszuja', name: 'Ula' },
    { href: 'https://github.com/GRosza', name: 'Grzegorz' },
  ];
  return (
    <>
      {developers.map(({ href, name }) => (
        <Button variant="contained" className={buttonStyles.Button} target="_blank" href={href}>
          {name}
        </Button>
      ))}
    </>
  );
};

const CreditsPage = () => {
  return (
    <div className="creditsPage">
      <Typography className="header-h2" variant="h2">
        Second project of Coders Camp 2021
      </Typography>
      <Typography className="header-h3" variant="h3">
        Meet our team!
      </Typography>
      <div className="credits-page-container">
        <div className="github-buttons">
          <ButtonsComponent />
        </div>
        <img className="creditsPageImg" src="./creditsPills.png" alt="credits page img" />
      </div>
    </div>
  );
};

export default CreditsPage;

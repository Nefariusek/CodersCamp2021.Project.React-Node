import './CreditsPage.scss';

import { Typography } from '@mui/material';
import Button from '@mui/material/Button';

import buttonStyles from '../../components/Button/Button.module.scss';
import { PILLS_IMAGE_ALT, PILLS_IMAGE_PATH } from '../../constants/images';

const MAIN_TEXT = 'Second project of Coders Camp 2021';
const SUBTITLE = 'Meet our team!';
const DevelopersButtons = () => {
  const developers = [
    { href: 'https://github.com/Nefariusek', name: 'Szymon' },
    { href: 'https://github.com/mngweb', name: 'Sylwia' },
    { href: 'https://github.com/NataliaCichonska', name: 'Natalia' },
    { href: 'https://github.com/MariaBanaszkiewicz', name: 'Maria' },
    { href: 'https://github.com/Urszuja', name: 'Ula' },
    { href: 'https://github.com/GRosza', name: 'Grzegorz' },
  ];
  return (
    <div className="github-buttons">
      {developers.map(({ href, name }) => (
        <Button key={name} variant="contained" className={buttonStyles.Button} target="_blank" href={href}>
          {name}
        </Button>
      ))}
    </div>
  );
};
const CreditsPage = () => {
  return (
    <div className="credits-page">
      <div className="title">
        <Typography className="header-h2" variant="h2" color="title.main">
          {MAIN_TEXT}
        </Typography>
        <Typography className="header-h3" variant="h3" color="title.light">
          {SUBTITLE}
        </Typography>
      </div>
      <div className="credits-page-container">
        <DevelopersButtons />
        <img className="credits-page-image" src={PILLS_IMAGE_PATH} alt={PILLS_IMAGE_ALT} />
      </div>
    </div>
  );
};

export default CreditsPage;

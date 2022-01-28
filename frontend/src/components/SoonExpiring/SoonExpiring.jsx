import './SoonExpiring.scss';

import { Typography } from '@mui/material';

const drugs = [
  {
    type: 'pills',
    name: 'tabletki',
    expirationDate: '01.01',
    notes: 'tabletki na ból głowy',
    quantity: '10',
    photoSource: '/creditsPills.png',
  },
  {
    type: 'syrup',
    name: 'syrop',
    expirationDate: '02.02',
    notes: 'syrop na kaszel',
    quantity: '4',
    photoSource: '/apteczka.png',
  },
  {
    type: 'patches',
    name: 'plastry',
    expirationDate: '04.04',
    notes: 'Plastry na skaleczenia',
    quantity: '10',
    photoSource: '/creditsPills.png',
  },
];

export function getCurrentDate() {
  const newDate = new Date();
  const date = newDate.getTime();
  console.log(date);
  return date;
}

const SoonExpiring = () => {
  getCurrentDate();
  return (
    <div className="soon-expiring">
      <Typography className="soon-expiring-header" variant="h5">
        SOON EXPIRING MEDICATION
      </Typography>
      {drugs.map(({ name, expirationDate }) => (
        <>
          <p key={name}>{name}</p>
          <p>{expirationDate}</p>
        </>
      ))}
    </div>
  );
};

export default SoonExpiring;

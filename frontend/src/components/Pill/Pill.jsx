import pillStyles from './Pill.module.scss';

const typeToClass = {
  pills: pillStyles.blue,
  syrup: pillStyles.orange,
  inhaler: pillStyles.yellow,
  injections: pillStyles.red,
  drops: pillStyles.green,
  patches: pillStyles.pink,
};

const Pill = ({ typeOfMedication, name, showExpirationDate, expirationDate }) => {
  if (showExpirationDate) {
    return (
      <div className={`${pillStyles.pill} ${typeToClass[typeOfMedication]}`}>
        {name}
        <div className={pillStyles.expiration}>Exp. date: {expirationDate}</div>
      </div>
    );
  }
  return <div className={`${pillStyles.pill} ${typeToClass[typeOfMedication]} ${pillStyles.hide}`}>{name}</div>;
};

export default Pill;

import Button from '@mui/material/Button';
import styles from '../../components/Button/Button.module.scss';

function CreditsPage() {
  return (
    <>
      <h1>Credits</h1>
      <Button variant="contained" className={styles.Button}>
        Szymon
      </Button>
      <Button variant="contained" className={styles.Button}>
        Sylwia
      </Button>
      <Button variant="contained" className={styles.Button}>
        Natalia
      </Button>
      <Button variant="contained" className={styles.Button}>
        Maria
      </Button>
      <Button variant="contained" className={styles.Button}>
        Grzegorz
      </Button>
      <Button variant="contained" className={styles.Button}>
        Ula
      </Button>
    </>
  );
}

export default CreditsPage;

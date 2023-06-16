import { Button } from 'components/ui';
import { CloseIcon, ErrorIcon } from 'components/icons';

import styles from './ModalError.module.scss';

interface ModalErrorProps {
  onClose: () => void;
}

const ModalError = ({ onClose }: ModalErrorProps) => {
  return (
    <>
      <div className={styles.title}>
        <h2>Ошибка</h2>
        <div className={styles.buttonWrapper}>
          <button type="button" onClick={onClose}>
            <CloseIcon />
          </button>
        </div>
      </div>
      <div className={styles.image}>
        <ErrorIcon />
      </div>
      <div className={styles.controls}>
        <Button id="button-close" type="button" onClick={onClose}>
          <span>Закрыть</span>
        </Button>
      </div>
    </>
  );
};

export default ModalError;

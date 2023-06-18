import { Button } from 'components/ui';
import { SuccessIcon } from 'components/icons';

import styles from './ModalSuccess.module.scss';
import { useFormData } from 'redux/hooks';

interface ModalSuccessProps {
  onClose: () => void;
}

const ModalSuccess = ({ onClose }: ModalSuccessProps) => {
  const { form } = useFormData();
  return (
    <>
      <div className={styles.title}>
        <h2>{form.message}</h2>
      </div>
      <div className={styles.image}>
        <SuccessIcon />
      </div>
      <div className={styles.controls}>
        <Button id="button-to-main" type="button" onClick={onClose}>
          <span>На главную</span>
        </Button>
      </div>
    </>
  );
};

export default ModalSuccess;

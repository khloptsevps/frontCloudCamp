import styles from './Modal.module.scss';

import { renderModal } from './renderModal';

interface ModalProps {
  type: 'success' | 'error';
  isOpen: boolean;
  onClose: () => void;
}

const Modal = ({ isOpen, onClose, type }: ModalProps) => {
  return (
    <div
      className={`${styles.root} ${isOpen && styles.active}`}
      onClick={() => onClose()}
    >
      <div
        className={`${styles.content} ${isOpen && styles.contentActive}`}
        onClick={(e) => e.stopPropagation()}
      >
        {renderModal(type, onClose)}
      </div>
    </div>
  );
};

export default Modal;

import ModalSuccess from './modalSuccess/ModalSuccess';
import ModalError from './modalError/ModalError';

export const renderModal = (type: string, onClose: () => void) => {
  switch (type) {
    case 'success':
      return <ModalSuccess onClose={onClose} />;
    case 'error':
      return <ModalError onClose={onClose} />;

    default:
      return null;
  }
};

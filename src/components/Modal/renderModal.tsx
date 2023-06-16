import ModalSuccess from './modalSuccess/ModalSuccess';
import ModalError from './modalError/ModalError';

type Modals = 'success' | 'error' | null;

export const renderModal = (type: Modals, onClose: () => void) => {
  switch (type) {
    case 'success':
      return <ModalSuccess onClose={onClose} />;
    case 'error':
      return <ModalError onClose={onClose} />;

    default:
      console.warn('Unknown modal type');
      return null;
  }
};

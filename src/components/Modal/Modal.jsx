import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import { ModalBackdrop, ModalContent } from './Modal.styled';

// Портал - DOM-вузол, в який буде рендеритися модальне вікно
const modalRoot = document.querySelector('#modal-root');

const Modal = ({ children, onClose }) => {
  // Закриття модалки по ESC
  useEffect(() => {
    const handleKeyDown = event => {
      if (event.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  // Закриття модалки по кліку на backdrop
  // target - на чому клікнули
  // currentTarget - на чому спрацював обробник подій
  const handleBackdropClick = event => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <ModalBackdrop onClick={handleBackdropClick}>
      <ModalContent>{children}</ModalContent>
    </ModalBackdrop>,
    modalRoot
  );
};

export default Modal;

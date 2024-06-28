import React from 'react';
import Modal from 'react-modal';
import { ImageModalProps } from './ImageModal.types';
import css from './ImageModal.module.css';

const ImageModal: React.FC<ImageModalProps> = ({ isOpen, onRequestClose, fullImage }) => {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            shouldCloseOnEsc={true}
            shouldCloseOnOverlayClick={true}
            className={css.modal}
            overlayClassName={css.overlay}
        >
            {fullImage && <img src={fullImage} alt="Large view" className={css.image} />}
        </Modal>
    )
};

export default ImageModal;
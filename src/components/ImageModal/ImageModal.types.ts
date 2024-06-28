export interface ImageModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
    fullImage: string;
    shouldCloseOnOverlayClick?: boolean;
}
import { Image } from "../App/App.types";

export interface ImageGalleryProps {
	items: Image[];
	onImageClick: (imageURL: string) => void;
}

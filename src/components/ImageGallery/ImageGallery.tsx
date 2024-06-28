import React from "react";
import ImageCard from "../ImageCard/ImageCard";
import { ImageGalleryProps } from "./ImageGallery.types";
import css from './ImageGallery.module.css';

const ImageGallery: React.FC<ImageGalleryProps> = ({ items, onImageClick}) => {
	return (
		<div className={css.container}>
        	<ul className={css.items}>
				{items.map(({ id, urls, alt_description }) => {
				return(
					<ImageCard
						key={id}
						urls={urls}
						alt_description={alt_description}
						onClick={onImageClick}
						largeImage={urls.regular}
					/>
				)})}
			</ul>
		</div>
    )
}
export default ImageGallery;
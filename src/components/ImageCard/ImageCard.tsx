import React from 'react';
import { ImageCardProps } from './ImageCard.types';
import css from './ImageCard.module.css';

const ImageCard: React.FC<ImageCardProps> = ({ urls, alt_description, onClick, largeImage }) => {
    return (
        <li className={css.item}>
			<div>
				<img
					src={urls.small}
					alt={alt_description}
					className={css.image}
					onClick={() => onClick(largeImage)}
				/>
			</div>
		</li>
    )
}
export default ImageCard;
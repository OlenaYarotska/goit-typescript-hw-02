export interface ImageCardProps {
	urls: {
		small: string;
		regular: string;
	};
	alt_description: string;
	onClick: (largeImage: string) => void;
	largeImage: string;
}

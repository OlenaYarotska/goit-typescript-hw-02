import { LoadMoreBtnProps } from './LoadMoreBtn.types';
import css from './LoadMoreBtn.module.css';

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ handleLoadMore }) => {
    return (
        <div className={css.buttonWrapper}>
            <button onClick={handleLoadMore} className={css.button}>Load more</button>
        </div>
    )
}

export default LoadMoreBtn;
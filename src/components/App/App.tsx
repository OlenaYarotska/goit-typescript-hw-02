import { useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import SearchBar from '../SearchBar/SearchBar';
import ImageGallery from '../ImageGallery/ImageGallery';
import fetchData from '../../services/unsplash-api';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import ImageModal from '../ImageModal/ImageModal';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import { Image } from './App.types';
import { fetchDataResults } from './App.types';
import css from './App.module.css';

const App: React.FC = () => {

  const [images, setImages] = useState<Image[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [query, setQuery] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [largeImage, setLargeImage] = useState<string>("");
  const [totalResults, setTotalResults] = useState<number>(0);

  const per_page = 9;

  useEffect(() => {
    if (query === '') return;

    const fetchImages = async (): Promise<void> => {
      try {
        setLoading(true);
        setError(false)
        const data: fetchDataResults = await fetchData(query, page, per_page);
        setImages((prevState) => [...prevState, ...data.results]);
        setTotalResults(data.total)
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchImages();
  }, [page, query]);
  
  const handleForm = async ({ search }: { search: string }): Promise<void> => {
    setQuery(search)
    setPage(1);
    setImages([]);
    setTotalResults(0)
  };
  const handleLoadMore = async (): Promise<void> => {
    setLoading(true);
    setPage(page + 1);
  }
  const handleOpenModal = (fullImage: string): void => {
    setLargeImage(fullImage);
    setShowModal(true);
    
  }
  const handleCloseModal = (): void => {
    setLargeImage("");
    setShowModal(false);
  }
 
  const shouldShowBtn = images.length > 0 && !loading && images.length < totalResults;
  
  return (
    <div className={css.container}>
      <SearchBar onSubmit={handleForm} />
      {loading && <Loader />}
      {error && (<ErrorMessage />)}
      {images.length > 0 && <ImageGallery items={images} onImageClick={handleOpenModal} />}
      {shouldShowBtn && <LoadMoreBtn handleLoadMore={handleLoadMore} />}
      <ImageModal isOpen={showModal} onRequestClose={handleCloseModal} fullImage={largeImage}
        shouldCloseOnOverlayClick={false} />
      <Toaster position="top-right" />
     
    </div>
  )
};


export default App

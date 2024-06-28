import React, { FormEvent } from 'react';
import { useId } from "react";
import { CiSearch } from "react-icons/ci";
import toast from 'react-hot-toast';
import { SearchBarProps } from './SearchBar.types';
import css from './SearchBar.module.css';

const SearchBar: React.FC<SearchBarProps> = ({ onSubmit }) => {
  
  const formId = useId();
  
  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;
    const input = form.elements.namedItem('search') as HTMLInputElement;
    const search = input.value.trim();
    if (search.trim() === '') {
      toast.error('Please type something')
      return
    }
    onSubmit({ search })
    form.reset();
  };

  return (
    <header className={css.container}>
      <form onSubmit={handleSubmit} className={css.form}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          name="search"
          id={formId}
          placeholder="Search images and photos"
          className={css.input} />
        <button type="submit" className={css.button}>
          <CiSearch className={css.buttonIcon} />
        </button>
      </form>
    </header>
  )
};

export default SearchBar;
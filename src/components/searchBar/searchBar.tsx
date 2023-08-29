import React, { useEffect, useRef, useState } from 'react';
import styles from './searchBar.module.scss';

interface SearchBarProps {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
}

export const SearchBar: React.FC<SearchBarProps> = ({ query, setQuery }) => {
  const [isOpen, setIsOpen] = useState(false);
  const searchBarRef = useRef<HTMLDivElement>(null);

  const toggleSearchBar = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (e: MouseEvent) => {
    if (
      searchBarRef.current &&
      !searchBarRef.current.contains(e.target as Node)
    ) {
      setTimeout(() => {
        setIsOpen(false);
      }, 300);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.searchBar} ref={searchBarRef}>
      <button className={styles.iconButton} onClick={toggleSearchBar}>
        🔍
      </button>
      <input
        type="text"
        placeholder="Search for an item"
        className={`${styles.input} ${isOpen ? styles.open : ''}`}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
};

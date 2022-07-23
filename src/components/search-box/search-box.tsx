import React, { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import styles from './search-box.module.scss';
import Search from '../../icons/search';
import Cross from '../../icons/cross';
import { useAppDispatch, useAppSelector } from '../../services/store';
import { setQuery } from '../../services/slices/posts';

type TSeachBoxProps = {
  className?: string;
};

const SearchBox = ({
  className
}: TSeachBoxProps) => {
  const [isShown, setShown] = useState(false);
  const ref = useRef<HTMLInputElement>(null);
  const q = useAppSelector((store) => store.posts.q);
  const dispatch = useAppDispatch();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setQuery(e.target.value));
  };

  const onClose = () => {
    setShown(false);
  };

  const onClick = () => {
    setShown(true);
  };

  useEffect(() => {
    if (isShown) {
      ref.current?.focus();
    }
  }, [isShown]);

  return (
    <div className={clsx(styles['search-box'], className)}>
      <button
        onClick={onClick}
        className={styles['toggle']}
        type="button"
      >
        <Search />
      </button>
      {
        isShown && (
          <div className={styles['input']}>
            <input
              placeholder="Введите запрос"
              value={q}
              ref={ref}
              type="text"
              onChange={onChange}
            />
            <button
              onClick={onClose}
              className={styles['close']}
              type="button"
            >
              <Cross />
            </button>
          </div>
        )
      }
    </div>
  );
};

export default SearchBox;

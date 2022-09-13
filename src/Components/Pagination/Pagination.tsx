import { FC } from 'react';
import styles from './Pagination.module.css';
import cn from 'classnames';
import prev from '../../Assets/Prew.svg';
import next from '../../Assets/Next.svg';

type PaginationProps = {
  pageNum: number;
  pagesCount: number;
  PrevClick: () => void;
  NextClick: () => void;
  LastClick: () => void;
  PageClick: () => void;
};

const Pagination: FC<PaginationProps> = ({
  pageNum,
  pagesCount,
  PrevClick,
  NextClick,
  PageClick,
  LastClick,
}) => {
  return (
    <div className={cn(styles.pagination)}>
      <div className={cn(styles.pagination_buttons)}>
        <button
          disabled={pageNum === 1}
          className={cn(styles.pagination_button, { [styles._inactive]: pageNum === 1 })}
          onClick={PrevClick}>
          <img src={prev} alt="prev"></img>
          <div>Prev</div>
        </button>
        <div className={cn(styles.pagination_numbers)}>
          <button
            className={cn(styles.pagination_num, { [styles._active_btn]: pageNum })}
            onClick={PageClick}>
            {pageNum}
          </button>
          <button className={cn(styles.pagination_num)} onClick={PageClick}>{`${
            pageNum + 1
          }`}</button>
          <button className={cn(styles.pagination_num)} onClick={PageClick}>{`${
            pageNum + 2
          }`}</button>

          <button className={cn(styles.pagination_num)} onClick={LastClick}>
            ...
          </button>
          <button className={cn(styles.pagination_num)} onClick={PageClick}>
            {pagesCount}
          </button>
        </div>
        <button
          disabled={pageNum === pagesCount}
          className={cn(styles.pagination_button, { [styles._inactive]: pageNum === pagesCount })}
          onClick={NextClick}>
          <img src={next} alt="next"></img> <div>Next</div>
        </button>
      </div>
    </div>
  );
};
export default Pagination;

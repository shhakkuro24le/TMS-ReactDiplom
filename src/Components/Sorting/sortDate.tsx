import React from 'react';
import styles from './sort.module.css';
type CategoriesProps = {
  value: number;
  onChangeCategory: (idx: number) => void;
};

const categories = ['day', 'week', 'month', 'year'];
const Sorting: React.FC<CategoriesProps> = React.memo(({ value, onChangeCategory }) => {
  return (
    <div className={styles.categories}>
      <ul>
        {categories.map((categoryName, i) => (
          <li
            key={i}
            onClick={() => onChangeCategory(i)}
            className={value === i ? styles.active : ''}>
            {categoryName}
          </li>
        ))}
      </ul>
    </div>
  );
});

export default Sorting;

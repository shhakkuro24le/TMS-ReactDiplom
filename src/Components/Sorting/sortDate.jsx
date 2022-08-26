import { useState } from 'react';
import styles from './sort.module.css';
const Sorting = ({ value, onClickCategory }) => {
  console.log(value);

  const categories = [{ name: 'day' }, { name: 'week' }, { name: 'monath' }, { name: 'year' }];
  const [categoryId, setCategoryId] = useState('');
  return (
    <div className={styles.categories}>
      <ul>
        {categories.map((categoryName, i) => (
          <li
            key={categoryName.name}
            onClick={() => setCategoryId(i)}
            className={categoryId === i ? styles.active : ''}>
            {categoryName.name}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Sorting;

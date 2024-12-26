import { useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/actions';

const Filter = () => {
  const dispatch = useDispatch();
  const handleFilterChange = e => {
    dispatch(changeFilter(e.target.value));
  };
  return (
    <input
      type="text"
      onChange={handleFilterChange}
      name="filter"
      id=""
      placeholder="filter"
    />
  );
};

export default Filter;

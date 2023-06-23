import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/filterSlice';
import { selectFilter } from '../../redux/selectors';
import { FilterBlock, FilterLabel, FilterInput } from './Filter.styled';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleChange = evt => {
    const valueFilter = evt.currentTarget.value.trim();
    dispatch(setFilter(valueFilter));
  };

  return (
    <FilterBlock>
      <FilterLabel>
        Find contacts by name
        <FilterInput
          type="text"
          placeholder="Search..."
          value={filter}
          onChange={handleChange}
        />
      </FilterLabel>
    </FilterBlock>
  );
};

export default Filter;

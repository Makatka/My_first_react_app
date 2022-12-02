import styles from './SearchForm.module.scss';
import TextInput from "../TextInput/TextInput";
import Button from "../Button/Button";
import {useState} from "react";
import {useDispatch, useSelector} from 'react-redux';
import {searching} from "../../redux/store";

const SearchForm = () => {

  const [searchTitle, setSearchTitle] = useState(useSelector(state => state.searchTitle));
  const dispatch = useDispatch();

  const handleSearch = e => {
    e.preventDefault();
    dispatch(searching(searchTitle));
  }
  return (
    <form className={styles.searchForm} onSubmit={handleSearch}>
      <TextInput placeholder="Search..." value={searchTitle} onChange={e => setSearchTitle(e.target.value)}/>
      <Button>
        <span className="fa fa-search"/>
      </Button>
    </form>
  );
};

export default SearchForm;
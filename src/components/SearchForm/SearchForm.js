import styles from './SearchForm.module.scss';
import TextInput from "../TextInput/TextInput";
import Button from "../Button/Button";
import {useState} from "react";
import {useDispatch} from 'react-redux';
import {searching} from "../../redux/store";

const SearchForm = () => {

  const [searchTitle, setSearchTitle] = useState('');
  const dispatch = useDispatch();

  const handleSearch = e => {
    e.preventDefault();
    dispatch(searching(searchTitle));
    setSearchTitle('');
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
import styles from './Card.module.scss';
import clsx from 'clsx';
import {useDispatch} from "react-redux";
import {toggleFavorite} from "../../redux/store";


const Card = props => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(toggleFavorite(props.id))
  }

  return (
    <li className={styles.card}>
      {props.title}
      <span className={clsx(styles.icon, props.isFavorite ? ' fa fa-star' : ' fa fa-star-o')} onClick={handleClick}></span>
    </li>
  );
};

export default Card;

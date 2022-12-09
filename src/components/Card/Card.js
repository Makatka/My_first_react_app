import styles from './Card.module.scss';
import clsx from 'clsx';
import {useDispatch} from "react-redux";
import {removeCard, toggleFavorite} from "../../redux/cardsRedux";


const Card = props => {
  const dispatch = useDispatch();

  const handleFavorite = () => {
    dispatch(toggleFavorite(props.id))
  }

  const handleDelete = () => {
    dispatch(removeCard(props.id))
  }

  return (
    <li className={styles.card}>
      {props.title}
      <div>
        <span className={clsx(styles.icon, styles.favoriteBtn, props.isFavorite ? ' fa fa-star' : ' fa fa-star-o')}
              onClick={handleFavorite}></span>
        <span className={clsx(styles.removeBtn, styles.icon, ' fa fa-trash')} onClick={handleDelete}></span>
      </div>
    </li>
  );
};

export default Card;

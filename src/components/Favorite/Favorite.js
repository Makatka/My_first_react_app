import styles from './Favorite.module.scss'
import Card from "../Card/Card";
import {useSelector} from "react-redux";
import {getFavoriteCards} from "../../redux/store";
import PageTitle from "../PageTitle/PageTitle";
import clsx from 'clsx';
import {useState} from "react";


const Favorite = () => {
  const cards = useSelector(getFavoriteCards);
    return (
      <article>
        <PageTitle>Favorite</PageTitle>
        <div className={styles.column}>
          <ul className={styles.cards}>
            {cards.map(card => <Card
              key={card.id}
              id={card.id}
              title={card.title}
              isFavorite={card.isFavorite}/>)}
          </ul>
        </div>
      </article>
    )
}
export default Favorite
import styles from './List.module.scss';
import Column from "../Column/Column";

const List = () => {
  return (
   <div >
     <section className={styles.header}>
       <h2 className={styles.title}>Things to do<span>soon</span></h2>
     </section>
     <p className={styles.description}>Interesting things I want to check out!</p>
     <section className={styles.columns}>
       <Column title="Books" icon="book"/>
       <Column title="Movies" icon="film"/>
       <Column title="Games" icon="gamepad" />
     </section>
   </div>

  );
};

export default List
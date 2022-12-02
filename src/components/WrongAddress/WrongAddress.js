import PageTitle from "../PageTitle/PageTitle";
import Container from "../Container/Container";
import Img from '../../assets/5203299.jpg';
import styles from './WrongAddress.module.scss';

const WrongAddress = () => {

  return (
    <Container>
      <PageTitle>Address not found...</PageTitle>
      <img className={styles.mainImg} src={Img} alt="§"/>
    </Container>
  )
}

export default WrongAddress
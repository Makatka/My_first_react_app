import PageTitle from "../PageTitle/PageTitle";
import Container from "../Container/Container";
import Img from '../../assets/5203299.jpg';
import './WrongAddress.modules.scss';

const WrongAddress = () => {

  return (
    <Container>
      <PageTitle>Address not found...</PageTitle>
      <img src={Img} alt="§"/>
    </Container>
  )
}

export default WrongAddress
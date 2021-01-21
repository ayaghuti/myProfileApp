import { Jumbotron, Container } from 'reactstrap';
import ali from '../../img/ali.jpg';
const JumbotronC = () => {
  return (
    <div>
      <Jumbotron className="bg-info" fluid>
        <Container fluid>
          <h1 className="display-3 font-weight-bold">Welcome to my site!</h1>
          <h2>Ali Yaghuti is an Electronics Engineer who loves coding.</h2>
          <p className="lead text-danger">Never stop learning...</p>
          <img width="15%" src={ali} alt="Ali"/>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default JumbotronC;
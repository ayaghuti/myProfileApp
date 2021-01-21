import { Container, Row, Col } from 'reactstrap';

const Footer = () => {
  return (
    <footer>
    <Container className="bg-secondary" fluid>
      <br/>
      <Row className="justify-content-around">
        <Col sm="12" md="5">
          <p>Ali Yaghuti</p>
        </Col>
        <Col sm="12" md="5">
          <p className="text-center">&copy; Ali Yaghuti 2021</p>
        </Col>
      </Row>
    </Container>
    </footer>
  );
}
 
export default Footer;
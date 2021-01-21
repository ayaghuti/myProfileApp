import { Row, Col } from 'reactstrap';
import me from '../../img/me.jpg'
const About = () => {
  return (
    <div className="mx-2 px-2">
      <Row>
        <Col sm="12" md="6">
          <h1 className="display-1">About Me</h1>
          <p className="lead text-left px-3">Hi! My name is Ali Yaghuti. Formerly I was working in the electronics field. More precisely I was working more often on micro-controllers and assembly language and later on C++ developing platforms related to them and finaly with FPGAs (Field Programble Gate Arrays). However I was lucky to take the chance and get involved in web programming and very soon I found myself immersed in coding the web. No doubt that it is interesting and I am open to any chance to dive even deeper to it.
          </p>
        </Col>
        <Col sm="12" md="6">
          <img src={me} alt="me" width="100%" className="py-5" />
        </Col>
      </Row>
    </div>
  );
}
 
export default About;
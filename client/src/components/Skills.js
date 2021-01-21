import { Container, Row } from "reactstrap";

const Skills = () => {
  return (
    <Container>
      <h2 className="display-2">Skills:</h2>
      <br/>
      <br/>
      <Row>
        <p className="display-4">Coding:</p>
        <br/>
        <ul className="display-5 d-block text-left">
          <li>HTML</li>
          <li>CSS</li>
          <li>Javascript</li>
          <li>Some experience with Python and C++</li>
        </ul>
      </Row>
      <br/>
      <br/>
      <Row>
        <p className="display-4">Frameworks:</p>
        <br/>
        <ul className="display-5 text-left">
          <li>Bootstrap</li>
          <li>React</li>
          <li>Redux</li>
          <li>Nodejs</li>
          <li>Express</li>
        </ul> 
      </Row>
      <br/>
      <br/>  
      <Row>
        <p className="display-4">Languages:</p>
        <br/>
        <br/>
        <ul className="display-5">
          <br/>
          <li>English</li>
          <li>French</li>
        </ul>
      </Row>
    </Container>
  );
}
 
export default Skills;
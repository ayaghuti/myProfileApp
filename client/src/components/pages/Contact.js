import { useState } from 'react';
import axios from 'axios';
import { Button, Form, FormGroup, Label, Input, Container, Modal, ModalHeader, ModalBody, Row, Col } from 'reactstrap';
import facebook from '../../img/facebook.png';
import linkedin from '../../img/linkedIn.png';
import instagram from '../../img/instagram.jpg';
import envelope from '../../img/envelope.jpg';

const Contact = () => {
  const [user, setUser] = useState({
    subject: '',
    email: '',
    text: '',
    disabled: false,
    sent: false
  })
  const [modal, setModal] = useState(false);
  const [message, setMessage] = useState(null);

  const toggle = () => setModal(!modal);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
    setUser({ ...user, disabled: true });
    axios.post('/email', user)
      .then(res => {
        setUser({
          subject: '',
          email: '',
          text: '',
          sent: true,
          disabled: false
        });
        setMessage('Message sent!!!');
      })
      .catch(err => {
        console.log(err.response.data);
        setUser({
          ...user,
          sent: false,
          disabled: false
        });
        if(err.response.data.message === 'Please enter all fields') {
          setMessage('Failed to send Message. ' + err.response.data.message); 
        }
        else setMessage('Failed to send Message');
      })
      setTimeout(() => toggle(), 3000);
      // toggle();
  }

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Message</ModalHeader>
        <ModalBody className={ user.sent? "text-success" : "text-danger" }>
          {message}
        </ModalBody>
      </Modal>
      <Container>
        <h2 className="display-3">Ways to contact me:</h2>
        <br/>
        <Row className="justify-content-around">
          <Col sm="12" md="6">
            <p className="lead text-left text-secondary">Please fill in this form to get in touch:</p>
            <Form autoComplete="off" onSubmit={handleSubmit} className="text-left">
              <Container className="mt-3">
                
                <FormGroup>
                  <Label for="email">Email</Label>
                  <Input 
                    type="email" 
                    name="email" 
                    id="email" 
                    placeholder="Email"
                    value={user.email}
                    onChange={(e) => setUser({ ...user, email: e.target.value }) }
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="subject">Subject</Label>
                  <Input 
                    type="text" 
                    name="subject" 
                    id="subject" 
                    placeholder="Subject" 
                    value={user.subject}
                    onChange={(e) => setUser({ ...user, subject: e.target.value }) }
                  />
                </FormGroup>              
                <FormGroup>
                  <Label for="text">Message</Label>
                  <Input type="textarea" name="text" id="text" 
                    value={user.text}
                    onChange={(e) => setUser({ ...user, text: e.target.value })}
                  />          
                </FormGroup> 
                <Button block className="btn btn-info">Submit</Button> 
                <br/>
              </Container>
            </Form> 
          </Col>
          <Col sm="12" md="5" className="social">
            <p className="lead text-left text-secondary">Or send an Email to:</p>
            <p className="lead text-info text-left"><img className="envelope" src={envelope} alt="facebook"/><span> aliyaghuti55@gmail.com</span></p>
            <br/>
            <p className="lead text-left text-secondary">Or find me on social media:</p>
            <br/>
            <ul>
              <li>
                <a href="https://www.facebook.com/ali.yaghuti.50/" target="_blanck" rel="noreferrer"><img className="facebook" src={facebook} alt="facebook"/></a>
              </li>
              <li>
                <a href="https://www.instagram.com/a.yaghuti.n/" target="_blanck" rel="noreferrer"><img className="instagram" src={instagram} alt="instagram"/></a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/ali-yaghutiniat-7b6918133/"
                  target="_blanck" rel="noreferrer"
                ><img className="linkedin" src={linkedin} alt="linkedin"/></a>
              </li>
            </ul>
          </Col>
        </Row>      
      </Container>
    </div>
  );
}
 
export default Contact;
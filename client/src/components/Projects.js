import { useState } from 'react';
import { Container, Row } from 'reactstrap';
import ItemDisplay from './ItemDisplay';
import bookBlog from  '../img/bookBlog.jpeg';
import enterpriseReg from  '../img/enterpriseReg1.png';

const Projects = () => {
  const [items, setItems] = useState([
  { 
    id: 0,
    title: 'BookBlog (mern stack + jwt auth)',
    subTitle: 'A simple blog for book readers',
    img: bookBlog,
    link1: 'https://sleepy-forest-35725.herokuapp.com/',
    link2: 'https://github.com/ayaghuti/bookBlog',
    selected: false
    },
    { 
      id: 1,
      title: 'Enterprise Formation Services',
      subTitle: 'Offering solutions for company registration',
      img: enterpriseReg,
      link1: 'https://www.afarineshfekrifaraz.com/',
      link2: 'https://github.com/ayaghuti/afarinesh',
      selected: false
    },
  ]);

  return (
     <Container fluid={true}>
       <Row className="justify-content-around">
          {items.map(item => (
          <ItemDisplay item={item} key={item.id} />
        ))}
       </Row>
     </Container>
  );
}
 
export default Projects;
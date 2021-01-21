import { Parallax } from 'react-parallax';
import bgPath from '../img/education.jpg';
import { Table, Container } from 'reactstrap';

const EducationBg = () => {
  return (
    <div className="bg-secondary">
      <h2 className="display-2">Education</h2>
      <br/>
      <Parallax bgImage={bgPath}>
        <div style={{height: 700}}>
        </div>
      </Parallax>
      <br/>
      <br/>
      <Container>
        <Table striped hover bordered className="my-table px-1">
          <thead>
            <tr>
              <th>Start Year - End Year</th>
              <th>School</th>
              <th>Degree</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2011-2013</td>
              <td>Mehralborz Institute of Higher Education</td>
              <td>Master of Business Administration (MBA)</td>
            </tr>
            <tr>
              <td>1994-1998</td>
              <td>Malek-Ashtar Industrial University</td>
              <td>Bachelor of Science (B.Sc.), Electrical and Electronics Engineering</td>
            </tr>
          </tbody>
        </Table>
      </Container>
      <br/><br/>
    </div>
  );
}
 
export default EducationBg;
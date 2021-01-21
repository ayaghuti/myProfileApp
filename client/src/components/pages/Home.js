import Projects from '../Projects';
import JumbotronC from '../layout/JumbotronC';
import EducationBg from '../EducationBg';
import Skills from '../Skills';
import freeCodeCamp from '../../img/freeCodeCamp.jpg'
import thenetninja from '../../img/thenetninja.png'
import traversy from '../../img/traversy.jpg'

const Home = () => {
  return (
    <div>
      <JumbotronC />
      <h2 className="display-2" id="home-position">A few projects:</h2>
      <br/>
      <Projects />
      <br/>
      <br/>
      <EducationBg />
      <br/>
      <Skills />
      <br/>
      <div className="bg-success f-sites">
        <p className=" display-3 text-center mx-5 px-5">Featured Sites</p>
        <br/>
        <ul className="justify-content-around">
          <li><a href="https://www.freecodecamp.org/" target="_blank" rel="noreferrer" className="text-danger"><i><img src={freeCodeCamp} alt="freeCodeCamp"/></i> freeCodeCamp</a></li>
          <li><a href="https://www.thenetninja.co.uk/" target="_blank" rel="noreferrer" className="text-danger"><img src={thenetninja} alt="thenetninja"/> thenetninja</a></li>
          <li><a href="https://www.traversymedia.com/" target="_blank" rel="noreferrer" className="text-danger"><img src={traversy} alt="traversymedia"/> traversymedia</a></li>
        </ul>
        <br/>
        
      </div>
      <br/>
      <div>
        <a href="#home-position" className="btn btn-primary">Back to the top</a>
      </div>
      <br/>
    </div>
  );
}
 
export default Home;
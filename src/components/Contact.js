import dev from "/Users/katelynjewel/Development/code/portfolio/src/images/dev.png"
import github from "/Users/katelynjewel/Development/code/portfolio/src/images/github.png"
import linkedin from "/Users/katelynjewel/Development/code/portfolio/src/images/linkedin.png"

function Contact(){

  return(
    <div classname='contact'>
      <h2>Contact</h2>
      <div id="social-icons" className="flex-row">
          <a href="https://www.linkedin.com/in/katelyn-richard/">
              <img src={linkedin} alt="LinkedIn icon" className="social-img"/>
          </a>
          <a href="https://github.com/katelynjewel">
              <img src={github} alt="Github icon" className="social-img"/>
          </a>
          <a href="https://dev.to/katelynjewel">
              <img src={dev} alt="Dev.to icon" id="dev" className="social-img"/>
          </a>
      </div>
    </div>
  )
}

export default Contact;
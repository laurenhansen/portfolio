import * as React from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'
//import { StaticImage } from 'gatsby-plugin-image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faCodepen, faDribbble } from '@fortawesome/free-brands-svg-icons'

const IndexPage = () => {
  
  return (
    <Layout pageTitle="Home Page">
      <h2>About Me</h2>
      <p>I am an experienced UX Designer and Web Developer. I enjoy solving design problems with a user-centric focus and experimenting with code. In my free time, I enjoy knitting, gardening, and hanging out with my cats.</p>
      <p>My up-to-date work experience can be found on LinkedIn and you can view my portfolio here.</p>
      <h2>Skills</h2>
      <p>Here are just a few of the skills I've picked up along the way.</p>
      <ul>
        <li>Sketch &amp; Figma</li>
        <li>Adobe Creative Suite</li>
        <li>Illustration</li>
        <li>Video Editing</li>
        <li>Wireframing &amp; Prototyping</li>
        <li>HTML &amp; CSS</li>
        <li>Javascript (including jQuery &amp; React)</li>
        <li>Sass &amp; Node.js</li>
        <li>Git</li>
        <li>PHP &amp; MySQL</li>
        <li>Bootstrap &amp; Foundation</li>
        <li>Wordpress &amp; Drupal</li>
      </ul>
      <h2>Connect</h2>
      <p></p>
      <div>
  <Link to={`https://codepen.io/laurenhansen`} >
    <FontAwesomeIcon icon={faCodepen}/>
  </Link>
  <a href={`https://github.com/laurenhansen`}>
    <FontAwesomeIcon icon={faGithub}/>
  </a>
  <a href={`https://dribbble.com/laurenhansen`}>
    <FontAwesomeIcon icon={faDribbble}/>
  </a>
  <a href={`https://www.linkedin.com/in/laurenhansen`}>
    <FontAwesomeIcon icon={faLinkedin}/>
  </a>
</div>
    </Layout>
  )
}

export default IndexPage
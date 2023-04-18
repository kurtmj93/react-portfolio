// import Bootstrap components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';

import projProfile from '../assets/img/mockup.png';
import projCMS from '../assets/img/deployed.png';
import projMongoose from '../assets/img/mongooseapi.png';
import projQuiz from '../assets/img/codequiz.png';
import projWeather from '../assets/img/weatherdash.png';
import projReact from '../assets/img/react.png';


import 'animate.css';
import TrackVisibility from 'react-on-screen';

import { ProjectCard } from './ProjectCard';

export const Portfolio = () => {
    const projects = [
        {
            title: "MVC Content Management System",
            desc: "A simple Content Management System, blog with comment functionality, built with the Model-View-Controller paradigm. Showcases RESTful API routes, Handlebars view engine, Express, Sequelize, and the Bulma css framework.",
            imgUrl: projCMS,
            link: 'https://infinite-scrubland-01157.herokuapp.com/',
            github: 'https://github.com/kurtmj93/MVC-CMS'
        },
        {
            title: "React Portfolio",
            desc: "You're looking at it! A one-page portfolio website built with React.",
            imgUrl: projReact,
            link: '#home',
            github: 'https://github.com/kurtmj93/react-portfolio'
        },
        {
            title: "Weather Dashboard",
            desc: "Showcases use of the Open Weather API, localStorage and jQuery - allows the user to search for weather conditions and a five-day forecast by city name.",
            imgUrl: projWeather,
            link: 'https://kurtmj93.github.io/weather-dashboard/',
            github: 'https://github.com/kurtmj93/weather-dashboard'
        },
        {
            title: "Profile Generator",
            desc: "Showcases object-oriented programming in Node.js with the npm inquirer package. Asks user a hierarchy of questions and generates polished HTML result with the Bulma css framework.",
            imgUrl: projProfile,
            link: '#',
            github: 'https://github.com/kurtmj93/oop-team-profiles'
        },
        {
            title: "Mongoose API",
            desc: "A RESTful social media API using mongoose ODM and MongoDB.",
            imgUrl: projMongoose,
            link: 'https://drive.google.com/file/d/1F5PGrcDA4maLt_ytC6hYq64oOPEOlODs/view',
            github: 'https://github.com/kurtmj93/mongoose-api'
        },
        {
            title: "Code Quiz",
            desc: "Showcasing Javascript fundamentals, this is app is a mini quiz game with a timer and high scores.",
            imgUrl: projQuiz,
            link: 'https://kurtmj93.github.io/code-quiz/',
            github: 'https://github.com/kurtmj93/code-quiz'
        },
    ];

    return (
        <section className="portfolio" id="portfolio">
            <Container>
                <Row>
                <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>My Portfolio</h2>
                <Tab.Container id="projects-tabs" defaultActiveKey="development">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="development">Full Stack</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="marketing">Marketing</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="development">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="marketing">
                      <p>Marketing projects to be showcased, here.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
        </section>
    )
};
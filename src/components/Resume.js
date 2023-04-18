// import Bootstrap components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// import react carousel
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// import FontAwesome Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faBroadcastTower, faPaintBrush, faUsers, faUsersCog, faLaptopCode } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faGoogle, faReact, faAmazon, faJs, faGitAlt, faHtml5 } from '@fortawesome/free-brands-svg-icons'


export const Resume = () => {
    const responsive = {
        desktop: {
            breakpoint: { max: 4000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <section className="resume" id="resume">
            <Container>
                <Row>
                    <Col>
                    <div className="skill-box">
                        <h2>
                            Skills
                        </h2>
                        <p>I have a wide breadth of expertise critical for developing and executing impactful marketing and communications strategy as well as managing teams from the creative to the technical.</p>
                        <Carousel responsive={responsive} infinite={true} className="skill-slider">
                            <div className="item">
                                <FontAwesomeIcon icon={faCode} inverse />
                                <h5>Web Development</h5>
                            </div>
                            <div className="item">
                                <FontAwesomeIcon icon={faJs} inverse />
                                <h5>Javascript</h5>
                            </div>
                            <div className="item">
                                <FontAwesomeIcon icon={faHtml5} inverse />
                                <h5>HTML & CSS</h5>
                            </div>
                            <div className='item'>
                                <FontAwesomeIcon icon={faReact} inverse />
                                <h5>React</h5>
                            </div>
                            <div className='item'>
                                <FontAwesomeIcon icon={faGitAlt} inverse />
                                <h5>Git DevOps</h5>
                            </div>
                            <div className='item'>
                                <FontAwesomeIcon icon={faAmazon} inverse />
                                <h5>Amazon Web Services (AWS)</h5>
                            </div>
                            <div className="item">
                                <FontAwesomeIcon icon={faLaptopCode} inverse />
                                <h5>Digital Marketing</h5>
                            </div>
                            <div className="item">
                                <FontAwesomeIcon icon={faFacebook} inverse />
                                <h5>Facebook Ads</h5>
                            </div>
                            <div className="item">
                                <FontAwesomeIcon icon={faGoogle} inverse />
                                <h5>Google Ads</h5>
                            </div>
                            <div className="item">
                                <FontAwesomeIcon icon={faUsersCog} inverse /> 
                                <h5>User Experience</h5>
                            </div>
                            <div className="item">
                                <FontAwesomeIcon icon={faBroadcastTower} inverse />
                                <h5>Lead Generation</h5>
                            </div>
                            <div className="item">
                                <FontAwesomeIcon icon={faUsers} inverse />
                                <h5>Customer Relationship Management</h5>
                            </div>
                            <div className="item">
                                <FontAwesomeIcon icon={faPaintBrush} inverse />
                                <h5>Adobe Creative Suite</h5>
                            </div>
                        </Carousel>
                    </div>
                    </Col>
                </Row>
                <Row>
                    <Col>

                    </Col>
                </Row>
            </Container>
        </section>
    )
}
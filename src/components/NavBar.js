// import react-bootstrap components
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import react functions
import { useState, useEffect } from "react";

// import FontAwesome Social Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faHouse, faEnvelope } from '@fortawesome/free-solid-svg-icons'

const linkedIn = <FontAwesomeIcon icon={faLinkedin} inverse />
const gitHub = <FontAwesomeIcon icon={faGithub} inverse />
const mail = <FontAwesomeIcon icon={faEnvelope} inverse />

export const NavBar = () => {
    const[activeLink, setActiveLink] = useState('about'); // about is selected by default
    const[scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll); 
        return () => window.removeEventListener("scroll", onScroll); // remove event listener when component is removed from the DOM

    }, []);

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
        <Navbar class="bg-dark" expand="lg" className={scrolled ? "scrolled": ""}>
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                <span class="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#about" className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('about')}>About Me</Nav.Link>
                        <Nav.Link href="#portfolio" className={activeLink === 'portfolio' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('portfolio')}>Portfolio</Nav.Link>
                        <Nav.Link href="#contact" className={activeLink === 'contact' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('contact')}>Contact</Nav.Link>
                        <Nav.Link href="#resume" className={activeLink === 'resume' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('resume')}>Resume</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                    <span className="navbar-text">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/kurtjensen93/">{linkedIn}</a>
                            <a href="https://github.com/kurtmj93">{gitHub}</a>
                            <a href="mailto:kurtmj93@gmail.com">{mail}</a>
                        </div>
                    </span>
            </Container>
        </Navbar>
    )
}
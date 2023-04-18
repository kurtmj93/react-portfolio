// import Bootstrap components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { useState, useEffect } from "react";

import me from '../assets/img/me.jpg'

// import FontAwesome Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false); 
    const titlesToRotate = ["Marketing Director.", "Full Stack Developer.", "Digital Marketer.", "UI/UX Designer.", "Freelancer."];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(100);
    const period = 1000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)
        
        return() => { clearInterval(ticker) };
    }, [text])

    const tick = () => {
        let i = loopNum % titlesToRotate.length;
        let fullText = titlesToRotate[i];

        // checks State isDeleting, adds one letter or takes it away to the full length of the string
        let updatedText = isDeleting ? fullText.substring(0, text.length -1) : fullText.substring(0, text.length + 1);
        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta /1.4) // deleting speeds up each tick
        }

        // once the function reaches the end of the string, update State
        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(100);
        }
    }
    

    return (
        <section className="banner" id="about">
                <Container>
                    <Row className="align-items-center">
                        <Col xs={12} md={6} xl={7}>
                            <span className="tagline"><FontAwesomeIcon icon={faLocationDot} /> Richmond, VA</span>
                            <h1>{`Kurt Jensen,`} <span className="wrap">{text}</span></h1>
                            <p>I'm Kurt Jensen - a Marketing and Communications Director with 8+ years of experience in both agency and in-house environments, for non-profit organizations and for-profit businesses.</p>
                            <p>I have a wide breadth of expertise critical for developing and executing impactful marketing and communications strategy as well as managing teams from the creative to the technical.</p>
                            <p>I completed the University of Richmond Full Stack Coding Bootcamp to become a fully-qualified Front-End and Full Stack Developer as well as UI/UX Designer.</p>
                        </Col>
                        <Col xs={12} md={6} xl={5}>
                            <img src={me} /> 
                        </Col>
                    </Row>
                </Container>
        </section>
    ) // note: img animation speed is set in CSS, not in the JS above, which sets speed of typing animation.
    
};
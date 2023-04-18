// import Bootstrap components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const Portfolio = () => {
    const projects = [
        {
            title: "",
            desc: "",
            imgUrl: ""
        },
        {
            title: "",
            desc: "",
            imgUrl: ""
        },
        {
            title: "",
            desc: "",
            imgUrl: ""
        },
        {
            title: "",
            desc: "",
            imgUrl: ""
        },
        {
            title: "",
            desc: "",
            imgUrl: ""
        },
        {
            title: "",
            desc: "",
            imgUrl: ""
        },
    ];

    return (
        <section className="portfolio" id="portfolio">
            <Container>
                <Row>
                    <Col>
                    <h2>My Portfolio</h2>
                    <p>yada yada yada words words words</p>
                    </Col>
                </Row>
            </Container>
        </section>
    )
};
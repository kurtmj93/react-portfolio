import Col from 'react-bootstrap/Col';

export const ProjectCard = ({ title, desc, imgUrl, link, github })  => {
    return (
        <Col sm={6} md={4}>
            <div className="proj-img-box">
                <img src={imgUrl} alt={title} />
                <div className="proj-details">
                    <h4><a href={github}>{title}</a></h4>
                    <span>{desc}</span>
                    <br />
                    <a href={link}>App Link</a>
                    <br />
                    <a href={github}>GitHub Repo</a>
                </div>
            </div>
        </Col>
    )
};
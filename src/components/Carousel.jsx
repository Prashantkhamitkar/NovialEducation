import Carousel from "react-bootstrap/Carousel";
import { Col, Row } from "react-bootstrap";

function MyCarousel() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <Row>
          <Col sm={8} className="mx-auto ">
            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1587691592099-24045742c181?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNvbXB1dGVyJTIwdHJhaW5pbmd8ZW58MHx8MHx8fDA%3D"
              alt="First slide"
            />
          </Col>
        </Row>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Row>
          <Col sm={8} className="mx-auto">
            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1565598469107-2bd14ae7e7e4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbXB1dGVyJTIwdHJhaW5pbmd8ZW58MHx8MHx8fDA%3D"
              alt="Second slide"
            />
          </Col>
        </Row>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Row>
          <Col sm={8} className="mx-auto">
            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1563394867331-e687a36112fd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YWNhZGVteXxlbnwwfHwwfHx8MA%3D%3D"
              alt="Third slide"
            />
          </Col>
        </Row>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default MyCarousel;

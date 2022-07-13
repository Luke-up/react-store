import { Link } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import MenuItems from "./MenuItems.jsx";
function Navigation() {
  return (
    <Container fluid>
      <Row>
        <Col md={4}>
          <Link to="/">Home</Link>
        </Col>
        <Col md={4}>
          <p>Some text</p>
        </Col>
        <Col md={4}>
          <MenuItems />
        </Col>
      </Row>
    </Container>
  );
}

export default Navigation;

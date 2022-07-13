import { Link } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function MenuItems() {
  let pageType = JSON.parse(sessionStorage.getItem("pageType"));
  console.log(pageType);
  if (pageType === "home") {
    return (
      <Row>
        <Col sm={6} md={4}>
          <Link to="/Shop">Shop</Link>
        </Col>
        <Col sm={6} md={4}>
          <Link to="/Profile">Profile</Link>
        </Col>
      </Row>
    );
  }
}

export default MenuItems;

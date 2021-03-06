import { Link } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

//The function renders two buttons on the right of the navigation bar depending on the page type, so that buttons are not place on their own pages
function MenuItems() {
  let pageType = JSON.parse(sessionStorage.getItem("pageType"));
  if (pageType === "home") {
    return (
      <Row>
        <Col className="col-6">
          <Link className="navElement" to="/Shop">
            Shop
          </Link>
        </Col>
        <Col className="col-6 ">
          <Link className="navElement" to="/Profile">
            Profile
          </Link>
        </Col>
      </Row>
    );
  } else if (pageType === "shop") {
    return (
      <Row>
        <Col className="col-6">
          <Link className="navElement" to="/">
            Home
          </Link>
        </Col>
        <Col className="col-6">
          <Link to="/Profile" className="navElement">
            Profile
          </Link>
        </Col>
      </Row>
    );
  } else {
    return (
      <Row>
        <Col className="col-6">
          <Link to="/Shop" className="navElement">
            Shop
          </Link>
        </Col>
        <Col className="col-6">
          <Link className="navElement" to="/">
            Home
          </Link>
        </Col>
      </Row>
    );
  }
}

export default MenuItems;

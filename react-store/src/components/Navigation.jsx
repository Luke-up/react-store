import { Link } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import MenuItems from "./MenuItems.jsx";
function Navigation() {
  let pageType = JSON.parse(sessionStorage.getItem("pageType"));
  let pageTitle;
  if (pageType === "home") {
    pageTitle = "Home";
  } else if (pageType === "shop") {
    pageTitle = "Shop";
  } else {
    pageTitle = "Profile";
  }
  return (
    <Container fluid className="navigation pt-4 pb-2">
      <Row className="text-center ">
        <Col md={4}>
          <Link className="brand fs-4" to="/">
            Lace Me Up
          </Link>
        </Col>
        <Col md={4}>
          <p className="fs-4">{pageTitle}</p>
        </Col>
        <Col md={4}>
          <MenuItems className="my-auto" />
        </Col>
      </Row>
    </Container>
  );
}

export default Navigation;

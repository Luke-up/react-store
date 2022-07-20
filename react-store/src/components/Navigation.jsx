import { Link } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import MenuItems from "./MenuItems.jsx";

//The navigation component finds the type of the page via an item in session storage which will update according to the page and uses it to render the nessesary buttons for navigation
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

  //Component renders the navigation bar with heading and company name, also a space for the 'MenuItems' component which holds more 'Links'

  //Component makes use of 'Links' and the react-router the link here will direct to the home page and the navigation bar will also show the heading of the current page
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

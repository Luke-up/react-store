import Navigation from "../components/Navigation";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Data from "../data.json";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Btn from "react-bootstrap/Button";

function Shop() {
  sessionStorage.setItem("pageType", JSON.stringify("shop"));
  console.log(Data[0]);

  if (JSON.parse(sessionStorage.getItem("product")) === "false") {
    return (
      <div>
        <Navigation />
        <Container id="products">
          <Row>
            {Object.values(Data[0]).map(function (value) {
              console.log(value.name);
              return (
                <Col key={value.name} sm={6} md={4} lg={3}>
                  <Card>
                    <p>{value.name}</p>
                    <Btn
                      onClick={sessionStorage.setItem(
                        "product",
                        JSON.stringify(false)
                      )}
                    >
                      See more
                    </Btn>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
    );
  } else {
    let selected = JSON.parse(sessionStorage.getItem("product"));
    return (
      <div>
        <Container className="w-75">
          <Row>
            <Col sm={6}>Picture</Col>
            <Col sm={6}>
              <p>{Data[0].PuddleClap.description}</p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Shop;

import Navigation from "../components/Navigation";
import { Row, Container, Card, Col, Button, Image } from "react-bootstrap";
import Data from "../data.json";
import React from "react";

//Component renders two types of shop view, one holding all products in the store array, and another which is focussed on one product on the right and the rest on the left
function Shop() {
  //Page type is set so that the Navigation menu can display the correct buttons and heading
  sessionStorage.setItem("pageType", JSON.stringify("shop"));

  //Variable 'cart' is created or fetched from local storage
  //This state will hold the array of items selected from the store
  const [cart, setCart] = React.useState(() => {
    return JSON.parse(localStorage.getItem("shoppingCart"));
  });
  //This state will hold the selected product data for display on the right
  const [product, setProduct] = React.useState([0]);

  //This function is called by the showMore() button and sets the state of the selected product to the variable 'product'
  function showItem(selectedItem) {
    setProduct(selectedItem);
  }

  //this function will set the 'product' to zero, thereby cancelling the conditional render and returning the layout to normal
  function closeProductView() {
    setProduct(0);
  }

  //this function is called 'onChange' of the selected product's quantity input element
  //this function is only accessable if a product has been set to the State 'product'
  function setProductQuantity(productQuantity) {
    const updatedProduct = {
      ...product,
      quantity: productQuantity,
    };
    setProduct(updatedProduct);
  }

  //This function creates a new shopping cart array with the data from the previous array and adds the new product
  //The new cart is then set to localStorage
  function addToCart() {
    let newCart = [...cart].concat(product);
    setCart(newCart);
    setProduct(0);
    localStorage.setItem("shoppingCart", JSON.stringify(newCart));
  }

  //Conditional render if there is a product in State 'product'
  if (product == 0) {
    return (
      <div>
        <Navigation />
        <Container id="products">
          <Row>
            {Object.values(Data[0]).map(function (item) {
              return (
                <Col key={item.name} sm={6} md={4} lg={3}>
                  <Card className="my-2 text-center">
                    <Image src={item.image} />
                    <p>{item.name}</p>
                    <button
                      className="btn p-0 btn-secondary"
                      onClick={() => showItem(item)}
                    >
                      See more
                    </button>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
    );
  }
  // the else condition render a split view with the chosen product rendered with full details on the right and the rest of the object in the store array iteratted through with a .map() function essentially exactly the same as the 'if' render
  else {
    return (
      <div>
        <Navigation />
        <Container className="my-3">
          <Row>
            <Col sm={{ span: 6, order: 2 }}>
              <Card className="my-2">
                <div className="card-header form-group">
                  <Button
                    onClick={() => closeProductView()}
                    className="float-end btn-light"
                  >
                    Close
                  </Button>
                </div>
                <Row>
                  <Col md={5}>
                    <Image className="img-thumbnail" src={product.image} />
                  </Col>
                  <Col md={7}>
                    <p className="my-2 mx-1">{product.name}</p>
                    <p className="my-2 mx-1">{product.description}</p>
                    <p className="my-2 mx-1">R{product.price}</p>
                    <form className="input-group my-2 mx-1">
                      <input
                        onChange={(e) => setProductQuantity(e.target.value)}
                        type="number"
                        min="1"
                        max="100"
                      />
                      <button
                        onClick={() => addToCart()}
                        className="btn btn-success"
                        type="submit"
                      >
                        Add to Cart
                      </button>
                    </form>
                  </Col>
                </Row>
              </Card>
            </Col>
            <Col sm={{ span: 6, order: 1 }}>
              <Row>
                {Object.values(Data[0]).map(function (item) {
                  if (item.itemID !== product.itemID) {
                    return (
                      <Col key={item.name} sm={6} md={4} lg={3}>
                        <Card className="my-2 text-center">
                          <Image src={item.image} className="img-thumbnail" />
                          <p>{item.name}</p>
                          <button
                            className="btn p-0 btn-secondary"
                            onClick={() => showItem(item)}
                          >
                            See more
                          </button>
                        </Card>
                      </Col>
                    );
                  } else {
                    return;
                  }
                })}
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Shop;

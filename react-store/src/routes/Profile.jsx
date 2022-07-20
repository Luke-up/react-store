import Navigation from "../components/Navigation";
import React from "react";
import { Image, Col, Row, Container, Card, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

//Component renders the user data gathered from the local storage if applicable as well as a shopping cart containing the items selected on the 'shop' page
function Profile() {
  //page type is set, which will inform the navigation bar which heading and button elements to render
  sessionStorage.setItem("pageType", JSON.stringify("profile"));
  //A variable is created which will fetch the shopping cart data from localStorage
  const [cart, setCart] = React.useState(() => {
    return JSON.parse(localStorage.getItem("shoppingCart"));
  });
  //A variable for the details of the user is seet which will fetch pre-existing data from localStorage if applicable and also hold any changes done in the 'ProfileEdit' page. It will also supply default values if none exist
  const [details, setDetails] = React.useState(() => {
    if (JSON.parse(localStorage.getItem("userDetails"))) {
      return JSON.parse(localStorage.getItem("userDetails"));
    } else {
      return {
        name: "User",
        country: "South Africa",
        mood: "Okay",
        picture: "rabbit",
      };
    }
  });
  //Function will create a new cart variable with values from the old cart and filter out the chosen product, then set the State 'cart' to the newly created object. Also saving the new shopping cart array to localStorage
  function removeItem(id) {
    let newCart = [...cart].filter((product) => product.itemID !== id);
    setCart(newCart);
    localStorage.setItem("shoppingCart", JSON.stringify(newCart));
  }
  //Component will render the user details and a table with all the items in the shopping cart below this
  return (
    <div>
      <Navigation />
      <Container className="w-50">
        <Row>
          <Col>
            <Image
              className="img-thumbnail my-3"
              src={"./images/" + details.picture + ".jpg"}
            />
            <br />
          </Col>
          <Col>
            <Card className="my-3">
              <div className="card-header">
                <p>
                  Your details
                  <span>
                    <Link
                      className="btn btn-primary float-end"
                      to="/ProfileEdit"
                    >
                      Edit details
                    </Link>
                  </span>
                </p>
              </div>
              <div className="p-3">
                <p>Name: {details.name}</p>
                <p>Country : {details.country}</p>
                <p>Mood : {details.mood}</p>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
      <div className="text-center w-100 border border-light m-3">
        <div className="card-header mx-auto">
          <p>{details.name}'s shopping cart</p>
        </div>
        <div>
          <Table>
            <thead>
              <tr>
                <td>Name</td>
                <td>Quantity</td>
                <td>Price per product</td>
                <td>Total Price</td>
                <td>Delete</td>
              </tr>
            </thead>

            {Object.values(cart).map(function (lace) {
              return (
                <tbody key={lace.itemID}>
                  <tr>
                    <td>{lace.name}</td>
                    <td>
                      <p>{lace.quantity}</p>
                    </td>
                    <td>R{lace.price}</td>
                    <td>R{Number(lace.price) * Number(lace.quantity)}</td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => removeItem(lace.itemID)}
                      >
                        Remove item from cart
                      </button>
                    </td>
                  </tr>
                </tbody>
              );
            })}
          </Table>
        </div>
      </div>
    </div>
  );
}

export default Profile;

import Navigation from "../components/Navigation";
import React from "react";
import { Image, Col, Row, Container, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

//Component renders a form which will save inputs to the (user) details state and the userDetails item in localStorage
function ProfileEdit() {
  //Item is set to sessionStorage which will inform the Navigaion element which page to render a heading and appropriate button elements for
  sessionStorage.setItem("pageType", JSON.stringify("profile"));

  //The variable will hold the details which the user inputs
  const [details, setDetails] = React.useState({
    name: "",
    country: "",
    mood: "",
    picture: "",
  });

  //The function will update the name property of the details State
  function updateName(name) {
    const updated = {
      ...details,
      name: name,
    };
    setDetails(updated);
  }

  //The function will update the country property of the details State
  function updateCountry(country) {
    const updated = {
      ...details,
      country: country,
    };
    setDetails(updated);
  }

  //The function will update the mood property of the details State
  function updateMood(mood) {
    const updated = {
      ...details,
      mood: mood,
    };
    setDetails(updated);
  }

  //The function will update the picture property of the details State
  function updatePicture(picture) {
    const updated = {
      ...details,
      picture: picture,
    };
    setDetails(updated);
  }

  //This function will set the new details to localStorage
  function confirmDetails() {
    localStorage.setItem("userDetails", JSON.stringify(details));
  }

  //Component renders a form, the elements of which will change the user details
  //Component also contains a 'link' element which changes the page and also saves the changes on click
  return (
    <div>
      <Navigation />
      <Container className="w-50">
        <Card className="my-3">
          <div className="card-header">
            <p>
              Your details
              <span>
                <Link
                  onClick={confirmDetails()}
                  className="btn btn-success float-end"
                  to="/Profile"
                >
                  Done
                </Link>
              </span>
            </p>
          </div>
          <form className="p-3">
            <div className="p-3 form-group">
              <label htmlFor="inputName">Name: </label>
              <input
                className="w-75"
                id="inputName"
                type="text"
                onChange={(e) => updateName(e.target.value)}
              />
            </div>
            <div className="p-3 form-group">
              <label htmlFor="inputCountry">Country:</label>
              <input
                className="w-75"
                id="inputCountry"
                type="text"
                onChange={(e) => updateCountry(e.target.value)}
              />
            </div>
            <div className="p-3 form-group">
              <label htmlFor="inputMood">Mood:</label>
              <input
                className="w-75"
                id="inputMood"
                type="text"
                onChange={(e) => updateMood(e.target.value)}
              />
            </div>
            <div className="p-3 form-group">
              <label htmlFor="chooseImage">Profile Image:</label>
              <select
                onChange={(e) => updatePicture(e.target.value)}
                id="chooseImage"
                className="w-75"
              >
                <option>--Please Choose--</option>
                <option value="rabbit">Rabbit</option>
                <option value="dog">Dog</option>
                <option value="elephant">Elephant</option>
              </select>
            </div>
          </form>
        </Card>
      </Container>
    </div>
  );
}

export default ProfileEdit;

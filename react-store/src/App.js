import "./App.css";
import { Link } from "react-router-dom";
import Navigation from "./components/Navigation";
import React from "react";
import { Container } from "react-bootstrap";

function App() {
  //function sets an item to session storage that will be used to inform the MenuItems component what to render so that menu buttons aren't rendered unnecessarily
  sessionStorage.setItem("pageType", JSON.stringify("home"));
  //a variable is created to fetch any pre-existing details of the user from former site visits
  const [details, setDetails] = React.useState(() => {
    if (JSON.parse(localStorage.getItem("userDetails"))) {
      return JSON.parse(localStorage.getItem("userDetails"));
    } else {
      return {
        name: "User",
        country: "South Africa",
        mood: "Mad",
        picture: "rabbit",
      };
    }
  });
  // component renders a navigation bar and a container with basic landing page text and a few uses of the variable created to hold data on the user
  return (
    <div className="App">
      <Navigation />
      <Container className="text-center p-3 my-5 w-50 bg-light border">
        <p>Hi there {details.name}</p>
        <p>Welcome to the store, we know you're {details.mood} about laces!</p>
        <p>
          An often overlooked accessory in todays market of quirky socks and
          sneaker culture, we think that laces need their time to shine. Thats
          why we created <b>Lace Me Up</b>. A fun afterschool project that began
          in our basement. It's still in our basement actually, because it's
          quite hard to sell shoelaces on their own.
          <br />
          <br />
          We've invested incredible amounts of money into our top research team
          so that they could go out and find the very best suppliers and the
          most cutting edge designs. They check in every so often from their
          searches around the globe, they have yet to find suppliers or designs,
          but we are confident in our top researchers!
          <br />
          <br />
          Our prices are high because we have huge overheads and we are heavily
          in debt, your puchase might just help us to stave off starvation and
          eviction! Yay you!
        </p>
      </Container>
      <p className="text-center mt-5">
        Pictures sourced from <a href="https://www.pexels.com/">Pexels</a>, a
        royalty free image sharing site.
      </p>
    </div>
  );
}

export default App;

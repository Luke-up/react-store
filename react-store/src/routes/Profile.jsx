import Navigation from "../components/Navigation";

function Profile() {
  sessionStorage.setItem("pageType", JSON.stringify("profile"));
  return <Navigation />;
}

export default Profile;

function Profile() {
  sessionStorage.setItem("pageType", JSON.stringify("profile"));
  return <h1>Profile page</h1>;
}

export default Profile;

function Shop() {
  sessionStorage.setItem("pageType", JSON.stringify("shop"));
  return <h1>Shop page</h1>;
}

export default Shop;

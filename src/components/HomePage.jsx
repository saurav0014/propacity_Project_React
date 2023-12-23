import frontPage from "../images/FrontPage.png";

const HomePage = () => {
  return (
    <div className="homePage">
      <div className="frontPage">
        <img src={frontPage} alt="image" />
        <h1>Welcome to Star Wars</h1>
        <h1>Dashboard</h1>
        <p>
          Star Wars is an American epic space opera multimedia franchise created
          by George Lucas, which
        </p>
        <p>
          began with the eponymous 1977 film and quickly became a worldwide pop
          culture phenomenon.
        </p>
      </div>
    </div>
  );
};

export default HomePage;

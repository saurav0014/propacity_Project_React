import starWarsLogo from "../images/Star_Wars.svg";
import searchLogo from "../images/Search.svg";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src={starWarsLogo} alt="StarWarsLogo" />
      </div>
      <div className="searchBar">
        <img className="searchIcon" src={searchLogo} alt="searchLogo" />
        <input className="searchInput" type="text" placeholder="Search" />
      </div>
    </div>
  );
};

export default Header;

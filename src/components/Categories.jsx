import Folder from "../images/Folder.svg";
import Arrow from "../images/Arrow.svg";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <section className="navBar">
      <Link to="/Films" className="selectCategory">
        <div className="category">
          <div>
            <img src={Folder} alt="FolderLogo" className="folderLogo" /> Films
          </div>
          <div>
            <img src={Arrow} alt="rightArrow" className="rightArrow" />
          </div>
        </div>
      </Link>

      <Link to="/People" className="selectCategory">
        <div className="category">
          <div>
            <img src={Folder} alt="FolderLogo" className="folderLogo" /> People
          </div>
          <div>
            <img src={Arrow} alt="rightArrow" className="rightArrow" />
          </div>
        </div>
      </Link>

      <Link to="/Planets" className="selectCategory">
        <div className="category">
          <div>
            <img src={Folder} alt="FolderLogo" className="folderLogo" /> Planets
          </div>
          <div>
            <img src={Arrow} alt="rightArrow" className="rightArrow" />
          </div>
        </div>
      </Link>

      <Link to="/Species" className="selectCategory">
        <div className="category">
          <div>
            <img src={Folder} alt="FolderLogo" className="folderLogo" /> Species
          </div>
          <div>
            <img src={Arrow} alt="rightArrow" className="rightArrow" />
          </div>
        </div>
      </Link>

      <Link to="/Starships" className="selectCategory">
        <div className="category">
          <div>
            <img src={Folder} alt="FolderLogo" className="folderLogo" />{" "}
            Starships
          </div>
          <div>
            <img src={Arrow} alt="rightArrow" className="rightArrow" />
          </div>
        </div>
      </Link>

      <Link to="/Vehicles" className="selectCategory">
        <div className="category">
          <div>
            <img src={Folder} alt="FolderLogo" className="folderLogo" />{" "}
            Vehicles
          </div>
          <div>
            <img src={Arrow} alt="rightArrow" className="rightArrow" />
          </div>
        </div>
      </Link>
    </section>
  );
};

export default Categories;

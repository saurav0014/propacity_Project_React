import gridView from "../images/ViewGrid.svg";
import listView from "../images/ViewList.svg";
import menu from "../images/menu.svg";
import filmReel from "../images/FilmReel.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
import DropDown from "./DropDown";

const Films = ({ data }) => {
  const [view, setView] = useState(true);
  const [showDropDown, setShowDropDown] = useState(
    Array(data.length).fill(false)
  );

  const handleMenuClick = (index) => {
    const updatedArray = [...showDropDown];
    updatedArray[index] = !updatedArray[index];
    setShowDropDown(updatedArray);
  };

  return (
    <div className="categoryContainer">
      <div className="top">
        <h2>Films</h2>
        <div style={{ cursor: "pointer" }} className="toggle">
          <div className="grid" onClick={() => setView(true)}>
            <div>
              <img src={gridView} alt="gridLogo" />
            </div>
            <div>Grid</div>
          </div>
          <div className="list" onClick={() => setView(false)}>
            <img src={listView} alt="listLogo" />
          </div>
        </div>
      </div>
      {view ? (
        <div className="cardBoxes">
          {data.map((film, index) => (
            <div key={index}>
              <Link
                to={`/filmDetails/${index}`}
                key={index}
                style={{ textDecoration: "none" }}
              >
                <div className="image">
                  <img
                    src={`https://picsum.photos/354/160?random=${index}`}
                    alt="image"
                    onMouseOver={(e) =>
                      (e.currentTarget.style.transform = "scale(1.1)")
                    }
                    onMouseOut={(e) =>
                      (e.currentTarget.style.transform = "scale(1)")
                    }
                  />
                </div>
              </Link>
              <div className="info">
                <div className="title">
                  <div>
                    <img src={filmReel} alt="filmReelLogo" />
                  </div>
                  <div className="Title">{film.title}</div>
                </div>
                <div>
                  <img
                    src={menu}
                    alt="menuLogo"
                    onClick={() => handleMenuClick(index)}
                  />
                  {showDropDown[index] && <DropDown />}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <table
          style={{
            color: "white",
            borderCollapse: "collapse",
            width: "100%",
            border: "1px solid white",
          }}
        >
          <thead>
            <tr>
              <th style={{ padding: "10px", border: "1px solid white" }}>
                Image
              </th>
              <th style={{ padding: "10px", border: "1px solid white" }}>
                Title
              </th>
              <th style={{ padding: "10px", border: "1px solid white" }}>
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((film, index) => (
              <tr key={index}>
                <td
                  style={{
                    padding: "10px",
                    border: "1px solid white",
                    textAlign: "center",
                  }}
                >
                  <img
                    src={`https://picsum.photos/354/160?random=${index}`}
                    alt="image"
                    style={{ borderRadius: "8px", backgroundColor: "white" }}
                  />
                </td>
                <td
                  style={{
                    padding: "10px",
                    border: "1px solid white",
                    textAlign: "center",
                  }}
                >
                  {film.title}
                </td>
                <td
                  style={{
                    padding: "10px",
                    border: "1px solid white",
                    textAlign: "center",
                  }}
                >
                  <Link
                    to={`/filmDetails/${index}`}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <span
                      style={{
                        fontSize: "24px",
                        fontWeight: "bolder",
                        color: "slategrey",
                      }}
                    >
                      →
                    </span>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Films;

import gridView from "../images/ViewGrid.svg";
import listView from "../images/ViewList.svg";
import menu from "../images/menu.svg";
import filmReel from "../images/FilmReel.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
import DropDown from "./DropDown";

const Peoples = ({ data }) => {
  const [view, setView] = useState(false);
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
        <h2>Peoples</h2>
        <div style={{ cursor: "pointer" }} className="toggle">
          <div className="list-1" onClick={() => setView(false)}>
            <div>
              <img src={listView} alt="listLogo" />
            </div>
            <div>List</div>
          </div>
          <div className="grid-1" onClick={() => setView(true)}>
            <img src={gridView} alt="listLogo" />
          </div>
        </div>
      </div>
      {view ? (
        <div className="cardBoxes">
          {data.map((people, index) => (
            <div key={index}>
              <Link
                to={`/peopleDetails/${index}`}
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
                  <div className="Title">{people.name}</div>
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
                Name
              </th>
              <th style={{ padding: "10px", border: "1px solid white" }}>
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((people, index) => (
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
                  {people.name}
                </td>
                <td
                  style={{
                    padding: "10px",
                    border: "1px solid white",
                    textAlign: "center",
                  }}
                >
                  <Link
                    to={`/peopleDetails/${index}`}
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

export default Peoples;

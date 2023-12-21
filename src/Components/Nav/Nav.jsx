import { PlusCircleFill as Plus } from "react-bootstrap-icons";
import "./Nav.css";
import { useState } from "react";

function Nav({ handleCreate }) {
  const [colorsDropDown, setColorsDropDown] = useState(false);

  return (
    <div className="navBar">
      <div className="navBarInner">
        <span>
          <Plus
            className="addBtn"
            onClick={() => setColorsDropDown(!colorsDropDown)}
          />
        </span>
        <span
          className="categories"
          style={{
            visibility: colorsDropDown ? "visible" : "hidden",
            opacity: colorsDropDown ? "1" : "0",
            transition: "0.3s ease-in-out",
            transform: colorsDropDown
              ? "translate(0px, 12px)"
              : "translate(0px, 0px)",
            gridGap: colorsDropDown ? "1.5rem" : "1.2rem",
          }}
        >
          <div className="c1" onClick={() => handleCreate("#FEC971")}></div>
          <div className="c2" onClick={() => handleCreate("#FE9871")}></div>
          <div className="c3" onClick={() => handleCreate("#B592FD")}></div>
        </span>
      </div>
    </div>
  );
}

export default Nav;

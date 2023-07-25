import React, { useReducer } from "react";
import { Logo } from "./Logo";
import { HashLink } from "react-router-hash-link";
import { IconContext } from "react-icons";
import { CgMenuRight, CgClose } from "react-icons/cg";
import { MenuReducer } from "../../reducers/Reducers";

export const Nav = () => {
  const [state, dispatch] = useReducer(MenuReducer, { display: false });
  const toggleMenu = (ev) => {
    dispatch({ type: "menuDisplay", payload: { display: !state.display } });
  };

  return (
    <IconContext.Provider value={{ color: "#00012A", size: "20px" }}>
      <nav>
        <Logo props={{ textColor: "#25395a", iconColor: "#4f4ad7" }} />
        <span onClick={toggleMenu}>
          {state.display ? <CgClose /> : <CgMenuRight />}
        </span>
        <ul className={state.display ? "toggle-menu " : ""}>
          <li>
            <HashLink to="/#services">services</HashLink>
          </li>
          <li>
            <HashLink to="/#pricing">pricing</HashLink>
          </li>
          <li>
            <HashLink to="/#about-us">about us</HashLink>
          </li>
          <li>
            <HashLink to="/#community">community</HashLink>
          </li>
          <li>
            <HashLink to="/#contact">contact</HashLink>
          </li>
        </ul>
        <HashLink className="btn primary-btn" to="#contact">
          contact
        </HashLink>
      </nav>
    </IconContext.Provider>
  );
};

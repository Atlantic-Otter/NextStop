import React from "react";
import LoginMenu from "./LoginMenu.js";
import "../App.css";
import UserContext from "../UserContext.js";
import UserIcon from "../User/UserIcon.js";

// todo: investigate react.useCallback

const Header = (props) => {
  const { user, setUser } = React.useContext(UserContext);

  var [modalView, setModalView] = React.useState(false);
  const toggleModal = (event) => {
    setModalView(!modalView);
  };

  const logoutUser = (event) => {
    setUser(null);
  };

  return (
    <div id="header">
      <UserIcon />
      {user ? (
        <a className="login-logout-button" onClick={logoutUser}>
          <span>Logout</span>
        </a>
      ) : (
        <a className="login-logout-button" onClick={toggleModal}>
          <span>Login</span>
        </a>
      )}
      {modalView ? <LoginMenu toggleModal={toggleModal} /> : <></>}
    </div>
  );
};

export default Header;
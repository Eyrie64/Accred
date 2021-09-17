import "./Header.css";
import Popup from "./Popup";
import AppsIcon from "@material-ui/icons/Apps";
import { Link } from "react-router-dom";
import { useState, useRef } from "react";
import PersonIcon from "@material-ui/icons/Person";
import DropdownItem from "./DropdownMenuItem";
import { useDetectOutsideClick } from "./useDetectOutsideClick";
import Badge from "@material-ui/core/Badge";
import MailIcon from "@material-ui/icons/Mail";
import Avatar from "@material-ui/core/Avatar";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import HomeIcon from "@material-ui/icons/Home";
import { requestAuthPost, signOut } from "./hooks";
import { useAlert } from "react-alert";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPw, setCurrentPw] = useState("");
  const [newPw, setNewPw] = useState("");
  const [confirmPw, setConfirmPw] = useState("");
  const alert = useAlert();

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const handlePasswordChange = (e) => {
    e.preventDefault();
    if (newPw === confirmPw) {
      requestAuthPost(`users/user`, {
        email: localStorage.getItem("email"),
        currpass: currentPw,
        newpass: newPw,
      }).then((res) => {
        console.log(res);
        alert.success("PASSWORD SUCCESSFULLY UPDATED.");
      });

      return;
    }
    alert.error("NEW PASSWORD DOES NOT MATCH CONFIRMATION.");
  };

  const getInput = (setter) => (e) => setter(e.target.value);

  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const onClick = () => setIsActive(!isActive);

  const dropdown = useRef(null);
  const [isAct, setIsAct] = useDetectOutsideClick(dropdown, false);
  const onPress = () => setIsAct(!isAct);

  return (
    <nav className="header">
      <AppsIcon className="apps" onClick={onClick} fontSize="Large" />
      <Link to="/" className="header__logo">
        <div>
          <span>
            <b>ACCRED</b>
          </span>
          <span>ITATION</span>
        </div>
      </Link>

      <div className="right">
        <Link to="/notif" style={{ textDecoration: "none", color: "#285c79" }}>
          <Badge badgeContent={0} color="primary">
            <MailIcon className="mail" fontSize="large" />
          </Badge>
        </Link>
        <Avatar fontSize="large" className="account" onClick={onPress}>
          OP
        </Avatar>
      </div>
      {isActive && (
        <div ref={dropdownRef} className="dropdown">
          <Link to="/" style={{ textDecoration: "none" }}>
            <DropdownItem
              itemIcon={
                <HomeIcon
                  onClick={onClick}
                  className="assign"
                  fontSize="large"
                />
              }
              items="Dashboard"
            />
          </Link>

          <Link to="/users" style={{ textDecoration: "none" }}>
            <DropdownItem
              itemIcon={
                <PersonIcon
                  onClick={onClick}
                  className="person"
                  fontSize="large"
                />
              }
              items="Users"
            />
          </Link>

          <Link to="/programmes" style={{ textDecoration: "none" }}>
            <DropdownItem
              itemIcon={
                <LibraryBooksIcon
                  onClick={onClick}
                  className="group"
                  fontSize="large"
                />
              }
              items="Programmes"
            />
          </Link>
        </div>
      )}
      {isAct && (
        <div ref={dropdown} className="dropprofile">
          <div className="profile">
            <DropdownItem
              profIcon={<Avatar fontSize="large">OP</Avatar>}
              User="ADMIN"
            />
            <button onClick={togglePopup}>MANAGE ACCOUNT</button>
            <hr />
            <button className="signout" onClick={signOut}>
              SIGN OUT
            </button>
          </div>

          {isOpen && (
            <Popup
              content={
                <div className="content">
                  <form>
                    Change Password
                    <div className="field__input">
                      <input
                        type="password"
                        placeholder="Current Password"
                        onChange={getInput(setCurrentPw)}
                      />
                      <input
                        type="password"
                        placeholder="New Password"
                        onChange={getInput(setNewPw)}
                      />
                      <input
                        type="password"
                        placeholder="Confirm Password"
                        onChange={getInput(setConfirmPw)}
                      />
                    </div>
                    <button onClick={handlePasswordChange}>UPDATE</button>
                  </form>
                </div>
              }
              handleClose={togglePopup}
            />
          )}
        </div>
      )}
    </nav>
  );
};

export default Header;

import "./HeaderSidebar.css";
import Popup from "./Popup";
import AppsIcon from "@material-ui/icons/Apps";
import { Link } from "react-router-dom";
import { useRef,useState } from "react";
import DropdownItem from "./DropdownMenuItem";
import { useDetectOutsideClick } from "./useDetectOutsideClick";
import Badge from '@material-ui/core/Badge';
import MailIcon from '@material-ui/icons/Mail';
import Avatar from '@material-ui/core/Avatar';
import {Sidebar} from './Sidebar';
import SubMenu from './SubMenu';
import styled from 'styled-components';
import { signOut } from "./hooks";


const SidebarNav = styled.nav`
background: #fff;
width: 250px;
height: 90vh;
display: flex;
justify-content: center;
position: fixed;
top: 4.6em;
left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
transition: 350ms;
z-index: 10;
overflow-y: scroll;
box-shadow: 0px 4px 4px rgba(25, 27, 182, 0.25);
`;

const SidebarWrap = styled.div`
width: 100%;
`;



const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [sidebar, setSidebar] = useDetectOutsideClick(dropdownRef, false);
  const onClick = () => setSidebar(!sidebar);

  const togglePopup = () =>{
    setIsOpen(!isOpen);
  }

  const dropdown = useRef(null);
  const [isAct, setIsAct] = useDetectOutsideClick(dropdown, false);
  const onPress = () => setIsAct(!isAct);


  return (
      <>
    <nav className="header">
      <AppsIcon className="apps"  
      onClick={onClick}
        fontSize="Large" />
      <Link to="/dashboard" className="header__logo">
        <div>
          <span>
            <b>ACCRED</b>
          </span>
          <span>ITATION</span>
        </div>
      </Link>

      <div className="right">
        <Link to ="/notifications" style = {{textDecoration: "none", color: "#285c79"}}>
      <Badge badgeContent={0} color="primary">
        <MailIcon className="mail" fontSize="large"/>
      </Badge>
      </Link>
      <Avatar 
        fontSize="large"
        className="account"
        onClick={onPress}
      >OP</Avatar>
      </div>
      
      {isAct && (
        <div ref={dropdown} className="dropprofile">
          <div className="profile">
            <DropdownItem
              profIcon={<Avatar fontSize="large">OP</Avatar>}
              User="ADMIN"
            />
            <button 
            onClick = {togglePopup}
            >MANAGE ACCOUNT</button>
            <hr />
            <button className="signout" onClick = {signOut}>SIGN OUT</button>
          </div>

          {isOpen && (
            <Popup
              content={
                <div className="content">
                  <form>
                    --UPDATE--
                    <div className="field__input">
                      <input type="text" placeholder="Username" />
                      <input type="password" placeholder="Password" />
                      <input type="text" placeholder="Election Title" />
                    </div>
                    <button>UPDATE</button>
                  </form>
                </div>
              }
              handleClose={togglePopup}
            />
          )}
        </div>
      )}


        <SidebarNav ref={dropdownRef} sidebar={sidebar}>
          <SidebarWrap>
            {Sidebar.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
          </SidebarWrap>
        </SidebarNav>
    </nav>
    </>
  );
};

export default Header;

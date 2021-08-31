import "./DropMenuItem.css";

function DropdownItem({ items, itemIcon, profIcon, User, onClick }) {
  return (
    <div className="menu-item">
      <div className="profIcon">
        <div>{profIcon}</div>
        <br/>
        <div>{User}</div>
      </div>
      <div className="item__large">
        <div>{itemIcon}</div>
        <div>{onClick}</div>
        <div className="items">{items}</div>
      </div>
    </div>
  );
}

export default DropdownItem;

import * as React from "react";
import { useState } from "react";
import "./Users.css";
import SearchIcon from "@material-ui/icons/Search";
import Popup from "./Popup";
//import BootstrapTable from "react-bootstrap-table-next";
//import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import DataTable from "react-data-table-component";
import ArrowDownward from '@material-ui/icons/ArrowDownward';
// import Checkbox from '@mataerial-ui/core/Checkbox';

export default function Users() {
  const [isOpen, setIsOpen] = useState(false);
  const[filterText, setFilterText] = useState('');


  const sortIcon = <ArrowDownward/>;

  const columns = [{
    name: 'Id',
    selector: 'id',
    sortable: true,
    
  }, {
    name: 'User',
    selector: 'name',
    sortable: true,
  }, {
    name: 'Email',
    selector: 'price',
    sortable: true,
  }, {
    name: 'College',
    selector: 'price',
    sortable: true,
  },{
    name: 'School',
    selector: 'price',
    sortable: true,
  },{
    name: 'Department',
    selector: 'price',
    sortable: true,
  }
];

  const data = [
    { id: 1, name: 'George', price: 'Monkey' },
    { id: 2, name: 'Jeffrey', price: 'Giraffe' },
    { id: 3, name: 'Alice', price: 'Giraffe' },
    { id: 4, name: 'Alice', price: 'Tiger' }
  ]
    const filteredItems = data.filter(item =>item.name && item.name.toLowerCase().includes(filterText.toLowerCase()),);
  
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="users">
      <div className="dress_up">
        <div className="sub__nav">
          <div className="user__search">
            <input
              type="text"
              placeholder="Search . . ."
              className="user__searchInput"
              onChange = {e => setFilterText(e.target.value)}
            
            />
            <SearchIcon className="user__searchIcon" />
          </div>
          <div className="user__btn">
            <button type="button" className="btn" onClick={togglePopup}>
              ADD
            </button>

            {isOpen && (
              <Popup
                content={
                  <div className="content">
                    <form>
                      <div>
                      <select name="positions" id="positions">
                          <option value="President">
                            --User--
                          </option>
                        </select>
                        <select name="positions" id="positions">
                          <option value="President">
                            --College--
                          </option>
                        </select>
                        <select name="positions" id="positions">
                          <option value="President">
                            --School--
                          </option>
                        </select>
                        <select name="positions" id="positions">
                          <option value="President">
                            --Department--
                          </option>
                        </select>
                        <input type ="email" placeholder="Email"></input>
                      </div>
                      <button>ADD USER</button>
                    </form>
                  </div>
                }
                handleClose={togglePopup}
              />
            )}

            <button className="btn" style={{ marginLeft: 5 }}>
              DELETE
            </button>
          </div>
        </div>
        <div className="usertable" style={{ height: 400, width: "50%" }}>
                <DataTable
                title ="Test"
                columns = {columns}
                data ={filteredItems}
                selectableRows
                pagination
                striped
                highlightOnHover ="True"
                sortIcon = {sortIcon}
                />
                
        </div>
      </div>
    </div>
  );
}

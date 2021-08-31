import * as React from "react";
import { useState } from "react";
import "./Programmes.css";
import SearchIcon from "@material-ui/icons/Search";
import DataTable from "react-data-table-component";
import ArrowDownward from '@material-ui/icons/ArrowDownward';

export default function Programmes() {
  const[filterText, setFilterText] = useState('');


  const sortIcon = <ArrowDownward/>;

  const columns = [{
    name: 'Id',
    selector: 'id',
    sortable: true,
    
  }, {
    name: 'College',
    selector: 'name',
    sortable: true,
  }, {
    name: 'School',
    selector: 'price',
    sortable: true,
  }, {
    name: 'Programme Type',
    selector: 'price',
    sortable: true,
  }, {
    name: 'Programme',
    selector: 'price',
    sortable: true,
  }, {
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
  
  return (
    <div className="programmes">
      <div className="up">
        <div className="search__nav">
          <div className="programme__search">
            <input
              type="text"
              placeholder="Search . . ."
              className="programme__searchInput"
              onChange = {e => setFilterText(e.target.value)}
            />
            <SearchIcon className="programme__searchIcon" />
          </div>
        </div>
        <div className="table" style={{ height: 400, width: "50%" }}>
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

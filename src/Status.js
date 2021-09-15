import { useState, useEffect } from "react";
import "./Status.css";
import SearchIcon from "@material-ui/icons/Search";
import DataTable from "react-data-table-component";
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import {requestAuthGet, requestAuthPost} from "./hooks";


const Status = () => {

    const[filterText, setFilterText] = useState('');
    const [programmes, setProgrammes] = useState([]);

    useEffect(async () => {
      const { data } = await requestAuthGet('programmes')
      console.log(data)
      setProgrammes(data)
    }, [])

  const sortIcon = <ArrowDownward/>;

  const columns = [ {
    name: 'Programme Type',
    selector: 'type',
    sortable: true,
  }, {
    name: 'Programme Name',
    selector: 'name',
    sortable: true,
  }, {
    name: 'School Submit',
    selector: 'price',
    sortable: true,
  },{
    name: 'School Approval',
    selector: 'price',
    sortable: true,
  }, {
    name: 'College Submit',
    selector: 'price',
    sortable: true,
  },{
    name: 'College Approval',
    selector: 'price',
    sortable: true,
  }, {
    name: 'QAB Submit',
    selector: 'price',
    sortable: true,
  },{
    name: 'QAB Approval',
    selector: 'price',
    sortable: true,
  }, {
    name: 'Academic Board Submit',
    selector: 'price',
    sortable: true,
  },{
    name: 'Academic Board Approval',
    selector: 'price',
    sortable: true,
  },{
    name: 'Status',
    selector: 'status',
    sortable: true,
  }, {
    name: 'Date Approved',
    selector: 'price',
    sortable: true,
  },
];

const data = programmes.map(prog => {
  return ({
    name: prog.name,
    type: prog.type,
    
  })
})
    const filteredItems = data.filter(item =>item.name && item.name.toLowerCase().includes(filterText.toLowerCase()),);
  
  return (
    <div className="programmes">
      
        <div 
        className="search__nav"
        >
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
                title ="New Programme Accreditation Status (Internal Process)"
                columns = {columns}
                data ={filteredItems}
                // selectableRows
                pagination 
                striped
                highlightOnHover ="True"
                sortIcon = {sortIcon}
                />
                
        </div>
      </div>
    
  );
}
 
export default Status;
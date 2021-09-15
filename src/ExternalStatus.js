import { useState, useEffect } from "react";
import "./Status.css";
import SearchIcon from "@material-ui/icons/Search";
import DataTable from "react-data-table-component";
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import { requestAuthGet, requestAuthPost } from "./hooks";


const ExternalStatus = () => {
    const[filterText, setFilterText] = useState('');
    const [programmes, setProgrammes] = useState([]);

    const sortIcon = <ArrowDownward/>;

    useEffect(async () => {
      const { data } = await requestAuthGet('programmes')
      console.log(data)
      setProgrammes(data)
    }, [])
  
    const columns = [ {
      name: 'Programme Type',
      selector: 'type',
      sortable: true,
    }, {
      name: 'Programme',
      selector: 'name',
      sortable: true,
    }, {
      name: 'NCTE Submit',
      selector: 'price',
      sortable: true,
    },{
      name: 'NCTE Approval',
      selector: 'price',
      sortable: true,
    }, {
      name: 'NAB Submit',
      selector: 'price',
      sortable: true,
    }, {
      name: 'Panel Visit',
      selector: 'price',
      sortable: true,
    }, {
      name: 'NAB response',
      selector: 'price',
      sortable: true,
    },  {
        name: 'Revised Document Submit',
        selector: 'price',
        sortable: true,
      },  {
        name: 'NAB approval',
        selector: 'price',
        sortable: true,
      }
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
                  title ="New Progamme Accreditation Status (External Process)"
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
      </div>
    );
}
 
export default ExternalStatus;
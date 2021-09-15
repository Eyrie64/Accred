import { useState, useEffect } from "react";
import "./Status.css";
import SearchIcon from "@material-ui/icons/Search";
import DataTable from "react-data-table-component";
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import { requestAuthGet, requestAuthPost } from "./hooks";

const Programme = () => {

    const[filterText, setFilterText] = useState('');
    const [ programmes, setProgrammes] = useState([]);

    useEffect(async () =>{
      const {data} = await requestAuthGet('programmes')
      console.log(data)
      setProgrammes(data)
    }, [])
  const sortIcon = <ArrowDownward/>;

  const columns = [{
    name: 'College',
    selector: 'college',
    sortable: true,
    
  }, {
    name: 'School',
    selector: 'school',
    sortable: true,
  }, {
    name: 'Programme Type',
    selector: 'type',
    sortable: true,
  },  {
    name: 'Programme Name',
    selector: 'name',
    sortable: true,
  },{
    name: 'Department',
    selector: 'department',
    sortable: true,
  },{
    name: 'Status Completed',
    selector: 'status',
    sortable: true,
  }, 
  {
    name: 'Date Accredited',
    selector: 'price',
    sortable: true,
  },
];

  const data = programmes.map(prog => {
    return ({
      name:prog.name,
      type:prog.type,
      department:prog.departmentid,
      school: prog.department.schoolid,
    college: prog.department.school.collegeid
    })
  })
   
    const filteredItems = data.filter(item =>item.name && item.name.toLowerCase().includes(filterText.toLowerCase()),);
    
  return (
    <div className="programmes">
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
                title ="Programme Accreditation History"
                columns = {columns}
                data ={filteredItems}
                selectableRows
                pagination
                striped
                highlightOnHover ="True"
                sortIcon = {sortIcon}
                />  
                <div>
                  <button>UPDATE</button> 
                  <button>DELETE</button> 
                </div>
        </div>
      </div>
    
  );
}
 
export default Programme;
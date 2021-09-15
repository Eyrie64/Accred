import { useState } from "react";
import "./Status.css";
import SearchIcon from "@material-ui/icons/Search";
import DataTable from "react-data-table-component";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import TextField from "@material-ui/core/TextField";
import Popup from "./Popup";

const NewForm = () => {
  const [filterText, setFilterText] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const sortIcon = <ArrowDownward />;
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const columns = [
    {
      name: "Id",
      selector: "id",
      sortable: true,
    },
    {
      name: "Programme Type",
      selector: "ptype",
      sortable: true,
    },
    {
      name: "Programme Name",
      selector: "pname",
      sortable: true,
    },
    {
      name: "Department Name",
      selector: "dname",
      sortable: true,
    },
    {
      name: "Completed",
      selector: "status",
      sortable: true,
    },
  ];

  const data = [
    {
      id: 1,
      ptype: "Bsc",
      pname: "Computer",
      dname: "Computer Engineering",
      status: "50%",
    },
    {
      id: 2,
      ptype: "Bsc",
      pname: "Agricultural",
      dname: "Agricultural Engineering",
      status: "50%",
    },
    {
      id: 3,
      ptype: "PhD",
      pname: "Biomedical",
      dname: "Biomedical Engineering",
      status: "70%",
    },
    {
      id: 4,
      ptype: "MPhil",
      pname: "Food Processing",
      dname: "Food Processing Engineering",
      status: "80%",
    },
  ];
  const filteredItems = data.filter(
    (item) =>
      item.ptype && item.ptype.toLowerCase().includes(filterText.toLowerCase())
  );
  // const filteredItem = data.filter(item =>item.price && item.price.toLowerCase().includes(filterText.toLowerCase()),);
  return (
    <div className="programmes">
      <div className="search__nav">
        <div className="programme__search">
          <input
            type="text"
            placeholder="Search . . ."
            className="programme__searchInput"
            onChange={(e) => setFilterText(e.target.value)}
          />
          <SearchIcon className="programme__searchIcon" />
        </div>
      </div>
      <div className="table" style={{ height: 400, width: "50%" }}>
        <DataTable
          title="Pending New Programmes"
          columns={columns}
          data={filteredItems}
          selectableRows
          pagination
          striped
          highlightOnHover="True"
          sortIcon={sortIcon}
        />
        <div>
          <button onClick={togglePopup}>ADD NEW</button>
          <button> DELETE</button>
          <button>UPDATE</button>
        </div>
        {isOpen && (
          <Popup
            content={
              <div className="content">
                <form>
                  <div>
                    <TextField
                      required
                      id="outlined-basic"
                      label="Programme Type"
                      variant="outlined"
                    />
                    <TextField
                      required
                      id="outlined-basic"
                      label="Programme Name"
                      variant="outlined"
                    />
                    <TextField
                      required
                      id="outlined-basic"
                      label="Department"
                      variant="outlined"
                    />
                  </div>
                  <button type="submit">ADD PROGRAMME</button>
                </form>
              </div>
            }
            handleClose={togglePopup}
          />
        )}
      </div>
    </div>
  );
};

export default NewForm;

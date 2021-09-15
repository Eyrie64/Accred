import * as React from "react";
import { useState, useEffect } from "react";
import "./Users.css";
import SearchIcon from "@material-ui/icons/Search";
import Popup from "./Popup";
import DataTable from "react-data-table-component";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import { requestAuthGet, requestAuthPost } from "./hooks";

export default function Users() {
  const [isOpen, setIsOpen] = useState(false);
  const [filterText, setFilterText] = useState("");
  const [users, setUsers] = useState([]);
  const [colleges, setColleges] = useState([]);
  const [schools, setSchools] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [newUser, setNewUser] = useState({});
  const [newUserAdded, setNewUserAdded] = useState(false);

  const sortIcon = <ArrowDownward />;

  useEffect(async () => {
    const { data: usrs } = await requestAuthGet("users");
    const { data: colls } = await requestAuthGet("colleges");
    setColleges(colls);
    const { data: schs } = await requestAuthGet("schools");
    setSchools(schs);
    const { data: depts } = await requestAuthGet("departments");
    setDepartments(depts);
    setUsers(usrs);
  }, [newUserAdded]);

  const columns = [
    {
      name: "User",
      selector: "user",
      sortable: true,
    },
    {
      name: "Email",
      selector: "email",
      sortable: true,
    },
    {
      name: "College",
      selector: "college",
      sortable: true,
    },
    {
      name: "School",
      selector: "school",
      sortable: true,
    },
    {
      name: "Department",
      selector: "department",
      sortable: true,
    },
  ];

  const data = users.map((user) => {
    return {
      user: user.user || "N/A",
      email: user.email || "N/A",
      college: user.collegeid || "N/A",
      school: user.schoolid || "N/A",
      department: user.departmentid || "N/A",
    };
  });

  const filteredItems = data.filter(
    (item) =>
      item.user && item.user.toLowerCase().includes(filterText.toLowerCase())
  );

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    const nUser = {};
    nUser[name] = value;
    setNewUser({ ...newUser, ...nUser });
  };

  const onAddUser = async (e) => {
    e.preventDefault();
    console.log(newUser);
    try {
      await requestAuthPost("users", newUser);
      setNewUserAdded(true);
    } catch (e) {
      setNewUserAdded(false);
    }
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
              onChange={(e) => setFilterText(e.target.value)}
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
                    <form onSubmit={onAddUser}>
                      <div>
                        <select onChange={handleChange} name="user">
                          <option value="">--User--</option>

                          <option value="Vice Chancellor">
                            Vice Chancellor
                          </option>
                          <option value="Pro-Vice Chancellor(Academic and Student Affairs)">
                            Pro-Vice Chancellor (Academic and Student Affairs)
                          </option>
                          <option value="Pro-Vice Chancellor (Research Innovation and Development)">
                            Pro-Vice Chancellor (Research Innovation and
                            Development)
                          </option>
                          <option value="Registrar">Registrar</option>
                          <option value="Director of Academic Affairs">
                            Director of Academic Affairs
                          </option>
                          <option value="Provost of College">Provost</option>
                          <option value="Dean of School/Director">
                            Dean of School/Director
                          </option>
                          <option value="Head of Department">
                            Head of Department
                          </option>
                        </select>

                        <select name="collegeid" onChange={handleChange}>
                          <option>--College--</option>
                          {colleges.map(({ name }) => (
                            <option>{name}</option>
                          ))}
                        </select>

                        <select name="schoolid" onChange={handleChange}>
                          <option>--School--</option>
                          {schools.map(({ name }) => (
                            <option>{name}</option>
                          ))}
                        </select>

                        <select name="departmentid" onChange={handleChange}>
                          <option>--Department--</option>
                          {departments.map(({ name }) => (
                            <option>{name}</option>
                          ))}
                        </select>

                        <input
                          type="email"
                          placeholder="Email"
                          name="email"
                          onChange={handleChange}
                        />
                      </div>
                      <button type="submit">ADD USER</button>
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
            title="Test"
            columns={columns}
            data={filteredItems}
            selectableRows
            pagination
            striped
            highlightOnHover="True"
            sortIcon={sortIcon}
          />
        </div>
      </div>
    </div>
  );
}

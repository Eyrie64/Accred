import { useState, useEffect } from "react";
import "./Status.css";
import SearchIcon from "@material-ui/icons/Search";
import DataTable from "react-data-table-component";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import { requestAuthGet, requestAuthPost } from "./hooks";

const Status = () => {
  const [filterText, setFilterText] = useState("");
  const [programmes, setProgrammes] = useState([]);

  useEffect(async () => {
    const { data } = await requestAuthPost("approvals/fetch/all", {
      approved: true,
    });
    console.log(data);
    setProgrammes(data);
  }, []);

  const sortIcon = <ArrowDownward />;

  const columns = [
    {
      name: "Programme Type",
      selector: "type",
      sortable: true,
    },
    {
      name: "Programme Name",
      selector: "name",
      sortable: true,
    },
    {
      name: "School Submit",
      selector: "createdAt",
      sortable: true,
    },
    {
      name: "School Approval",
      selector: "sapproval",
      sortable: true,
    },
    {
      name: "College Submit",
      selector: "csubmit",
      sortable: true,
    },
    {
      name: "College Approval",
      selector: "capproval",
      sortable: true,
    },
    {
      name: "QAB Submit",
      selector: "qsubmit",
      sortable: true,
    },
    {
      name: "QAB Approval",
      selector: "qapproval",
      sortable: true,
    },
    {
      name: "Academic Board Submit",
      selector: "usubmit",
      sortable: true,
    },
    {
      name: "Academic Board Approval",
      selector: "uapproval",
      sortable: true,
    },
    {
      name: "Status",
      selector: "approve",
      sortable: true,
    },
    {
      name: "Date Approved",
      selector: "dateapprove",
      sortable: true,
    },
  ];

  const data = programmes.map((prog) => {
    return {
      name: prog.programme.name,
      type: prog.programme.type,
      createdAt: prog.programme.createdAt,
      sapproval: prog.approvedBySchool,
      csubmit: prog.collegeTimestamp,
      capproval: prog.approvedByCollege,
      qsubmit: prog.qabTimestamp,
      qapproval: prog.qabTimestamp !== null ? 1 : 0,
      uapproval: prog.uabTimestamp !== null ? 1 : 0,
      usubmit: prog.uabTimestamp,
      approve: prog.approved ? 1 : 0,
      dateapprove: prog.uabTimestamp,
    };
  });
  const filteredItems = data.filter(
    (item) =>
      item.name && item.name.toLowerCase().includes(filterText.toLowerCase())
  );

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
          title="New Programme Accreditation Status (Internal Process)"
          columns={columns}
          data={filteredItems}
          // selectableRows
          pagination
          striped
          highlightOnHover="True"
          sortIcon={sortIcon}
        />
      </div>
    </div>
  );
};

export default Status;

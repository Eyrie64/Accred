import { useState, useEffect } from "react";
import "./Status.css";
import SearchIcon from "@material-ui/icons/Search";
import DataTable from "react-data-table-component";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import { requestAuthGet, requestAuthPost } from "./hooks";

const ExternalStatus = () => {
  const [filterText, setFilterText] = useState("");
  const [externalApprovals, setExternalApprovals] = useState([]);

  const sortIcon = <ArrowDownward />;

  useEffect(async () => {
    const { data } = await requestAuthPost("external-approvals/fetch/all", {});
    console.log(data);
    setExternalApprovals(data);
  }, []);

  const columns = [
    {
      name: "Programme Type",
      selector: "type",
      sortable: true,
    },
    {
      name: "Programme",
      selector: "name",
      sortable: true,
    },
    {
      name: "NCTE Submit",
      selector: "ncteSubmitDate",
      sortable: true,
    },
    {
      name: "NCTE Approval",
      selector: "ncteApprovalDate",
      sortable: true,
    },
    {
      name: "NAB Submit",
      selector: "nabSubmitDate",
      sortable: true,
    },
    {
      name: "Panel Visit",
      selector: "panelVisitDate",
      sortable: true,
    },
    {
      name: "NAB response",
      selector: "nabResponseDate",
      sortable: true,
    },
    {
      name: "Revised Document Submit",
      selector: "nabRevisedDate",
      sortable: true,
    },
    {
      name: "NAB approval",
      selector: "nabApprovalDate",
      sortable: true,
    },
  ];

  const data = externalApprovals.map((approval) => {
    return {
      name: approval.programme.name,
      type: approval.programme.type,
      ncteSubmitDate: approval.ncteSubmitDate,
      ncteApprovalDate: approval.ncteApprovalDate,
      panelVisitDate: approval.panelVisitDate,
      nabResponseDate: approval.nabResponseDate,
      nabRevisedDate: approval.nabRevisedDate,
      nabApprovalDate: approval.nabApprovalDate,
      nabSubmitDate: approval.nabSubmitDate,
    };
  });
  const filteredItems = data.filter(
    (item) =>
      item.name && item.name.toLowerCase().includes(filterText.toLowerCase())
  );

  return (
    <div className="programmes">
      <div className="up">
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
            title="New Progamme Accreditation Status (External Process)"
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
    </div>
  );
};

export default ExternalStatus;

import "./Ugreq.css";
import TextField from "@material-ui/core/TextField";
import { useState } from "react";
import { useHistory } from "react-router";
import DropboxChooser from "react-dropbox-chooser";
import credentials from "./dropbox.json";
import { requestAuthPost } from "./hooks";

const Programme = () => {
  const APP_KEY = credentials.app_key;

  const history = useHistory();

  const [url, setUrl] = useState("");
  function handleSuccess(files) {
    console.log(files);
    setUrl(files[0].link);
    console.log(url);
  }

  const onSubmitDocument = async (e) => {
    e.preventDefault();
    console.log(url);
    try {
      const response = await requestAuthPost("approvals", {
        documenturl: url,
        programmeid: localStorage.getItem("programmeid"),
        departmentid: localStorage.getItem("department"),
      });
      console.log(response);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="prog">
      <form className="programme" onSubmit={onSubmitDocument}>
        <h1>University Requirement</h1>
        <h3>Provide the following Details**</h3>
        <hr />
        <div className="list">
          <ul>
            <h4>Academic Matters:</h4>

            <li>
              <label>
                Programme Aims and Objectives
                <input type="checkbox" required />
              </label>
            </li>
            <li>
              <label>
                Admission Requirement
                <input type="checkbox" required />
              </label>
            </li>
            <li>
              <label>
                Academic Regulation
                <input type="checkbox" required />
              </label>
            </li>
            <li>
              <label>
                Internal Course Assessment
                <input type="checkbox" required />
              </label>
            </li>

            <hr />

            <h4>Examination:</h4>
            <li>
              <label>
                Policy on Internal and External Moderations of Examination
                <input type="checkbox" required />
              </label>
            </li>
            <hr />

            <h4>Staffing</h4>
            <li>
              <label>
                Detailed Employment Letters, Acceptance letters and Proof
                Verficitation of claimed Qualifications of All Senior Staff and
                Faculty
                <input type="checkbox" required />
              </label>
            </li>
            <li>
              <label>
                Head of Department/ Discipline and Sub Division
                <input type="checkbox" required />
              </label>
            </li>
            <li>
              <label>
                List of Proposed Taching Staff
                <input type="checkbox" required />
              </label>
            </li>
            <li>
              <label>
                Non-Teaching Staff- Administative and Technical Support Staff
                <input type="checkbox" required />
              </label>
            </li>
            <li>
              <label>
                Staff Development
                <input type="checkbox" required />
              </label>
            </li>
            <hr />
            <h4>Physical Facility</h4>
            <li>
              <label>
                Laboratories: Size and Equipment
                <input type="checkbox" required />
              </label>
            </li>
            <li>
              <label>
                Clinical/Studios Workshop: Size
                <input type="checkbox" required />
              </label>
            </li>
            <li>
              <label>
                Classroom Facilities: Size
                <input type="checkbox" required />
              </label>
            </li>
            <li>
              <label>
                Space Utilization of Academic Facilities
                <input type="checkbox" required />
              </label>
            </li>
            <li>
              <label>
                Safety, Health and Environmental Sanitation
                <input type="checkbox" required />
              </label>
            </li>
            <hr />
            <h4>Library Facilities</h4>
            <li>
              <label>
                Textbooks, Journals, General Books and Other Resources Materials
                for the Programme
                <input type="checkbox" required />
              </label>
            </li>
            <li>
              <label>
                Currency and Relevance of Textbooks
                <input type="checkbox" required />
              </label>
            </li>
            <li>
              <label>
                Area Per Student - Sitting Capacity
                <input type="checkbox" required />
              </label>
            </li>
            <li>
              <label>
                Reprographic Equipment
                <input type="checkbox" required />
              </label>
            </li>
            <hr />
            <h4>Fees</h4>
            <li>
              <label>
                level of Fees
                <input type="checkbox" required />
              </label>
            </li>
            <li>
              <label>
                Endowment FUnd and Source of Inflows
                <input type="checkbox" required />
              </label>
            </li>
            <hr />
            <li>
              <label>
                Policy on Ethics for Staff and Faculty, Affirmative Action;
                research and Publication; Grievance Resolutions
                <input type="checkbox" required />
              </label>
            </li>
            <hr />
            <div className="upload">
              <label htmlFor="files">Upload Document (*pdf, *docx)</label>
              {/* <input
                type="file"
                id="files"
                required
                onChange={handleFileChange}
              /> */}

              <DropboxChooser
                appKey={APP_KEY}
                success={handleSuccess}
                cancel={() => console.log("closed")}
              >
                <span>Upload or Choose Files</span>
              </DropboxChooser>
              {url}
            </div>
          </ul>
        </div>
        <div className="btn">
          <button type="submit">Save and Submit </button>
          <button
            onClick={() => {
              history.push("/");
            }}
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default Programme;

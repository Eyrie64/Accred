import "./Ugreq.css";
import TextField from '@material-ui/core/TextField';


const NcteReq = () => {
  return (
    <div className = "prog">
      <form className="programme">
        <h1>National Council for Tertiary Education (NCTE)  Requirement</h1>
        <h3>Provide the Following Details**</h3>
        <div className = "top__input">
        <TextField 
          required
           id="outlined-basic" 
           label="Programme Type" 
           variant="outlined" />
        <TextField 
          required
          id="outlined-basic" 
          label="Programme Name" 
          variant="outlined"/>
        <TextField 
          required
          id="outlined-basic" 
          label="Department" 
          variant="outlined" />
        </div>
      <hr />
        <div className = "list">
            <ul>
          <h4>Title Page:</h4>
              <li>
          <label>
            Institute Name and Logo
            <input type="checkbox" required/>
          </label>
          </li>
          <li>
          <label>
            Programme Proposed
            <input type="checkbox" required/>
          </label>
          </li>
          <li>
          <label>
            College, School, Faculty/ Department to Host Programme 
            <input type="checkbox" required/>
          </label></li>
            <li>
          <label>
            Date of Submission 
            <input type="checkbox" required/>
          </label></li>

          <hr />

          <h4>Introduction:</h4>
          <li>
          <label>
            Introduction
            <input type="checkbox" required/>
          </label></li>
          <hr />
          
          <h4>National Relevance of Programme: </h4>
          <li>
          <label>
            National Relevance of Programme
            <input type="checkbox" required/>
          </label>
          </li>
          
          <hr />
          <h4>Aim, Objectives and Outcome of Programmes</h4>
          <li>
          <label>
            Aim
            <input type="checkbox" required/>
          </label>
          </li>
          <li>
          <label>
            Objective
            <input type="checkbox" required/>
          </label>
          </li>
          <li>
          <label>
            Intended/Expected Outcomes
            <input type="checkbox" required/>
          </label>
          </li>
          <hr />
          <h4>Inadequacies in Skills</h4>
          <li>
          <label>
            Addressing the Inadequacies in Skills
            <input type="checkbox" required/>
          </label>
          </li>
          
          <hr />
          <h4>Alignment with the mandate, Mission and Niche Area of the Institution: </h4>
          <li>
          <label>
            Alignment with the Mandate, Mission and Niche of the Institution
            <input type="checkbox" required/>
          </label>
          </li>
          
          <hr />
          <h4> The Target Market: </h4>
          <li>
          <label>
            
            Section of the Population to Access the Programme
            <input type="checkbox" required/>
          </label>
          </li>
          <li>
          <label>
            Sectors of the Economy to Potentially Employ the Graduates Produced by the Programme
            <input type="checkbox" required/>
          </label>
          </li>
          <hr />
          <h4>Similar Programmes Run by Other Institutions: </h4>
          <li>
          <label>
            Uniqueness of Programme
            <input type="checkbox" required/>
          </label>
          </li>
          <hr />
          <h4>Enrollment: </h4>
          <li>
          <label>
            Annual Projection for Five (5) Years
            <input type="checkbox" required/>
          </label>
          </li>
          <hr />
          <h4>Staffing: </h4>
          <li>
          <label>
            Teaching Staff (List of Staff and Qualification)
            <input type="checkbox" required/>
          </label>
          </li>
          <li>
          <label>
            Technical Staff (List of Staff and Qualification)
            <input type="checkbox" required/>
          </label>
          </li>
          <hr />
          <h4>Cost</h4>
          <li>
          <label>
            Resource and Cost
            <input type="checkbox" required/>
          </label>
          </li>
          <li>
          <label>
            Source of Financing 
            <input type="checkbox" required/>
          </label>
          </li>
          <li>
          <label>
            Funding Sustainability 
            <input type="checkbox" required/>
          </label>
          </li>
          <hr />
          <h4>Evidence of Practical Training: </h4>
          <li>
          <label>
            Written Evidence from Industry 
            <input type="checkbox" required/>
          </label>
          </li>
          <li>
          <label>
            Duration of Practical Training 
            <input type="checkbox" required/>
          </label>
          </li>
          <li>
          <label>
            Expected Competence Acquisition 
            <input type="checkbox" required/>
          </label>
          </li>
          <hr />
          <h4>Collaboration with Relevant Professional Bodies: </h4>
          <li>
          <label>
            Collaboration with Relevant Professional Bodies 
            <input type="checkbox" required/>
          </label>
          </li>
          <hr />
          <h4>Submission of Proposals: </h4>
          <li>
          <label>
            Three (3) Hardcopies 
            <input type="checkbox" required/>
          </label>
          </li>
          <li>
          <label>
            One (1) Softcopy
            <input type="checkbox" required/>
          </label>
          </li>
          <hr />
          <h4>Contact Person: </h4>
          <li>
          <label>
            Detail Provided 
            <input type="checkbox" required/>
          </label>
          </li>
          <hr />
          <label>
            Upload Document (*pdf, *Docx)
            <input type="file" required/>
          </label></ul>
        </div>
        <div className ="btn">
            <button>Save</button>
        </div>
      </form>
      </div>
  );
};

export default NcteReq;

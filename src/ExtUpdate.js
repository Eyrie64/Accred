import "./Update.css";
import TextField from "@material-ui/core/TextField";

const ExtUpdate = () => {
  return (
    <div className="update">
      <form>
        <h2>UPDATE NEW PROGRAMME </h2>
        <div className = "top__input">
          <TextField
            id="outlined-basic"
            label="Programme Type"
            variant="outlined"
          />
          <TextField
            id="outlined-basic"
            label="Programme Name"
            variant="outlined"
          />
          <TextField
            id="outlined-basic"
            label="Department Name"
            variant="outlined"
          />
        </div>
        <div className="bottom_down">
          <label>
            NCTE Submit:
            <input type="date" className ="date_picker"/>
          </label>
          <label>
            NCTE Approval:
            <button>Approve</button>
          </label>
          <label>
            NAB Submit:
            <input type="date" />
          </label>
          <label>
            Panel Visit:
            <input type="date" />
          </label>
          <label>
            NAB Report Receive:
            <input type="date" />
          </label>
          <label>
            Document Revision Submit:
            <input type="date" />
          </label>
          <label>
            NAB Approval:
            <button>Approved</button>
          </label>
        </div>
        <button>Save</button>
      </form>
    </div>
  );
};

export default ExtUpdate;

import "./Update.css";
import TextField from "@material-ui/core/TextField";

const ExisUpdate = () => {
  return (
    <div className="update">
      <form>
        <h2>UPDATE EXISITNG PROGRAMME </h2>
        <div className="top__input"></div>
        <div className="bottom_down">
          <label>
            NAB Submit:
            <input type="date" />
          </label>
          <label>
            Panel Visit:
            <input type="date" />
          </label>
          <label>
            NAB Report Date:
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

export default ExisUpdate;

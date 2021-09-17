import "./Update.css";
import TextField from "@material-ui/core/TextField";
import { useEffect, useState } from "react";
import { requestAuthPost } from "./hooks";

const Update = () => {
  const [prog, setProg] = useState({});

  const handleSubmit = async () => {
    const response = await requestAuthPost("approvals/" + prog.name, {
      [`${prog.submitTo}`]: true,
    });

    console.log(response);
  };

  useEffect(() => {
    setProg((prog) => ({ ...prog, dept: localStorage.getItem("department") }));
  }, []);

  const handleChange = (event) => {
    setProg((prog) => ({
      ...prog,
      [`${event.name}`]: event.value,
    }));
  };

  return (
    <div className="update">
      <form onSubmit={handleSubmit}>
        <h2>UPDATE NEW PROGRAMMES </h2>
        <div className="top__input">
          <TextField
            id="outlined-basic"
            label="Programme Type"
            variant="outlined"
            value={prog.type}
            onChange={handleChange}
            name="type"
          />
          <TextField
            id="outlined-basic"
            label="Programme Name"
            variant="outlined"
            value={prog.name}
            onChange={handleChange}
            name="name"
          />
          <TextField
            id="outlined-basic"
            label="Department Name"
            variant="outlined"
            value={prog.dept}
            onChange={handleChange}
            name="dept"
          />
        </div>
        <div className="bottom_down">
          <p>Doc Name</p>
          <label>
            Submit to:
            <select className="options" name="submitTo" onChange={handleChange}>
              <option value="approvedBySchool">School</option>
              <option value="approvedByCollege">College</option>
              <option value="">QAB</option>
              <option value="">Academic Board</option>
            </select>
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Update;

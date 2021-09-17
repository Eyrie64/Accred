import { useEffect, useState } from "react";
import { requestAuthPost } from "./hooks";
import "./Update.css";

const ExtUpdate = () => {
  const [newProgrammes, setNewProgrammes] = useState([]);
  const [progToUpdate, setProgToUpdate] = useState(0);
  const [ncteSubmitDate, setNcteSubmit] = useState("");
  const [ncteApproveDate, setNcteApprove] = useState("");
  const [nabSubmitDate, setNabSubmit] = useState("");
  const [nabApproveDate, setNabApprove] = useState("");
  const [panelVisitDate, setPanelVisit] = useState("");
  const [nabReceiveDate, setNabReceive] = useState("");
  const [documentRevisionSubmitDate, setDocumentRevisionSubmit] = useState("");

  useEffect(async () => {
    try {
      const { data } = await requestAuthPost("approvals/fetch/all", {
        approved: true,
      });
      setNewProgrammes(data);
    } catch (e) {
      alert(e.message);
    }
  }, []);

  const handleChange = (setter) => (e) => {
    console.log(e.target.value);
    setter(e.target.value);
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        programmeid: progToUpdate,
        ncteSubmitDate,
        ncteApproveDate,
        nabSubmitDate,
        nabApproveDate,
        panelVisitDate,
        nabReceiveDate,
        documentRevisionSubmitDate,
      };
      console.log(payload);
      await requestAuthPost("external-approvals", payload);
      console.log("externally approved");
      alert("External Approval Data Successfully Saved.");
    } catch (e) {
      console.log(e);
      alert(e.message);
    }
  };

  return (
    <div className="update">
      <form>
        <h2>UPDATE NEW PROGRAMME </h2>
        <div className="top__input">
          <select onChange={handleChange(setProgToUpdate)} name="name" id="">
            <option value="">--Programme Name--</option>
            {newProgrammes.map((prog) => (
              <option value={prog.programme.id}>
                {prog.programme.name + ` (${prog.programme.type})`}
              </option>
            ))}
          </select>
        </div>
        <div className="bottom_down">
          <label>
            NCTE Submit:
            <input type="date" onChange={handleChange(setNcteSubmit)} />
          </label>
          <label>
            NCTE Approval:
            <input type="date" onChange={handleChange(setNcteApprove)} />
          </label>
          <label>
            NAB Submit:
            <input type="date" onChange={handleChange(setNabSubmit)} />
          </label>
          <label>
            Panel Visit:
            <input type="date" onChange={handleChange(setPanelVisit)} />
          </label>
          <label>
            NAB Report Receive:
            <input type="date" onChange={handleChange(setNabReceive)} />
          </label>
          <label>
            Document Revision Submit:
            <input
              type="date"
              onChange={handleChange(setDocumentRevisionSubmit)}
            />
          </label>
          <label>
            NAB Approval:
            <input type="date" onChange={handleChange(setNabApprove)} />
          </label>
        </div>
        <button onClick={handleClick}>Save</button>
      </form>
    </div>
  );
};

export default ExtUpdate;

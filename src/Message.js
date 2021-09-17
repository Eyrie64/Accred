import "./Message.css";
import whoCanApprove from "./helpers/whoCanApprove";
import { requestAuthPost, requestAuthGet, requestAuthDelete } from "./hooks";
import { useEffect, useState } from "react";
import { useAlert } from "react-alert";

const Message = () => {
  const [message, setMessage] = useState([]);
  const user = localStorage.getItem("user");
  let filterParam = "";
  const alert = useAlert();

  useEffect(async () => {
    const { phase1, phase2, phase3, phase4 } = whoCanApprove;

    if (phase1.includes(user)) {
      filterParam = "schoolid";
    } else if (phase2.includes(user)) {
      filterParam = "schoolTimestamp";
    } else if (phase3.includes(user)) {
      filterParam = "collegeTimestamp";
    } else if (phase4.includes(user)) {
      filterParam = "qabTimestamp";
    } else {
      filterParam = localStorage.getItem("department");
    }

    const { data } = await requestAuthPost("approvals/fetch/all", {});
    console.log(
      "before",
      data,
      "***********************\n",
      "filterParam",
      filterParam,
      "\n\n"
    );
    setMessage(data.filter((item) => item[filterParam] !== null));

    console.log("filtered", message);
  }, []);

  const handleReject = (id) => async () => {
    try {
      const { data } = await requestAuthDelete(`approvals/${id}`);
      setMessage([...data]);
    } catch (e) {
      console.log(e);
    }
  };

  const handleApprove = (id) => async () => {
    const { phase1, phase2, phase3, phase4 } = whoCanApprove;
    let data = {};

    console.log(user);
    console.log(phase1.includes(user));
    console.log(phase2.includes(user));
    console.log(phase3.includes(user));
    console.log(phase4.includes(user));

    if (phase1.includes(user)) {
      data = {
        ...{},
        collegeid: localStorage.getItem("college"),
        approvedBySchool: true,
        schoolTimestamp: new Date(),
      };
    } else if (phase2.includes(user)) {
      data = {
        ...{},
        qabid: localStorage.getItem("email"),
        approvedByCollege: true,
        collegeTimestamp: new Date(),
      };
    } else if (phase3.includes(user)) {
      data = {
        ...{},
        uabid: localStorage.getItem("email"),
        qabTimestamp: new Date(),
      };
    } else if (phase4.includes(user)) {
      data = { ...{}, approved: true, uabTimestamp: new Date() };
    } else {
      return;
    }

    const response = await requestAuthPost("approvals/" + id, {
      ...data,
    });
    alert.success("APPROVED!");
  };

  return (
    <div className="message">
      {message.map((msg) => {
        const title = "Accreditation Approval Request by " + msg.departmentid;
        const mssg = `The ${msg.departmentid} is requesting approval for the ${msg.programmeid} programme.
    
          Find a link to the document here: ${msg.documenturl};
          `;

        const btncomponent =
          user !== "Head of Department" ? (
            <div className="btn-btn">
              <button onClick={handleApprove(msg.id)}>Approve</button>
              <button onClick={handleReject(msg.id)}>Reject</button>
            </div>
          ) : (
            <div className="btn-btn">
              <button>Clear</button>
            </div>
          );

        return (
          <div className="message-content">
            <b> {title}</b>
            <div>{mssg}</div>
            {btncomponent}
          </div>
        );
      })}
    </div>
  );
};

export default Message;

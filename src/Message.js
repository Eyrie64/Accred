import "./Message.css";
import whoCanApprove from "./helpers/whoCanApprove";
import { requestAuthPost } from "./hooks";

const Message = () => {
  const user = localStorage.getItem("user");
  const handleApprove = async () => {
    const { phase1, phase2, phase3, phase4 } = whoCanApprove;
    let nextKey = "test";
    let nextVal = null;

    console.log(user);
    console.log(phase1.includes(user));
    console.log(phase2.includes(user));
    console.log(phase3.includes(user));
    console.log(phase4.includes(user));

    if (phase1.includes(user)) {
      nextKey = "collegeid";
      nextVal = phase2[0];
    } else if (phase2.includes(user)) {
      nextKey = "qabid";
      nextVal = phase3[0];
    } else if (phase3.includes(user)) {
      nextKey = "uabid";
      nextVal = phase4[0];
    } else if (phase4.includes(user)) {
      nextKey = "approved";
      nextVal = true;
    } else {
      return;
    }

    const response = await requestAuthPost("approvals", {
      [`${nextKey}`]: nextVal,
    });

    console.log(response);
    console.log(nextVal);
  };

  return (
    <div className="message">
      <div className="message-content">
        <b> Title</b>
        <div>Message</div>
      </div>
      {user !== "Head of Department" ? (
        <div className="btn-btn">
          <button onClick={handleApprove}>Approve</button>
          <button>Reject</button>
        </div>
      ) : (
        <div className="btn-btn">
          <button>Clear</button>
        </div>
      )}
    </div>
  );
};

export default Message;

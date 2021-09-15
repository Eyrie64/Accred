import "./Message.css";

const Notification = () => {
return (
    <div className ="Notif">
    <div className="message">
      <div className="message-content">
        <b> Title</b>
        <div>Message</div>
      </div>
      <div className="btn-btn">
        <button>Clear</button>
        
      </div>
    </div>
    </div>
  );
};

export default Notification;
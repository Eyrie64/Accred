import "./Dashboard.css";
import AnalyticsCard from "./Card";
import LoopIcon from "@material-ui/icons/Loop";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import ChromeReaderModeIcon from "@material-ui/icons/ChromeReaderMode";
import Chart from "./Chart";
import LINE from "./LINE";

function Dashboard() {
  return (
    <div className="dashboard">
      <div className="dashboard__top">
        <AnalyticsCard
          title="ACCREDITED PROGRAMMES"
          myc="#C10707"
          value={0}
          iconcolor="#8D0000"
          bgTextcolor="#8D0000"
          Icon={<MenuBookIcon className="cards" style={{ fontSize: 110 }} />}
        />

        <AnalyticsCard
          title="PENDING ACCREDITATIONS"
          myc="#FDF300"
          value={0}
          iconcolor="#D1C900"
          bgTextcolor="#D1C900"
          Icon={<LoopIcon className="cards" style={{ fontSize: 100 }} />}
        />

        <AnalyticsCard
          title="NUMBER OF PROGRAMMES"
          myc="#4989E9"
          value={0}
          iconcolor="#3868B0"
          bgTextcolor="#3868B0"
          Icon={
            <ChromeReaderModeIcon className="cards" style={{ fontSize: 100 }} />
          }
        />
      </div>
      <div className="row__back">
      <Chart/> 
       <LINE/>
        
      </div>
    </div>
  );
}

export default Dashboard;

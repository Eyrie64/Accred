import { useEffect, useState } from "react";
import "./Dashboard.css";
import AnalyticsCard from "./Card";
import LoopIcon from "@material-ui/icons/Loop";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import ChromeReaderModeIcon from "@material-ui/icons/ChromeReaderMode";
// import Chart from "./Chart";
// import LINE from "./LINE";
import { requestAuthGet } from "./hooks";

function Dashboard() {
  const [programmesCount, setProgrammesCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log("run");
    void (async function () {
      console.log("async");
      const { data: progs } = await requestAuthGet("programmes");
      //console.log("progs.length: ", progs.length);
      setProgrammesCount(() => progs.length);
      setIsLoading(false);
    })();
  }, [isLoading]);

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
          value={programmesCount}
          iconcolor="#3868B0"
          bgTextcolor="#3868B0"
          Icon={
            <ChromeReaderModeIcon className="cards" style={{ fontSize: 100 }} />
          }
        />
      </div>
      <div className="row__back"></div>
    </div>
  );
}

export default Dashboard;

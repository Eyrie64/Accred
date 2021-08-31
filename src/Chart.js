import { Doughnut } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";
import { Component } from 'react';

class Chart extends Component {
state = {
  dataDoughnut: {
    labels: ["Active Users", "Inactive Users", "Blocked Users"],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C"],
        hoverBackgroundColor: [
          "#FF5A5E",
          "#5AD3D1",
          "#FFC870",
          
        ]
      }
    ]
  }
}

render() {
    return (
    <MDBContainer>
      <h3 className="mt-5">Statistics</h3>
      <Doughnut data={this.state.dataDoughnut} options={{ responsive: true }} />
    </MDBContainer>
    );
  }
}

export default Chart;
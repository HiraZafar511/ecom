import * as React from "react";
import { Chart, PieSeries } from "@devexpress/dx-react-chart-material-ui";

import { Animation } from "@devexpress/dx-react-chart";

const data = [
  { country: "Russia", area: 12 },
  { country: "Canada", area: 7 },
  { country: "USA", area: 7 },
  { country: "China", area: 7 },
  { country: "Brazil", area: 6 },
  { country: "Australia", area: 5 },
  { country: "India", area: 2 },
  { country: "Others", area: 55 },
];
export default class Demo extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data,
    };
  }

  render() {
    const { data: chartData } = this.state;

    return (
      <div className="card email">
        <div className="card-header">
          <h5 className="card-title">Email Statistics</h5>
          <p className="card-category">Last Campaign Performance</p>
        </div>
        <div className="card-body">
          <Chart data={chartData}>
            <PieSeries valueField="area" argumentField="country" />
            <Animation />
          </Chart>
        </div>
        <div className="card-footer">
          <div className="legend">
            <i className="fa fa-circle text-primary"></i> Opened{" "}
            <i className="fa fa-circle text-warning"></i> Read{" "}
            <i className="fa fa-circle text-danger"></i> Deleted{" "}
            <i className="fa fa-circle text-gray"></i> Unopened
          </div>
          <hr />
          <div className="stats">
            <i className="fa fa-calendar"></i> Number of emails sent
          </div>
        </div>
      </div>
    );
  }
}

// ===========================================================================

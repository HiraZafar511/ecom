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
      <div class="card email">
        <div class="card-header">
          <h5 class="card-title">Email Statistics</h5>
          <p class="card-category">Last Campaign Performance</p>
        </div>
        <div class="card-body">
          <Chart data={chartData}>
            <PieSeries valueField="area" argumentField="country" />
            <Animation />
          </Chart>
        </div>
        <div class="card-footer">
          <div class="legend">
            <i class="fa fa-circle text-primary"></i> Opened{" "}
            <i class="fa fa-circle text-warning"></i> Read{" "}
            <i class="fa fa-circle text-danger"></i> Deleted{" "}
            <i class="fa fa-circle text-gray"></i> Unopened
          </div>
          <hr />
          <div class="stats">
            <i class="fa fa-calendar"></i> Number of emails sent
          </div>
        </div>
      </div>
    );
  }
}

// ===========================================================================

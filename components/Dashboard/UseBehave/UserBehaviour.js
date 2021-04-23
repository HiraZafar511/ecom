import * as React from "react";
import {
  Chart,
  ArgumentAxis,
  ValueAxis,
  AreaSeries,
  Legend,
} from "@devexpress/dx-react-chart-material-ui";
import classNames from "clsx";
import { withStyles } from "@material-ui/core/styles";
import { Stack, Animation } from "@devexpress/dx-react-chart";
import { carbonEmmision as data } from "./Data";

const setStyle = (style) => {
  const wrap = withStyles({ root: style });
  return (Target) =>
    wrap(({ classes, className, ...restProps }) => (
      <Target className={classNames(classes.root, className)} {...restProps} />
    ));
};

const LegendRoot = setStyle({
  display: "flex",
  margin: "auto",
  flexDirection: "row",
})(Legend.Root);

const LegendLabel = setStyle({
  whiteSpace: "nowrap",
})(Legend.Label);

const ChartRoot = setStyle({
  paddingRight: "20px",
})(Chart.Root);

const format = () => (tick) => tick;
const stacks = [
  {
    series: ["Liquids", "Solids", "Gas", "Cement Production", "Gas Flaring"],
  },
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
      <div className="row same use-behave">
        <div className="col-md-12">
          <div className="card">
            <div class="card-header">
              <h5 class="card-title">Users Behavior</h5>
              <p class="card-category bn">24 Hours performance</p>
            </div>

            <div class="card-body">
              <Chart data={chartData} rootComponent={ChartRoot}>
                <ArgumentAxis tickFormat={format} />
                <ValueAxis />
                <AreaSeries
                  name="Liquids"
                  valueField="liquids"
                  argumentField="year"
                />
                <AreaSeries
                  name="Solids"
                  valueField="solids"
                  argumentField="year"
                />
                <AreaSeries name="Gas" valueField="gas" argumentField="year" />
                <AreaSeries
                  name="Cement Production"
                  valueField="cementProduction"
                  argumentField="year"
                />
                <AreaSeries
                  name="Gas Flaring"
                  valueField="gasFlaring"
                  argumentField="year"
                />
                <Animation />
                <Legend
                  position="bottom"
                  rootComponent={LegendRoot}
                  labelComponent={LegendLabel}
                />

                <Stack stacks={stacks} />
              </Chart>
            </div>
            <div class="card-footer">
              <hr />
              <div class="stats">
                <i class="fa fa-history"></i> Updated 3 minutes ago
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

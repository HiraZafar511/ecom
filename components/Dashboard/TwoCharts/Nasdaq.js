import React from "react";

import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export const Nasdaq = () => {
  const data = [
    { name: "Page A", uv: 4000, pv: 2400, amt: 2400 },
    { name: "Page B", uv: 3000, pv: 1398, amt: 2210 },
    { name: "Page C", uv: 2000, pv: 9800, amt: 2290 },
    { name: "Page D", uv: 2780, pv: 3908, amt: 2000 },
    { name: "Page E", uv: 1890, pv: 4800, amt: 2181 },
    { name: "Page F", uv: 2390, pv: 3800, amt: 2500 },
    { name: "Page G", uv: 3490, pv: 4300, amt: 2100 },
  ];

  return (
    <div id="container" className="nasdaq">
      <div className="card-chart card">
        <div className="card-header">
          <h5 className="card-title">NASDAQ: AAPL</h5>
          <p className="card-category">Line Chart with Points</p>
        </div>
        <div className="card-body">
          <LineChart
            data={data}
            height={300}
            width={600}
            margin={{ top: 5, right: 30, left: 20, bottom: 25 }}
          >
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Legend wrapperStyle={{ bottom: 5 }} />
            <Line
              type="monotone"
              dataKey="pv"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          </LineChart>
        </div>
        <div className="card-footer">
          <div className="chart-legend">
            <i className="fa fa-circle text-info"></i> Tesla Model S{" "}
            <i className="fa fa-circle text-warning"></i> BMW 5 Series
          </div>
          <hr />
          <div className="card-stats">
            <i className="fa fa-check"></i> Data information certified
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nasdaq;

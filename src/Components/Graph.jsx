import React from "react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  AreaChart,
  Area,
  ComposedChart,
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import "../Components/graph.css";

const Graph = ({ data }) => {
  return (
    <div className="graphs-wrapper">
      {/* Line Chart */}
      <div className="graph-box">
        <h3>Line Chart</h3>
        <LineChart width={400} height={300} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="x" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="y" stroke="black" strokeWidth={2} />
        </LineChart>
      </div>

      {/* Bar Chart */}
      <div className="graph-box">
        <h3>Bar Chart</h3>
        <BarChart width={400} height={300} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="x" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="y" fill="black" />
        </BarChart>
      </div>

      {/* Area Chart */}
      <div className="graph-box">
        <h3>Area Chart</h3>
        <AreaChart width={400} height={300} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="x" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area type="monotone" dataKey="y" stroke="black" fill="gray" />
        </AreaChart>
      </div>

      {/* Composed Chart */}
      <div className="graph-box">
        <h3>Composed Chart</h3>
        <ComposedChart width={400} height={300} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="x" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="y" stroke="black" strokeWidth={2} />
          <Bar dataKey="y" barSize={20} fill="rgba(0, 0, 0, 0.5)" />
        </ComposedChart>
      </div>

      {/* Radar Chart */}
      <div className="graph-box">
        <h3>Radar Chart</h3>
        <RadarChart outerRadius={90} width={400} height={300} data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="x" />
          <PolarRadiusAxis />
          <Tooltip />
          <Legend />
          <Radar
            name="Y values"
            dataKey="y"
            stroke="black"
            fill="gray"
            fillOpacity={0.6}
          />
        </RadarChart>
      </div>
    </div>
  );
};

export default Graph;

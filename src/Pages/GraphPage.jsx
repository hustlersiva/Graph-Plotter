import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../Components/graph.css";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  AreaChart,
  Area,
  ComposedChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";
import { useGraph } from "../context/GraphContext";

const GraphPage = () => {
  const { data } = useGraph();
  const navigate = useNavigate();
  const [selectedGraph, setSelectedGraph] = useState("line");

  useEffect(() => {
    if (data.length === 0) {
      navigate("/");
    }
  }, [data, navigate]);

  return (
    <div className="graph-container">
      {/* Sidebar */}
      <nav className="sidebar">
        <h2 className="sidebar-title">Chart Types 📊</h2>
        <ul className="sidebar-list">
          <li
            onClick={() => setSelectedGraph("line")}
            className={`sidebar-item ${
              selectedGraph === "line" ? "active" : ""
            }`}
          >
            Line Chart
          </li>
          <li
            onClick={() => setSelectedGraph("bar")}
            className={`sidebar-item ${
              selectedGraph === "bar" ? "active" : ""
            }`}
          >
            Bar Chart
          </li>
          <li
            onClick={() => setSelectedGraph("area")}
            className={`sidebar-item ${
              selectedGraph === "area" ? "active" : ""
            }`}
          >
            Area Chart
          </li>
          <li
            onClick={() => setSelectedGraph("composed")}
            className={`sidebar-item ${
              selectedGraph === "composed" ? "active" : ""
            }`}
          >
            Composed Chart
          </li>
          <li
            onClick={() => setSelectedGraph("radar")}
            className={`sidebar-item ${
              selectedGraph === "radar" ? "active" : ""
            }`}
          >
            Radar Chart
          </li>
        </ul>
      </nav>

      {/* Main Content */}
      <div className="graph-content">
        <h2 className="graph-title">
          {selectedGraph.charAt(0).toUpperCase() + selectedGraph.slice(1)} Chart
        </h2>
        {data.length === 0 ? (
          <p className="no-data">
            No data available! Please enter values on the home page.
          </p>
        ) : (
          <div className="graph-display">
            {/* Line Chart */}
            {selectedGraph === "line" && (
              <LineChart width={700} height={400} data={data} className="chart">
                <CartesianGrid strokeDasharray="3 3" stroke="#555" />
                <XAxis dataKey="x" stroke="#bbb" />
                <YAxis stroke="#bbb" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#222",
                    color: "#fff",
                    borderRadius: "8px",
                  }}
                />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="y"
                  stroke="#4FC3F7"
                  strokeWidth={3}
                  dot={{ r: 5, fill: "#4FC3F7" }}
                />
              </LineChart>
            )}

            {/* Bar Chart */}
            {selectedGraph === "bar" && (
              <BarChart width={700} height={400} data={data} className="chart">
                <CartesianGrid strokeDasharray="3 3" stroke="#555" />
                <XAxis dataKey="x" stroke="#bbb" />
                <YAxis stroke="#bbb" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#222",
                    color: "#fff",
                    borderRadius: "8px",
                  }}
                />
                <Legend />
                <Bar dataKey="y" fill="#0077b6" radius={[6, 6, 0, 0]} />
              </BarChart>
            )}

            {/* Area Chart */}
            {selectedGraph === "area" && (
              <AreaChart width={700} height={400} data={data} className="chart">
                <CartesianGrid strokeDasharray="3 3" stroke="#555" />
                <XAxis dataKey="x" stroke="#bbb" />
                <YAxis stroke="#bbb" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#222",
                    color: "#fff",
                    borderRadius: "8px",
                  }}
                />
                <Legend />
                <Area
                  type="monotone"
                  dataKey="y"
                  stroke="#66BB6A"
                  fill="rgba(44, 48, 153, 0.3)"
                />
              </AreaChart>
            )}

            {/* Composed Chart */}
            {selectedGraph === "composed" && (
              <ComposedChart
                width={700}
                height={400}
                data={data}
                className="chart"
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#555" />
                <XAxis dataKey="x" stroke="#bbb" />
                <YAxis stroke="#bbb" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#222",
                    color: "#fff",
                    borderRadius: "8px",
                  }}
                />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="y"
                  stroke="#4FC3F7"
                  strokeWidth={3}
                  dot={{ r: 5, fill: "#4FC3F7" }}
                />
                <Bar dataKey="y" fill="#0077b6" radius={[6, 6, 0, 0]} />
              </ComposedChart>
            )}

            {/* Radar Chart */}
            {selectedGraph === "radar" && (
              <RadarChart
                outerRadius={150}
                width={700}
                height={400}
                data={data}
                className="chart"
              >
                <PolarGrid />
                <PolarAngleAxis dataKey="x" />
                <PolarRadiusAxis angle={30} domain={[0, 100]} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#222",
                    color: "#fff",
                    borderRadius: "8px",
                  }}
                />
                <Radar
                  name="Radar Data"
                  dataKey="y"
                  stroke="#4FC3F7"
                  fill="#4FC3F7"
                  fillOpacity={0.6}
                />
              </RadarChart>
            )}
          </div>
        )}
      </div>

      {/* Go Back Button - Now Fixed at the Bottom */}
      <div className="back-button-container">
        <button onClick={() => navigate("/")} className="back-button">
          Go Back
        </button>
      </div>
    </div>
  );
};

export default GraphPage;

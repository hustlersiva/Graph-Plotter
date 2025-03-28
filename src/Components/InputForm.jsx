import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGraph } from "../context/GraphContext";
import Papa from "papaparse";

const InputForm = () => {
  const { setData } = useGraph();
  const [xValues, setXValues] = useState("");
  const [yValues, setYValues] = useState("");
  const [file, setFile] = useState(null);
  const [isRandom, setIsRandom] = useState(false);
  const navigate = useNavigate();

  // Handle submit of the form data
  const handleSubmit = (e) => {
    e.preventDefault();

    if (file) {
      // Parse the CSV file
      const reader = new FileReader();
      reader.onload = () => {
        const csvData = Papa.parse(reader.result, { header: false });
        const xArray = csvData.data.map((row) => parseFloat(row[0]));
        const yArray = csvData.data.map((row) => parseFloat(row[1]));

        if (xArray.length !== yArray.length) {
          alert("X and Y axis values must have the same length.");
          return;
        }

        setData(xArray.map((x, index) => ({ x, y: yArray[index] })));
        navigate("/graph");
      };
      reader.readAsText(file);
    } else if (isRandom) {
      // Generate random data if enabled
      const randomX = Array.from({ length: 10 }, (_, i) => i * 10);
      const randomY = Array.from({ length: 10 }, () =>
        Math.floor(Math.random() * 100)
      );

      setData(randomX.map((x, index) => ({ x, y: randomY[index] })));
      navigate("/graph");
    } else {
      // Use manual data input
      const xArray = xValues.split(",").map(Number);
      const yArray = yValues.split(",").map(Number);

      if (xArray.length !== yArray.length) {
        alert("X and Y axis values must have the same length.");
        return;
      }

      setData(xArray.map((x, index) => ({ x, y: yArray[index] })));
      navigate("/graph");
    }
  };

  // Handle file upload
  const handleFileChange = (e) => {
    const uploadedFile = e.target.files[0];
    if (uploadedFile && uploadedFile.type === "text/csv") {
      setFile(uploadedFile);
    } else {
      alert("Please upload a valid CSV file.");
    }
  };

  // Toggle random data generation
  const handleRandomDataChange = (e) => {
    setIsRandom(e.target.checked);
    setXValues("");
    setYValues("");
    setFile(null);
  };

  return (
    <div className="container">
      <h2 className="header"> 📈 Enter Graph Data</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>X-axis values (comma-separated)</label>
          <input
            type="text"
            value={xValues}
            onChange={(e) => setXValues(e.target.value)}
            placeholder="e.g. 10, 20"
            required={!isRandom && !file}
            disabled={isRandom || file}
          />
        </div>

        <div>
          <label>Y-axis values (comma-separated)</label>
          <input
            type="text"
            value={yValues}
            onChange={(e) => setYValues(e.target.value)}
            placeholder="e.g. 15, 25"
            required={!isRandom && !file}
            disabled={isRandom || file}
          />
        </div>

        {/* File upload option */}
        <div>
          <label>Upload CSV file</label>
          <input
            type="file"
            accept=".csv"
            onChange={handleFileChange}
            disabled={isRandom}
            className="upload"
          />
        </div>

        {/* Random data generation toggle */}
        <div className="check-container">
          <label>
            <input
              type="checkbox"
              checked={isRandom}
              onChange={handleRandomDataChange}
            />
            Generate random data
          </label>
        </div>

        <button type="submit">Plot</button>
      </form>
    </div>
  );
};

export default InputForm;

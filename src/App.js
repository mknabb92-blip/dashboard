import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import StatsCard from "./components/StatsCard";
import Graph from "./components/Graph";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="dashboard-container">
          <StatsCard />
          <StatsCard />
          <StatsCard />
        </div>
        <Graph />
      </div>
    </Router>
  );
}

export default App;

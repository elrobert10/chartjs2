import logo from './logo.svg';
import './App.css';
import BarChart from './Charts/BarChart';
import DoughnutChart from './Charts/DoughnutChart';
import LineChart from './Charts/LineChart';
import PieChart from './Charts/PieChart';

function App() {
  return (
    <div className="App">
    <h2>
      <PieChart />
    </h2>
    </div>
  );
}

export default App;

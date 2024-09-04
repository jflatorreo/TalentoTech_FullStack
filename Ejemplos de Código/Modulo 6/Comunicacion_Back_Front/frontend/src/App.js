import logo from './logo.svg';
import './App.css';
import DataFetcher from "./components/DataFetcher";
import AxiosFetcher from "./components/AxiosFetcher";
function App() {
  return (
    <div className="App">
        <DataFetcher></DataFetcher>
        <AxiosFetcher></AxiosFetcher>
    </div>
  );
}

export default App;

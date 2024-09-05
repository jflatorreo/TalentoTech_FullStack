import logo from './logo.svg';
import './App.css';
import DataFetcher from "./components/DataFetcher";
import AxiosFetcher from "./components/AxiosFetcher";
import useDataManager from "./components/useDataManager";
function App() {

    const {data,loading,error} = useDataManager('https://faf2-186-148-166-110.ngrok-free.app/api/data');

    if (loading) return <div>Loading...</div>;

    if (error) return <div>Error! {error}</div>;

  return (
    <div className="App">
        <div><h1>Datos recibidos por el Hook</h1>
        <p>{data?.message}</p>
        </div>
        <DataFetcher></DataFetcher>
        <AxiosFetcher></AxiosFetcher>
    </div>
  );
}

export default App;

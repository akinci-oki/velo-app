import "./App.scss";
import Map from "./components/Map/Map";
import Home from "components/Homepage/Home";

function App (): JSX.Element {
    return (
        <div className="App">
            <Home></Home>
            <Map></Map>
        </div>
    );
}

export default App;

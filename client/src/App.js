import {BrowserRouter as Router} from "react-router-dom";
import {DataProvider} from "./GlobalState";
import Header from "./components/header";
import Pages from "./components/mainpages/Pages";

function App() {
    return (
        <DataProvider>
            <Router>
                <div className="App container mx-auto">
                    <Header/>
                    <Pages/>
                </div>
            </Router>
        </DataProvider>
    );
}

export default App;

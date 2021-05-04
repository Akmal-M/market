import {BrowserRouter as Router} from "react-router-dom";
import {DataProvider} from "./GlobalState";
import Header from "./components/header";
import Main from "./components/mainpages/main";

function App() {
    return (
        <DataProvider>
            <Router>
                <div className="App">
                    <Header/>
                    <Main/>
                </div>
            </Router>
        </DataProvider>
    );
}

export default App;

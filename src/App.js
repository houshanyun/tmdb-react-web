
import Main from "./components/Main"
import Nav from "./components/Nav"
import Search from "./components/Search"


const App = () => {

    return (
        <div className="App">
            <Nav />
            <div className="test">
                <Search />
            </div>
            <Main />
        </div>
    )
}

export default App;

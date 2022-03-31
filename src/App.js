import Nav from "./components/Nav"
import Header from "./components/Header"
import Main from "./components/Main"
import "./App.scss"



const App = () => {

    return (
        <div className="App">
            <Nav />
            <Header />
            <div className="test">
            </div>
            <Main />
        </div>
    )
}

export default App;

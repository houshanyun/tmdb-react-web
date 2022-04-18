import Nav from "./components/Nav"
import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"
import "./App.scss"
import ToTop from "./global/ToTop"

const App = () => {

    return (
        <div className="App">
            <ToTop />
            <Nav />
            <Header />
            <Main />
            <Footer />
        </div>
    )
}

export default App;

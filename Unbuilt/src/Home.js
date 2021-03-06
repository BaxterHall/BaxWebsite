import React from 'react'
import App from './App';
import About from './About';
import Portfolio2 from './Portfolio2';
import Footer from './Footer';
import NavBar from './Navbar'


class Home extends React.Component {
    componentDidMount() {
        document.title = "Baxter Hall"
    }
    render() {
        return (
            <div>
                <NavBar />
                <App />
                <About/>
                <Portfolio2/>
                <Footer />
            </div>
        )
    }
}
export default Home;
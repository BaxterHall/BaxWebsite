import React from 'react'
import App from './App';
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
                <Footer />
            </div>
        )
    }
}
export default Home;
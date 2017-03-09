import React from 'react';

class Footer extends React.Component {
    render() {
        return (
            <footer className='footer'>
                <a className='insta' title="follow me on instagram" href="http://www.instagram.com/hawkbrogen" target="_blank" >
                    <i className="fa fa-instagram fa-3x" aria-hidden="true"></i>
                </a>
                <a className='twitta' title="follow me on Twitter" href="http://www.twitter.com/hawkbrogen" target="_blank" >
                    <i className="fa fa-twitter-square fa-3x" aria-hidden="true"></i>
                </a>
                <a className='linked' title="add me on linkedIn" href="http://ca.linkedin.com/pub/baxter-hall/103/265/782" target="_blank" >
                    <i className="fa fa-linkedin-square fa-3x" aria-hidden="true"></i>
                </a>
                <a className='git' title="check out my github"
                    href="http://github.com/BaxterHall" target="_blank" >
                    <i className="fa fa-github-square fa-3x" aria-hidden="true" ></i>
                </a>
            </footer>
        )
    }
}
export default Footer
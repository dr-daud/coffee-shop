import { Component } from 'react';


import './main-footer.css';

class MainFooter extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div className='main-footer'>
                <div className="footer-menu">
                    <img src="./icons/Group_black.png" alt="coffeebeanlogo" className="coffeebean-footer" />
                    <ul className="nav-menu-items-footer">
                        <li><a href="#">Coffee house</a></li>
                        <li><a href="#">Our coffee</a></li>
                        <li><a href="#">For your pleasure</a></li>
                    </ul>
                </div>
                <div className="lines-footer">
                        <div className="second-leftline-footer"></div>
                        <img src="./icons/coffeebeans_black.png" alt="coffeebeanlogo" className='threebeans-footer'/>
                        <div className="second-rightline-footer"></div>
                </div>
            </div>
        )
    }
}

export default MainFooter
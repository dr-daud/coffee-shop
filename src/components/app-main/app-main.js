import { Component } from 'react';


import './app-main.css';

class AppMain extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <div className="promo">
                    <img src="./icons/Group.png" alt="coffeebeanlogo" className="coffeebean" />
                    <nav className="nav-menu">
                        <ul className="nav-menu-items">
                            <li><a href="#">Coffee house</a></li>
                            <li><a href="#">Our coffee</a></li>
                            <li><a href="#">For your pleasure</a></li>
                        </ul>
                    </nav>
                    <h1 className="aboutcoffee">Everything You Love About Coffee</h1>
                    <div className="lines">
                        <div className="leftline"></div>
                        <img src="./icons/coffeebeans.png" alt="coffeebeanlogo" className='threebeans'/>
                        <div className="rightline"></div>
                    </div>
                    <p className="promo-text">We makes every day full of energy and taste <br />Want to try our beans?</p>
                    <button className='more'>More</button>
                </div>
            </div>
        )
    }
}

export default AppMain
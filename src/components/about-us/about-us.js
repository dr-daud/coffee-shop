import { Component } from 'react';


import './about-us.css';

class AboutUs extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div className="second-section">
                <h2>About Us</h2>
                <div className="lines">
                        <div className="second-leftline"></div>
                        <img src="./icons/coffeebeans_black.png" alt="coffeebeanlogo" className='threebeans'/>
                        <div className="second-rightline"></div>
                </div>
                <div className="about-text">
                        <p className="first-text">
                            Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                            Afraid at highly months do things on at. Situation recommend objection do intention
                            so questions. As greatly removed calling pleased improve an. Last ask him cold feel
                            met spot shy want. Children me laughing we prospect answered followed. At it went
                            is song that held help face. 
                        </p>
                        <br />
                        <p className="second-text">
                            Now residence dashwoods she excellent you. Shade being under his bed her, Much
                            read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
                            horrible but confined day end marriage. Eagerness furniture set preserved far
                            recommend. Did even but nor are most gave hope. Secure active living depend son
                            repair day ladies now.
                        </p>
                </div>
            </div>
        )
    }
}

export default AboutUs
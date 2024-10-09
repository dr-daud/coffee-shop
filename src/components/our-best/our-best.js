import { Component } from 'react';


import './our-best.css';

class OurBest extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div className="our-best-section">
                <h2>Our best</h2>
                <div className="card">
                    {this.props.data.map(item => {
                    return (
                            <div key={item.id} className="card-item">
                                <img src={item.Img} alt="coffeepacks" />
                                <div className="descr">{item.descr}</div>
                                <div className="price">{item.price} $</div>
                            </div>
                        )
                        })}
                </div>
            </div>
        )
    }
}

export default OurBest
import { Component } from 'react';

import AppMain from '../app-main/app-main';
import AboutUs from '../about-us/about-us';
import OurBest from '../our-best/our-best';
import MainFooter from '../main-footer/main-footer';

import './app.css';
import Image_1 from '../../assets/img/first-photo.jpg'
import Image_2 from '../../assets/img/second-photo.jpg'
import Image_3 from '../../assets/img/third-photo.jpg'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data : [
                {Img: Image_1, descr: 'Solimo Coffee Beans 2 kg', price: 10.73, id:1},
                {Img: Image_2, descr: 'Presto Coffee Beans 1 kg', price: 15.99,  id:2},
                {Img: Image_3, descr: 'AROMISTICO Coffee 1 kg', price: 6.99,  id:3}
            ]

        }
    }
    
    render() {
        return (
            <div className='wrapper'>
                <AppMain/>
                <AboutUs/>
                <OurBest
                data={this.state.data}/>
                <MainFooter/>
            </div>
        )
    }
}

export default App;
import React, { Component } from 'react';
import './App.css';
import Lag from './modules/Lag';
import { deltakere, lagnavn } from './resources/deltakere';
import ReactSVG from 'react-svg';
import Wheel from './img/wheel.svg'

function delOppiGrupper(deltakere, gruppestorrelse) {
    let grupper = [];
    for (let i = 0; i < deltakere.length; i += gruppestorrelse)
        grupper.push(deltakere.slice(i, i + gruppestorrelse));
    return grupper;
}

class App extends Component {
    render() {
        document.title = "DevSocial | Fangene På Fortet";
        const lag = delOppiGrupper(deltakere, 4);
        const lagMarkup = lag.map((gruppe, index)=><Lag deltakere={gruppe} navn={lagnavn[index]} key={lagnavn[index]} />)
        return (
            <div className="app-wrapper">
                <div className="App">
                    <header className="App-header">
                        <h1 className="App-title">Fangene på fortet</h1>
                    </header>
                    <section className="main-content">
                        <div className="laginndeling">
                            {lagMarkup}
                        </div>
                    </section>
                    <footer className="footer">
                        <h4>DevSocialClub</h4>
                    </footer>
                </div>
                <div className="rotate-wrapper">
                    <div className="rotate">
                        <ReactSVG path={Wheel}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;

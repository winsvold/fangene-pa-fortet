import React, { Component } from 'react';
import './App.css';
import Lag from './modules/Lag';
import { deltakere, lagnavn } from './resources/deltakere';

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
        const lagMarkup = lag.map((gruppe, index)=><Lag deltakere={gruppe} navn={lagnavn[index]}/>)
        return (
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
        );
    }
}

export default App;

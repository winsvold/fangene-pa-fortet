import React, { Component } from 'react';
import './App.css';
import Team from './modules/Team';
import { deltakere, lagnavn } from './resources/deltakere';
import ReactSVG from 'react-svg';
import Wheel from './img/wheel.svg'
import {finnGruppestorresler} from "./modules/gruppeStorelse";

function delOppiGrupper(deltakere, onsketGruppestorrelse) {
    const antallDeltakere = deltakere.length;
    const gruppeStorrelser = finnGruppestorresler(antallDeltakere, onsketGruppestorrelse);

    let grupper = [];
    let antallDeltakereIGrupper = 0;
    gruppeStorrelser.forEach((gruppestorrelse)=> {
        grupper.push(deltakere.slice(antallDeltakereIGrupper, antallDeltakereIGrupper + gruppestorrelse));
        antallDeltakereIGrupper += gruppestorrelse;
    });

    return grupper;
}

class App extends Component {
    render() {
        document.title = "DevSocial | Fangene På Fortet";
        const team = delOppiGrupper(deltakere, 4);

        const header =
            <header className="App-header">
                <h1 className="App-title">Fangene på fortet</h1>
            </header>;

        const teamMarkup = team.map( (gruppe, index) =>
            <Team deltakere={gruppe} navn={lagnavn[index]} key={lagnavn[index]} />
        );

        const mainContent =
            <section className="main-content">
                <div className="laginndeling">
                    {teamMarkup}
                </div>
            </section>;

        const footer =
            <footer className="footer">
                <h4>DevSocialClub</h4>
            </footer>;

        const rotatingWheel =
            <div className="rotate-wrapper">
                <div className="rotate">
                    <ReactSVG path={Wheel}/>
                </div>
            </div>;

        return (
            <div className="app-wrapper">
                <div className="App">
                    {header}
                    {mainContent}
                    {footer}
                </div>
                {rotatingWheel}
            </div>
        );
    }
}

export default App;

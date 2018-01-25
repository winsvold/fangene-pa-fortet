import React from 'react';
import PT from 'prop-types';

function Lag(props) {

    const deltakere = props.deltakere.map((deltaker)=><li key={deltaker}>{deltaker}</li>);
    return (
        <div className="lag">
            <h4>{props.navn}</h4>
            {deltakere}
        </div>
    );
}

Lag.defaultProps = {
    deltakere: [
        'Daniel',
        'Joakim',
        'Eigil',
        'Ketil'
    ],
    navn: ' '
};

Lag.propTypes = {
    deltakere: PT.arrayOf(PT.string).isRequired,
    navn: PT.string.isRequired
};

export default Lag;
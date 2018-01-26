import React from 'react';
import PT from 'prop-types';

function Team(props) {

    const deltakere = props.deltakere.map((deltaker) =>
        <li key={deltaker}>
            {deltaker}
        </li>
    );

    return (
        <div className="lag">
            <h4>{props.navn}</h4>
            {deltakere}
        </div>
    );
}

Team.propTypes = {
    deltakere: PT.arrayOf(PT.string).isRequired,
    navn: PT.string.isRequired
};

export default Team;
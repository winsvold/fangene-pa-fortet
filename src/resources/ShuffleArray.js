const deltakere = [
    'Daniel Winsvold',
    'Marte Pedersen',
    'Ida Onshus',
    'Kyrre Havik Eriksen',
    'Jan-Kåre Solbakken',
    'Live Grønlien',
    'Aasmund Nordstoga',
    'Terje Heen',
    'Karina',
    'Johnny Horvi',
    'Stig Øwre',
    'Håkon Planke Holm',
    'Dervis M',
    'Truls Jørgensen',
    'Sergio Haisch',
    'Ståle Kjone',
    'Mats Byfuglien',
    'Sten Røkke',
    'Jan-Olav Eide',
    'Heidi Braaen',
    'Jens-Otto Larsen',
    'Odd Einar Hoel',
    'Frode Sundby',
    'Per Olav Mariussen'
];

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

function nyeDeltakere() {
    console.log(shuffle(deltakere));
}

nyeDeltakere();
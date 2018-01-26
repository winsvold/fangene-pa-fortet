function finnGruppestorreslerRekursivt(antallDeltakere, onsketGruppestorrelse, minsteGruppestorrelse) {

    for (let i = onsketGruppestorrelse; i >= minsteGruppestorrelse; i--){
        const maxNumberOfGroupsOfThisSize = parseInt(antallDeltakere / i);

        if(i > antallDeltakere){
            continue;
        }

        for(let u = 1; u <= maxNumberOfGroupsOfThisSize; u++) {
            const antallDeltakereIgjen = antallDeltakere - u * i;

            if(antallDeltakereIgjen === i){
                continue;
            }

            if(antallDeltakereIgjen >= 0 && (antallDeltakereIgjen <= minsteGruppestorrelse)){
                let allowedGroupsOfThisSize;
                if(antallDeltakereIgjen < minsteGruppestorrelse && antallDeltakereIgjen !== 0) {
                    allowedGroupsOfThisSize = u - 1
                } else {
                    allowedGroupsOfThisSize = u
                }

                if(allowedGroupsOfThisSize === 0){
                    console.log('continue2');
                    continue;
                }

                const deltakereIgjen = antallDeltakere - allowedGroupsOfThisSize * i;

                return [
                    {
                        antallGrupper: allowedGroupsOfThisSize,
                        antalliGruppe: i
                    },
                    ...finnGruppestorreslerRekursivt(deltakereIgjen, i-1, minsteGruppestorrelse)
                ];
            }
        }
    }
    return [];
}

export function finnGruppestorresler(antallDeltakere, onsketGruppestorrelse) {
    const minsteGruppestorrelse = onsketGruppestorrelse -1;
    let rekursiveGrupper = finnGruppestorreslerRekursivt(antallDeltakere, onsketGruppestorrelse, minsteGruppestorrelse);

    let sumAvDeltakereIGrupper = rekursiveGrupper.reduce((accumulator, currentElement) =>  accumulator + currentElement.antalliGruppe * currentElement.antallGrupper, 0);
    let antallDeltakereUtenGruppe = antallDeltakere - sumAvDeltakereIGrupper;

    if( antallDeltakereUtenGruppe > minsteGruppestorrelse ) {
        rekursiveGrupper.push(
            {
                antallGrupper: 1,
                antalliGruppe: minsteGruppestorrelse
            }
        );
        sumAvDeltakereIGrupper = rekursiveGrupper.reduce((accumulator, currentElement) => {return +accumulator + +currentElement.antalliGruppe * +currentElement.antallGrupper}, 0);
        antallDeltakereUtenGruppe = antallDeltakere - sumAvDeltakereIGrupper;
    }

    let grupperStorrelser = rekursiveGrupper.reduce((accumulator, element)=> [...accumulator, ...Array(element.antallGrupper).fill(element.antalliGruppe)], []);

    if( antallDeltakereUtenGruppe > 0) {
        for(let i = 0; i < antallDeltakereUtenGruppe; i++){
            grupperStorrelser[grupperStorrelser.length - i - 1]++;
        }
    }

   return grupperStorrelser.sort((a,b) => b - a);
}

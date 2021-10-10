{
    let pokemon1 = {
        ime: 'pokemon1',
        vrsta: 'vrsta1',
        sposobnosti: ['sp1', 'sp2', 'sp3'],
        karakteristke: {
            napad: 89,
            odbraa: 60,
            brzina: 80
        }
    }
    let pokemon2 = {
        ime: 'pokemon2',
        vrsta: 'vrsta2',
        sposobnosti: ['sp1', 'sp2'],
        karakteristke: {
            napad: 89,
            odbraa: 60,
            brzina: 70
        }
    }
    let pokemon3 = {
        ime: 'pokemon3',
        vrsta: 'vrsta1',
        sposobnosti: ['sp2', 'sp3'],
        karakteristke: {
            napad: 89,
            odbraa: 60,
            brzina: 83
        }
    }
    let pokemon4 = {
        ime: 'pokemon4',
        vrsta: 'vrsta2',
        sposobnosti: ['sp1', 'sp4'],
        karakteristke: {
            napad: 89,
            odbraa: 60,
            brzina: 75
        }
    }

    let sviPokemoni = [pokemon1, pokemon2, pokemon3, pokemon4]


    const div1 = document.querySelector('#domacin')
    let btnpok

    btnPok1.addEventListener('click', () => {

        sviPokemoni.forEach(pok => {
            let divOkvir = document.createElement('div')
            let sp = ''
//let tekstKar
            //let pokToStr = JSON.stringify(pok)
            
            pok.sposobnosti.forEach(el => sp += '\n' + el)
            let x = pok.karakteristike

            let str = []
            for (const key in x) {
                z += key + ':' + x[key]
                str.push(z)
                console.log(z)
            }
            
           let nizSpan = str.map(x=>{
             let tekstKar = document.createElement('span')
                tekstKar.className = 'tekst'
                tekstKar.textContent = x
                return tekstKar
            })
            
                //p.innerHTML = pok.karakteristike.brzina
               
                btnpok = document.createElement('button')
                btnpok.textContent = pok.ime
                divOkvir.append(btnpok)
                divOkvir.className = 'divOkvir'
                
                btnpok.addEventListener('click', () => {
                let pokTekst = document.createElement('p')
                pokTekst.className = 'tekst'
                pokTekst.textContent += pok.vrsta + sp + '\n'
                divOkvir.append(pokTekst)
            })
            divOkvir.append(nizSpan)
            div1.append(divOkvir)
            btnPok1.className = 'hidden'
        })

    })
    const div2 = document.querySelector('#gost')
    let btnpok2
    btnPok2.addEventListener('click', () => {

        sviPokemoni.forEach(pok => {
            let divOkvir = document.createElement('div')
            let sp = ''
            pok.sposobnosti.forEach(el => sp += el)
            btnpok2 = document.createElement('button')
            btnpok2.textContent = pok.ime
            divOkvir.append(btnpok2)
            divOkvir.className = 'divOkvir'

            btnpok2.addEventListener('click', () => {
                let pokTekst = document.createElement('p')
                pokTekst.textContent += pok.vrsta + sp + '\n'
                pokTekst.className = 'tekst'
                divOkvir.append(pokTekst)

            })
            div2.append(divOkvir)
            btnPok2.className = 'hidden'
        })

    })

}


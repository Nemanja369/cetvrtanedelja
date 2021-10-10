// const pkm = () => {

    let raunarSkor = 0
    let mojSkor = 0
    let potezi = 0

    let compBira = (n) => {
        return Math.floor(Math.random() * n)
    }
    // const igraj = () => {
        let racunarNiz = ['papir', 'kamen', 'makaze']
        let racunarIzbor = racunarNiz[compBira(3)]


        const kamenBtn = document.querySelector('.kamen')
        const makazeBtn = document.querySelector('.makaze')
        const papirBtn = document.querySelector('.papir')
        const divglavni = document.querySelector('.pkm')
        console.log(racunarIzbor)

        let mojNiz = [kamenBtn, makazeBtn, papirBtn]
        let x = []

        mojNiz.forEach(el => {
            el.addEventListener('click', function () {
                let z = document.createElement('p')
                divglavni.appendChild(z)
               let mojSkorP = document.querySelector('.pSkor-moj')
                mojSkor++
                mojSkorP.textContent = mojSkor

            })
            console.log(x)
        })
        const pobednik = (igrac,racunar) => {
            const rez = document.querySelector('.result');
            const mojSkortbl = document.querySelector('.pSkor-oj');
            const kompSkortbl = document.querySelector('.psKor-komp');
            igrac = igrac.toLowerCase();
            racuna = racunar.toLowerCase();
            if(igrac === racunar){
                rez.textContent = 'Nereseno'
            }
            else if(igrac == 'kamen'){
                if(racunar == 'paper'){
                    rez.textContent = 'Racunar pobedio';
                    kompSkor++;
                    kompSkortbl.textContent = kompSkor;
      
                }else{
                    rez.textContent = 'Igrac pobedio'
                    mojSkor++;
                    kompSkortbl.textContent = mojSkor;
                }
            }
            else if(igrac == 'makaze'){
                if(racunar == 'kamen'){
                    rez.textContent = 'Racunar pobedio';
                    kompSkor++;
                    kompSkortbl.textContent = kompSkor;
                }else{
                    rez.textContent = 'Igrac pobedio';
                    mojSkor++;
                    mojSkortbl.textContent = mojSkor;
                }
            }
            else if(player == 'papir'){
                if(computer == 'makaze'){
                    rez.textContent = 'Racunar pobedio';
                    kompSkor++;
                    kompSkortbl.textContent = kompSkor;
                }else{
                    result.textContent = 'Igrac pobedio';
                    mojSkor++;
                    mojSkortbl.textContent = playerScore;
                }
            }
        }
    // }
    // igraj()
// }
// pkm()
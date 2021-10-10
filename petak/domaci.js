
let ime = document.querySelector('#ime')
let prezime = document.querySelector('#prezime')
let adresa = document.querySelector('#adresa')

let dugme = document.querySelector('#dugme')

dugme.addEventListener('click', () => {
    let tabela = document.querySelector('#tabela1')
    let noviElement = document.createElement('tr')
    noviElement.innerHTML = `
    <tr>
        <td>${ime.value}</td>
        <td>${prezime.value}</td>
        <td>${adresa.value}</td>
    </tr>`
    tabela.append(noviElement)
})


let prviBr = document.querySelector('#prviBroj')
let drugiBr = document.querySelector('#drugiBroj')
let saberi = document.querySelector('#zbir')
let calc = document.querySelector('#kalkulator')

function sabiranje(x, z){
    return x + z
}

saberi.addEventListener('click', ()=>{  
    let rez = document.createElement('p')
    rez.textContent = sabiranje(Number(prviBr.value), Number(drugiBr.value))
    calc.append(rez)
})

let cekB = document.querySelector('#cek')
cekB.addEventListener('change', (e)=>{
    if(e.target.checked){
        console.log('sss')
        calc.className = 'show'
    }else{
        calc.className = 'hidden'
    }
})

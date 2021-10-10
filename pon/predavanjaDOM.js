//Documet Object Model

//Selektovanje elemenata
//querySelector, querySelectorAll
// getElementById
let div1 = document.querySelector('.wrapper')
//  let p = document.querySelector('p')
//  p.innerHTML = '<h1>PRVI PARAGRAF</h1>'
//  p.innerHTML = ''
 let paragrafi = document.querySelectorAll('p')
// console.log(paragrafi);

// let p = document.getElementById('srednji')
// let paragrafi = document.getElementsByClassName('par')
// console.log(paragrafi);

//console.log(Array.from(paragrafi));

// let niz = ['text1','text2','text3']


// paragrafi.forEach((paragraf,i) => {
//     paragraf.textContent = niz[i]
// })


// div1.textContent = 'hello from js'
// console.log(div1);



let projekti = [
    {
        naslov: 'Naslov1',
        github: 'fjldgfd'
    },
    {
        naslov: 'Naslov2',
        github: 'fjldgfd'
    },
    {
        naslov: 'Naslov3',
        github: 'fjldgfd'
    },
    {
        naslov: 'Naslov4',
        github: 'fjldgfd'
    }
]


// paragrafi.forEach((paragraf, i)=>{
//     paragraf.textContent = projekti[i].naslov + ' -- '+ projekti[i].github
// })
// for (let i = 0; i < paragrafi.length; i++) {
//    console.log(paragrafi[i])
// }

//Menjanje elementa
// div1.innerHTML = ''
// div1.innerHTML = `<div class="wrapper">
// <p class="par">Par1</p>
// <p id="srednji">Par2</p>
// <p class="par">Par3</p>
// <p class="par">Par3</p>
// <button> klik </button>
// </div>`

// div1.id = 'prviDiv'
// div1.className = 'nekaKlasa wrapper'
// console.log(div1.classList);
// div1.classList.add('novaKLASA')
// console.log(div1.classList);
// div1.classList.remove('novaKLASA')
// console.log(div1.classList);

//kreiranje elemenata

let noviPar = document.createElement('p')
noviPar.textContent = 'Novokreirani paragraf iz js-a'
let lista = document.createElement('ul')

let item = document.createElement('li')
item.textContent = 'item1'
lista.appendChild(item)

//div1.appendChild(noviPar)
div1.append(noviPar,lista)

//brisanje elementa
div1.removeChild(lista)
noviPar.remove()



//parent

let li2 = document.querySelector('#li2') 

//li2.parentElement.remove()
console.log(li2.parentNode);
let duplikat = li2.parentNode.cloneNode(true)
console.log(duplikat);

console.log(div1.childNodes);
console.log(div1.children);

let btnObrisi = document.querySelector('button')


btnObrisi.addEventListener('click',(event)=>{
    console.log(event);
    console.log('klik');
    div1.remove()
})

let btnReplace = document.createElement('button')
btnReplace.textContent = 'Replace'

btnObrisi.parentNode.replaceChild(btnReplace,btnObrisi)
//btnObrisi.replaceWith(btnReplace)


let forma = document.querySelector('form')
let inputText = document.querySelector('input[type=text]')
let inputPass = document.querySelector('#pass')
forma.addEventListener('submit',(event)=>{
    event.preventDefault()

    if(inputPass.value.length>4){
        console.log(inputPass.value);
    }else{
        console.warn('greska pri unosu ')
    }
    let izmenjen = inputText.value.toUpperCase()
    console.log(izmenjen);
   

})




let srednjiPar = document.querySelector('#srednji')

srednjiPar.addEventListener('click',(event)=>{
    console.log(event.target);
    //srednjiPar.style.color = 'red'
    //srednjiPar.classList.add('crveni')
    event.target.classList.add('crveni')
})
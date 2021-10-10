sviBlogovi = [

]


let blogHtlm = document.createElement('div')
let autorInput = document.querySelector('#autor')
let tekstInput = document.querySelector('#tekstarea')
let btnInsert = document.querySelector('#insert')

const dodaj = () => {
   

    autor.textContent = blog.autor
    tekst.textContent = blog.tekst

    let blog = {
        autor : inputAutor.value,
        tekst : inputTekst.value
    }
    sviBlogovi.push(blog)
    console.log(sviBlogovi)

}
btnInsert.addEventListener('click', ()=>{
    dodaj(blog)
})

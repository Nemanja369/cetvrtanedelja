// 1. Zadatak:
// napraviti strukturu kao iz html fajla ali sve preko js-a
{/* <div class="wrapper">
        <div class="section">
            <p>Paragraf</p>
        </div>
        <div class="section main">
            <ul>
                <li id='1'>1</li>
                <li id='2'>2</li>
                <li id='3'>3</li>
            </ul>
            <button id="btnKlik">KLIK</button>
        </div>
    </div> */}

    let divWrapp = document.createElement('div')
    divWrapp.classList.add('wrapper')
    
    // divWrapp.innerHTML = ` <div class="section">
    // <p>Paragraf</p>
    // </div>
    // <div class="section main">
    // <ul>
    //     <li id='1'>1</li>
    //     <li id='2'>2</li>
    //     <li id='3'>3</li>
    // </ul>
    // <button id="btnKlik">KLIK</button>
    // </div>`
    
    let div1 = document.createElement('div')
    div1.classList.add('section')
    
    let p1 = document.createElement('p')
    p1.textContent = 'Paragraf'
    
    div1.appendChild(p1)
    
    let div2 = document.createElement('div')
    div2.classList.add('section','main')
    
    let lista = document.createElement('ul')
    
    for (let i = 1; i <= 3; i++) {
        let item = document.createElement('li')
        item.textContent = i
        item.id = i+''
        lista.appendChild(item)
    }
    
    let btnKlik = document.createElement('button')
    btnKlik.id = 'btnKlik'
    btnKlik.textContent = 'Klik'
    
    div2.append(lista,btnKlik)
    divWrapp.append(div1,div2)
    
    document.body.append(divWrapp)
    
    
    
    //2. Zadatak:
    // Umesto paragrafa u prvom divu sa klasom section
    // dodati 20 paragrafa koji sadrze svoje redni broj kao tekst
    // (paragraf koji je bio pre toga tu treba da se obrise)
    
    // div1.innerHTML = ''
    p1.remove()
    for (let i = 1; i <= 20; i++) {
        let p = document.createElement('p')
        p.textContent = i
        div1.append(p)
    }
    
    
    //3. Zadatak:
    // U prvi div sa klasom section dodati jos 20 paragrafa koji u sebi sadrze dugme sa tekstom `obrisi me ${i}` gde je i redni broj dugmeta  
    //Na klik na svako dugme `obrisi me i` treba da se obrise sa stranice dugme na koje je kliknuto
    
    for (let i = 1; i <= 20; i++) {
        let p = document.createElement('p')
        let btnObrisi = document.createElement('button')
        btnObrisi.textContent = `obrisi me ${i}`
        btnObrisi.addEventListener('click',()=>{
           //event.target.remove()
           btnObrisi.remove()
        })
        p.append(btnObrisi)
        div1.append(p)
    }
    
    //4. Zadatak:
    // Za dugme sa id = btnKlik dodati osluskivac dogadjaja klik koji na klik tog dugmeta brise wrapper div element
    btnKlik.addEventListener('click',()=>{
        divWrapp.remove()
        //btnKlik.parentElement.parentElement.remove()
        
    })
    
    //5. za sledeci html:
    
    {/* <div class = "box">
    <ul class = 'lista2'>
        <li> prvi </li>
        <li> drugi </li>
        <li> treci</li>
    </ul>
    </div> */}
    
    //selektovati sve li elemente (kao listu ili niz)
    let items = document.querySelectorAll('ul.lista2 li')
    console.log(items);
    
    // za svaki li element koji je na poziciji deljivoj sa 3 dodati klasu "styledLi3" i "styledLi" a za sve ostale samo klasu "styledLi"
    items.forEach((item,i)=>{
        if(i%3 == 0){
            item.classList.add('styledLi3')
        }
        item.classList.add('styledLi')
    })
    
    
    //6. Zadatak
    // dati niz filmova prikazati na stranici na sledeci nacin
    //prikaz za jedan film:
    
    let filmovi = [
        {
            naziv: 'film1',
            slika: 'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg',
            opis: 'opis filma',
            ocena: [2]
        },
        {
            naziv: 'film2',
            slika: 'film.jpg',
            opis: 'opis filma  hg hg hgfdgkfhg ghjkfghdfjkgh dfghdfkhg jghfdkhghgdfhgkghdfjgjfdh ghdfghjghhhhhj',
            ocena: [4,32,4]
        },
        {
            naziv: 'film3',
            slika: 'film.jpg',
            opis: 'opis filma',
            ocena: [4,3,6]
        },
        {
            naziv: 'film4',
            slika: 'film.jpg',
            opis: 'opis filma',
            ocena: [3,2,5]
        }
    ]
    {/* <div class="film">
    <img width="90px" src="film.jpg">
    <h2 class="naziv">Film1</h2>
    <p class="opis">Neki opis konkretnog filma</p>
    </div> */}
    let divFilmovi = document.querySelector('.filmovi')
    filmovi.forEach(film=>{
        let div = document.createElement('div')
        div.className= 'film'
    
        let img = document.createElement('img')
        img.style.width = '90px'
        img.src = film.slika
    
        let h2 = document.createElement('h2')
        h2.className = 'naziv'
        h2.textContent = film.naziv
    
        let p = document.createElement('div')
        p.className = 'opis'
        p.textContent = film.opis
        p.addEventListener('mouseenter',()=>{
            // p.classList.remove('skupi')
            // p.classList.add('prosiri') 
    
            p.style = 'overflow: visible; color:red '
        })
        p.addEventListener('mouseout',()=>{
            // p.classList.remove('prosiri')
            // p.classList.add('skupi')
            p.style = 'overflow: hidden'
        })
    
        let oceneDiv = document.createElement('div')
        //film.ocena.forEach(o=> {oceneDiv.innerHTML +=`<span>${o}</span>`})
        let nizSpan = film.ocena.map(o=>{
            let s = document.createElement('span')
            s.textContent = o
            return s
        })
        oceneDiv.append(...nizSpan)
        div.append(img,h2,p,oceneDiv)
        divFilmovi.append(div)
    })
    
    
    //dodatak: kada kursor misa udje u prostor za opis tekst treba da se prosiri a kada izadje da se skupi
    //raditi preko dodavanje event listener-a
    // mouseenter , mouseout
    
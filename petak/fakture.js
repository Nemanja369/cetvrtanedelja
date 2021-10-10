let nizFaktura = [
    {
        name: "Ime kompanije",
        pib: "12345678",
        dateIssued: "2019-11-18",
        value: 1000,
        currency: "RSD",
        timeStamp: "10:29:21",
        dateStamp: "2019-11-18"
    },
    {
        name: "Ime kompanije",
        pib: "78945612",
        dateIssued: "2019-11-18",
        value: 1500,
        currency: "RSD",
        timeStamp: "10:29:21",
        dateStamp: "2019-11-18"
    }
]
let itemList = document.querySelector('#item-list')
let btnInsert = document.querySelector('#btn-add')
const inputContainer = document.querySelector('.input-container')

const isValid = faktura => faktura.name != ''
    && faktura.pib.length == 8
    && !isNaN(faktura.pib)
    && !isNaN(faktura.value)

const addToDom = faktura => {
    let itemCont = document.createElement('div')
    itemCont.className = 'item-container'
    itemCont.innerHTML = `
                <div>
                <label class="company-name">${faktura.name}</label>
                <label class="company-pib">${faktura.pib}</label>
                <label class="time-created">${faktura.dateIssued}</label>
                <label class="price-value">${faktura.value}</label>
                </div >
            <div>
            <label class="insert-timestamp">
                <span>[${faktura.dateStamp}]</span><span>@${faktura.timeStamp}</span>
            </label>S
            </div`

    const delBtn = document.createElement('button')
    delBtn.textContent = 'Obrisi'
    itemCont.appendChild(delBtn)
    itemList.append(itemCont)

    delBtn.addEventListener('click', () => {
        delBtn.parentElement.remove()
        nizFaktura.splice(nizFaktura.indexOf(faktura), 1)
    })


}
let notValid = document.createElement('p')
notValid.textContent = 'Forma nije validna'
notValid.style.color = 'red'
notValid.hidden = true
inputContainer.append(notValid)

//insert
btnInsert.addEventListener('click', () => {

    let inputName = document.querySelector('#txt-company-name')
    let inputPib = document.querySelector('#txt-company-pib')
    let inputDate = document.querySelector('#txt-time')
    let inputValue = document.querySelector('#txt-value')

    let time = new Date()

    let faktura = {
        name: inputName.value.trim(),
        pib: inputPib.value.trim(),
        dateIssued: inputDate.value,
        value: Number(inputValue.value.trim()),
        currency: "RSD",
        timeStamp: time.getHours() + ':' + time.getMinutes() + ':' + time.getSeconds(),
        dateStamp: time.toDateString()
    }

    if (isValid(faktura)) {
        nizFaktura.push(faktura)
        addToDom(faktura)
        console.log(nizFaktura)
        notValid.hidden = true
    } else {
        notValid.hidden = false
    }

    inputName.value = ''
    inputPib.value = ''
    inputDate.value = ''
    inputValue.value = ''
})

const btnIspis = document.createElement('button')
btnIspis.textContent = 'ISPISI'

btnIspis.addEventListener('click', () => {
    notValid.hidden = true
    itemList.innerHTML = ''
    nizFaktura.forEach(faktura => {
        addToDom(faktura)
    });
})
inputContainer.append(btnIspis)

inputContainer.childNodes.forEach(chN => {
    if(chN.type != 'submit'){
        chN.addEventListener('click', ()=>{
            notValid.hidden = true
        })
    }
})
// let faktura = document.querySelector('item-list')


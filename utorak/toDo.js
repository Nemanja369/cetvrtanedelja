
const inputTxt = document.querySelector('#input-text')
const forma = document.querySelector('#forma')
const divLista = document.querySelector('#lista')
const divIspis = document.querySelector('#ispis')

let todos = []
let count = 0

const addToDom = item =>{
    const divItem = document.createElement('div')
    divItem.classList.add('item')
    let check = document.createElement('input')
    check.type = 'checkbox'
    check.name =  'chbx'
    check.id =  'chbx'
    check.className = ''
    check.setAttribute('unchecked', null)
    divItem.append(check)
console.log(divItem)
    const pText = document.createElement('p')
    pText.textContent = inputTxt.value

    const btnDel = document.createElement('button')
    btnDel.textContent = 'X'
    
    btnDel.addEventListener('click',()=>{
        divItem.remove()

        let index = todos.findIndex(todo=>todo.id == item.id )
        todos.splice(index,1)

        console.log(todos);
       
    
    })
    check.addEventListener('click', ()=>{
        if(check.nextSibling.className == ''){
            item.isDone = true
           check.nextSibling.className = 'checked'
            console.log(item.isDone)
        }else if(check.nextSibling.className == 'checked'){
            item.isDone = false
            check.nextSibling.className = ''
        }
    })
    // <input type="checkbox" name="html" value="html" id="html">
    // <label for="html">HTML</label><br>
  
divItem.append(pText,btnDel)  
divIspis.append(divItem)

inputTxt.value = ''
}
forma.addEventListener('submit',(event)=>{
    event.preventDefault()
    
    let item =  {
        id:count++,
        text: inputTxt.value,
        isDone : false
    }
    todos.push(item)

  addToDom(item)

})




 
const body = document.querySelector('body')


const inputone = document.querySelector('#inputname')
const inputtwo = document.querySelector('#inputemail')
const inputthree = document.querySelector('#inputnumber')

const parent = document.querySelector('ul')

const form = document.querySelector('form')
const span = document.querySelector("span")


const start_btn = document.querySelector('#clickbutton')

start_btn.style.backgroundColor = "btn-success"
  start_btn.style.borderRadius = "20px"
  start_btn.style.width = "100px"


function Save(e){
    e.preventDefault()
    const livalue = []
    livalue.push(inputone.value)
    livalue.push(inputtwo.value)
    livalue.push(inputthree.value)



    const li = document.createElement('li')
    li.className = "list-group-item w-50 mt-2 bg-info border-0"
    parent.appendChild(li)
     li.innerHTML = livalue.join('</br>')

     const dlt = document.createElement('button')
     dlt.className = "btn btn-danger p-2 float-end"
     dlt.innerText = "DELETE"
     li.appendChild(dlt)
     form.reset()

}
const saveButton = document.querySelector('#savebutton')


saveButton.addEventListener('click', Save)


parent.addEventListener('click', deleteTodo)

function deleteTodo(e){

    if(e.target.className.includes("btn-danger")){
        li = e.target.parentElement
        li.remove()
    }

};

let count = 1

function  changeTheme(e){
   if(count % 2 == 0){
    body.style.backgroundColor = "black"
    start_btn.style.backgroundColor = "gray"
   start_btn.style.color="solid black"
    start_btn.style.borderRadius = "20px"
    start_btn.style.width = "200px"
   }else{
    body.style.backgroundColor = "aqua"
    start_btn.style.backgroundColor = "black"
    start_btn.style.color="white"
    start_btn.style.borderRadius = "20px"
    start_btn.style.width = "200px"
    start_btn.style.border="1px solid black"
   }

   count = count +  1

}

start_btn.addEventListener('click', changeTheme);
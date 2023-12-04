const submit = document.querySelector(".Submit")

const input = document.querySelector(".display")

const edit = document.querySelector(".edit")
const editor = document.querySelector(".editor")
const remov = document.querySelector(".delete")
const demo = document.querySelector(".demo")
const clear = document.querySelector(".clear")
let arr=[]
let e =[]
submit.addEventListener("click", function(){
    if(input.value!=''){
        arr.push(input.value)

    }
    e.push('<button class="delete">delete</button>')
    
    let a=''
    let b=''
    for(let i=0;i<arr.length;i++){
        a+=(i+1)+ '. ' +arr[i] + '<br/><br/>' 
        demo.innerHTML=a 
        b+=e[i] + '<br/><br/>' 
        editor.innerHTML=b
    }
    input.value =''
})


clear.addEventListener("click", function(){
    arr=[]
    demo.innerHTML =''
    editor.innerHTML=''
})



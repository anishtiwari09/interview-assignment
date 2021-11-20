// table1
let currentEvent=null; //for changeing 
let count=4;
var table1Ele=document.getElementById('table1')
var table2Ele=document.getElementById('table2')
var table3Ele=document.getElementById('table3')
// table 1
function table1(e)
{
let parent=e.target.parentNode.parentNode
let child=parent.querySelectorAll('td')
let arr=[count]
for(let i=1;i<child.length;i++)
arr.push(child[i].textContent)
updateTable2(arr)
parent.remove()
if(table1Ele.children[1].children.length<1)
{
    table1Ele.parentNode.setAttribute('class','hidden')
}
}
function updateTable2(data)
{
let row=document.createElement('tr')
for(let i=0;i<8;i++)
{
    let cell=document.createElement('td')
    if(i==0)
    {
        let button=document.createElement('button')
        button.textContent="Edit"
        button.setAttribute('class','edit')
        button.addEventListener('click',updateTable3)
        cell.append(button)

    }
    
    
    

    row.append(cell)
}
count++;
table2Ele.append(row)

let targetRow=table2Ele.querySelectorAll('tr')
table2(data,targetRow[targetRow.length-1])
}
function table2(data,element)
{
   
    
    for(let i=0;i<data.length;i++)
    {
        element.children[i+1].textContent=data[i]
    }
}
function updateTable3(e)
{
    table3Ele.parentNode.setAttribute('class','visible ')
    let target=e.target.parentNode.parentNode
   // console.log(target.children.length)
    let row=table3Ele.children[1].children[0]
     row.children[0].textContent=target.children[1].textContent
    for(let i=2;i<target.children.length;i++)
    {
    row.children[i-1].children[0].value=target.children[i].textContent
    
}
currentEvent=target
}

window.addEventListener('load',()=>{
let selectBtn=document.querySelectorAll('.selectBtn')
for(let i=0;i<selectBtn.length;i++)
{
    
selectBtn[i].addEventListener('click',table1)}
let editBtn=document.getElementsByClassName('edit') 
for(let btn of editBtn)
btn.addEventListener('click',updateTable3)
let submitBtn=document.getElementById('submit')
submitBtn.addEventListener('click',table3)
})
function table3()
{
    let row=table3Ele.children[1].children[0]
    let data=[]
    data.push(row.children[0].textContent)
    
    for(let i=1;i<row.children.length-1;i++)
    data.push(row.children[i].children[0].value)
   table2(data,currentEvent)
   table3Ele.parentNode.setAttribute('class','hidden')
    
}
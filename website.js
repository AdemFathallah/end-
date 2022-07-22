

function add()
{
   var x= document.getElementById("number").innerText;
   document.getElementById("number").innerText=Number(x)+1;

   div =document.createElement("p")
   div.innerText=document.getElementById("desc").innerText + document.getElementById("price").innerText;
   div.setAttribute("class","item")


   document.getElementById("dropdown").appendChild(div)
}
function show()
{
    document.getElementById("dropdown").style.display="block"
}
document.getElementById("price").addEventListener("click",hello)
function hello()
{
    alert("hello")
}
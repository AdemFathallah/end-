function show(){
    if(document.getElementById("dropdown").style.display=="block")
    document.getElementById("dropdown").style.display="none"
    else
    document.getElementById("dropdown").style.display="block"
}

  function add()
  {
    var Number
    document.querySelectorAll('.add').forEach(item=>{
        item.addEventListener('click',event =>{
            console.log(item.parentElement)
            itemcopy = item.parentElement.cloneNode(true);
      itemcopy.setAttribute("class","added-item")
      document.getElementById("number").innerText= Number(document.getElementById("number").innerText)+1
            document.getElementById("dropdown").append(itemcopy)
        })
    })
  }
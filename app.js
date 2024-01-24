function add_todo(){
    var x = document.getElementById('task').value

    //In JavaScript, a node is an object that represents an HTML element, text, comment, or attribute in the Document Object Model (DOM) tree1. The DOM is a tree structure that represents the HTML of a website, and every HTML element is a node2. You can use JavaScript to create new HTML elements and add them to the DOM

    const node = document.createElement('div')     //it creates an element of type div with a return value  (tagname of element is node.)
    node.className = "list-group-item list-group-item-primary mb-2"
    const textnode = document.createTextNode(x)     //x is the string which contains text data, and returns text node . 
    node.appendChild(textnode)
    var b = document.createElement('button')
    b.className = "btn btn-danger"
    b.textContent = "Delete"
    b.style = "float:right;"
    b.onclick = delete_todo
    node.appendChild(b)
    var e = document.createElement('button')
    e.className = "btn btn-warning"
    e.textContent = "Edit"
    e.style = "float:right;"
    e.onclick = edit_todo
    node.appendChild(e)
    document.getElementById('result').appendChild(node)
    document.getElementById('task').value = ""
}

function clear_todo(){
    document.getElementById('result').innerHTML = ""
}

function delete_todo(b){
    b.target.parentElement.remove()
}

function edit_todo(e){
    const newdiv = document.createElement('div')
    newdiv.className = 'container text-center mt-3'
    var i = document.createElement('input')
    i.className = "form-control"
    i.setAttribute("type","text")
    newdiv.appendChild(i)
    var b1 = document.createElement('button')
    b1.className = "btn btn-success"
    b1.textContent = "Update"
    b1.onclick = edit_text
    newdiv.appendChild(b1)
    var b2 = document.createElement('button')
    b2.className = "btn btn-danger"
    b2.textContent = "Close"
    b2.onclick = close_box
    newdiv.appendChild(b2)
    e.target.parentElement.appendChild(newdiv)
}

function edit_text(e){
    y = e.target.parentElement.firstChild.value
    const textnode1 = document.createTextNode(y)
    e.target.parentElement.parentElement.replaceChild(textnode1, e.target.parentElement.parentElement.firstChild)
    e.target.parentElement.remove()
}

function close_box(e){
    e.target.parentElement.remove()
}
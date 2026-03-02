    function showSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}
function hideSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}

let books = document.querySelector('#looks')
books.onclick = function () {
    alert('Thanks for coming')
}

document.getElementById("modeBtn").onclick = function(){
            if(document.body.style.background === "black"){
                document.body.style.background = "white";
                document.body.style.color = "black"
            } else {
                document.body.style.background = "black"
                document.body.style.color = "white"
            }
        }
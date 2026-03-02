function showNotification(message, isSuccess = true) {
      const notification = document.getElementById('notification');
      notification.textContent = message;
      notification.style.background = isSuccess ? '#2ecc71' : '#e74c3c';
      notification.style.display = 'block';
      
      setTimeout(() => {
        notification.style.display = 'none';
      }, 3000);
    };

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
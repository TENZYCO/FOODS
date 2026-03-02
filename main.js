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
const email = document.getElementById('email')
const form = document.getElementById('form')
const mineElement = document.getElementById('mine')

mine.addEventListener('submit', (e) => {

    if (email.value.length <= 6) {
        messages.push('email must be longer than 6 characters')
    } 

    if (email.value.length >= 20) {
        messages.push('email must be less than 20 characters')
    } 

    if (email.value === 'email'){
        messages.push('email cannot be email')
    }

    if (messages.length > 0) {
        e.preventDefault()
        mineElement.innerText = messages.join(', ')
    }
});

function showNotification(message, isSuccess = true) {
      const notification = document.getElementById('notification');
      notification.textContent = message;
      notification.style.background = isSuccess ? '#2ecc71' : '#e74c3c';
      notification.style.display = 'block';
      
      setTimeout(() => {
        notification.style.display = 'none';
      }, 3000);
    };

    function dark() {
      const titles = ['dark'];
      const currentTitle = document.getElementById('modeBtn');
      const randomTitle = titles[Math.floor(Math.random() * titles.length)];
      
      currentTitle.textContent = randomTitle;
      showNotification('FOOD MENU ACCEPTED');
    }
    function changeTitle() {
      const titles = ['Menu'];
      const currentTitle = document.getElementById('books');
      const randomTitle = titles[Math.floor(Math.random() * titles.length)];
      
      currentTitle.textContent = randomTitle;
      showNotification('FOOD MENU ACCEPTED');
    }
    function change() {
      const titles = ['Book a table'];
      const currentTitle = document.getElementById('oks');
      const randomTitle = titles[Math.floor(Math.random() * titles.length)];
      
      currentTitle.textContent = randomTitle;
      showNotification('BOOK A TABLE ACCEPTED');
    }
    function X() {
      const titles = ['X'];
      const currentTitle = document.getElementById('oks');
      const randomTitle = titles[Math.floor(Math.random() * titles.length)];
      
      currentTitle.textContent = randomTitle;
      showNotification('TWITTER');
    }
    function I() {
      const titles = ['X'];
      const currentTitle = document.getElementById('oks');
      const randomTitle = titles[Math.floor(Math.random() * titles.length)];
      
      currentTitle.textContent = randomTitle;
      showNotification('FACEBOOK');
    }
    function F() {
      const titles = ['X'];
      const currentTitle = document.getElementById('oks');
      const randomTitle = titles[Math.floor(Math.random() * titles.length)];
      
      currentTitle.textContent = randomTitle;
      showNotification('INSTAGRAM');
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
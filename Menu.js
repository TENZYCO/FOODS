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

        function ch() {
      const titles = ['PURCHASED'];
      const currentTitle = document.getElementById('lok');
      const randomTitle = titles[Math.floor(Math.random() * titles.length)];
      
      currentTitle.textContent = randomTitle;
      showNotification('ADD TO CART');
    }
        function che() {
      const titles = ['PURCHASED'];
      const currentTitle = document.getElementById('ogo');
      const randomTitle = titles[Math.floor(Math.random() * titles.length)];
      
      currentTitle.textContent = randomTitle;
      showNotification('ADD TO CART');
    }
        function chec() {
      const titles = ['PURCHASED'];
      const currentTitle = document.getElementById('ola');
      const randomTitle = titles[Math.floor(Math.random() * titles.length)];
      
      currentTitle.textContent = randomTitle;
      showNotification('ADD TO CART');
    }
        function check() {
      const titles = ['PURCHASED'];
      const currentTitle = document.getElementById('opa');
      const randomTitle = titles[Math.floor(Math.random() * titles.length)];
      
      currentTitle.textContent = randomTitle;
      showNotification('ADD TO CART');
    }


        function peck() {
      const titles = ['PURCHASED'];
      const currentTitle = document.getElementById('aba');
      const randomTitle = titles[Math.floor(Math.random() * titles.length)];
      
      currentTitle.textContent = randomTitle;
      showNotification('ADD TO CART');
    }
        function pec() {
      const titles = ['PURCHASED'];
      const currentTitle = document.getElementById('aga');
      const randomTitle = titles[Math.floor(Math.random() * titles.length)];
      
      currentTitle.textContent = randomTitle;
      showNotification('ADD TO CART');
    }
        function pe() {
      const titles = ['PURCHASED'];
      const currentTitle = document.getElementById('ala');
      const randomTitle = titles[Math.floor(Math.random() * titles.length)];
      
      currentTitle.textContent = randomTitle;
      showNotification('ADD TO CART');
    }
        function p() {
      const titles = ['PURCHASED'];
      const currentTitle = document.getElementById('apa');
      const randomTitle = titles[Math.floor(Math.random() * titles.length)];
      
      currentTitle.textContent = randomTitle;
      showNotification('ADD TO CART');
    }

        function beck() {
      const titles = ['PURCHASED'];
      const currentTitle = document.getElementById('ooo');
      const randomTitle = titles[Math.floor(Math.random() * titles.length)];
      
      currentTitle.textContent = randomTitle;
      showNotification('ADD TO CART');
    }
        function bec() {
      const titles = ['PURCHASED'];
      const currentTitle = document.getElementById('ggg');
      const randomTitle = titles[Math.floor(Math.random() * titles.length)];
      
      currentTitle.textContent = randomTitle;
      showNotification('ADD TO CART');
    }
        function be() {
      const titles = ['PURCHASED'];
      const currentTitle = document.getElementById('aaa');
      const randomTitle = titles[Math.floor(Math.random() * titles.length)];
      
      currentTitle.textContent = randomTitle;
      showNotification('ADD TO CART');
    }
        function b() {
      const titles = ['PURCHASED'];
      const currentTitle = document.getElementById('lll');
      const randomTitle = titles[Math.floor(Math.random() * titles.length)];
      
      currentTitle.textContent = randomTitle;
      showNotification('ADD TO CART');
    }

        function hair() {
      const titles = ['PURCHASED'];
      const currentTitle = document.getElementById('boo');
      const randomTitle = titles[Math.floor(Math.random() * titles.length)];
      
      currentTitle.textContent = randomTitle;
      showNotification('ADD TO CART');
    }
        function hai() {
      const titles = ['PURCHASED'];
      const currentTitle = document.getElementById('goo');
      const randomTitle = titles[Math.floor(Math.random() * titles.length)];
      
      currentTitle.textContent = randomTitle;
      showNotification('ADD TO CART');
    }
        function ha() {
      const titles = ['PURCHASED'];
      const currentTitle = document.getElementById('laa');
      const randomTitle = titles[Math.floor(Math.random() * titles.length)];
      
      currentTitle.textContent = randomTitle;
      showNotification('ADD TO CART');
    }
        function h() {
      const titles = ['PURCHASED'];
      const currentTitle = document.getElementById('paa');
      const randomTitle = titles[Math.floor(Math.random() * titles.length)];
      
      currentTitle.textContent = randomTitle;
      showNotification('ADD TO CART');
    }
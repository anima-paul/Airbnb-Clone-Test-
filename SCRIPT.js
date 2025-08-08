document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const flexcontainer = document.querySelector('.flexbox');
  
    hamburger.addEventListener('click', function () {
      navLinks.classList.toggle('open');
      flexcontainer.classList.toggle('blur');
    });
  
    // Show login modal
    document.querySelector('.photo').addEventListener('click', function () {
      document.getElementById('loginModal').classList.add('active');
    });
  
    // Close when clicking the "×"
    document.querySelector('.close-login').addEventListener('click', function () {
      document.getElementById('loginModal').classList.remove('active');
    });
  
    // Close when clicking outside the login-box
    document.getElementById('loginModal').addEventListener('click', function (e) {
      if (e.target === this) {
        this.classList.remove('active');
      }
    });
  });
  document.querySelector('.explore-button').addEventListener('click', function() {
    window.open('https://www.airbnb.co.in/', '_blank');
  });
  document.querySelector('.nav-services').addEventListener('click', function() {
    window.open('https://www.airbnb.co.in/host/homes', '_blank');
  });
  document.querySelector('.nav-experiences').addEventListener('click', function() {
    window.open('https://www.airbnb.co.in/host/experiences?from_nav=1', '_blank');
  });
  document.querySelector('.terms').addEventListener('click', function() {
    window.open('https://www.airbnb.co.in/help/article/2855', '_blank');
  });
  // document.querySelector('.login-btn').addEventListener('click', function() {
  //   window.open('https://www.airbnb.co.in/', '_blank');
  // });
  
  document.querySelectorAll('.booked-btn').forEach(btn =>{btn.addEventListener('click', function() {
    window.open('https://www.airbnb.co.in/rooms/738613770712656998?category_tag=Tag%3A789&search_mode=flex_destinations_search&adults=1&check_in=2025-04-26&check_out=2025-05-01&children=0&infants=0&pets=0&photo_id=1558160746&source_impression_id=p3_1745067794_P3cwHe4gE95UF0Vf&previous_page_section_name=1000&federated_search_id=ef1c5e94-df72-4411-85a9-98c7bef59085', '_blank');
  });
  });
  document.querySelectorAll('.box').forEach(btn =>{btn.addEventListener('click', function() {
    window.open('https://www.airbnb.co.in/rooms/738613770712656998?category_tag=Tag%3A789&search_mode=flex_destinations_search&adults=1&check_in=2025-04-26&check_out=2025-05-01&children=0&infants=0&pets=0&photo_id=1558160746&source_impression_id=p3_1745067794_P3cwHe4gE95UF0Vf&previous_page_section_name=1000&federated_search_id=ef1c5e94-df72-4411-85a9-98c7bef59085', '_blank');
  });
  });
  
  
  
  document.addEventListener('DOMContentLoaded', function () {
     
      // document.getElementById('loginModal').classList.add('active');
  
      
      // document.querySelector('.close-login').addEventListener('click', function () {
      //   document.getElementById('loginModal').classList.remove('active');
      // });
  
  
    const loginForm = document.querySelector('.login-form');
  
    loginForm.addEventListener('submit', function (e) {
      e.preventDefault(); // prevent actual form submission
  
      const email = loginForm.querySelector('input[type="email"]').value.trim();
      const password = loginForm.querySelector('input[type="password"]').value.trim();
  
      if (email === '' || password === '') {
        alert('Please enter both email and password');
        return;
      }
  
      // Example hardcoded credentials (replace with backend validation if needed)
      if (email === 'paulanima792@gmail.com' && password === 'harry123456@') {
        alert('Login successful!');
        document.getElementById('loginModal').classList.remove('active');
        window.location.href = 'https://www.airbnb.co.in/';
      } else {
        alert('Invalid email or password');
      }
    });
  });
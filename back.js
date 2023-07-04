function togglemenu() {
    var menuList = document.getElementById("menuList");
    menuList.style.display = (menuList.style.display === "none") ? "block" : "none";
  }
  document.addEventListener('DOMContentLoaded', function() {
    var image = document.querySelector('.info-img img');

    image.addEventListener('click', function() {
      window.location.href = 'index.html';
    });
  });

  document.addEventListener('DOMContentLoaded', function() {
    var image = document.querySelector('.logo');

    image.addEventListener('click', function() {
      window.location.href = 'index.html';
    });
  });
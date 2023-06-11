// Toggle class active
//const navbarNav = document.querySelector('.navbar-nav');
const dropDownMenu = document.querySelector('.dropdown');
const hm = document.querySelector('.hm')


// Ketika menu di klik
//document.querySelector('#menu').onclick = () => {
//    navbarNav.classList.toggle('active');
//}

document.querySelector('#menu').onclick = () => {
    dropDownMenu.classList.toggle('active');
}

// Klik di luar side bar untuk menghilangkan nav
//const menu = document.querySelector('#menu');

//document.addEventListener('click',function (e) {
//    if(!menu.contains(e.target) && !navbarNav.contains(e.target)) {
 //       navbarNav.classList.remove('active');
 //   }
//})

const menu = document.querySelector('#menu');

document.addEventListener('click',function (e) {
    if(!menu.contains(e.target) && !dropDownMenu.contains(e.target)) {
        dropDownMenu.classList.remove('active');
    }
})

document.addEventListener('click',function (e) {
    if (hm.contains(e.target) ) {
        dropDownMenu.classList.remove('active');
    }
})

        

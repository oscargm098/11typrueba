import list from './modules/list'

console.log(`Hello ${list[0]}`)

function showMenu(evento) {
    evento.preventDefault();
    evento.stopPropagation();
    document.querySelector('.menu-nav').classList.toggle('visible');
  }
  
  function hideMenu(evento) {
    evento.preventDefault();
    document.querySelector('.menu-nav').classList.remove('visible');
  }
  
  function clickOutsideMenu(evento) {
    if (evento.target.closest('.menu-nav')) {
      return;
    }
    document.querySelector('.menu-nav').classList.remove('visible');
  }
  
  function escKeyClosesMenu(evento) {
    if (evento.key === 'Escape') {
      document.querySelector('.menu-nav').classList.remove('visible');
    }
  }
  
  document.querySelector('#iconomenu').addEventListener('click', showMenu);
  document.querySelector('#close-menu').addEventListener('click', hideMenu);
  document.addEventListener('click', clickOutsideMenu);
  document.addEventListener('keydown', escKeyClosesMenu);
  
  

  
  
  
  
  
  

import list from './modules/list'

console.log(`Hello ${list[0]}`)

  
  function showMenu(evento) {
      evento.preventDefault();
      evento.stopPropagation();
      document.querySelector('.talla').classList.toggle('visible');
    }
    
    function hideMenu(evento) {
      evento.preventDefault();
      document.querySelector('.talla').classList.remove('visible');
    }
    
    function clickOutsideMenu(evento) {
      if (evento.target.closest('.talla')) {
        return;
      }
      document.querySelector('.talla').classList.remove('visible');
    }
    
    function escKeyClosesMenu(evento) {
      if (evento.key === 'Escape') {
        document.querySelector('.talla').classList.remove('visible');
      }
    }
    
    document.querySelector('#teayudamos').addEventListener('click', showMenu);
    document.querySelector('#cruz').addEventListener('click', hideMenu);
    document.addEventListener('click', clickOutsideMenu);
    document.addEventListener('keydown', escKeyClosesMenu);

  
  
  

  
  
  
  
  

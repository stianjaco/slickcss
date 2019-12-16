module.exports = function slickDropDown()
{    
    let closeOtherDropdowns = function()
    {
      let dropdowns = document.querySelectorAll(".dropdown");
      let i;
      for (i = 0; i < dropdowns.length; i++) {
        let openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('menu-is-open')) {
          openDropdown.classList.remove('menu-is-open');
        }
      }
    }
    // Open/toggle
    document.addEventListener('click', function(e) {
        if(e.target.matches('.dropdown-trigger') || e.target.parentNode.matches('.dropdown-trigger') ) {
          e.preventDefault();
          window.event.stopPropagation();
          let trigger = e.target.parentNode.matches('.dropdown-trigger') ? e.target.parentNode : e.target;
          let dropdown = event.target.closest('.dropdown');
          if( trigger.hasAttribute('data-closeothers') && trigger.getAttribute('data-closeothers') == 'true' ) {
            closeOtherDropdowns();
          }
          dropdown.classList.toggle('menu-is-open');
        }
    });
  
    // Close any
    window.addEventListener('click', function(e) {
        if (!e.target.matches('.dropdown-trigger') && !e.target.parentNode.matches('.dropdown-trigger') ) {
          closeOtherDropdowns();
        }
    });
};

/*module.exports = function slickDropDown( el, callback )
{
  let Instance = this;
  

  this.construct = function()
  {




    let menus = document.querySelectorAll(el);
    for( let i = 0; i < menus.length; i++ ) {

      menus[i].querySelector(".dropdown-trigger").addEventListener('click', function(e) {
        e.preventDefault();
//console.log('clicker');
        

        let trigger = event.currentTarget,
            wrapper = trigger.parentNode,
            isopen = document.querySelectorAll('.dropdown.menu-is-open');

        for( let x = 0; x < isopen.length; x++ ) {
          if( isopen[x] !== wrapper ) 
            isopen[x].classList.remove('menu-is-open');
        }

        if( wrapper.classList.contains('menu-is-open') ) {
          wrapper.classList.remove('menu-is-open');
        } else {
          wrapper.classList.add('menu-is-open');
        }

        let cbFunc = callback || window[callback];
        if( typeof cbFunc === 'function' ) {
          cbFunc( e, Instance );
        }
        
      
  
      }, false );
    }

    document.addEventListener("click", function(e) {
      let targetElement = e.target;
      if( !targetElement.closest('.dropdown-trigger') ) {
        let menu = document.getElementsByClassName("dropdown");
        
        for( let x=0; x<menus.length; x++) {
          if( menu[x].classList.contains('menu-is-open') )
            menu[x].classList.remove('menu-is-open');
        }
        return;
      } 
    });
    
    return Instance;
  }


  return Instance.construct();

};*/
/*


for( let x=0; x<ddmenus.length; x++) {
    
    ddmenus[x].querySelector(".dropdown-trigger").addEventListener('click', function(event) {
        event.preventDefault();
 
          var trigger = event.currentTarget;
       
        let wrapper = trigger.parentNode;

        let isopen = document.querySelectorAll(".dropdown.menu-is-open");
        // Hide anyone that is open
        for(let i=0; i < isopen.length; i++ ) {
            if( isopen[i] !== wrapper ) 
                isopen[i].classList.remove('menu-is-open');
        }
        // Toggle current
        if( wrapper.classList.contains('menu-is-open') ) {
            wrapper.classList.remove('menu-is-open');
        } else {
            wrapper.classList.add('menu-is-open');
        }
  },false);  

}

document.addEventListener("click", function(event) {
  var targetElement = event.target;
  if( !targetElement.closest('.dropdown-trigger') ) {
   var menus = document.getElementsByClassName("dropdown");
          for( var x=0; x<ddmenus.length; x++) {
            if( menus[x].classList.contains('menu-is-open') )
                menus[x].classList.remove('menu-is-open');
          }
            return;
  }
  
  
});*/
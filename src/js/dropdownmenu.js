const ddmenus = document.querySelectorAll(".dropdown");

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
  
  
});



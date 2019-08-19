const ddmenus = document.querySelectorAll(".dropdown");

for( let x=0; x<ddmenus.length; x++) {
    
    ddmenus[x].querySelector(".dropdown-trigger").addEventListener('click', function(event) {
        event.preventDefault();
        let trigger = event.target;
        let wrapper = trigger.parentNode;
        let isopen = document.querySelectorAll(".dropdown.menu-is-open");
        // Hide anyone that is open
        for(let i=0; i < isopen.length; i++ ) {
            isopen[i].classList.remove('menu-is-open');
        }
        // Toggle current
        if( wrapper.classList.contains('menu-is-open') ) {
            wrapper.classList.remove('menu-is-open');
        } else {
            wrapper.classList.add('menu-is-open');
        }
  });  

}

document.addEventListener("click", function(event) {

    if (!event.target.matches('.dropdown-trigger')) {
        let menus = document.getElementsByClassName("dropdown");
        for( let x=0; x<ddmenus.length; x++) {
            if( menus[x].classList.contains('menu-is-open') )
                menus[x].classList.remove('menu-is-open');
        }
    }
});



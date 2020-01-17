module.exports = function slickDropDown(args)
{    
    const defaults = {
      el: '.dropdown',
      classOpen: 'menu-is-open',
      trigger: '.dropdown-trigger',
      keepactive: false
    }
    const options = Object.assign({}, defaults, args);

    // Close all dropdowns that is open
    let closeAll = function()
    {
      let dropdowns = document.querySelectorAll(options.el);
      let i;
      for (i = 0; i < dropdowns.length; i++) {
        let openDropdown = dropdowns[i];
        if (openDropdown.classList.contains(options.classOpen)) {
          openDropdown.classList.remove(options.classOpen);
        }
      }
    }

    // Open/toggle
    window.addEventListener('click', function(e) 
    {
      if(!e.target.closest(options.trigger))
        return;
      
      e.preventDefault();
      e.stopPropagation();
      
      let dropdown = e.target.closest(options.el);
      let keepCurrent = dropdown.hasAttribute('keep-active') && dropdown.getAttribute('keep-active') === 'true' ? true : false;
      
      if( dropdown.classList.contains(options.classOpen) ) {
        dropdown.classList.remove(options.classOpen);
      } else {

        if( options.keepactive === false && keepCurrent === true ) {
          closeAll();
        }
        dropdown.classList.toggle(options.classOpen);
      }
    }, true);
  
    // Close any
    window.addEventListener('click', function(e) {
      if(!e.target.closest(options.trigger) ) {
        closeAll();
      }
    });
};
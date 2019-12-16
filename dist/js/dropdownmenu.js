(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.slickDropDown = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

module.exports = function slickDropDown() {
  var closeOtherDropdowns = function closeOtherDropdowns() {
    var dropdowns = document.querySelectorAll(".dropdown");
    var i = void 0;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('menu-is-open')) {
        openDropdown.classList.remove('menu-is-open');
      }
    }
  };
  // Open/toggle
  document.addEventListener('click', function (e) {
    if (e.target.matches('.dropdown-trigger') || e.target.parentNode.matches('.dropdown-trigger')) {
      e.preventDefault();
      window.event.stopPropagation();
      var trigger = e.target.parentNode.matches('.dropdown-trigger') ? e.target.parentNode : e.target;
      var dropdown = event.target.closest('.dropdown');
      if (trigger.hasAttribute('data-closeothers') && trigger.getAttribute('data-closeothers') == 'true') {
        closeOtherDropdowns();
      }
      dropdown.classList.toggle('menu-is-open');
    }
  });

  // Close any
  window.addEventListener('click', function (e) {
    if (!e.target.matches('.dropdown-trigger') && !e.target.parentNode.matches('.dropdown-trigger')) {
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

},{}]},{},[1])(1)
});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvZHJvcGRvd25tZW51LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQSxPQUFPLE9BQVAsR0FBaUIsU0FBUyxhQUFULEdBQ2pCO0FBQ0ksTUFBSSxzQkFBc0IsU0FBdEIsbUJBQXNCLEdBQzFCO0FBQ0UsUUFBSSxZQUFZLFNBQVMsZ0JBQVQsQ0FBMEIsV0FBMUIsQ0FBaEI7QUFDQSxRQUFJLFVBQUo7QUFDQSxTQUFLLElBQUksQ0FBVCxFQUFZLElBQUksVUFBVSxNQUExQixFQUFrQyxHQUFsQyxFQUF1QztBQUNyQyxVQUFJLGVBQWUsVUFBVSxDQUFWLENBQW5CO0FBQ0EsVUFBSSxhQUFhLFNBQWIsQ0FBdUIsUUFBdkIsQ0FBZ0MsY0FBaEMsQ0FBSixFQUFxRDtBQUNuRCxxQkFBYSxTQUFiLENBQXVCLE1BQXZCLENBQThCLGNBQTlCO0FBQ0Q7QUFDRjtBQUNGLEdBVkQ7QUFXQTtBQUNBLFdBQVMsZ0JBQVQsQ0FBMEIsT0FBMUIsRUFBbUMsVUFBUyxDQUFULEVBQVk7QUFDM0MsUUFBRyxFQUFFLE1BQUYsQ0FBUyxPQUFULENBQWlCLG1CQUFqQixLQUF5QyxFQUFFLE1BQUYsQ0FBUyxVQUFULENBQW9CLE9BQXBCLENBQTRCLG1CQUE1QixDQUE1QyxFQUErRjtBQUM3RixRQUFFLGNBQUY7QUFDQSxhQUFPLEtBQVAsQ0FBYSxlQUFiO0FBQ0EsVUFBSSxVQUFVLEVBQUUsTUFBRixDQUFTLFVBQVQsQ0FBb0IsT0FBcEIsQ0FBNEIsbUJBQTVCLElBQW1ELEVBQUUsTUFBRixDQUFTLFVBQTVELEdBQXlFLEVBQUUsTUFBekY7QUFDQSxVQUFJLFdBQVcsTUFBTSxNQUFOLENBQWEsT0FBYixDQUFxQixXQUFyQixDQUFmO0FBQ0EsVUFBSSxRQUFRLFlBQVIsQ0FBcUIsa0JBQXJCLEtBQTRDLFFBQVEsWUFBUixDQUFxQixrQkFBckIsS0FBNEMsTUFBNUYsRUFBcUc7QUFDbkc7QUFDRDtBQUNELGVBQVMsU0FBVCxDQUFtQixNQUFuQixDQUEwQixjQUExQjtBQUNEO0FBQ0osR0FYRDs7QUFhQTtBQUNBLFNBQU8sZ0JBQVAsQ0FBd0IsT0FBeEIsRUFBaUMsVUFBUyxDQUFULEVBQVk7QUFDekMsUUFBSSxDQUFDLEVBQUUsTUFBRixDQUFTLE9BQVQsQ0FBaUIsbUJBQWpCLENBQUQsSUFBMEMsQ0FBQyxFQUFFLE1BQUYsQ0FBUyxVQUFULENBQW9CLE9BQXBCLENBQTRCLG1CQUE1QixDQUEvQyxFQUFrRztBQUNoRztBQUNEO0FBQ0osR0FKRDtBQUtILENBakNEOztBQW1DQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWdFQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gc2xpY2tEcm9wRG93bigpXG57ICAgIFxuICAgIGxldCBjbG9zZU90aGVyRHJvcGRvd25zID0gZnVuY3Rpb24oKVxuICAgIHtcbiAgICAgIGxldCBkcm9wZG93bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmRyb3Bkb3duXCIpO1xuICAgICAgbGV0IGk7XG4gICAgICBmb3IgKGkgPSAwOyBpIDwgZHJvcGRvd25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBvcGVuRHJvcGRvd24gPSBkcm9wZG93bnNbaV07XG4gICAgICAgIGlmIChvcGVuRHJvcGRvd24uY2xhc3NMaXN0LmNvbnRhaW5zKCdtZW51LWlzLW9wZW4nKSkge1xuICAgICAgICAgIG9wZW5Ecm9wZG93bi5jbGFzc0xpc3QucmVtb3ZlKCdtZW51LWlzLW9wZW4nKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICAvLyBPcGVuL3RvZ2dsZVxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgICBpZihlLnRhcmdldC5tYXRjaGVzKCcuZHJvcGRvd24tdHJpZ2dlcicpIHx8wqBlLnRhcmdldC5wYXJlbnROb2RlLm1hdGNoZXMoJy5kcm9wZG93bi10cmlnZ2VyJykgKSB7XG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIHdpbmRvdy5ldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICBsZXQgdHJpZ2dlciA9IGUudGFyZ2V0LnBhcmVudE5vZGUubWF0Y2hlcygnLmRyb3Bkb3duLXRyaWdnZXInKSA/IGUudGFyZ2V0LnBhcmVudE5vZGUgOiBlLnRhcmdldDtcbiAgICAgICAgICBsZXQgZHJvcGRvd24gPSBldmVudC50YXJnZXQuY2xvc2VzdCgnLmRyb3Bkb3duJyk7XG4gICAgICAgICAgaWYoIHRyaWdnZXIuaGFzQXR0cmlidXRlKCdkYXRhLWNsb3Nlb3RoZXJzJykgJiYgdHJpZ2dlci5nZXRBdHRyaWJ1dGUoJ2RhdGEtY2xvc2VvdGhlcnMnKSA9PSAndHJ1ZScgKSB7XG4gICAgICAgICAgICBjbG9zZU90aGVyRHJvcGRvd25zKCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGRyb3Bkb3duLmNsYXNzTGlzdC50b2dnbGUoJ21lbnUtaXMtb3BlbicpO1xuICAgICAgICB9XG4gICAgfSk7XG4gIFxuICAgIC8vIENsb3NlIGFueVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgaWYgKCFlLnRhcmdldC5tYXRjaGVzKCcuZHJvcGRvd24tdHJpZ2dlcicpICYmICFlLnRhcmdldC5wYXJlbnROb2RlLm1hdGNoZXMoJy5kcm9wZG93bi10cmlnZ2VyJykgKSB7XG4gICAgICAgICAgY2xvc2VPdGhlckRyb3Bkb3ducygpO1xuICAgICAgICB9XG4gICAgfSk7XG59O1xuXG4vKm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gc2xpY2tEcm9wRG93biggZWwsIGNhbGxiYWNrIClcbntcbiAgbGV0IEluc3RhbmNlID0gdGhpcztcbiAgXG5cbiAgdGhpcy5jb25zdHJ1Y3QgPSBmdW5jdGlvbigpXG4gIHtcblxuXG5cblxuICAgIGxldCBtZW51cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoZWwpO1xuICAgIGZvciggbGV0IGkgPSAwOyBpIDwgbWVudXMubGVuZ3RoOyBpKysgKSB7XG5cbiAgICAgIG1lbnVzW2ldLnF1ZXJ5U2VsZWN0b3IoXCIuZHJvcGRvd24tdHJpZ2dlclwiKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuLy9jb25zb2xlLmxvZygnY2xpY2tlcicpO1xuICAgICAgICBcblxuICAgICAgICBsZXQgdHJpZ2dlciA9IGV2ZW50LmN1cnJlbnRUYXJnZXQsXG4gICAgICAgICAgICB3cmFwcGVyID0gdHJpZ2dlci5wYXJlbnROb2RlLFxuICAgICAgICAgICAgaXNvcGVuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRyb3Bkb3duLm1lbnUtaXMtb3BlbicpO1xuXG4gICAgICAgIGZvciggbGV0IHggPSAwOyB4IDwgaXNvcGVuLmxlbmd0aDsgeCsrICkge1xuICAgICAgICAgIGlmKCBpc29wZW5beF0gIT09IHdyYXBwZXIgKSBcbiAgICAgICAgICAgIGlzb3Blblt4XS5jbGFzc0xpc3QucmVtb3ZlKCdtZW51LWlzLW9wZW4nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKCB3cmFwcGVyLmNsYXNzTGlzdC5jb250YWlucygnbWVudS1pcy1vcGVuJykgKSB7XG4gICAgICAgICAgd3JhcHBlci5jbGFzc0xpc3QucmVtb3ZlKCdtZW51LWlzLW9wZW4nKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB3cmFwcGVyLmNsYXNzTGlzdC5hZGQoJ21lbnUtaXMtb3BlbicpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGNiRnVuYyA9IGNhbGxiYWNrIHx8IHdpbmRvd1tjYWxsYmFja107XG4gICAgICAgIGlmKCB0eXBlb2YgY2JGdW5jID09PSAnZnVuY3Rpb24nICkge1xuICAgICAgICAgIGNiRnVuYyggZSwgSW5zdGFuY2UgKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgIFxuICBcbiAgICAgIH0sIGZhbHNlICk7XG4gICAgfVxuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpIHtcbiAgICAgIGxldCB0YXJnZXRFbGVtZW50ID0gZS50YXJnZXQ7XG4gICAgICBpZiggIXRhcmdldEVsZW1lbnQuY2xvc2VzdCgnLmRyb3Bkb3duLXRyaWdnZXInKSApIHtcbiAgICAgICAgbGV0IG1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiZHJvcGRvd25cIik7XG4gICAgICAgIFxuICAgICAgICBmb3IoIGxldCB4PTA7IHg8bWVudXMubGVuZ3RoOyB4KyspIHtcbiAgICAgICAgICBpZiggbWVudVt4XS5jbGFzc0xpc3QuY29udGFpbnMoJ21lbnUtaXMtb3BlbicpIClcbiAgICAgICAgICAgIG1lbnVbeF0uY2xhc3NMaXN0LnJlbW92ZSgnbWVudS1pcy1vcGVuJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSBcbiAgICB9KTtcbiAgICBcbiAgICByZXR1cm4gSW5zdGFuY2U7XG4gIH1cblxuXG4gIHJldHVybiBJbnN0YW5jZS5jb25zdHJ1Y3QoKTtcblxufTsqL1xuLypcblxuXG5mb3IoIGxldCB4PTA7IHg8ZGRtZW51cy5sZW5ndGg7IHgrKykge1xuICAgIFxuICAgIGRkbWVudXNbeF0ucXVlcnlTZWxlY3RvcihcIi5kcm9wZG93bi10cmlnZ2VyXCIpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiBcbiAgICAgICAgICB2YXIgdHJpZ2dlciA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XG4gICAgICAgXG4gICAgICAgIGxldCB3cmFwcGVyID0gdHJpZ2dlci5wYXJlbnROb2RlO1xuXG4gICAgICAgIGxldCBpc29wZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmRyb3Bkb3duLm1lbnUtaXMtb3BlblwiKTtcbiAgICAgICAgLy8gSGlkZSBhbnlvbmUgdGhhdCBpcyBvcGVuXG4gICAgICAgIGZvcihsZXQgaT0wOyBpIDwgaXNvcGVuLmxlbmd0aDsgaSsrICkge1xuICAgICAgICAgICAgaWYoIGlzb3BlbltpXSAhPT0gd3JhcHBlciApIFxuICAgICAgICAgICAgICAgIGlzb3BlbltpXS5jbGFzc0xpc3QucmVtb3ZlKCdtZW51LWlzLW9wZW4nKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBUb2dnbGUgY3VycmVudFxuICAgICAgICBpZiggd3JhcHBlci5jbGFzc0xpc3QuY29udGFpbnMoJ21lbnUtaXMtb3BlbicpICkge1xuICAgICAgICAgICAgd3JhcHBlci5jbGFzc0xpc3QucmVtb3ZlKCdtZW51LWlzLW9wZW4nKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHdyYXBwZXIuY2xhc3NMaXN0LmFkZCgnbWVudS1pcy1vcGVuJyk7XG4gICAgICAgIH1cbiAgfSxmYWxzZSk7ICBcblxufVxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZXZlbnQpIHtcbiAgdmFyIHRhcmdldEVsZW1lbnQgPSBldmVudC50YXJnZXQ7XG4gIGlmKCAhdGFyZ2V0RWxlbWVudC5jbG9zZXN0KCcuZHJvcGRvd24tdHJpZ2dlcicpICkge1xuICAgdmFyIG1lbnVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImRyb3Bkb3duXCIpO1xuICAgICAgICAgIGZvciggdmFyIHg9MDsgeDxkZG1lbnVzLmxlbmd0aDsgeCsrKSB7XG4gICAgICAgICAgICBpZiggbWVudXNbeF0uY2xhc3NMaXN0LmNvbnRhaW5zKCdtZW51LWlzLW9wZW4nKSApXG4gICAgICAgICAgICAgICAgbWVudXNbeF0uY2xhc3NMaXN0LnJlbW92ZSgnbWVudS1pcy1vcGVuJyk7XG4gICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuO1xuICB9XG4gIFxuICBcbn0pOyovIl19

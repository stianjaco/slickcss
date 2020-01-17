(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.slickDropDown = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

module.exports = function slickDropDown(args) {
  var defaults = {
    el: '.dropdown',
    classOpen: 'menu-is-open',
    trigger: '.dropdown-trigger',
    keepactive: false
  };
  var options = Object.assign({}, defaults, args);

  // Close all dropdowns that is open
  var closeAll = function closeAll() {
    var dropdowns = document.querySelectorAll(options.el);
    var i = void 0;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains(options.classOpen)) {
        openDropdown.classList.remove(options.classOpen);
      }
    }
  };

  // Open/toggle
  window.addEventListener('click', function (e) {
    if (!e.target.closest(options.trigger)) return;

    e.preventDefault();
    e.stopPropagation();

    var dropdown = e.target.closest(options.el);
    var keepCurrent = dropdown.hasAttribute('keep-active') && dropdown.getAttribute('keep-active') === 'true' ? true : false;

    if (dropdown.classList.contains(options.classOpen)) {
      dropdown.classList.remove(options.classOpen);
    } else {

      if (options.keepactive === false && keepCurrent === true) {
        closeAll();
      }
      dropdown.classList.toggle(options.classOpen);
    }
  }, true);

  // Close any
  window.addEventListener('click', function (e) {
    if (!e.target.closest(options.trigger)) {
      closeAll();
    }
  });
};

},{}]},{},[1])(1)
});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvZHJvcGRvd25tZW51LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQSxPQUFPLE9BQVAsR0FBaUIsU0FBUyxhQUFULENBQXVCLElBQXZCLEVBQ2pCO0FBQ0ksTUFBTSxXQUFXO0FBQ2YsUUFBSSxXQURXO0FBRWYsZUFBVyxjQUZJO0FBR2YsYUFBUyxtQkFITTtBQUlmLGdCQUFZO0FBSkcsR0FBakI7QUFNQSxNQUFNLFVBQVUsT0FBTyxNQUFQLENBQWMsRUFBZCxFQUFrQixRQUFsQixFQUE0QixJQUE1QixDQUFoQjs7QUFFQTtBQUNBLE1BQUksV0FBVyxTQUFYLFFBQVcsR0FDZjtBQUNFLFFBQUksWUFBWSxTQUFTLGdCQUFULENBQTBCLFFBQVEsRUFBbEMsQ0FBaEI7QUFDQSxRQUFJLFVBQUo7QUFDQSxTQUFLLElBQUksQ0FBVCxFQUFZLElBQUksVUFBVSxNQUExQixFQUFrQyxHQUFsQyxFQUF1QztBQUNyQyxVQUFJLGVBQWUsVUFBVSxDQUFWLENBQW5CO0FBQ0EsVUFBSSxhQUFhLFNBQWIsQ0FBdUIsUUFBdkIsQ0FBZ0MsUUFBUSxTQUF4QyxDQUFKLEVBQXdEO0FBQ3RELHFCQUFhLFNBQWIsQ0FBdUIsTUFBdkIsQ0FBOEIsUUFBUSxTQUF0QztBQUNEO0FBQ0Y7QUFDRixHQVZEOztBQVlBO0FBQ0EsU0FBTyxnQkFBUCxDQUF3QixPQUF4QixFQUFpQyxVQUFTLENBQVQsRUFDakM7QUFDRSxRQUFHLENBQUMsRUFBRSxNQUFGLENBQVMsT0FBVCxDQUFpQixRQUFRLE9BQXpCLENBQUosRUFDRTs7QUFFRixNQUFFLGNBQUY7QUFDQSxNQUFFLGVBQUY7O0FBRUEsUUFBSSxXQUFXLEVBQUUsTUFBRixDQUFTLE9BQVQsQ0FBaUIsUUFBUSxFQUF6QixDQUFmO0FBQ0EsUUFBSSxjQUFjLFNBQVMsWUFBVCxDQUFzQixhQUF0QixLQUF3QyxTQUFTLFlBQVQsQ0FBc0IsYUFBdEIsTUFBeUMsTUFBakYsR0FBMEYsSUFBMUYsR0FBaUcsS0FBbkg7O0FBRUEsUUFBSSxTQUFTLFNBQVQsQ0FBbUIsUUFBbkIsQ0FBNEIsUUFBUSxTQUFwQyxDQUFKLEVBQXFEO0FBQ25ELGVBQVMsU0FBVCxDQUFtQixNQUFuQixDQUEwQixRQUFRLFNBQWxDO0FBQ0QsS0FGRCxNQUVPOztBQUVMLFVBQUksUUFBUSxVQUFSLEtBQXVCLEtBQXZCLElBQWdDLGdCQUFnQixJQUFwRCxFQUEyRDtBQUN6RDtBQUNEO0FBQ0QsZUFBUyxTQUFULENBQW1CLE1BQW5CLENBQTBCLFFBQVEsU0FBbEM7QUFDRDtBQUNGLEdBcEJELEVBb0JHLElBcEJIOztBQXNCQTtBQUNBLFNBQU8sZ0JBQVAsQ0FBd0IsT0FBeEIsRUFBaUMsVUFBUyxDQUFULEVBQVk7QUFDM0MsUUFBRyxDQUFDLEVBQUUsTUFBRixDQUFTLE9BQVQsQ0FBaUIsUUFBUSxPQUF6QixDQUFKLEVBQXdDO0FBQ3RDO0FBQ0Q7QUFDRixHQUpEO0FBS0gsQ0FwREQiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHNsaWNrRHJvcERvd24oYXJncylcbnsgICAgXG4gICAgY29uc3QgZGVmYXVsdHMgPSB7XG4gICAgICBlbDogJy5kcm9wZG93bicsXG4gICAgICBjbGFzc09wZW46ICdtZW51LWlzLW9wZW4nLFxuICAgICAgdHJpZ2dlcjogJy5kcm9wZG93bi10cmlnZ2VyJyxcbiAgICAgIGtlZXBhY3RpdmU6IGZhbHNlXG4gICAgfVxuICAgIGNvbnN0IG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0cywgYXJncyk7XG5cbiAgICAvLyBDbG9zZSBhbGwgZHJvcGRvd25zIHRoYXQgaXMgb3BlblxuICAgIGxldCBjbG9zZUFsbCA9IGZ1bmN0aW9uKClcbiAgICB7XG4gICAgICBsZXQgZHJvcGRvd25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChvcHRpb25zLmVsKTtcbiAgICAgIGxldCBpO1xuICAgICAgZm9yIChpID0gMDsgaSA8IGRyb3Bkb3ducy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgb3BlbkRyb3Bkb3duID0gZHJvcGRvd25zW2ldO1xuICAgICAgICBpZiAob3BlbkRyb3Bkb3duLmNsYXNzTGlzdC5jb250YWlucyhvcHRpb25zLmNsYXNzT3BlbikpIHtcbiAgICAgICAgICBvcGVuRHJvcGRvd24uY2xhc3NMaXN0LnJlbW92ZShvcHRpb25zLmNsYXNzT3Blbik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBPcGVuL3RvZ2dsZVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIFxuICAgIHtcbiAgICAgIGlmKCFlLnRhcmdldC5jbG9zZXN0KG9wdGlvbnMudHJpZ2dlcikpXG4gICAgICAgIHJldHVybjtcbiAgICAgIFxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIFxuICAgICAgbGV0IGRyb3Bkb3duID0gZS50YXJnZXQuY2xvc2VzdChvcHRpb25zLmVsKTtcbiAgICAgIGxldCBrZWVwQ3VycmVudCA9IGRyb3Bkb3duLmhhc0F0dHJpYnV0ZSgna2VlcC1hY3RpdmUnKSAmJiBkcm9wZG93bi5nZXRBdHRyaWJ1dGUoJ2tlZXAtYWN0aXZlJykgPT09ICd0cnVlJyA/IHRydWUgOiBmYWxzZTtcbiAgICAgIFxuICAgICAgaWYoIGRyb3Bkb3duLmNsYXNzTGlzdC5jb250YWlucyhvcHRpb25zLmNsYXNzT3BlbikgKSB7XG4gICAgICAgIGRyb3Bkb3duLmNsYXNzTGlzdC5yZW1vdmUob3B0aW9ucy5jbGFzc09wZW4pO1xuICAgICAgfSBlbHNlIHtcblxuICAgICAgICBpZiggb3B0aW9ucy5rZWVwYWN0aXZlID09PSBmYWxzZSAmJsKga2VlcEN1cnJlbnQgPT09IHRydWUgKSB7XG4gICAgICAgICAgY2xvc2VBbGwoKTtcbiAgICAgICAgfVxuICAgICAgICBkcm9wZG93bi5jbGFzc0xpc3QudG9nZ2xlKG9wdGlvbnMuY2xhc3NPcGVuKTtcbiAgICAgIH1cbiAgICB9LCB0cnVlKTtcbiAgXG4gICAgLy8gQ2xvc2UgYW55XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgaWYoIWUudGFyZ2V0LmNsb3Nlc3Qob3B0aW9ucy50cmlnZ2VyKSApIHtcbiAgICAgICAgY2xvc2VBbGwoKTtcbiAgICAgIH1cbiAgICB9KTtcbn07Il19

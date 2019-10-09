(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var ddmenus = document.querySelectorAll(".dropdown");

for (var x = 0; x < ddmenus.length; x++) {

    ddmenus[x].querySelector(".dropdown-trigger").addEventListener('click', function (event) {
        event.preventDefault();

        var trigger = event.currentTarget;

        var wrapper = trigger.parentNode;

        var isopen = document.querySelectorAll(".dropdown.menu-is-open");
        // Hide anyone that is open
        for (var i = 0; i < isopen.length; i++) {
            if (isopen[i] !== wrapper) isopen[i].classList.remove('menu-is-open');
        }
        // Toggle current
        if (wrapper.classList.contains('menu-is-open')) {
            wrapper.classList.remove('menu-is-open');
        } else {
            wrapper.classList.add('menu-is-open');
        }
    }, false);
}

document.addEventListener("click", function (event) {
    var targetElement = event.target;
    if (!targetElement.closest('.dropdown-trigger')) {
        var menus = document.getElementsByClassName("dropdown");
        for (var x = 0; x < ddmenus.length; x++) {
            if (menus[x].classList.contains('menu-is-open')) menus[x].classList.remove('menu-is-open');
        }
        return;
    }
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvZHJvcGRvd25tZW51LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQSxJQUFNLFVBQVUsU0FBUyxnQkFBVCxDQUEwQixXQUExQixDQUFoQjs7QUFFQSxLQUFLLElBQUksSUFBRSxDQUFYLEVBQWMsSUFBRSxRQUFRLE1BQXhCLEVBQWdDLEdBQWhDLEVBQXFDOztBQUVqQyxZQUFRLENBQVIsRUFBVyxhQUFYLENBQXlCLG1CQUF6QixFQUE4QyxnQkFBOUMsQ0FBK0QsT0FBL0QsRUFBd0UsVUFBUyxLQUFULEVBQWdCO0FBQ3BGLGNBQU0sY0FBTjs7QUFFRSxZQUFJLFVBQVUsTUFBTSxhQUFwQjs7QUFFRixZQUFJLFVBQVUsUUFBUSxVQUF0Qjs7QUFFQSxZQUFJLFNBQVMsU0FBUyxnQkFBVCxDQUEwQix3QkFBMUIsQ0FBYjtBQUNBO0FBQ0EsYUFBSSxJQUFJLElBQUUsQ0FBVixFQUFhLElBQUksT0FBTyxNQUF4QixFQUFnQyxHQUFoQyxFQUFzQztBQUNsQyxnQkFBSSxPQUFPLENBQVAsTUFBYyxPQUFsQixFQUNJLE9BQU8sQ0FBUCxFQUFVLFNBQVYsQ0FBb0IsTUFBcEIsQ0FBMkIsY0FBM0I7QUFDUDtBQUNEO0FBQ0EsWUFBSSxRQUFRLFNBQVIsQ0FBa0IsUUFBbEIsQ0FBMkIsY0FBM0IsQ0FBSixFQUFpRDtBQUM3QyxvQkFBUSxTQUFSLENBQWtCLE1BQWxCLENBQXlCLGNBQXpCO0FBQ0gsU0FGRCxNQUVPO0FBQ0gsb0JBQVEsU0FBUixDQUFrQixHQUFsQixDQUFzQixjQUF0QjtBQUNIO0FBQ04sS0FuQkMsRUFtQkEsS0FuQkE7QUFxQkg7O0FBRUQsU0FBUyxnQkFBVCxDQUEwQixPQUExQixFQUFtQyxVQUFTLEtBQVQsRUFBZ0I7QUFDakQsUUFBSSxnQkFBZ0IsTUFBTSxNQUExQjtBQUNBLFFBQUksQ0FBQyxjQUFjLE9BQWQsQ0FBc0IsbUJBQXRCLENBQUwsRUFBa0Q7QUFDakQsWUFBSSxRQUFRLFNBQVMsc0JBQVQsQ0FBZ0MsVUFBaEMsQ0FBWjtBQUNPLGFBQUssSUFBSSxJQUFFLENBQVgsRUFBYyxJQUFFLFFBQVEsTUFBeEIsRUFBZ0MsR0FBaEMsRUFBcUM7QUFDbkMsZ0JBQUksTUFBTSxDQUFOLEVBQVMsU0FBVCxDQUFtQixRQUFuQixDQUE0QixjQUE1QixDQUFKLEVBQ0ksTUFBTSxDQUFOLEVBQVMsU0FBVCxDQUFtQixNQUFuQixDQUEwQixjQUExQjtBQUNMO0FBQ0M7QUFDVDtBQUdGLENBWkQiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJjb25zdCBkZG1lbnVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5kcm9wZG93blwiKTtcblxuZm9yKCBsZXQgeD0wOyB4PGRkbWVudXMubGVuZ3RoOyB4KyspIHtcbiAgICBcbiAgICBkZG1lbnVzW3hdLnF1ZXJ5U2VsZWN0b3IoXCIuZHJvcGRvd24tdHJpZ2dlclwiKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gXG4gICAgICAgICAgdmFyIHRyaWdnZXIgPSBldmVudC5jdXJyZW50VGFyZ2V0O1xuICAgICAgIFxuICAgICAgICBsZXQgd3JhcHBlciA9IHRyaWdnZXIucGFyZW50Tm9kZTtcblxuICAgICAgICBsZXQgaXNvcGVuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5kcm9wZG93bi5tZW51LWlzLW9wZW5cIik7XG4gICAgICAgIC8vIEhpZGUgYW55b25lIHRoYXQgaXMgb3BlblxuICAgICAgICBmb3IobGV0IGk9MDsgaSA8IGlzb3Blbi5sZW5ndGg7IGkrKyApIHtcbiAgICAgICAgICAgIGlmKCBpc29wZW5baV0gIT09IHdyYXBwZXIgKSBcbiAgICAgICAgICAgICAgICBpc29wZW5baV0uY2xhc3NMaXN0LnJlbW92ZSgnbWVudS1pcy1vcGVuJyk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gVG9nZ2xlIGN1cnJlbnRcbiAgICAgICAgaWYoIHdyYXBwZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCdtZW51LWlzLW9wZW4nKSApIHtcbiAgICAgICAgICAgIHdyYXBwZXIuY2xhc3NMaXN0LnJlbW92ZSgnbWVudS1pcy1vcGVuJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB3cmFwcGVyLmNsYXNzTGlzdC5hZGQoJ21lbnUtaXMtb3BlbicpO1xuICAgICAgICB9XG4gIH0sZmFsc2UpOyAgXG5cbn1cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gIHZhciB0YXJnZXRFbGVtZW50ID0gZXZlbnQudGFyZ2V0O1xuICBpZiggIXRhcmdldEVsZW1lbnQuY2xvc2VzdCgnLmRyb3Bkb3duLXRyaWdnZXInKSApIHtcbiAgIHZhciBtZW51cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJkcm9wZG93blwiKTtcbiAgICAgICAgICBmb3IoIHZhciB4PTA7IHg8ZGRtZW51cy5sZW5ndGg7IHgrKykge1xuICAgICAgICAgICAgaWYoIG1lbnVzW3hdLmNsYXNzTGlzdC5jb250YWlucygnbWVudS1pcy1vcGVuJykgKVxuICAgICAgICAgICAgICAgIG1lbnVzW3hdLmNsYXNzTGlzdC5yZW1vdmUoJ21lbnUtaXMtb3BlbicpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybjtcbiAgfVxuICBcbiAgXG59KTtcblxuXG4iXX0=

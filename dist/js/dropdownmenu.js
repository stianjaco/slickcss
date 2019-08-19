(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var ddmenus = document.querySelectorAll(".dropdown");

for (var x = 0; x < ddmenus.length; x++) {

    ddmenus[x].querySelector(".dropdown-trigger").addEventListener('click', function (event) {
        event.preventDefault();
        var trigger = event.target;
        var wrapper = trigger.parentNode;
        var isopen = document.querySelectorAll(".dropdown.menu-is-open");
        // Hide anyone that is open
        for (var i = 0; i < isopen.length; i++) {
            isopen[i].classList.remove('menu-is-open');
        }
        // Toggle current
        if (wrapper.classList.contains('menu-is-open')) {
            wrapper.classList.remove('menu-is-open');
        } else {
            wrapper.classList.add('menu-is-open');
        }
    });
}

document.addEventListener("click", function (event) {

    if (!event.target.matches('.dropdown-trigger')) {
        var menus = document.getElementsByClassName("dropdown");
        for (var _x = 0; _x < ddmenus.length; _x++) {
            if (menus[_x].classList.contains('menu-is-open')) menus[_x].classList.remove('menu-is-open');
        }
    }
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvZHJvcGRvd25tZW51LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQSxJQUFNLFVBQVUsU0FBUyxnQkFBVCxDQUEwQixXQUExQixDQUFoQjs7QUFFQSxLQUFLLElBQUksSUFBRSxDQUFYLEVBQWMsSUFBRSxRQUFRLE1BQXhCLEVBQWdDLEdBQWhDLEVBQXFDOztBQUVqQyxZQUFRLENBQVIsRUFBVyxhQUFYLENBQXlCLG1CQUF6QixFQUE4QyxnQkFBOUMsQ0FBK0QsT0FBL0QsRUFBd0UsVUFBUyxLQUFULEVBQWdCO0FBQ3BGLGNBQU0sY0FBTjtBQUNBLFlBQUksVUFBVSxNQUFNLE1BQXBCO0FBQ0EsWUFBSSxVQUFVLFFBQVEsVUFBdEI7QUFDQSxZQUFJLFNBQVMsU0FBUyxnQkFBVCxDQUEwQix3QkFBMUIsQ0FBYjtBQUNBO0FBQ0EsYUFBSSxJQUFJLElBQUUsQ0FBVixFQUFhLElBQUksT0FBTyxNQUF4QixFQUFnQyxHQUFoQyxFQUFzQztBQUNsQyxtQkFBTyxDQUFQLEVBQVUsU0FBVixDQUFvQixNQUFwQixDQUEyQixjQUEzQjtBQUNIO0FBQ0Q7QUFDQSxZQUFJLFFBQVEsU0FBUixDQUFrQixRQUFsQixDQUEyQixjQUEzQixDQUFKLEVBQWlEO0FBQzdDLG9CQUFRLFNBQVIsQ0FBa0IsTUFBbEIsQ0FBeUIsY0FBekI7QUFDSCxTQUZELE1BRU87QUFDSCxvQkFBUSxTQUFSLENBQWtCLEdBQWxCLENBQXNCLGNBQXRCO0FBQ0g7QUFDTixLQWZDO0FBaUJIOztBQUVELFNBQVMsZ0JBQVQsQ0FBMEIsT0FBMUIsRUFBbUMsVUFBUyxLQUFULEVBQWdCOztBQUUvQyxRQUFJLENBQUMsTUFBTSxNQUFOLENBQWEsT0FBYixDQUFxQixtQkFBckIsQ0FBTCxFQUFnRDtBQUM1QyxZQUFJLFFBQVEsU0FBUyxzQkFBVCxDQUFnQyxVQUFoQyxDQUFaO0FBQ0EsYUFBSyxJQUFJLEtBQUUsQ0FBWCxFQUFjLEtBQUUsUUFBUSxNQUF4QixFQUFnQyxJQUFoQyxFQUFxQztBQUNqQyxnQkFBSSxNQUFNLEVBQU4sRUFBUyxTQUFULENBQW1CLFFBQW5CLENBQTRCLGNBQTVCLENBQUosRUFDSSxNQUFNLEVBQU4sRUFBUyxTQUFULENBQW1CLE1BQW5CLENBQTBCLGNBQTFCO0FBQ1A7QUFDSjtBQUNKLENBVEQiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJjb25zdCBkZG1lbnVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5kcm9wZG93blwiKTtcblxuZm9yKCBsZXQgeD0wOyB4PGRkbWVudXMubGVuZ3RoOyB4KyspIHtcbiAgICBcbiAgICBkZG1lbnVzW3hdLnF1ZXJ5U2VsZWN0b3IoXCIuZHJvcGRvd24tdHJpZ2dlclwiKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGxldCB0cmlnZ2VyID0gZXZlbnQudGFyZ2V0O1xuICAgICAgICBsZXQgd3JhcHBlciA9IHRyaWdnZXIucGFyZW50Tm9kZTtcbiAgICAgICAgbGV0IGlzb3BlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZHJvcGRvd24ubWVudS1pcy1vcGVuXCIpO1xuICAgICAgICAvLyBIaWRlIGFueW9uZSB0aGF0IGlzIG9wZW5cbiAgICAgICAgZm9yKGxldCBpPTA7IGkgPCBpc29wZW4ubGVuZ3RoOyBpKysgKSB7XG4gICAgICAgICAgICBpc29wZW5baV0uY2xhc3NMaXN0LnJlbW92ZSgnbWVudS1pcy1vcGVuJyk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gVG9nZ2xlIGN1cnJlbnRcbiAgICAgICAgaWYoIHdyYXBwZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCdtZW51LWlzLW9wZW4nKSApIHtcbiAgICAgICAgICAgIHdyYXBwZXIuY2xhc3NMaXN0LnJlbW92ZSgnbWVudS1pcy1vcGVuJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB3cmFwcGVyLmNsYXNzTGlzdC5hZGQoJ21lbnUtaXMtb3BlbicpO1xuICAgICAgICB9XG4gIH0pOyAgXG5cbn1cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGV2ZW50KSB7XG5cbiAgICBpZiAoIWV2ZW50LnRhcmdldC5tYXRjaGVzKCcuZHJvcGRvd24tdHJpZ2dlcicpKSB7XG4gICAgICAgIGxldCBtZW51cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJkcm9wZG93blwiKTtcbiAgICAgICAgZm9yKCBsZXQgeD0wOyB4PGRkbWVudXMubGVuZ3RoOyB4KyspIHtcbiAgICAgICAgICAgIGlmKCBtZW51c1t4XS5jbGFzc0xpc3QuY29udGFpbnMoJ21lbnUtaXMtb3BlbicpIClcbiAgICAgICAgICAgICAgICBtZW51c1t4XS5jbGFzc0xpc3QucmVtb3ZlKCdtZW51LWlzLW9wZW4nKTtcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuXG5cbiJdfQ==

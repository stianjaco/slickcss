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
            if (isopen[i] !== wrapper) isopen[i].classList.remove('menu-is-open');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvZHJvcGRvd25tZW51LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQSxJQUFNLFVBQVUsU0FBUyxnQkFBVCxDQUEwQixXQUExQixDQUFoQjs7QUFFQSxLQUFLLElBQUksSUFBRSxDQUFYLEVBQWMsSUFBRSxRQUFRLE1BQXhCLEVBQWdDLEdBQWhDLEVBQXFDOztBQUVqQyxZQUFRLENBQVIsRUFBVyxhQUFYLENBQXlCLG1CQUF6QixFQUE4QyxnQkFBOUMsQ0FBK0QsT0FBL0QsRUFBd0UsVUFBUyxLQUFULEVBQWdCO0FBQ3BGLGNBQU0sY0FBTjtBQUNBLFlBQUksVUFBVSxNQUFNLE1BQXBCO0FBQ0EsWUFBSSxVQUFVLFFBQVEsVUFBdEI7QUFDQSxZQUFJLFNBQVMsU0FBUyxnQkFBVCxDQUEwQix3QkFBMUIsQ0FBYjtBQUNBO0FBQ0EsYUFBSSxJQUFJLElBQUUsQ0FBVixFQUFhLElBQUksT0FBTyxNQUF4QixFQUFnQyxHQUFoQyxFQUFzQztBQUNsQyxnQkFBSSxPQUFPLENBQVAsTUFBYyxPQUFsQixFQUNJLE9BQU8sQ0FBUCxFQUFVLFNBQVYsQ0FBb0IsTUFBcEIsQ0FBMkIsY0FBM0I7QUFDUDtBQUNEO0FBQ0EsWUFBSSxRQUFRLFNBQVIsQ0FBa0IsUUFBbEIsQ0FBMkIsY0FBM0IsQ0FBSixFQUFpRDtBQUM3QyxvQkFBUSxTQUFSLENBQWtCLE1BQWxCLENBQXlCLGNBQXpCO0FBQ0gsU0FGRCxNQUVPO0FBQ0gsb0JBQVEsU0FBUixDQUFrQixHQUFsQixDQUFzQixjQUF0QjtBQUNIO0FBQ04sS0FoQkM7QUFrQkg7O0FBRUQsU0FBUyxnQkFBVCxDQUEwQixPQUExQixFQUFtQyxVQUFTLEtBQVQsRUFBZ0I7O0FBRS9DLFFBQUksQ0FBQyxNQUFNLE1BQU4sQ0FBYSxPQUFiLENBQXFCLG1CQUFyQixDQUFMLEVBQWdEO0FBQzVDLFlBQUksUUFBUSxTQUFTLHNCQUFULENBQWdDLFVBQWhDLENBQVo7QUFDQSxhQUFLLElBQUksS0FBRSxDQUFYLEVBQWMsS0FBRSxRQUFRLE1BQXhCLEVBQWdDLElBQWhDLEVBQXFDO0FBQ2pDLGdCQUFJLE1BQU0sRUFBTixFQUFTLFNBQVQsQ0FBbUIsUUFBbkIsQ0FBNEIsY0FBNUIsQ0FBSixFQUNJLE1BQU0sRUFBTixFQUFTLFNBQVQsQ0FBbUIsTUFBbkIsQ0FBMEIsY0FBMUI7QUFDUDtBQUNKO0FBQ0osQ0FURCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImNvbnN0IGRkbWVudXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmRyb3Bkb3duXCIpO1xuXG5mb3IoIGxldCB4PTA7IHg8ZGRtZW51cy5sZW5ndGg7IHgrKykge1xuICAgIFxuICAgIGRkbWVudXNbeF0ucXVlcnlTZWxlY3RvcihcIi5kcm9wZG93bi10cmlnZ2VyXCIpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgbGV0IHRyaWdnZXIgPSBldmVudC50YXJnZXQ7XG4gICAgICAgIGxldCB3cmFwcGVyID0gdHJpZ2dlci5wYXJlbnROb2RlO1xuICAgICAgICBsZXQgaXNvcGVuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5kcm9wZG93bi5tZW51LWlzLW9wZW5cIik7XG4gICAgICAgIC8vIEhpZGUgYW55b25lIHRoYXQgaXMgb3BlblxuICAgICAgICBmb3IobGV0IGk9MDsgaSA8IGlzb3Blbi5sZW5ndGg7IGkrKyApIHtcbiAgICAgICAgICAgIGlmKCBpc29wZW5baV0gIT09IHdyYXBwZXIgKSBcbiAgICAgICAgICAgICAgICBpc29wZW5baV0uY2xhc3NMaXN0LnJlbW92ZSgnbWVudS1pcy1vcGVuJyk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gVG9nZ2xlIGN1cnJlbnRcbiAgICAgICAgaWYoIHdyYXBwZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCdtZW51LWlzLW9wZW4nKSApIHtcbiAgICAgICAgICAgIHdyYXBwZXIuY2xhc3NMaXN0LnJlbW92ZSgnbWVudS1pcy1vcGVuJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB3cmFwcGVyLmNsYXNzTGlzdC5hZGQoJ21lbnUtaXMtb3BlbicpO1xuICAgICAgICB9XG4gIH0pOyAgXG5cbn1cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGV2ZW50KSB7XG5cbiAgICBpZiAoIWV2ZW50LnRhcmdldC5tYXRjaGVzKCcuZHJvcGRvd24tdHJpZ2dlcicpKSB7XG4gICAgICAgIGxldCBtZW51cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJkcm9wZG93blwiKTtcbiAgICAgICAgZm9yKCBsZXQgeD0wOyB4PGRkbWVudXMubGVuZ3RoOyB4KyspIHtcbiAgICAgICAgICAgIGlmKCBtZW51c1t4XS5jbGFzc0xpc3QuY29udGFpbnMoJ21lbnUtaXMtb3BlbicpIClcbiAgICAgICAgICAgICAgICBtZW51c1t4XS5jbGFzc0xpc3QucmVtb3ZlKCdtZW51LWlzLW9wZW4nKTtcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuXG5cbiJdfQ==

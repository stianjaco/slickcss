(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.slickTabs = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

module.exports = function slickTabs(el, args) {
    var self = el;
    var defaults = {
        onInit: null,
        onOpen: null,
        onClose: null,
        breakpoint: 768,
        nav: null,
        container: null
    };
    var options = Object.assign(defaults, args);
    var container = options.container === null || typeof options.container === 'undefined' ? self.querySelector(".tab-container") : options.container;
    var items = container.children;
    var nav = options.nav === null || typeof options.nav === 'undefined' ? self.querySelectorAll(".tab-nav") : options.nav;
    var tabItems = nav.querySelectorAll("li");

    var __construct = function __construct() {
        var onInitCallback = options.onInit || window[options.onInit];
        var selected_tab = 0;
        var active_tab_nav = tabItems[selected_tab];

        if (!hasActiveTab() && window.location.hash && window.location.hash.length > 0) {
            // Check if hash exists in nav
            var cur_hash = window.location.hash.substring(1);
            var in_nav = nav.querySelector("a[href='#" + cur_hash + "']");

            if (null !== in_nav) {
                selected_tab = cur_hash;
                active_tab_nav = in_nav.parentNode;
            }
        } else {
            selected_tab = getActiveTab(); // Returns 0 by default (first tab)
            active_tab_nav = tabItems[selected_tab];
        }

        active_tab_nav.classList.add('is-active');

        // Check the breakpoint
        if (self.parentNode.offsetWidth <= options.breakpoint) {
            self.classList.add('layout-is-vertical');
        }

        if (typeof onInitCallback === 'function') {
            onInitCallback(self, selected_tab);
        }

        // Loop through and set classes and active tab
        Array.from(items).forEach(function (element, index) {
            element.classList.add('ui-tab');
            if (!hasActiveTab()) {
                element.classList.remove('active-tab');
                if (!isNaN(selected_tab) && selected_tab === index || selected_tab === element.id) {
                    element.classList.add('active-tab');
                }
            }
        });

        // Events
        [].map.call(nav.querySelectorAll("li > a"), function (elem) {
            elem.addEventListener("click", function (event) {
                event.preventDefault();
                var target = event.target.getAttribute('href');
                console.log('Open ' + target);
                openTab(target);
                var navs = nav.children,
                    i = 0;
                while (navs[i]) {
                    navs[i].classList.remove('is-active');
                    if (navs[i] === event.target.parentNode) {
                        navs[i].classList.add('is-active');
                    }
                    i++;
                }
            }, false);
        });

        window.addEventListener('resize', function (event) {
            if (self.parentNode.offsetWidth <= options.breakpoint) {
                self.classList.add('layout-is-vertical');
            } else {
                if (self.classList.contains('layout-is-vertical')) self.classList.remove('layout-is-vertical');
            }
        });

        return this;
    };

    /**
     * openTab
     * @param {string} id ID of tab to open 
     */
    var openTab = function openTab(id) {
        id = id.substring(1);
        var active_tab = self.querySelector(".active-tab");
        var onOpenCallback = options.onOpen || window[options.onOpen];

        if (id.length > 0 && id !== active_tab.id) {
            var element = document.getElementById(id);
            closeAllTabs(id);
            element.classList.add('active-tab');

            if (typeof onOpenCallback === 'function') {
                onOpenCallback(element, self);
            }
            if (history.pushState) {
                history.pushState(null, null, '#' + id);
            } else {
                window.location.hash = id;
            }
            location.href = "#";
            location.href = "#" + id;
        }
    };

    /**
     * CloseAllTabs
     * Loop through each tab and close
     * @param {string|integer} not What tab not to close 
     */
    var closeAllTabs = function closeAllTabs(not) {
        not = typeof not !== "undefined" ? not : null;
        var onCloseCallback = options.onClose || window[options.onClose];
        Array.from(items).forEach(function (element, index) {
            if ((!isNaN(not) && not !== index || not !== element.id) && element.classList.contains('active-tab')) {
                element.classList.remove('active-tab');
                if (typeof onCloseCallback === 'function') {
                    onCloseCallback(element, self);
                }
            }
        });
    };

    var hasActiveTab = function hasActiveTab() {
        var n = 0;
        Array.from(items).forEach(function (element, index) {
            if (element.classList.contains('active-tab')) {
                n++;
            }
        });
        return n > 0 ? true : false;
    };

    var getActiveTab = function getActiveTab() {
        var n = 0;
        Array.from(items).forEach(function (element, index) {
            if (element.classList.contains('active-tab')) {
                n = index;
            }
        });
        return n;
    };
    __construct();
    return slickTabs;
};

},{}]},{},[1])(1)
});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvdGFicy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUEsT0FBTyxPQUFQLEdBQWlCLFNBQVMsU0FBVCxDQUFvQixFQUFwQixFQUF3QixJQUF4QixFQUNqQjtBQUNJLFFBQU0sT0FBTyxFQUFiO0FBQ0EsUUFBTSxXQUFXO0FBQ2IsZ0JBQVEsSUFESztBQUViLGdCQUFRLElBRks7QUFHYixpQkFBUyxJQUhJO0FBSWIsb0JBQVksR0FKQztBQUtiLGFBQUssSUFMUTtBQU1iLG1CQUFXO0FBTkUsS0FBakI7QUFRQSxRQUFNLFVBQVksT0FBTyxNQUFQLENBQWMsUUFBZCxFQUF3QixJQUF4QixDQUFsQjtBQUNBLFFBQU0sWUFBWSxRQUFRLFNBQVIsS0FBc0IsSUFBdEIsSUFBOEIsT0FBTyxRQUFRLFNBQWYsS0FBNkIsV0FBM0QsR0FBeUUsS0FBSyxhQUFMLENBQW1CLGdCQUFuQixDQUF6RSxHQUFnSCxRQUFRLFNBQTFJO0FBQ0EsUUFBTSxRQUFZLFVBQVUsUUFBNUI7QUFDQSxRQUFNLE1BQVksUUFBUSxHQUFSLEtBQWdCLElBQWhCLElBQXdCLE9BQU8sUUFBUSxHQUFmLEtBQXVCLFdBQS9DLEdBQTZELEtBQUssZ0JBQUwsQ0FBc0IsVUFBdEIsQ0FBN0QsR0FBaUcsUUFBUSxHQUEzSDtBQUNBLFFBQU0sV0FBWSxJQUFJLGdCQUFKLENBQXFCLElBQXJCLENBQWxCOztBQUVBLFFBQUksY0FBYyxTQUFkLFdBQWMsR0FDbEI7QUFDSSxZQUFJLGlCQUFpQixRQUFRLE1BQVIsSUFBa0IsT0FBTyxRQUFRLE1BQWYsQ0FBdkM7QUFDQSxZQUFJLGVBQWUsQ0FBbkI7QUFDQSxZQUFJLGlCQUFpQixTQUFTLFlBQVQsQ0FBckI7O0FBRUEsWUFBSSxDQUFDLGNBQUQsSUFBbUIsT0FBTyxRQUFQLENBQWdCLElBQW5DLElBQTJDLE9BQU8sUUFBUCxDQUFnQixJQUFoQixDQUFxQixN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QU8sZUFBUCxLQUEyQixVQUEvQixFQUE0QztBQUN4QyxvQ0FBaUIsT0FBakIsRUFBMEIsSUFBMUI7QUFDSDtBQUNKO0FBQ0osU0FQRDtBQVFILEtBWkQ7O0FBY0EsUUFBSSxlQUFlLFNBQWYsWUFBZSxHQUNuQjtBQUNJLFlBQUksSUFBSSxDQUFSO0FBQ0EsY0FBTSxJQUFOLENBQVksS0FBWixFQUFvQixPQUFwQixDQUE2QixVQUFDLE9BQUQsRUFBVSxLQUFWLEVBQXFCO0FBQzlDLGdCQUFJLFFBQVEsU0FBUixDQUFrQixRQUFsQixDQUEyQixZQUEzQixDQUFKLEVBQStDO0FBQzNDO0FBQ0g7QUFDSixTQUpEO0FBS0EsZUFBTyxJQUFJLENBQUosR0FBUSxJQUFSLEdBQWUsS0FBdEI7QUFDSCxLQVREOztBQVdBLFFBQUksZUFBZSxTQUFmLFlBQWUsR0FDbkI7QUFDSSxZQUFJLElBQUksQ0FBUjtBQUNBLGNBQU0sSUFBTixDQUFZLEtBQVosRUFBb0IsT0FBcEIsQ0FBNkIsVUFBQyxPQUFELEVBQVUsS0FBVixFQUFxQjtBQUM5QyxnQkFBSSxRQUFRLFNBQVIsQ0FBa0IsUUFBbEIsQ0FBMkIsWUFBM0IsQ0FBSixFQUErQztBQUMzQyxvQkFBSSxLQUFKO0FBQ0g7QUFDSixTQUpEO0FBS0EsZUFBTyxDQUFQO0FBQ0gsS0FURDtBQVVBO0FBQ0EsV0FBTyxTQUFQO0FBQ0gsQ0FqS0QiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHNsaWNrVGFicyggZWwsIGFyZ3MgKVxue1xuICAgIGNvbnN0IHNlbGYgPSBlbDtcbiAgICBjb25zdCBkZWZhdWx0cyA9IHtcbiAgICAgICAgb25Jbml0OiBudWxsLFxuICAgICAgICBvbk9wZW46IG51bGwsXG4gICAgICAgIG9uQ2xvc2U6IG51bGwsXG4gICAgICAgIGJyZWFrcG9pbnQ6IDc2OCxcbiAgICAgICAgbmF2OiBudWxsLFxuICAgICAgICBjb250YWluZXI6IG51bGxcbiAgICB9O1xuICAgIGNvbnN0IG9wdGlvbnMgICA9IE9iamVjdC5hc3NpZ24oZGVmYXVsdHMsIGFyZ3MpO1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IG9wdGlvbnMuY29udGFpbmVyID09PSBudWxsIHx8IHR5cGVvZiBvcHRpb25zLmNvbnRhaW5lciA9PT0gJ3VuZGVmaW5lZCcgPyBzZWxmLnF1ZXJ5U2VsZWN0b3IoXCIudGFiLWNvbnRhaW5lclwiKSA6IG9wdGlvbnMuY29udGFpbmVyO1xuICAgIGNvbnN0IGl0ZW1zICAgICA9IGNvbnRhaW5lci5jaGlsZHJlbjtcbiAgICBjb25zdCBuYXYgICAgICAgPSBvcHRpb25zLm5hdiA9PT0gbnVsbCB8fCB0eXBlb2Ygb3B0aW9ucy5uYXYgPT09ICd1bmRlZmluZWQnID8gc2VsZi5xdWVyeVNlbGVjdG9yQWxsKFwiLnRhYi1uYXZcIikgOiBvcHRpb25zLm5hdjtcbiAgICBjb25zdCB0YWJJdGVtcyAgPSBuYXYucXVlcnlTZWxlY3RvckFsbChcImxpXCIpO1xuXG4gICAgbGV0IF9fY29uc3RydWN0ID0gZnVuY3Rpb24oKVxuICAgIHsgICBcbiAgICAgICAgbGV0IG9uSW5pdENhbGxiYWNrID0gb3B0aW9ucy5vbkluaXQgfHwgd2luZG93W29wdGlvbnMub25Jbml0XTtcbiAgICAgICAgbGV0IHNlbGVjdGVkX3RhYiA9IDA7XG4gICAgICAgIGxldCBhY3RpdmVfdGFiX25hdiA9IHRhYkl0ZW1zW3NlbGVjdGVkX3RhYl07XG5cbiAgICAgICAgaWYoICFoYXNBY3RpdmVUYWIoKSAmJiB3aW5kb3cubG9jYXRpb24uaGFzaCAmJiB3aW5kb3cubG9jYXRpb24uaGFzaC5sZW5ndGggPiAwICkge1xuICAgICAgICAgICAgLy8gQ2hlY2sgaWYgaGFzaCBleGlzdHMgaW4gbmF2XG4gICAgICAgICAgICBsZXQgY3VyX2hhc2ggPSB3aW5kb3cubG9jYXRpb24uaGFzaC5zdWJzdHJpbmcoMSk7XG4gICAgICAgICAgICBsZXQgaW5fbmF2ID0gbmF2LnF1ZXJ5U2VsZWN0b3IoXCJhW2hyZWY9JyNcIiArIGN1cl9oYXNoICsgXCInXVwiKTtcblxuICAgICAgICAgICAgaWYoIG51bGwgIT09IGluX25hdiApIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RlZF90YWIgPSBjdXJfaGFzaDtcbiAgICAgICAgICAgICAgICBhY3RpdmVfdGFiX25hdiA9IGluX25hdi5wYXJlbnROb2RlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZWxlY3RlZF90YWIgPSBnZXRBY3RpdmVUYWIoKTsgLy8gUmV0dXJucyAwIGJ5IGRlZmF1bHQgKGZpcnN0IHRhYilcbiAgICAgICAgICAgIGFjdGl2ZV90YWJfbmF2ID0gdGFiSXRlbXNbc2VsZWN0ZWRfdGFiXTtcbiAgICAgICAgfVxuICAgICAgIFxuICAgICAgICBhY3RpdmVfdGFiX25hdi5jbGFzc0xpc3QuYWRkKCdpcy1hY3RpdmUnKTtcblxuICAgICAgICAvLyBDaGVjayB0aGUgYnJlYWtwb2ludFxuICAgICAgICBpZiggc2VsZi5wYXJlbnROb2RlLm9mZnNldFdpZHRoIDw9IG9wdGlvbnMuYnJlYWtwb2ludCApIHtcbiAgICAgICAgICAgIHNlbGYuY2xhc3NMaXN0LmFkZCgnbGF5b3V0LWlzLXZlcnRpY2FsJyk7XG4gICAgICAgIH0gXG5cbiAgICAgICAgaWYoIHR5cGVvZiBvbkluaXRDYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJyApIHtcbiAgICAgICAgICAgIG9uSW5pdENhbGxiYWNrKCBzZWxmLCBzZWxlY3RlZF90YWIgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIExvb3AgdGhyb3VnaCBhbmQgc2V0IGNsYXNzZXMgYW5kIGFjdGl2ZSB0YWJcbiAgICAgICAgQXJyYXkuZnJvbSggaXRlbXMgKS5mb3JFYWNoKCAoZWxlbWVudCwgaW5kZXgpICA9PiB7XG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3VpLXRhYicpO1xuICAgICAgICAgICAgaWYoICFoYXNBY3RpdmVUYWIoKSApIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZS10YWInKTtcbiAgICAgICAgICAgICAgICBpZiggKCFpc05hTihzZWxlY3RlZF90YWIpICYmIHNlbGVjdGVkX3RhYiA9PT0gaW5kZXgpIHx8IHNlbGVjdGVkX3RhYiA9PT0gZWxlbWVudC5pZCApIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUtdGFiJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBFdmVudHNcbiAgICAgICAgW10ubWFwLmNhbGwoIG5hdi5xdWVyeVNlbGVjdG9yQWxsKFwibGkgPiBhXCIpICwgZWxlbSA9PiB7XG4gICAgICAgICAgICBlbGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBldmVudCA9PiB7XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBsZXQgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZSgnaHJlZicpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdPcGVuICcrdGFyZ2V0KTtcbiAgICAgICAgICAgICAgICBvcGVuVGFiKCB0YXJnZXQgKTtcbiAgICAgICAgICAgICAgICBsZXQgbmF2cyA9IG5hdi5jaGlsZHJlbixcbiAgICAgICAgICAgICAgICAgICAgaSA9IDA7XG4gICAgICAgICAgICAgICAgd2hpbGUoIG5hdnNbaV0gKSB7XG4gICAgICAgICAgICAgICAgICAgIG5hdnNbaV0uY2xhc3NMaXN0LnJlbW92ZSgnaXMtYWN0aXZlJyk7ICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgaWYoIG5hdnNbaV0gPT09IGV2ZW50LnRhcmdldC5wYXJlbnROb2RlICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmF2c1tpXS5jbGFzc0xpc3QuYWRkKCdpcy1hY3RpdmUnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpKys7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9LCBmYWxzZSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBldmVudCA9PiB7XG4gICAgICAgICAgICBpZihzZWxmLnBhcmVudE5vZGUub2Zmc2V0V2lkdGggPD0gb3B0aW9ucy5icmVha3BvaW50ICkge1xuICAgICAgICAgICAgICAgIHNlbGYuY2xhc3NMaXN0LmFkZCgnbGF5b3V0LWlzLXZlcnRpY2FsJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmKCBzZWxmLmNsYXNzTGlzdC5jb250YWlucygnbGF5b3V0LWlzLXZlcnRpY2FsJykgKVxuICAgICAgICAgICAgICAgICAgICBzZWxmLmNsYXNzTGlzdC5yZW1vdmUoJ2xheW91dC1pcy12ZXJ0aWNhbCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTsgXG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogb3BlblRhYlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBJRCBvZiB0YWIgdG8gb3BlbiBcbiAgICAgKi9cbiAgICBsZXQgb3BlblRhYiA9IGZ1bmN0aW9uKGlkKSB7XG4gICAgICAgIGlkID0gaWQuc3Vic3RyaW5nKDEpO1xuICAgICAgICBsZXQgYWN0aXZlX3RhYiA9IHNlbGYucXVlcnlTZWxlY3RvcihcIi5hY3RpdmUtdGFiXCIpO1xuICAgICAgICBsZXQgb25PcGVuQ2FsbGJhY2sgPSBvcHRpb25zLm9uT3BlbiB8fCB3aW5kb3dbb3B0aW9ucy5vbk9wZW5dO1xuXG4gICAgICAgIGlmKCBpZC5sZW5ndGggPiAwICYmIGlkICE9PSBhY3RpdmVfdGFiLmlkICkge1xuICAgICAgICAgICAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XG4gICAgICAgICAgICBjbG9zZUFsbFRhYnMoIGlkICk7XG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZS10YWInKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYoIHR5cGVvZiBvbk9wZW5DYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJyApIHtcbiAgICAgICAgICAgICAgICBvbk9wZW5DYWxsYmFjayggZWxlbWVudCwgc2VsZiApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYoaGlzdG9yeS5wdXNoU3RhdGUpIHtcbiAgICAgICAgICAgICAgICBoaXN0b3J5LnB1c2hTdGF0ZShudWxsLCBudWxsLCAnIycraWQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaGFzaCA9IGlkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbG9jYXRpb24uaHJlZiA9IFwiI1wiO1xuICAgICAgICAgICAgbG9jYXRpb24uaHJlZiA9IFwiI1wiK2lkO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2xvc2VBbGxUYWJzXG4gICAgICogTG9vcCB0aHJvdWdoIGVhY2ggdGFiIGFuZCBjbG9zZVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfGludGVnZXJ9IG5vdCBXaGF0IHRhYiBub3QgdG8gY2xvc2UgXG4gICAgICovXG4gICAgbGV0IGNsb3NlQWxsVGFicyA9IGZ1bmN0aW9uKCBub3QgKSBcbiAgICB7XG4gICAgICAgIG5vdCA9IHR5cGVvZiBub3QgIT09IFwidW5kZWZpbmVkXCIgPyBub3QgOiBudWxsO1xuICAgICAgICBsZXQgb25DbG9zZUNhbGxiYWNrID0gb3B0aW9ucy5vbkNsb3NlIHx8IHdpbmRvd1tvcHRpb25zLm9uQ2xvc2VdO1xuICAgICAgICBBcnJheS5mcm9tKCBpdGVtcyApLmZvckVhY2goIChlbGVtZW50LCBpbmRleCkgID0+IHtcbiAgICAgICAgICAgIGlmKCAoKCFpc05hTihub3QpICYmIG5vdCAhPT0gaW5kZXgpIHx8IG5vdCAhPT0gZWxlbWVudC5pZCkgJiYgZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZS10YWInKSApIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZS10YWInKTtcbiAgICAgICAgICAgICAgICBpZiggdHlwZW9mIG9uQ2xvc2VDYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJyApIHtcbiAgICAgICAgICAgICAgICAgICAgb25DbG9zZUNhbGxiYWNrKCBlbGVtZW50LCBzZWxmICk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBsZXQgaGFzQWN0aXZlVGFiID0gZnVuY3Rpb24oKVxuICAgIHtcbiAgICAgICAgbGV0IG4gPSAwO1xuICAgICAgICBBcnJheS5mcm9tKCBpdGVtcyApLmZvckVhY2goIChlbGVtZW50LCBpbmRleCkgID0+IHtcbiAgICAgICAgICAgIGlmKCBlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlLXRhYicpICkge1xuICAgICAgICAgICAgICAgIG4rKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7IFxuICAgICAgICByZXR1cm4gbiA+IDAgPyB0cnVlIDogZmFsc2U7XG4gICAgfVxuXG4gICAgbGV0IGdldEFjdGl2ZVRhYiA9IGZ1bmN0aW9uKClcbiAgICB7ICAgICAgIFxuICAgICAgICBsZXQgbiA9IDA7XG4gICAgICAgIEFycmF5LmZyb20oIGl0ZW1zICkuZm9yRWFjaCggKGVsZW1lbnQsIGluZGV4KSAgPT4ge1xuICAgICAgICAgICAgaWYoIGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUtdGFiJykgKSB7XG4gICAgICAgICAgICAgICAgbiA9IGluZGV4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTsgXG4gICAgICAgIHJldHVybiBuO1xuICAgIH1cbiAgICBfX2NvbnN0cnVjdCgpO1xuICAgIHJldHVybiBzbGlja1RhYnM7XG59Il19

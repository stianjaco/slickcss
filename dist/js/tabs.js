(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.slickTabs = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

module.exports = function slickTabs(el, args) {
    var self = el;
    var defaults = {
        onInit: null,
        onOpen: null,
        onClose: null,
        breakpoint: 768
    };
    var options = Object.assign(defaults, args);
    var items = self.querySelector(".tab-container").children;
    var tabs = self.querySelectorAll(".tab-nav li");

    var __construct = function __construct() {
        var onInitCallback = options.onInit || window[options.onInit];
        // Determin the selected tab        
        var selected_tab = !hasActiveTab() && window.location.hash && window.location.hash.length > 0 ? window.location.hash.substring(1) : getActiveTab();
        // Set active in navigation
        var active_tab_nav = !isNaN(selected_tab) ? tabs[selected_tab] : self.querySelector("a[href='#" + selected_tab + "']").parentNode;
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
        [].map.call(self.querySelectorAll(".tab-nav li > a"), function (elem) {
            elem.addEventListener("click", function (event) {
                event.preventDefault();
                var target = event.target.getAttribute('href');
                openTab(target);
                var navs = self.querySelector(".tab-nav").children,
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvdGFicy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUEsT0FBTyxPQUFQLEdBQWlCLFNBQVMsU0FBVCxDQUFvQixFQUFwQixFQUF3QixJQUF4QixFQUNqQjtBQUNJLFFBQU0sT0FBTyxFQUFiO0FBQ0EsUUFBTSxXQUFXO0FBQ2IsZ0JBQVEsSUFESztBQUViLGdCQUFRLElBRks7QUFHYixpQkFBUyxJQUhJO0FBSWIsb0JBQVk7QUFKQyxLQUFqQjtBQU1BLFFBQU0sVUFBWSxPQUFPLE1BQVAsQ0FBYyxRQUFkLEVBQXdCLElBQXhCLENBQWxCO0FBQ0EsUUFBTSxRQUFZLEtBQUssYUFBTCxDQUFtQixnQkFBbkIsRUFBcUMsUUFBdkQ7QUFDQSxRQUFNLE9BQVksS0FBSyxnQkFBTCxDQUFzQixhQUF0QixDQUFsQjs7QUFFQSxRQUFJLGNBQWMsU0FBZCxXQUFjLEdBQ2xCO0FBQ0ksWUFBSSxpQkFBaUIsUUFBUSxNQUFSLElBQWtCLE9BQU8sUUFBUSxNQUFmLENBQXZDO0FBQ0E7QUFDQSxZQUFJLGVBQWUsQ0FBQyxjQUFELElBQW1CLE9BQU8sUUFBUCxDQUFnQixJQUFuQyxJQUEyQyxPQUFPLFFBQVAsQ0FBZ0IsSUFBaEIsQ0FBcUIsTUFBckIsR0FBOEIsQ0FBekUsR0FBNkUsT0FBTyxRQUFQLENBQWdCLElBQWhCLENBQXFCLFNBQXJCLENBQStCLENBQS9CLENBQTdFLEdBQWlILGNBQXBJO0FBQ0E7QUFDQSxZQUFJLGlCQUFpQixDQUFDLE1BQU0sWUFBTixDQUFELEdBQXVCLEtBQUssWUFBTCxDQUF2QixHQUE0QyxLQUFLLGFBQUwsQ0FBbUIsY0FBWSxZQUFaLEdBQXlCLElBQTVDLEVBQWtELFVBQW5IO0FBQ0EsdUJBQWUsU0FBZixDQUF5QixHQUF6QixDQUE2QixXQUE3Qjs7QUFFQTtBQUNBLFlBQUksS0FBSyxVQUFMLENBQWdCLFdBQWhCLElBQStCLFFBQVEs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TixDQUFZLEtBQVosRUFBb0IsT0FBcEIsQ0FBNkIsVUFBQyxPQUFELEVBQVUsS0FBVixFQUFxQjtBQUM5QyxnQkFBSSxRQUFRLFNBQVIsQ0FBa0IsUUFBbEIsQ0FBMkIsWUFBM0IsQ0FBSixFQUErQztBQUMzQyxvQkFBSSxLQUFKO0FBQ0g7QUFDSixTQUpEO0FBS0EsZUFBTyxDQUFQO0FBQ0gsS0FURDtBQVVBO0FBQ0EsV0FBTyxTQUFQO0FBQ0gsQ0E5SUQiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHNsaWNrVGFicyggZWwsIGFyZ3MgKVxue1xuICAgIGNvbnN0IHNlbGYgPSBlbDtcbiAgICBjb25zdCBkZWZhdWx0cyA9IHtcbiAgICAgICAgb25Jbml0OiBudWxsLFxuICAgICAgICBvbk9wZW46IG51bGwsXG4gICAgICAgIG9uQ2xvc2U6IG51bGwsXG4gICAgICAgIGJyZWFrcG9pbnQ6IDc2OFxuICAgIH07XG4gICAgY29uc3Qgb3B0aW9ucyAgID0gT2JqZWN0LmFzc2lnbihkZWZhdWx0cywgYXJncyk7XG4gICAgY29uc3QgaXRlbXMgICAgID0gc2VsZi5xdWVyeVNlbGVjdG9yKFwiLnRhYi1jb250YWluZXJcIikuY2hpbGRyZW47XG4gICAgY29uc3QgdGFicyAgICAgID0gc2VsZi5xdWVyeVNlbGVjdG9yQWxsKFwiLnRhYi1uYXYgbGlcIik7XG5cbiAgICBsZXQgX19jb25zdHJ1Y3QgPSBmdW5jdGlvbigpXG4gICAgeyAgIFxuICAgICAgICBsZXQgb25Jbml0Q2FsbGJhY2sgPSBvcHRpb25zLm9uSW5pdCB8fCB3aW5kb3dbb3B0aW9ucy5vbkluaXRdO1xuICAgICAgICAvLyBEZXRlcm1pbiB0aGUgc2VsZWN0ZWQgdGFiICAgICAgICBcbiAgICAgICAgbGV0IHNlbGVjdGVkX3RhYiA9ICFoYXNBY3RpdmVUYWIoKSAmJiB3aW5kb3cubG9jYXRpb24uaGFzaCAmJiB3aW5kb3cubG9jYXRpb24uaGFzaC5sZW5ndGggPiAwID8gd2luZG93LmxvY2F0aW9uLmhhc2guc3Vic3RyaW5nKDEpIDogZ2V0QWN0aXZlVGFiKCk7XG4gICAgICAgIC8vIFNldCBhY3RpdmUgaW4gbmF2aWdhdGlvblxuICAgICAgICBsZXQgYWN0aXZlX3RhYl9uYXYgPSAhaXNOYU4oc2VsZWN0ZWRfdGFiKSA/IHRhYnNbc2VsZWN0ZWRfdGFiXSA6IHNlbGYucXVlcnlTZWxlY3RvcihcImFbaHJlZj0nI1wiK3NlbGVjdGVkX3RhYitcIiddXCIpLnBhcmVudE5vZGU7XG4gICAgICAgIGFjdGl2ZV90YWJfbmF2LmNsYXNzTGlzdC5hZGQoJ2lzLWFjdGl2ZScpO1xuXG4gICAgICAgIC8vIENoZWNrIHRoZSBicmVha3BvaW50XG4gICAgICAgIGlmKCBzZWxmLnBhcmVudE5vZGUub2Zmc2V0V2lkdGggPD0gb3B0aW9ucy5icmVha3BvaW50ICkge1xuICAgICAgICAgICAgc2VsZi5jbGFzc0xpc3QuYWRkKCdsYXlvdXQtaXMtdmVydGljYWwnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKCB0eXBlb2Ygb25Jbml0Q2FsbGJhY2sgPT09ICdmdW5jdGlvbicgKSB7XG4gICAgICAgICAgICBvbkluaXRDYWxsYmFjayggc2VsZiwgc2VsZWN0ZWRfdGFiICk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBMb29wIHRocm91Z2ggYW5kIHNldCBjbGFzc2VzIGFuZCBhY3RpdmUgdGFiXG4gICAgICAgIEFycmF5LmZyb20oIGl0ZW1zICkuZm9yRWFjaCggKGVsZW1lbnQsIGluZGV4KSAgPT4ge1xuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCd1aS10YWInKTtcbiAgICAgICAgICAgIGlmKCAhaGFzQWN0aXZlVGFiKCkgKSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUtdGFiJyk7XG4gICAgICAgICAgICAgICAgaWYoICghaXNOYU4oc2VsZWN0ZWRfdGFiKSAmJiBzZWxlY3RlZF90YWIgPT09IGluZGV4KSB8fCBzZWxlY3RlZF90YWIgPT09IGVsZW1lbnQuaWQgKSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlLXRhYicpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gRXZlbnRzXG4gICAgICAgIFtdLm1hcC5jYWxsKCBzZWxmLnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFiLW5hdiBsaSA+IGFcIikgLCBlbGVtID0+IHtcbiAgICAgICAgICAgIGVsZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIGxldCB0YXJnZXQgPSBldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKCdocmVmJyk7XG4gICAgICAgICAgICAgICAgb3BlblRhYiggdGFyZ2V0ICk7XG4gICAgICAgICAgICAgICAgbGV0IG5hdnMgPSBzZWxmLnF1ZXJ5U2VsZWN0b3IoXCIudGFiLW5hdlwiKS5jaGlsZHJlbixcbiAgICAgICAgICAgICAgICAgICAgaSA9IDA7XG4gICAgICAgICAgICAgICAgd2hpbGUoIG5hdnNbaV0gKSB7XG4gICAgICAgICAgICAgICAgICAgIG5hdnNbaV0uY2xhc3NMaXN0LnJlbW92ZSgnaXMtYWN0aXZlJyk7ICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgaWYoIG5hdnNbaV0gPT09IGV2ZW50LnRhcmdldC5wYXJlbnROb2RlICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmF2c1tpXS5jbGFzc0xpc3QuYWRkKCdpcy1hY3RpdmUnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpKys7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9LCBmYWxzZSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBldmVudCA9PiB7XG4gICAgICAgICAgICBpZihzZWxmLnBhcmVudE5vZGUub2Zmc2V0V2lkdGggPD0gb3B0aW9ucy5icmVha3BvaW50ICkge1xuICAgICAgICAgICAgICAgIHNlbGYuY2xhc3NMaXN0LmFkZCgnbGF5b3V0LWlzLXZlcnRpY2FsJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmKCBzZWxmLmNsYXNzTGlzdC5jb250YWlucygnbGF5b3V0LWlzLXZlcnRpY2FsJykgKVxuICAgICAgICAgICAgICAgICAgICBzZWxmLmNsYXNzTGlzdC5yZW1vdmUoJ2xheW91dC1pcy12ZXJ0aWNhbCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTsgXG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogb3BlblRhYlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBJRCBvZiB0YWIgdG8gb3BlbiBcbiAgICAgKi9cbiAgICBsZXQgb3BlblRhYiA9IGZ1bmN0aW9uKGlkKSB7XG4gICAgICAgIGlkID0gaWQuc3Vic3RyaW5nKDEpO1xuICAgICAgICBsZXQgYWN0aXZlX3RhYiA9IHNlbGYucXVlcnlTZWxlY3RvcihcIi5hY3RpdmUtdGFiXCIpO1xuICAgICAgICBsZXQgb25PcGVuQ2FsbGJhY2sgPSBvcHRpb25zLm9uT3BlbiB8fCB3aW5kb3dbb3B0aW9ucy5vbk9wZW5dO1xuXG4gICAgICAgIGlmKCBpZC5sZW5ndGggPiAwICYmIGlkICE9PSBhY3RpdmVfdGFiLmlkICkge1xuICAgICAgICAgICAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XG4gICAgICAgICAgICBjbG9zZUFsbFRhYnMoIGlkICk7XG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZS10YWInKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYoIHR5cGVvZiBvbk9wZW5DYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJyApIHtcbiAgICAgICAgICAgICAgICBvbk9wZW5DYWxsYmFjayggZWxlbWVudCwgc2VsZiApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYoaGlzdG9yeS5wdXNoU3RhdGUpIHtcbiAgICAgICAgICAgICAgICBoaXN0b3J5LnB1c2hTdGF0ZShudWxsLCBudWxsLCAnIycraWQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaGFzaCA9IGlkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbG9jYXRpb24uaHJlZiA9IFwiI1wiO1xuICAgICAgICAgICAgbG9jYXRpb24uaHJlZiA9IFwiI1wiK2lkO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2xvc2VBbGxUYWJzXG4gICAgICogTG9vcCB0aHJvdWdoIGVhY2ggdGFiIGFuZCBjbG9zZVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfGludGVnZXJ9IG5vdCBXaGF0IHRhYiBub3QgdG8gY2xvc2UgXG4gICAgICovXG4gICAgbGV0IGNsb3NlQWxsVGFicyA9IGZ1bmN0aW9uKCBub3QgKSBcbiAgICB7XG4gICAgICAgIG5vdCA9IHR5cGVvZiBub3QgIT09IFwidW5kZWZpbmVkXCIgPyBub3QgOiBudWxsO1xuICAgICAgICBsZXQgb25DbG9zZUNhbGxiYWNrID0gb3B0aW9ucy5vbkNsb3NlIHx8IHdpbmRvd1tvcHRpb25zLm9uQ2xvc2VdO1xuICAgICAgICBBcnJheS5mcm9tKCBpdGVtcyApLmZvckVhY2goIChlbGVtZW50LCBpbmRleCkgID0+IHtcbiAgICAgICAgICAgIGlmKCAoKCFpc05hTihub3QpICYmIG5vdCAhPT0gaW5kZXgpIHx8IG5vdCAhPT0gZWxlbWVudC5pZCkgJiYgZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZS10YWInKSApIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZS10YWInKTtcbiAgICAgICAgICAgICAgICBpZiggdHlwZW9mIG9uQ2xvc2VDYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJyApIHtcbiAgICAgICAgICAgICAgICAgICAgb25DbG9zZUNhbGxiYWNrKCBlbGVtZW50LCBzZWxmICk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBsZXQgaGFzQWN0aXZlVGFiID0gZnVuY3Rpb24oKVxuICAgIHtcbiAgICAgICAgbGV0IG4gPSAwO1xuICAgICAgICBBcnJheS5mcm9tKCBpdGVtcyApLmZvckVhY2goIChlbGVtZW50LCBpbmRleCkgID0+IHtcbiAgICAgICAgICAgIGlmKCBlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlLXRhYicpICkge1xuICAgICAgICAgICAgICAgIG4rKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7IFxuICAgICAgICByZXR1cm4gbiA+IDAgPyB0cnVlIDogZmFsc2U7XG4gICAgfVxuXG4gICAgbGV0IGdldEFjdGl2ZVRhYiA9IGZ1bmN0aW9uKClcbiAgICB7ICAgICAgIFxuICAgICAgICBsZXQgbiA9IDA7XG4gICAgICAgIEFycmF5LmZyb20oIGl0ZW1zICkuZm9yRWFjaCggKGVsZW1lbnQsIGluZGV4KSAgPT4ge1xuICAgICAgICAgICAgaWYoIGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUtdGFiJykgKSB7XG4gICAgICAgICAgICAgICAgbiA9IGluZGV4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTsgXG4gICAgICAgIHJldHVybiBuO1xuICAgIH1cbiAgICBfX2NvbnN0cnVjdCgpO1xuICAgIHJldHVybiBzbGlja1RhYnM7XG59Il19

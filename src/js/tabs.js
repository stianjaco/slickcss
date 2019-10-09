module.exports = function slickTabs( el, args )
{
    const self = el;
    const defaults = {
        onInit: null,
        onOpen: null,
        onClose: null,
        breakpoint: 768
    };
    const options   = Object.assign(defaults, args);
    const items     = self.querySelector(".tab-container").children;
    const tabs      = self.querySelectorAll(".tab-nav li");

    let __construct = function()
    {   
        let onInitCallback = options.onInit || window[options.onInit];
        // Determin the selected tab        
        let selected_tab = !hasActiveTab() && window.location.hash && window.location.hash.length > 0 ? window.location.hash.substring(1) : getActiveTab();
        // Set active in navigation
        let active_tab_nav = !isNaN(selected_tab) ? tabs[selected_tab] : self.querySelector("a[href='#"+selected_tab+"']").parentNode;
        active_tab_nav.classList.add('is-active');

        // Check the breakpoint
        if( self.parentNode.offsetWidth <= options.breakpoint ) {
            self.classList.add('layout-is-vertical');
        }

        if( typeof onInitCallback === 'function' ) {
            onInitCallback( self, selected_tab );
        }

        // Loop through and set classes and active tab
        Array.from( items ).forEach( (element, index)  => {
            element.classList.add('ui-tab');
            if( !hasActiveTab() ) {
                element.classList.remove('active-tab');
                if( (!isNaN(selected_tab) && selected_tab === index) || selected_tab === element.id ) {
                    element.classList.add('active-tab');
                }
            }
        });

        // Events
        [].map.call( self.querySelectorAll(".tab-nav li > a") , elem => {
            elem.addEventListener("click", event => {
                event.preventDefault();
                let target = event.target.getAttribute('href');
                openTab( target );
                let navs = self.querySelector(".tab-nav").children,
                    i = 0;
                while( navs[i] ) {
                    navs[i].classList.remove('is-active');                    
                    if( navs[i] === event.target.parentNode ) {
                        navs[i].classList.add('is-active');
                    }
                    i++;
                }

            }, false);
        });

        window.addEventListener('resize', event => {
            if(self.parentNode.offsetWidth <= options.breakpoint ) {
                self.classList.add('layout-is-vertical');
            } else {
                if( self.classList.contains('layout-is-vertical') )
                    self.classList.remove('layout-is-vertical');
            }
        }); 

        return this;
    }

    /**
     * openTab
     * @param {string} id ID of tab to open 
     */
    let openTab = function(id) {
        id = id.substring(1);
        let active_tab = self.querySelector(".active-tab");
        let onOpenCallback = options.onOpen || window[options.onOpen];

        if( id.length > 0 && id !== active_tab.id ) {
            let element = document.getElementById(id);
            closeAllTabs( id );
            element.classList.add('active-tab');
            
            if( typeof onOpenCallback === 'function' ) {
                onOpenCallback( element, self );
            }
            if(history.pushState) {
                history.pushState(null, null, '#'+id);
            } else {
                window.location.hash = id;
            }
            location.href = "#";
            location.href = "#"+id;
        }
    }

    /**
     * CloseAllTabs
     * Loop through each tab and close
     * @param {string|integer} not What tab not to close 
     */
    let closeAllTabs = function( not ) 
    {
        not = typeof not !== "undefined" ? not : null;
        let onCloseCallback = options.onClose || window[options.onClose];
        Array.from( items ).forEach( (element, index)  => {
            if( ((!isNaN(not) && not !== index) || not !== element.id) && element.classList.contains('active-tab') ) {
                element.classList.remove('active-tab');
                if( typeof onCloseCallback === 'function' ) {
                    onCloseCallback( element, self );
                }
            }
        });
    }

    let hasActiveTab = function()
    {
        let n = 0;
        Array.from( items ).forEach( (element, index)  => {
            if( element.classList.contains('active-tab') ) {
                n++;
            }
        }); 
        return n > 0 ? true : false;
    }

    let getActiveTab = function()
    {       
        let n = 0;
        Array.from( items ).forEach( (element, index)  => {
            if( element.classList.contains('active-tab') ) {
                n = index;
            }
        }); 
        return n;
    }
    __construct();
    return slickTabs;
}
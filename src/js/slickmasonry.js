/**
 * Slick Masonry
 * Mason-styled grid based on flexbox
 * Original idea by Rahul Arora ( https://w3bits.com/flexbox-masonry/ )
 */
var slickMasonry = function( preloader, callback )
{
  	var Masonry = this;
    this.preloader = null;
    
  	this.render = function()
  	{



    	var grid = document.querySelectorAll(".masonry"),
        	sw = windowSize().width,//window.screen.width,
        	n; 

      // Loop every instance of .mansonry on page
    	for( n=0; n<grid.length; n++) {



        var cell = grid[n].querySelectorAll(".masonry-brick"),
          numBricks = cell.length,
          baseHeight = 0,
          style = grid[n].currentStyle || window.getComputedStyle(grid[n]),
          gutter = Math.abs(parseInt(style.marginLeft, 10)),
          classList = grid[n].className.split(' '),
          cl = {},
          i, x;



        // Get the total height of each element
      	for( i = 0; i < numBricks; i++ ) {
        		baseHeight += cell[i].offsetHeight+parseInt(gutter);
      	}


      	// Hide for preloading
      	grid[n].style.display="none";

        
      	for( x=0; x<classList.length; x++) {
        		var cn = fixClassNames( classList[x] );
        		if( false !== cn ) {
          		var bp = cn.replace(/[^a-z]/gi, '');
				      cl[(bp === '' ? 'base' : bp)] = parseInt(cn, 10);
        		}
      	}

        var numcol = getNumColumns(sw,cl);

      	grid[n].style.height = baseHeight/numcol + baseHeight/(numBricks+1) + "px";
        // Hide any preloaders
        if( typeof preloader !== 'undefined' && preloader === true ) {
          for( var p = 0; p < Masonry.preloader.length; p++ ) {
            Masonry.preloader[p].style.display="none";
            grid[n].style.visibility="visible";
          }
        }
      	grid[n].style.display="flex";
        
    	}

  };


  var getNumColumns = function(sw,cl)
  {
   	if( sw >= 1440 && cl.hasOwnProperty('xl') ) {
  		return parseInt(cl.xl);
  	} else if( sw > 1280 && sw <= 1440 && cl.hasOwnProperty('lg') ) {
  		return parseInt(cl.lg);
  	} else if( sw > 1024 && sw <= 1280 && cl.hasOwnProperty('md') ) {
  		return parseInt(cl.ls);
  	} else if( sw > 768 && sw <= 1024 && cl.hasOwnProperty('ls') ) {
  		return parseInt(cl.md); 
  	} else if( sw > 575 && sw <= 768 ) {
      return cl.hasOwnProperty('sm') ? parseInt(cl.sm) : 2;
  	} else if( sw <= 575 ) {
      return cl.hasOwnProperty('xs') ? parseInt(cl.xs) : 1;
  	} else {
  		return cl.base !== undefined ? parseInt(cl.base) : 3;
  	}
  }

  var fixClassNames = function(str)
  {
    if( str === 'masonry' )
      return false;

    return str.replace(/size-/g,'');
  };

  var windowSize = function()
  {
    var w=window,
    d=document,
    e=d.documentElement,
    g=d.getElementsByTagName('body')[0],
    x=w.innerWidth||e.clientWidth||g.clientWidth,
    y=w.innerHeight||e.clientHeight||g.clientHeight;

    return {width:x,height:y};
  }

  this.addEvents = function()
  {
    var grid = document.querySelectorAll(".masonry");

    // Add preloader
    if( typeof preloader !== 'undefined' && preloader === true ) {
      for( var i=0; i<grid.length; i++) {
        grid[i].insertAdjacentHTML('afterend', '<div class="masonry-preloader"><span>Loading...</span></div>');
        grid[i].style.visibility="hidden";
        //grid[i].style.height="0px";
        //grid[i].style.overflow="hidden";
      }
      Masonry.preloader = document.querySelectorAll('.masonry-preloader');
    }


    window.addEventListener('load', Masonry.render);
    window.addEventListener('resize', Masonry.render);      
  };

  return Masonry.addEvents();

}
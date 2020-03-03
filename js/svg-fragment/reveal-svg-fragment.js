var RevealSVGFragment = (function() {
    return {
        init: function () {
            // Read the plugin config options and provide fallbacks
            var config = Reveal.getConfig().svgFragment || {};
            [].slice.call( document.querySelectorAll( '[data-svg-fragment]' ) ).forEach( function( block ) {
                var svg = block.getAttribute('data-svg-fragment');
                console.log('set style to ' + 'url("' + svg + '");')
                block.style.backgroundImage = svg;
            });
        }
    };

})();

Reveal.registerPlugin( 'svg-fragment', RevealSVGFragment );

;(function($, window, document ) {
    
    $.fn.isyslider = function(options) {
        return this.each( function(index, item) {
            
            //defaults
            var defaults = {
                thumb_width: 300,
                thumb_height: 190,
                elements: 3,
                margin: 0,
                controls: 'relative'
            };
            
            //options
            var settings = $.extend({}, defaults, options);
            
            var w = settings.thumb_width,
                h = settings.thumb_height,
                n = settings.elements,
                m = settings.margin,
                c = settings.controls;
            
            // structure and gfx
            var main = $(this);
            var target = $(this).children();
            target.first().before(target.last());
            var tl = target.length;
            var cls = main.attr('id');
            target.wrapAll('<div class="' + cls + '_slide" />');
            target.parent().wrapAll('<div class="' + cls + '_cont" />');
            var slider = target.parent();
            var wrapper = slider.parent();
            target.css({'text-align':'center','margin':'0 ' + m + 'px 0 0', 'float':'left', 'display':'block', 'width':'' + w + 'px', 'height':'' + h + 'px'});
            wrapper.parent().prepend('<div class="' + cls + '_prev">‹</div>');
            wrapper.parent().append('<div class="' + cls + '_next">›</div>');
            var prev = main.children().first();
            var next = main.children().last();  
            var wd = (n * m) + (n * w);
            var sw = (tl * w) + (tl * m);
            var tw = target.outerWidth() * (-1);
            var rw = (w * n) + (m * n) + 80;
            if (c === 'relative') {
                main.css({'width':'' + rw + 'px', 'height':'' + h + 'px', 'overflow':'hidden'});                
                prev.css({'font-size':'22px','width':'40px', 'height':'' + h + 'px', 'text-align':'center', 'line-height':'' + h + 'px', 'cursor':'pointer', 'float':'left', 'overflow':'hidden'});
                next.css({'font-size':'22px','width':'40px', 'height':'' + h + 'px', 'text-align':'center', 'line-height':'' + h + 'px', 'cursor':'pointer', 'overflow':'hidden'});
            } else {
                main.css({'width':'' + w * n + 'px', 'height':'' + h + 'px', 'overflow':'hidden', 'position':'relative'});
                prev.css({'background-color':'#fff', 'font-size':'22px','width':'40px','z-index':'200', 'height':'' + h/2 + 'px', 'opacity':'0.7', 'text-align':'center', 'top':'50%', 'margin-top':'-' + h/4 + 'px', 'left':'0', 'line-height':'' + h/2 + 'px', 'cursor':'pointer', 'position':'absolute', 'overflow':'hidden'});
                next.css({'background-color':'#fff', 'font-size':'22px','width':'40px','z-index':'200', 'height':'' + h/2 + 'px', 'opacity':'0.7', 'text-align':'center', 'top':'50%', 'margin-top':'-' + h/4 + 'px', 'right':'0', 'line-height':'' + h/2 + 'px', 'cursor':'pointer', 'position':'absolute', 'overflow':'hidden'});
            }
            wrapper.css({'float':'left', 'width':'' + wd + 'px', 'z-index':'1', 'height':'' + h + 'px', 'position':'relative', 'overflow':'hidden'});
            slider.css({'left': '-' + (w + m) + 'px', 'top':'0', 'width':'' + sw + 'px', 'height':'' + h + 'px', 'position':'absolute', 'overflow':'hidden'});
            // functions
            prev.click(function() {
                    var indent = parseInt(slider.css('left')) + target.outerWidth();
                    slider.animate({'left' : indent}, 300,function(){    
                            $('.' + cls + '_slide > *:first').before($('.' + cls + '_slide > *:last'));           
                            slider.css({'left' : tw - m});
                    });
                    return false;
            });
            next.click(function() {
                    //main.css({'border':'1px solid #f0f'});
                    var indent = parseInt(slider.css('left')) - target.outerWidth();
                    slider.animate({'left' : indent}, 300,function(){    
                            $('.' + cls + '_slide > *:last').after($('.' + cls + '_slide > *:first'));           
                            slider.css({'left' : tw - m});
                    });
                    return false;
            });
        });
    };

})(jQuery, window, document);


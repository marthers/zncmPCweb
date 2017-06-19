$(function() {
    var ht = $(window).height();
    var headerTopht = parseFloat(ht) * 0.085;
    var navht = parseFloat(ht) * 0.053;
    var headerht = headerTopht + navht;
    var headerH = $('header.pofix').height();
    $('.eBL').css('top', headerH - 1 + 'px');

    $('.eBL a').on('click', function() {
            return true;
        })
        //	点击左侧导航事件
    $('.eBL li').click(function() {
        $(this).addClass('current').siblings().removeClass('current');
    });
    //电梯导航效果
    $('.eBL li').click(function() {
        var jumpVal = $('.eBR .content h2').eq($(this).index()).offset().top;
        jumpVal = parseInt(jumpVal) - headerht;
        $('body, html').animate({ 'scrollTop': '' + jumpVal + 'px' }, 300);
    });

    /*类：滚动条事件*/
    var createScroll = (function() {
        function _oScroll(ele) {
            this.onoff = ele ? true : false;
            this.obj = ele ? $('#' + ele) : $(window);
            this.menu = $('.eBL');
            this.content = $('.content');
            this.aItem = $('.content').find('h2');
            this.currentId = '';
            this.init();
        }

        _oScroll.prototype = {
            init: function() {
                var self = this;
                this.obj.scroll(function() {

                    self.aItem.each(function() {
                        var m, oScroll;
                        m = $(this);

                        /*判断滚动对象是否为document*/
                        oScroll = self.onoff ? self.content.scrollTop() : $(document).scrollTop();
                        if (oScroll > (m[0].offsetTop - 150)) {
                            self.currentId = '#' + m.attr('id');
                        } else {
                            return false;
                        }
                    });

                    var currentLink = self.menu.find('.current').children('a');
                    if (self.currentId && currentLink.attr('href') !== self.currentId) {
                        currentLink.parent().removeClass('current');
                        self.menu.find('[href=' + self.currentId + ']').parent().addClass('current');
                    }

                });
            }
        };

        return _oScroll;
    })();

    /*定位导航实例*/
    var oScroll = new createScroll();

    /*选择文件事件 */

    $('.resourceCon').delegate('input', 'change ', function(e) {
            if (this.value !== '') {
                $(this).parents('.file').find('.file_group span').css({ "display": "none" });
                $(this).parents('.file').find('.button').css({ "display": "block" })
            }
        })
        /**
         * 取消事件
         */
    $('.resourceCon').delegate('.button .cancel', 'click ', function(e) {
        $(this).parents('.file').find('.file_group span').css({ "display": "block" });
        $(this).parents('.file').find('.button').css({ "display": "none" })
    })

});
var $setfont = function(){
    var $dlg =$(''
    +'<div class="notepad-dlg-font">'
    +'<div class="notepad-dlgbox">'
    +'<div class="notepad-dlg-titlebar">'
    +'<p class="title">字体</p>'
    +'<span class="close-btn">✖</span>'
    +'</div>'
    +'<div class="notepad-dlg-main">'
    +'<div class="font-family"><p>字体</p></div>'
    +'<div class="font-style"><p>字形</p></div>'
    +'<div class="font-size"><p>大小</p></div>'
    +'<fieldset class="a">'
    +'<legend>示例</legend>'
    +'<p>AaBbYyZz</p>'
    +'</fieldset>'
    +'<div class="script">'
    +'<label>'
    +'脚本(R):<br>'
    +' <select>'
    +'<option value="西欧语言">西欧语言</option>'
    +'<option value="中文 GB2312">中文 GB2312</option>'
    +'</select>'
    +'</label>'
    +'</div>'
    +'<input class="btn-ok btn" type="button" value="确定">'
    +'<input class="btn-cancel btn" type="button" value="取消">'
    +'</div>'
    +'</div>'
    +'</div>'
    );
    var $btnClose = $dlg.find('.close-btn'),
        $btnOk = $dlg.find('.btn-ok'),
        $btnCancel = $dlg.find('.btn-cancel'),
        $a = $dlg.find('fieldset');

    $btnClose.click(function(){
        $dlg.remove();
    })
    $btnOk.click(function(){
        $dlg.remove();
        var family = $a.find('p').css('font-family');
        var style = $a.find('p').css('font-style');
        var weight = $a.find('p').css('font-weight');
        var size = $a.find('p').css('font-size');
        var textArea = new $editor();
        textArea.chageTextAreaStyle($('textarea'),family,style,weight,size);
    })
    $btnCancel.click(function(){
        $dlg.remove();
    })
    
    $a.find('p').css({'font-family':'Agency FB'});
    var list = new $list();
    list.setFontStyle($a.find('p'), '常规');
    $a.find('p').css({'font-size':'8px'});

    function show(con){
        $(con).append($dlg);
        
        var list1 = new $list();
        var list2 = new $list();
        var list3 = new $list();
        list1.show({
            contaniner:'.font-family',
            list:['华文中宋','楷体','隶书','宋体','微软雅黑','新宋体'],
            select:0,
            width:'176px',
            isFont: true,
            isFontStyle: false,
            selectHandler: function(e) { 
                $('.a').find('p').css({'font-family':e});
            }
        });
        list2.show({
            contaniner:'.font-style',
            list:['常规', '倾斜', '粗体', '粗偏斜体'],
            select:0,
            width:'132px',
            isFont: false,
            isFontStyle:true,
            selectHandler: function(e) {
                list2.setFontStyle($('.a').find('p'),e);
            }
        });
        list3.show({
            contaniner:'.font-size',
            list:['8','16','20','24','30','34','40'],
            select:0,
            width:'64px',
            isFont: false,
            isFontStyle:false,
            selectHandler: function(e) {
                $('.a').find('p').css({'font-size':e+'px'});
            }
        });
    }
    return {
        show:show
    };
}
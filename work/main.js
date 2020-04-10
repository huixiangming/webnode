var $list = function(){
    var $div = $(''
    +'<div class="main">'
    +    '<input class="editor" type="text"><br>'
    +    '<ul class="list"></ul>'
    +'</div>'),
        $editor = $div.find('.editor'),
        $list = $div.find('.list');
    var $listItem;

    var listData = {
        contaniner:'body',
        select:0,
        width:'200px',
        isFont: false,
        isFontStyle: true,
        selectHandler: function(e) { console.log(e); }
    }

    function setFontStyle(item, style) {
        if(style === '常规') { 
          item.css({'font-style': ''});
          item.css({'font-weight': ''});
          return;
        }
        if(style === '倾斜') {
          item.css({'font-style': 'italic'});
          item.css({'font-weight': ''});
          return;
        }
        if(style === '粗体') {
          item.css({'font-style': ''})
          item.css({'font-weight': 'bold'});
          return;
        }
        if(style === '粗偏斜体') {
          item.css({'font-weight': 'bold', 'font-style': 'italic'});
          return;
        }
    }

    function fillData() {
        if(listData.isFont) {
            for(var i=0; i<listData.list.length; i++) {
                $listItem = $('<li class="item"></li>');
                $listItem.css({'font-family': listData.list[i]});
                $listItem.html(listData.list[i]);
                $listItem.attr('name',i);
                $list.append($listItem);
            }
        } else if(listData.isFontStyle) {
            for(var i=0; i<listData.list.length; i++) {
                $listItem = $('<li class="item"></li>');
                setFontStyle($listItem,listData.list[i]);
                $listItem.html(listData.list[i]);
                $listItem.attr('name',i);
                $list.append($listItem);
            }
        } else {
            for(var i=0; i<listData.list.length; i++) {
                $listItem = $('<li class="item"></li>');
                $listItem.html(listData.list[i]);
                $listItem.attr('name',i);
                $list.append($listItem);
            }
        }
    }
    
    function show (data){
        $.extend(listData, data);
        
        $list.css({'width':listData.width});
        $editor.css({'width':listData.width});
        fillData();

        $($list[0]).find('.item')[listData.select].classList.add('selected');
        $editor.val(listData.list[listData.select]);

        $list.click(function(e){

            $($list[0]).find('.item')[listData.select].classList.remove('selected');
            
            listData.select = listData.list.indexOf($(e.target).html());
            
            $($list[0]).find('.item')[listData.select].classList.add('selected');

            $editor.val(listData.list[listData.select]);
            $editor.select();
            listData.selectHandler(listData.list[listData.select]);
        });
        var $con = $(listData.contaniner);
        $con.append($div);
    }
    return{
        show : show ,
        setFontStyle : setFontStyle
    };
};
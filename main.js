var font = {
  fontSize:'25px'
}
$(function() {
  var menu = new $menubar();
  menu.show(menuData);
  var ed = new $editor();
  ed.show('body');
});
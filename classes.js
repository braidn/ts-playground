var Menu = (function () {
    function Menu(item_list, total_pages) {
        this.items = item_list;
        this.pages = total_pages;
    }
    Menu.prototype.list = function () {
        console.log('Our menu for today is');
        for (var i = 0; i < this.items.length; i++) {
            console.log(this.items[i]);
        }
    };
    return Menu;
}());
var sundayMenu = new Menu(['pancakes', 'sausage', 'butter'], 2);
sundayMenu.list();

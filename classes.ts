class Menu {
  items: Array<string>;
  pages: number;

  constructor(item_list: Array<string>, total_pages: number) {
    this.items = item_list;
    this.pages = total_pages;
  }

  list(): void {
    console.log('Our menu for today is as follows');
    for(var i = 0; i < this.items.length; i++) {
      console.log(this.items[i]);
    }
  }
}

var sundayMenu = new Menu(['pancakes', 'sausage', 'butter'], 2)
sundayMenu.list();

class HappyMeal extends Menu {
  // items and 
  // pages properties inhereted and
  // available here.
  constructor(item_list: Array<string>, total_pages: number) {
    super(item_list, total_pages);
  }

  list(): void {
    console.log('Our menu for children today is as follows')
    for(var i = 0; i < this.items.length; i++) {
      console.log(this.items[i]);
    }
  }
}

var sundayHappyMenu = new HappyMeal(['cheese puffs', 'chicken tenders'], 2);
sundayHappyMenu.list();

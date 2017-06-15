interface Food {
  name: string;
  cals: number;
}

var burger: string = 'hamburger',
  calories: number = 300,
  tasty: boolean = true;

function speak(food: Food, energy: number) { 
  console.log("Our " + food + " has " + calories + " in it.")
};

var ice_cream = {
  name: 'Ice Cream',
  cals: 5000
}

speak(ice_cream, calories);

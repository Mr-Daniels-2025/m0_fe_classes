// Write a class called Unicorn
// it should have a dynamic name property
// it should have a color property, that is silver by default
// it should have a method called "say" that returns whatever string is passed in, with "*~*" at the beginning and end of the string
class Unicorn{
  //greating/intializing an object in class "Unicorn"
  constructor(color,height, speed){
    this.color = "silver";
    this.height = height;
    this.speed = speed;
  }
  //method
  say(passed_text){
    this.passed_text = passed_text
    console.log(`*~* ${passed_text} *~* `);
  }
}
var unicorn_object = new Unicorn();
console.log(unicorn_object);
//calling and passing string to "say method"
//unicorn_object.say("yellow");
// Write a class called Vampire
// it should have a dynamic name property
// it should have a pet property, that is a bat, by default BUT it could be dynamic if info is passed in initially
// it should have a thirsty property, that is true by default
// it should have a drink method. When called, the thirsty property changes to false
class Vampire{
  constructor(good_bad, hair_color, height){
    this.pet ="Bat";
    this.good_bad = good_bad;
    this.hair_color = hair_color;
    this.thirsty = true;
  }
  drink(pet){
    this.thirsty = false;
    this.pet = pet
  }
}
var vampire_info = new Vampire("Good", "black", 12);
console.log(vampire_info);
vampire_info.drink("dog");
console.log(vampire_info);
//  Write a Dragon class
// it should have a dynamic name property (string)
//  it should have a dynamic rider property (string)
//  it should have a dynamic color property (string)
//  it should have a isHungry property that is true by default
//  it should have a eat method. If the dragon eats 4 times, it is no longer hungry
  // HINT: This requires you to use your knowledge from the conditionals lesson

class Dragon{
  constructor(name, rider, color){
    this.isHungry = true;
    this.name = name;
    this.rider = rider;
    this.color = color;
  }
  eat_food(amountOf_food){
    if(amountOf_food >= 4){
      this.isHungry = false
    }
  }
}
var dragon_info = new Dragon("jj", "jedeo", "Brown");
console.log(dragon_info);
dragon_info.eat_food(5);
console.log(dragon_info);


//  BIG CHALLNEGE: Write a Hobbit class
//  it should have a dynamic name property (string)
//  it should have a dynamic disposition property (string)
//  it should have an age property that defaults to 0
//  it should have a celebrateBirthday method. When called, the age increases by 1
//  it should have an isAdult property (boolean) that is false by default. once a Hobbit is 33, it should be an adult
//  it should have an isOld property that defaults to false. once a Hobbit is 101, it is old.
//  it should have a hasRing property. If the Hobbit's name is "Frodo", true, if not, false.


class Hobbit {
  constructor(name, disposition) {
    this.name = name;
    this.disposition = disposition;
    this.age = 0;
    this.isAdult = false;
    this.isOld = false;
    if (this.name === "Frodo") {this.hasRing = true;}
    else {this.hasRing = false;}
  }
  celebrateBirthday(nAge) {
    this.age = this.age + 1;
  }
  celebrateAdult(nAge) {
    this.isAdult = nAge;
  }
  celebrateOld(nAge) {
    this.isOld = nAge;
  }
}


var new_hobbit = new Hobbit("Mike", "cool");

// Modify the initial and end states of currentAge to test
for (var currentAge = 0; currentAge < 34; currentAge++) {
  new_hobbit.celebrateBirthday();
  if (currentAge >= 101) {
    new_hobbit.celebrateOld(true);
    new_hobbit.celebrateAdult(true);
  }
  else if (currentAge >= 33) {
    new_hobbit.celebrateAdult(true);
  }
}

console.log(new_hobbit);

// task 1
// installation completed successfully.

// task 2
let personName: String = "ERIC";
console.log(`hellow ${personName} would you like to learn some Python today?`);

// task 3
//lower case
let personName = "Hanzala";
console.log("lowercase:", personName.toLowerCase());
// upper case
// let personName: string="HANZALA"
console.log("uppercase:", personName.toLocaleUpperCase());
// Title case
// let personName: string="hanzala"
console.log("titlecase:", personName.replace(/\bw/g, function (c) { return c.toUpperCase(); }));

//task 4
let qoute: string= "A person who never made a mistake never tried anything new";
let author: string= "Albert Einstein"
console.log(`${author} once said, "${qoute}`);

task 5
let qoute: string= "A person who never made a mistake never tried anything new";
let famous_person="Albert Einstein";
let message=`${famous_person} once said, ${qoute}`;
console.log(message);
// Output : Albert Einstein once said, A person who never made a mistake never tried anything new

// task 6
let personName: string =`\n\t Hamza Ali\t\n`;
console.log(personName);
let stripping: string = personName.trim();
console.log(stripping);

// task 7\8
console.log(5 + 3);
console.log(11 - 3);
console.log(4 * 2);
console.log(16 / 2);

// task 9
let favoriteNumber: number = 4;
console.log(`my favorite number is ${favoriteNumber}`);

//task 10
My name is: Muhammad Hanzala Ali
Dated: 17/02/2024
this program will run simple code just like hellow worldt
console.log("Hello World Simple Program");

// task 10\2
My name is: Muhammad Hanzala Ali
Dated: 17/02/2024
//this program will multiplication
console.log(5 + 5);

// task 11
let members: string[] =['ali','hamza','faizan','fasal','sana'];
for(let i=0; i<members.length; i++){
    console.log(members[i]);
}

// task 12
let members: string[] =['azam','sadiq','masqood','saba','sana'];
let message: string ='Assalam e walikum Ap kesa hai:';
for(let i=0; i<members.length; i++){
    console.log(message + members[i]);
}

// task 13
let transportation : string [] = ['Car','Truck','Bus','Train','Bike'];
let transportation : string='I would like to own a:';
for (let i=0; i <transportation.length; i++) {
    console.log('I would like to own a:' + transportation[i]);
}

// task 14
let guset_list: string[] = ["ali", "subhan", "farhan", "hina", "ayesha"];
for (let i = 0; i < guset_list.length; i++) {
  console.log(
    "Assalam e walikum:" +
      guset_list[i] +
      ",\nwe invited you on dinner tomorrow.\n Thank you\n"
  );
}
export { guset_list };

// task 15
let guset_list: string[] = [":ali", ":subhan", ":farhan", ":hina", ":ayesha"];
for (let i = 0; i < guset_list.length; i++) {
  console.log(
    "Assalam e walikum" +
      guset_list[i] +
      ",\nwe invited you on dinner tomorrow.\n Thank you\n"
  );
}
let not_present: string = "hina";
let new_guset: string = ":hafsa";
guset_list[3] = new_guset;
for (let i = 0; i < guset_list.length; i++) {
  console.log(
    "Assalam e walikum" +
      guset_list[i] +
      ",\nwe invited you on dinner tomorrow.\n Thank you\n"
  );
}
console.log(`Mrs. ${not_present} will not coming tomorrow dinner. `);

// task 16
let guset_list: string[] = [":ali", ":subhan", ":farhan", ":hina", ":ayesha"];
for(let i=0; i<guset_list.length ;i++){
    console.log('Assalam e walikum' + guset_list[i] +',\nwe invited you on dinner tomorrow.\n Thank you\n');
}
let not_present: string = "hina";
let new_guset: string = ":hafsa";
guset_list[3] = new_guset;
for (let i = 0; i < guset_list.length; i++) {
  console.log(
    "Assalam e walikum" +
      guset_list[i] +
      ",\nwe invited you on dinner tomorrow.\n Thank you\n"
  );
}
// console.log(`Mrs. ${not_present} will not coming tomorrow dinner. `);
guset_list.unshift(":shahmeer", ":waleed", ":hamza");
for (let i = 0; i < guset_list.length; i++) {
  console.log(
    "Assalam e walikum" +
      guset_list[i] +
      ",\nwe invited you on dinner tomorrow. we found big table so we decide to invite 3 more guset\n Thank you\n"
  );
}

// task 17
let guset_list: string[] = [":ali", ":subhan", ":farhan", ":hina", ":ayesha"];
// for(let i=0; i<guset_list.length ;i++){
//     console.log('Assalam e walikum' + guset_list[i] +',\nwe invited you on dinner tomorrow.\n Thank you\n');
// }
let not_present: string = "hina";
let new_guset: string = ":hafsa";
guset_list[3] = new_guset;
// for(let i=0; i<guset_list.length ;i++){
//     console.log('Assalam e walikum' + guset_list[i] +',\nwe invited you on dinner tomorrow.\n Thank you\n');
// }
// console.log(`Mrs. ${not_present} will not coming tomorrow dinner. `);
guset_list.unshift(":shahmeer", ":waleed", ":hamza");
// for(let i=0; i<guset_list.length ;i++){
//     console.log('Assalam e walikum' + guset_list[i] +',\nwe invited you on dinner tomorrow. we found big table so we decide to invite 3 more guset\n Thank you\n');
// }
console.log(
  "\nunfortunately we can not arrange big table , only two people allow."
);
while (guset_list.length > 2) {
  let remove_guset = guset_list.pop();
  console.log(
    `Assalam e walikum sorry.${remove_guset} you are not invited for dinner.`
  );
}
for (let i = 0; i < guset_list.length; i++) {
  console.log(
    "Assalam e walikum " +
      guset_list[i] +
      ",\n Yes you are still invited on tmorrow dinner\nThank you\n"
  );
}
guset_list.splice(0, 2);
console.log(guset_list);

// task 18
let places: string[] = [
  "Paris",
  "London",
  "Tokyo",
  "New York",
  "Sydney",
  "Berlin",
];
console.log("original :" + places);

// print your array in alphabetical order without modifying the actual List.
console.log("copy" + [...places].sort());

// Show that your array is still in its original order by printing it.
console.log("original :" + places);

// Print your array in reverse alphabetical order without changing the order of the original List.
console.log("copy " + [...places].sort().reverse());

// Show that your array is still in its original order by printing it again.
console.log("copy " + [...places].sort().reverse());

// Reverse the order of your list. print the array to show that its order has Changed.
console.log("original :" + places.sort());

// Reverse the order of your list again. print the list to show it,s back to its original order.
console.log("original :" + places.sort().reverse());

// Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.

// task 19
let invitations : string []  = ["shahmeer","waleed"]
let count_invitations : number = invitations.length

console.log(`${count_invitations} people will come to the dinner`)

// task 20
let countries : string [] = ['USA','Canada','Mexico','Germany','France'];
console.log("list of countries:")
for(let top of countries){
   console.log(top)
}

// task 21
let person: {name: string, fname: string, age: number} = {name:"Hanzala", fname: "Ali", age:  23};
console.log(person)

// task 22
const days : string[] = ["Monday" , "Tuesday", "Wednesday","Thursday", "Friday", "Saturday", "Sunday"]
console.log(days[1])

// task 23
let car = "subaru";

console.log("is car == 'subaru'? predict true")
console.log(car == 'subaru')

console.log("is car !='honda city'? predict tue")
console.log(car != 'honda city')

console.log("is car == 'subaru'? predict false")
console.log(car == 'subaru')

console.log("is car == 'SUBARU'? predict false")
console.log(car == 'SUBARU')

console.log("is car.lenght == 6? predict true")
console.log(car.length == 6)

console.log("is car.lenght != 10? predict true")
console.log(car.length != 10)

console.log("is 10 > 45 ? predict false")
console.log(10 > 45)

console.log("is 3 <= 2 ? predict false")
console.log(3 <= 2)

console.log("is 72 >= 83 ? predict false")
console.log(72 >= 83)

console.log("is car == 'subaru' && car.length == 6 ? predict true")
console.log(car == 'subaru' && car.length == 6)

//task 24
let name_1 : string = "Muhammad Hanzala Ali"
let name_2 : string = "Muhammad Hanzala"
let name_3 : string = "Hanzala Ali"

if (name_1 == name_3){
    console.log("The names are equal")
 } else {
    console.log("The names are equal")
}
if (name_1 != name_2) {
    console.log("Name 1 and Name 2 are different")
}

let age_1 : number  = 18
let age_2 : number  = 20

if(age_1 == 18){
    console.log("eligible for vote")
}
if(age_1 != 20){
    console.log("eligible for vote in older category")
}
if (age_1 <= age_2) {
   console.log("Younger")
}
if (age_2 >= age_1) {
    console.log("Older")
 }
if (age_1 == 18 && age_2 == 22){
    console.log("person is eligible not for vote")
}
if (age_1 == 18 || age_2 != 22){
    console.log("person is eligible not for vote")
}
let Country : string [] = ["Pakistan","India","japan","china"]
if (Country .indexOf("Pakistan")){
    console.log("Pakistan is in country list")
}
let Countrys : string [] = ["Pakistan","India","japan","china"]
if (Countrys .indexOf("america")){
    console.log("America is not include in an array")
}

// task 25
let alien_color = "green"
if (alien_color == "green")
console.log("You earn 5 points")

// task 25\2
let alien_color :  string = "red"
if (alien_color == "green")
console.log("no output")

// task 26
let alien_color  = "red"

if (alien_color == "green") {
    console.log("player just earned 5 points for shooting the alien")
} else{
    console.log ("player just earned 10 points")
}

// task 27
let alien_color: string  = "red"

if (alien_color == "green") {
    console.log("5 points")
} else if (alien_color == "yellow") {
    console.log("10 points")
} else {
    console.log("15 points")
}

// task 28
let age : number  = 14

if (age < 2) {
    console.log("your are a Baby")
}   else if (age < 4){
    console.log ("your are a toddler")
}   else if (age < 13){
    console.log ("your are a kid")
}   else if (age < 20){
    console.log ("your are a teenager")
}   else if (age < 65){
    console.log ("your are a adult")
}  else {
    console.log ("your are a older")
}

// task 29
let favourite_fruits : string [] = ["apple", "kivi", "orange", "peach", "berry"]

if (favourite_fruits.indexOf("kivi")){
    console.log("I love kivi")
}
if (favourite_fruits.indexOf("orange")){
    console.log("we love orange")
}
if (favourite_fruits.indexOf("apple")){
    console.log("you love apple")
}
if (favourite_fruits.indexOf("berry")){
    console.log("you really like bananas")
}
if (favourite_fruits.indexOf("peach")){
    console.log("you really like bananas")
}

// task 30
let users : string [] = ["admin", "ali", "reza", "hamza", "fatima"]

for (let user of  users)
    if (user === "admin") {
        console.log("Hello admin, would you like to see a status report?")
} else {
    console.log(`Hello ${user}, thank you for logging in again`)
}

// task 31
let users : string [] = ["admin", "ali", "reza", "hamza", "fatima"]

if (users.length === 0) {
    console.log("we need to find some users!")
} else {
    for (let user of  users) {
    if (user === "admin") {
        console.log("Hello admin, would you like to see a status report?")
} else {
    console.log(`Hello ${user}, thank you for logging in again`)
}
   }
 }
users = []
if (users.length === 0) {
        console.log("we need to find some users!")
    }

// task 32
let current_users : string [] = ["ahmed", "Eric", "Raheel", "Hania", "sara"]
let new_users : string [] = ["ahmed", "sara", "John", "Hamza", "Ali"]

let current_users_lower : string [] = current_users.map(user  => user.toLowerCase())

for (let new_user of new_users) {
    if (current_users_lower.indexOf(new_user.toLowerCase())) {
        console.log(`Sorry ${new_user}, that name is taken`)
        } else{
            console.log (`Yes ${new_user}, is still in avalible list`)
}
}

// task 33
let numbers : number [] = [1,2,3,4,5,6,7,8,9]

for (let number of  numbers) {

if (number === 1){
    console.log(`${number}st`)
}else if(number === 2){
    console.log(`${number}nd`)

}else if(number === 3){
    console.log(`${number}rd`)

}else {
    console.log(`${number}th`)
}
}

// task 34
let favourite_pizza : string [] = ["pepperoni","mushroom","onion"]

for (let pizza of  favourite_pizza) {
    console.log(pizza)
}
console.log("\n")

for (let pizza of  favourite_pizza) {
    console.log(`I really like ${pizza} pizza!`)
}

console.log("\nI really love pizza!")

// task 35
let animals : string [] = ["dog","cat","loin"]

for (let animal of  animals) {
    console.log(animal)
}
console.log("\n")

for (let animal of  animals) {
    console.log(`A ${animal} has a tail`)
}

console.log("\n all of these are great pets! but i love cats more")

// task 36
function makeShirt(size: string, text: string): void {
    console.log(`you order a ${size} shirt that says ${text}`)
}
makeShirt('large', '"i love coding"')
makeShirt('medium', '"its not working"')

// task 37
function makeShrit(size: string = 'largr', text: string = 'i love coding'): void {
    console.log(`you have order a ${size}, shirt that says ${text}`)
}
makeShrit()
makeShrit('medium')

//different message
makeShrit('small','this is my first project in typescript')

// task 38
function describe_city(city: string, country: string = 'Pakistan'): void {
    console.log(`${city} is in ${country}`)
}

describe_city('Lahore')
describe_city('France', 'Europe')
describe_city('Karachi', 'Pakistan')

// task 39
function cityCountry(city: string, country: string): string {
    return`${city}, ${country}`
}
let c1 =  cityCountry('Lahore', 'Pakistan')
let c2 =  cityCountry('Paris', 'France')
let c3 =  cityCountry('Tokyo', 'Japan')

console.log(c1)
console.log(c2)
console.log(c3)

// task 40
function makeAlbum (artist: string, title: string): {artist: string, title: string} {
    const dictionaries = {
          artist: artist.charAt(0).toUpperCase() + artist.slice(1),
          title: title.charAt(0).toUpperCase() + title.slice(1)
}
       return dictionaries
}
let  album = makeAlbum("ahmed", "light")
console.log(album)

album = makeAlbum("hamza", "red wave")
console.log(album)

album = makeAlbum("bilal", "seenbreez")
console.log(album)

// task 41
function show_magicians(magicians: string[]): void {

    for (const  magician of magicians) {
        console.log(magician.charAt(0).toUpperCase() + magician.slice(1))
}
}
const  magician: string [] = ["abbas","jawwad","faraz"];
show_magicians(magician)

// task 42
function make_great(magicians: string[]): void {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i]    +  ' the great'

}
}

const magicians2: string [] = ["abbas","jawwad","faraz"];
make_great(magicians2)
console.log(magicians2)

// task 43
function make_great2(magicians: string[]): string[] {
    const greatMagicians: string[] = [];
    for (let i = 0; i < magicians.length; i++) {
        greatMagicians.push(magicians[i] + " the Great");
  }
  return  greatMagicians;
}

const magicians3: string[] = ["faraz", "usman","haseeb"];

const greatMagicians2: string[] = make_great2(magicians3);
console.log(magicians3);
console.log(greatMagicians2);

// task 44
function sandwich(...items: string[]): void{
    console.log("Sandwich order:")

    for(let i = 0; i < items.length; i++){
        console.log(`-  ${items[i]}`)
   }
}
console.log("enjoy your sandwich sir/madam")

sandwich('chicken','cheese', 'bacon')
sandwich('turkey','avocado')
sandwich('beef','lettuce','tomato')

// task 45
type car = {
    manufacture: string
    model: string
    [key: string]: any;
}

function  createCar(manufacture: string, model: string, optional: Record<string, any>): car{
    return{
        manufacture,
        model,
        ...optional
    }
}
const mycar: car = createCar("Toyota", "corolla", {color:"black" , year: "2024"})
console.log(mycar)

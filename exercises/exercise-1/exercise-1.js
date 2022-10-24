const personOne = {
  name: "Ansu",
  age: 41,
  favouriteFood: "Spinach",
};

function introduceYourself({name, age, favouriteFood}) {
  console.log(
    `Hello, my name is ${name}. I am ${age} years old and my favourite food is ${favouriteFood}.`
  );
}

introduceYourself(personOne);

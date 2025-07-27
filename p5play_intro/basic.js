function setup() {
  new Canvas(800, 600);
  background(250);
  textSize(16);
  fill(0);

  // write your codes here

  // let a = 5;
  // let b = 10;
  // let sum = a + b;
  // let product = a * b;
  // console.log("The sum is " + sum);
  // console.log("The product is" + product);
  // text("The sum is " + sum, 20, 30)

  // --- Exercise: Area of Triangle ---
  // write your codes here

  let base = 10; //declare variable base
  let height = 5; //declare variable height
  let area = base * height * 0.5;
  console.log("The area is " + area);
  text("The area is " + area, 20, 30);

  // --- Exercise: Sum of first 10 even numbers ---
  // write your codes here

  let evenSum = 0;
  let yEven = 90;
  for (let i = 2; i <= 20; i+=2){
    evenSum = evenSum + i;
    text(i, 20 + i * 30, yEven);
  };
  console.log("The sum of the first 10 even numbers is " + sum);
  text("The sum of the first 10 even numbers is " + sum, 20, 60);

  // --- Exercise: Age category classification ---
  // write your codes here

  // let score = 100
  // if (score > 90){
  //   console.log("Excellent!");
  // }else if ( score > 70){
  //   console.log("Good job!");
  // }else(
  //   console.log("Keep Improving!");
  // )
  
  let age = Math.floor(Math.random() * (25 - 1 + 1)) + 1;
  let category = "";
  if (age <= 9){
    category = "lower primary";
  }else if (age <= 12){
    category = "upper primary";
  }else if (age <= 16){
    category = "secondary";
  }else{
    category = "a place for very old people";
  }
  text("You are " + age + " years old in " +  category, 20, 120);

  // --- Exercise: Display odd numbers backward using while loop ---
  // write your codes here

  // let count = 0
  // while (count < 5){
  //   console.log(count);
  //   count = count + 1
  // }

  let oddSum = 0;
  let num = 19;
  let xOdd
  while (num >= 1){
    console.log(num);
    oddSum = oddSum + num;
    num = num - 2;
  }
console.log(oddSum);

  // --- Exercise: Array operations (groceries) ---
  // write your codes here
}


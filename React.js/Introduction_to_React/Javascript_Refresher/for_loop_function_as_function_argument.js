const colours = ["Red","Blue","Yellow"];

for (const colour of colours)
{
    console.log(colour);
}

function handleTimeout() {
    console.log("Timed out!");
}

//Storage of an arrow function in a constant
const handleTimeout2 = () => {
  console.log("Timed out ... again!");
}

// Pass function itself as argument
setTimeout(handleTimeout,2000);

//Pass function return value as argument
setTimeout(handleTimeout(),2000);


setTimeout((()=>{console.log("Timed out!")}),2000);


function greeter(greetFn) {
  greetFn();
}

greeter(()=>{console.log("Hi")});

const first = (greet) => {
    // const greet = 'Hi';
    const second = () => {
        alert(greet);
    }
    return second;

}

const newFunc = first();

var isValidAge = function isValidAge() {
    var age = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 11;
    console.log("Length: " + arguments.length);
    console.log("Arg 1: " + arguments[0]);
    console.log("Arg 2: " + arguments[1]);
    
    return age;
  };

  const isValidAge =  () => {
    // let age = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 11;
    console.log("Length: " + arguments.length);
    console.log("Arg 1: " + arguments[0]);
    console.log("Arg 2: " + arguments[1]);
    
    return age;
  };
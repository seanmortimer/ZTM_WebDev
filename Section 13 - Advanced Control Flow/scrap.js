const obj1 = {
  a: function() {
      console.log("a says:", this);
  }
}

const obj2 = {
  a: () => {
    console.log("b says:", this);
  }
}
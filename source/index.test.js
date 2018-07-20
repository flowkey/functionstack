const FunctionStack = require('./index');

describe("FunctionStack", function(){
  it("can create a new FunctionStac", () => {
    const myStack = new FunctionStack();
    expect(myStack).toBeInstanceOf(FunctionStack);
  })

  it("can add a function to the Stack", () => {
    const myStack = new FunctionStack();
    const myFunction = jest.fn();
    myStack.add(myFunction);
    
    expect(myStack.functions.indexOf(myFunction)).not.toBe(-1);
  })

  it("runs one added function exactly once", () => {
    const myStack = new FunctionStack();
    const myFunction = jest.fn();
    myStack.add(myFunction);
    myStack.runAll();
    
    expect(myFunction).toHaveBeenCalledTimes(1);
  })

  it("runs two added functions exactly once", () => {
    const myStack = new FunctionStack();
    const myFunction = jest.fn();
    const myFunction2 = jest.fn();
    myStack.add(myFunction);
    myStack.add(myFunction2);

    myStack.runAll();
    
    expect(myFunction).toHaveBeenCalledTimes(1);
    expect(myFunction2).toHaveBeenCalledTimes(1);
  })

  it("runs all the functions with the passed params", () => {
    const myStack = new FunctionStack();
    const myFunction = jest.fn();
    const myFunction2 = jest.fn();
    const myFunction3 = jest.fn();
    myStack.add(myFunction);
    myStack.add(myFunction2);
    myStack.add(myFunction3);

    myStack.runAll({name: "Mike"}, ["Stuff"]);
    
    expect(myFunction).toHaveBeenLastCalledWith({name: "Mike"}, ["Stuff"])
    expect(myFunction2).toHaveBeenLastCalledWith({name: "Mike"}, ["Stuff"]);
    expect(myFunction3).toHaveBeenLastCalledWith({name: "Mike"}, ["Stuff"]);
  })


  it("can remove a specific function", () => {
    const myStack = new FunctionStack();
    const myFunction = jest.fn();
    const myFunction2 = jest.fn();
    myStack.add(myFunction);
    myStack.add(myFunction2);

    myStack.runAll();

    expect(myFunction).toHaveBeenCalledTimes(1);
    expect(myFunction2).toHaveBeenCalledTimes(1);

    myStack.remove(myFunction2);
    myStack.runAll();

    expect(myFunction).toHaveBeenCalledTimes(2);
    expect(myFunction2).toHaveBeenCalledTimes(1);
  })

  it("can remove all functions", () => {
    const myStack = new FunctionStack();
    const myFunction = jest.fn();
    const myFunction2 = jest.fn();
    myStack.add(myFunction);
    myStack.add(myFunction2);

    myStack.runAll();

    expect(myFunction).toHaveBeenCalledTimes(1);
    expect(myFunction2).toHaveBeenCalledTimes(1);

    myStack.removeAllFunctions();
    myStack.runAll();

    expect(myFunction).toHaveBeenCalledTimes(1);
    expect(myFunction2).toHaveBeenCalledTimes(1);
  })


})

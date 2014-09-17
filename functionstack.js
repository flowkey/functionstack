
// Object that you can use to add functions to and perform actions with them
// Great Article on : http://dean.edwards.name/weblog/2009/03/callbacks-vs-events/ - to make function call no more brittle

FunctionStack = function() {
    this.functions = []; // all the functions are stored inside an array
}

_.extend(FunctionStack.prototype, {
    add: function(fct) {
        // console.log(this)
        // Check if its a function
        if (_.isFunction(fct)) {
            this.functions.push(fct);
        }else{
            throw new Meteor.Error(100, 'Error 100: Passed Variable seems not be a function');
        }
    },
    runAll: function(params) {
        // we want to do this very fast :)
        // because we run this backwards - but we want to start the first function at first we will cache the value twice

        var self = this;

        var orgLength = self.functions.length;
        var fctCount = self.functions.length;
        var parameters = params;

        if (orgLength === 0) return;

        while (fctCount--) {
            this.functions[orgLength - fctCount - 1](parameters)
            // instantRun(this.functions[orgLength - fctCount - 1], parameters);
        }


    },
    runQueue: function() {
        // Not implemented
        // runs the functions First in First Out - so at the end the function is empty
    }
})


function instantRun(func,param) {
    setTimeout(function(){
       func(param)
    },0)
}
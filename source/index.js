class FunctionStack {
    constructor(){
        this.functions = [];
    }

    add(fct){
        if (this._isFunction(fct)) {
            this.functions.push(fct);
        }else{
            throw new Error('[Functionstack]: Passed Variable seems not be a function');
        }
    }

    runAll(...params) {
        // we want to do this very fast :)
        // because we run this backwards - but we want to start the first function at first we will cache the value twice
        const orgLength = this.functions.length;
        let fctCount = this.functions.length;

        if (orgLength === 0) return;

        while (fctCount--) {
            this.functions[orgLength - fctCount - 1](...params)
        }
    }

    remove(fct){
        const index = this.functions.indexOf(fct);
        if (index > -1) {
            this.functions.splice(index, 1);
        }
    }

    removeAllFunctions(){
        this.functions = [];
    }

    _isFunction(functionToCheck) {
        return functionToCheck && {}.toString.call(functionToCheck) === '[object Function]';
    }
}

module.exports = FunctionStack;
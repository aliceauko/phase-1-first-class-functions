receivesAFunction= callback=>callback()



function returnsANamedFunction(){
    let x =10;
    function num(x) {
        return x/2;
    }
    return num;
}


    function returnsAnAnonymousFunction() {
        return function() {
        console.log("anonymous function");
    }
      }

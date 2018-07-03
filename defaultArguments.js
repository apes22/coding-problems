/*
Write a function defaultArguments. It takes a function as an argument, along with an object containing default values for that function's arguments, and returns another function which defaults to the right values.

You cannot assume that the function's arguments have any particular names.

You should be able to call defaultArguments repeatedly to change the defaults.

function add(a,b) { return a+b;};

var add_ = defaultArguments(add,{b:9});
add_(10); // returns 19
add_(10,7); // returns 17
add_(); // returns NaN

add_ = defaultArguments(add_,{b:3, a:2});
add_(10); // returns 13 now
add_(); // returns 5

*/


function defaultArguments(func, params) {
 
  let names = func.names || func.toString().replace(/\/\/.*$|\/\*.*?\*\/|\s/gm, '')
  .match(/(?:[\w]+(?:,[\w]+)*)?(?=\))/m)[0].split(',');
  
  let enhancedFunc = function(){
    let args = arguments;
    return func.apply(this, names.map(function(val,i){
      return i < args.length ? args[i] : params[names[i]];
    }));
  }
  
  enhancedFunc.names = names;
  
  return enhancedFunc;
}

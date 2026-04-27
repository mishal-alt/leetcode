/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
  let curnum = init
  return{
    increment:()=>{
        return ++curnum
    },
    decrement:()=>{
        return --curnum
    },
    reset:()=>{
        curnum=init
        return curnum
    }
  }  
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */
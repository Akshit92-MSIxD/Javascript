
// Q) How JavaScript works?

//    Ans- a) Everything in JavaScript happens inside an "execution context". (https://codedamn.com/news/javascript/execution-context-and-call-stack)
//         b) It is created when a js code is executed!!!
//         c) Global Execution Context is created in the Call Stack by JS engine when JS program is run (before execution of any statement).
//         d) GEC is a big box and has two components!!! - memory and code component.
             
                      //  Execution context has two component : -

                      //   1)memory component[variable environment] [creation phase]
                      //   -This is the place where all variables and functions are stored as key value pairs. eg-{key: value ||  n:2;} 

                      //   2)code component[Thread of execution] [execution phase]
                      //   -This is the place where code is executed one line at a time


//         e) JS engine firstly allocate memory to all the variables and functions decalred in the JS code as key value pairs in the [memory component] of GEC.
//         f) Variables get a placeholder(undefined) as a value initially , functions get same-function-defination reference used in the code
//            or the same function code is stored in the creation phase!!!

//         g) Note : when a variable is being allocated a memory , everytime it will be initialized with 'undefined'!!!!

//         h) JS engine then execute the code line by line in the Execution phase!!!
//         i) Everytime a function call() instruction is encountered a new EC is created on top of call stack!!!
//         j) For every functional EC a Lexical Environment is created which is local memory space of that Function/EC + reference to LE of its lexical parent!!!
//         k) if funC is defined inside funP , then funP is lexical parent of funC or we can say funC is lexically inside funP    
//         l) Note : child function can access any member of its  parent funtion , but  parent function cannot!!!!
//         m) Lexical scope is a place where a variable/function is created/defined not where it is invoked/called!!!

          /* Best Blog on Lexical Scope(Static Scope!!!) and Scope chain (Must read again!!!) (Note : Lexical means definition/where something is created/defined)
          https://www.freecodecamp.org/news/javascript-lexical-scope-tutorial/ */

            // The scope chain is used to resolve the value of variable names in javascript. Without a scope chain, the Javascript engine
            // wouldn't know which value to pick for a certain variable name if there are multiply defined at different scopes. The scope chain
            // in javascript is lexically defined, which means that we can see what the scope chain will be by looking at the code.

            //  At the top of the scope, the chain is the global scope, which is the window object in the browser (global in NodeJS). Besides from the 
            //  global scope, functions have their own scoping of variables. The scope chain can be determined by looking at where functions are defined.

            //  When resolving a variable, inner functions first look at their own scope. If the variable cannot be found in its own scope it will 
            //  climb up the scope chain and looks for the variable name in the environment where the function was defined. 





          /* Q) this keyword context problem!!!(resolved by arrow function!!!)
 
                NOTE : Each function create its own context for 'this' keyword , for ex : in getp() this->obj , and in function getc(){ } this->window ,
                  and in getc =()=>{} , this->obj(lexical-this) , lexical-this is basically context of 'this' of lexical parent function/outer function!!!.

                    let obj = {
                          
                      p1 : 'v1',
                      p2 : 'v2',
                      p3 : [1,2,3,4,5],
                      
                      getp :()=>{ 
                      {
                        console.log(this); // this refers to obj
                        let getc = ()=>{      // passing 'lexical this' to This function / 'lexical this' of This function is above this->obj
                          console.log(this); // this refers to obj , but in case of normal function ==> this refers to window object!!!
                        }
                        getc();
                      }
                    
                    }

                    obj.getp(); */



//  Note-
//  JavaScript is a synchronous single-threaded language and non blocking at same time  (https://medium.com/swlh/what-does-it-mean-by-javascript-is-single-threaded-language-f4130645d8a9)

//  Single threaded means JavaScript can execute once command/statement at a time , it has only one call stack Whatever is on the top of the call stack is run first.
//  Synchronous single-threaded that means JavaScript can execute one command at a time in a specific order/sequence!!!

//  Synchronous (or sync) execution usually refers to code executing in sequence. In sync programming, the program is executed line by line, one line at a time.
//  Each time a function is called, the program execution waits until that function returns before continuing to the next line of code.





/* Q) What is temporal dead zone?

  Ans-a) It is the time since when let variable was hoisted and till it is initialized some value.
      b) The time between hoisting(getting memory/stored in memory) and initialization is known as TDZ.
      c) Let and const variables are hoisted but remains in TDT till they are initialized some value.
      d) var variables are hoisted but they are stored in global memory space , whereas let and const are stored in different memory space.
      e) Note : Let and const variables cannot be accessed by window(global object) !!!!  */




/* Q) What is rest operator in js??

  Ans- (a) Rest operator is used to handle the indefinite no. of arguments passed in the function call.
       (b) Rest operator represents the indefinite no. of arguments as an array.       
       (c) It is always placed at last after the paratemeters list!!!!. */

            // for ex :
            //                 function add(a,b,...input) // function of adding atleast two numbers!!!
            //                 {
            //                       let sum = 0;

            //                       sum = a+b;

            //                       for(let item of input)
            //                       {
            //                         sum = sum + item;
            //                       }

            //                       console.log(sum);

            //                 }

            //                 add(2,2);
            //                 add(2,3,4);
            //                 add(3,10,20);
         




  
    /* Q) What is shadowing in js??
        Ans- (a) Shadowing is a concept which says variables of same name but in different scopes are acceptable.
            (b) In case of nested blocks the inner block varible will get the first preference than the outermost variable of same name.
            (c) So we can say that inner block variable shadows the name of outer block variable.
            (d) Two types : legal and illegal shadowing.    
            (e) Advantages :  Improving code readability and reducing the likelihood of errors
            (f) Disadvantages :  more difficult to understand and debug */





   /* Q) What are closures??

      Ans - (a) Closures are basically a combination of Function bundle together(enclosed)  with variables(references not values!!!) to its surrounding state(Lexical Environment)

            (b) The function  defined in the closure ‘remembers’ the environment in which it was created. 

            (c) Inner function have access to the variables within the outer function,  because of a closure 
            
            (d) A closure is created every time an enclosing outer function is called. In other words, the inner function
                does not need to return for a closure to be created. 

            (e) Closures have many practical use cases. One important use case is to maintain a private reference to a variable in the outer scope. 

            (f) Scope of closure is lexical(where it was statically defined)!!! 

            (g) Too much nested functions also make closure!!! 

            (h) Since let is block scoped  a new identifier binding/copy of variable is created for each iteration in the for-loop ==> more than one closures formed!!!
                 ==> every function will be associated with different copy of variable!!!

                 The closure data of the parent context is saved in what’s known as the “heap,” which allows for the data to persist after the function 
                 call that made them returns (i.e. even after the execution context is popped off the execution call stack).

                 Refer this video ==> https://www.youtube.com/watch?v=eBTBG4nda2A&list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP&index=13 
                  Refer this blog==> https://www.freecodecamp.org/news/lets-learn-javascript-closures-66feb44f6a44/  


            (i) The closure data of the parent context is saved in what’s known as the “heap” which allows for the data to persist after the function 
                call that made them returns (i.e. even after the execution context is popped off the execution call stack).
              

            (j) Advantages/Uses of Closures :

                  - Data hiding/Privacy and Encapsulation (very Imp!!!)
                  - Module Design Pattern
                  - Currying
                  - Functions like once
                  - Memoize
                  - Maintaining State in Async World
                  - setTimeouts(callback function)!!!
                  - Iterators
                  - and many more...

            (k)  Disadvantages of Closures : 

                  - Over Consumption of Memory(Closed over variables are not garbage collected!!!)
                  - Closed over variables are not garbage collected till the program expires!!!.
                  - If not handled properly lead to 'Memory leaks' and can freeze the browser!!!.

                  
        //  Note : Every Time you revise closures , test every case in sources tool to better understand it!!!! */




  
  /* Q) What are free variables and how to resolve them in Js??

     Ans - (a) Free variables are those which are not defined or declared inside the  function!!!
           (b) They can be resolved using static scope(lexical scope) or Dynamic scope.
           (c) In Js it can be resolved using lexical scope chain( static scope chain) !!!         */




 /* Q) Difference between lexical scope(static scope) and dynamic scope??
     
    Ans - (a) In Lexical Scope(Static Scope) we find free varible in the outer block followed by next block and so on until we find it!!!
          (b) In Dynamic Scope , we find free variable in the caller function of the current executed function and so on until we find it!!!
                                                                                                                                                */




/*  Q) What is destructuring array/object??
    
   Ans - (a) Destructuring means breaking a complex structure into smaller parts or extracting components from a complex structure!!!.
         (b) Destructuring is an efficient way of extracting smaller fragments from data(arrays/objects)
         (c) Destructuring syntax makes assignment and declaration of variables easy!!!.

                 Refer this ==> https://www.javatpoint.com/es6-array-destructuring  */




/*  Q) What is Garbage Collector in Js??

    Ans - (a) GC is a program in the browser/JS engine which kinds of  free's up the unutilised memory.    */
         

 
    
/* Q) Relation between Garbage Collection , memory leaks and closures??
     
    Ans - (a) GC cannot free up the closed over variables in a closure!!!
          (b) Over Consumption of Memory(Closed over variables are not garbage collected!!!)
          (c) Closed over variables are not garbage collected till the program expires!!!.
          (d) If not handled properly lead to 'Memory leaks' and can freeze the browser!!!.
          (e) GC smartly collects the garbage variable of outer function which is of no use to inner function!!!.




/* Q) Are let declarations and Function parameters closed over??
   
      Ans - Yes!!!( any variable in outer function can become a closed over variable of a closure!!!)   */




/* Q) What is major benefit/power of using callback and setTimeout() ??

Ans - (a) Using Setimeout(Web Api) and callback function we can implement asynchronous execution in JS.

      (b) Without these callbacks and webAPI's , our main-execution-thread(Stack) would be blocked since we have only one call stack(main thread).
            (blocking the MET is not recommended for large applications) 






/* Q) Why we need to remove EventListeners if we are not using them / Relation between GC and removeEL????

Ans - (a) EventListeners are heavy!!!!!!(handler(callback) function in Eventlisteners makes closure with outer function variables)
          and those closed over variables are not garbage collected until the program is expired!!!
          therefore it is wise decision to remove those Eventlisteners from the element if we are not using them!!!!

      (b) After removing the EL , the closed over variables  will be garbage collected!!!! */



/* Q) What is Web API's in JS browser???
   
Ans - (a) JS browser have some superpowers like it can display something , fetch some data from server, has its own localStorage
          has its own timer , bluetooth access, Geolocation access and lot of other stuffs.

      (b) JS browser has a JS engine that has a callstack inside it.

      (c) JS browser allows JS engine to use/access these superpowers through Window object { Web API's } 
          (Browser wraps all these superpowers in window object!!!).

      (d) Web API's : setTimeout() ,  DOM API's(ex: document.get....) , fetch() , localStorage , console , location etc;
      
      (e) Note : these Web API's are not a part of Javascript language  , these are part of a JRE(Browser/Nodejs) !!!! (Shocked!!! to hear this :( ).



/* What is Web API environment and why Web API callbacks are registered here???

Ans - (a) Web API environment is a place where the callback functions (used in WEB API's) are registered and stored temporarily.
           Note : Callbacks used in addEventListener() WEb API get registered in Web API environment until the browser is not closed!!!!

      (b) We use Web API's , eventloops, microtask queue(Hp) , callback queue(Lp) and Web API environment to acheive asynchronous behaviour in JS!!!!.

      (c) Only the Web API callback functions(setTimeout() etc) are registered in Web API environment so that there execution can be delayed and due to which JS can 
          achieve asynchronous behaviour in JS.



/* Q) What is the job of Event loop , microtask queue and callback queue in achieving asynchronous behaviour in js???

Ans - (a) The Job of Event loop is to continuously monitor the Callstack and Both queues(microtask and callback).

      (b) If the Callstack becomes empty at some point , then Event loop checks if there is anything present in microtask queue 
          followed by callback queue(note : microtask queue is given higher priority than callback queue).

      (c) If it finds any callback instruction in both the queues , it will  first popped out all the callback instructions from the microtask queue
          and once the microtask queue is empty then at last it will pop out all the callback instructions from the callback queue and sends it to
          CallStack one by one for execution!!!!.



/* Q) How event loop has a relation with addEventListener() Web API ???

Ans - (a) Note : Callbacks used in addEventListener() WEb API get resistered in Web API environment until the browser is not closed!!!!
      
      (b) When a event is invoked by user , the registered Callback function( in addEventListener Web API) is pushed inside the callback queue.
          but it stays in the Web API Environment even after the execution of callback function has finished.

      (c) So ,If user trys to invoke event continuously n times then n copy of the same Callback function will be pushed inside the callback queue
          and will be send to the callstack one by one by the event loop.

          Therefore in easy language , Event loop work is to continuously check if an event occurred, like mouse click or keyboard stroke so that it 
          can send that to callstack. Of course, your mouse click will be given higher priority for execution than an image load.  */





/* 

      Q) When does the event loop actually start? 

      Ans -  Event loop, as the name suggests, is a single-thread, loop that is `almost infinite`. It's always running and doing its job.



      Q)  Are only asynchronous web API callbacks are registered in the web API environment? 

      Ans - YES, the synchronous callback functions like what we pass inside map, filter, and reduce aren't registered in the Web API environment.
      It's just those async callback functions that go through all this.



      Q) Does the web API environment stores only the callback function and pushes the same callback to queue/microtask queue?

      Ans - Yes, the callback functions are stored, and a reference is scheduled in the queues. Moreover, in the case of event listeners
      (for example click handlers), the original callbacks stay in the web API environment forever, that's why it's advised to explicitly remove the
       listeners when not in use so that the garbage collector does its job.



      Q) How does it matter if we delay for setTimeout would be 0ms. Then callback will move to queue without any wait? 

      Ans - YES, If delay for setTimeout is 0 ms, a callback will be registered with 0 ms timeout and will immediately be pushed into the callback queue.
            However, the event loop will only move it to the JS call stack after it becomes empty. Hence, you can use setTimeout with 0ms wait time to
            delay a callback execution.
                       
            
      Q) Why need of asynchronous behaviour in JS??
      
       Ans - (a)To speed up the process and reduce the frontend side delay!!!

       
       Q) What are synchronous callbacks and asynchronous web API callbacks??
        
       Ans - (a) Callback functions provide to normal JS datastructure array like map(), filter , reduce , foreach() are synchronous callbacks.

             (b) Callback function provided to promises, setTimeout() (WEB API's) are asynchronous web API callbacks.

             (c) Any callback method provided to WebAPI's (e.g. fetch, timers etc.) will be executed asynchronously in JRE (browser/node.js) using
                 OS provided threads or JRE thread-pool which makes the program execution looks like asynchronous. Any callback method provided to JS 
                 engine's data-structures (e.g. array.map, filter etc.) will be executed synchronously in call-stack itself. Call stack is LIFO type and
                 both Callback Queue and Microtask Queue are of FIFO type.

            (d)All the callback function that comes through Promises and mutation observer are stored in Web API environment and then transferred
               to microtask queue.
 
            (e) Too many micro tasks generated can cause Starvation (not giving time to callback tasks to execute).


            */  


      
      /* 
             JS Engine Notes : -
     
      1. JS runtime environment contains all elements required to run JS.
      2. It contains JS engine(program not hardware), set of API's, callback queue, microtask queue, event loop.
      3. JS engine is a piece of code.
      4. Process includes Parsing ---> Compilation -----> Execution.
      5. Parsing breaks code into tokens and converts it into AST(Abstract Syntax Tree).
      6. Modern JS engine follows JIT compilation, it interprets while it optimises code as much as it can.
      7. Execution and Compilation are done together.
      8. Execution has Garbage collector and other optimisation such as inlining, copy elusion, inline caching etc.
      9. Garbage collector is a program in JRE which uses Mark and Sweep Algorithm.
      10.Chrome browser has V8 JS engine!!!!
      11. JRE is different for different browsers.
        
             */

           
      /*    
           
           Demonstration of Higher Order Functions and Callback function working together!!!!!==> HOF(CF)!!!
      
      
         const radius = [1,2,3,4,5];

         const calculate = function(radius,logic)
         {
         const output = [];
         
         for(var i=0;i<radius.length;i++)
         {
            output.push(logic(radius[i]));
         }

         return output;
         }



         let area = calculate(radius,function (r){
             return Math.PI * r * r; 
         });

         let circumference = calculate(radius,function (r){
            return 2 * Math.PI * r;
         });

         let diameter = calculate(radius,function (r){
            return 2 * r;
         });

         console.log(area);
         console.log(circumference);
         console.log(diameter);       */




      /*

       Q) What is Prototype??

       Ans - (a) Design/First-model/Original-model/Family from which other forms will be developed.

             (b) Whenever we create any JS object , the JS engine engine automatically attaches some hidden properties and methods to your object!!!

             (c) Those hidden properties and methods comes via Object's Prototype(model/design/Baap).

             (d) Whenever we create any Js object , JS engine automatically puts some hidden properties and methods into an object and then attaches 
                 that object to your original object!!!!

             (e) Each object(Pri.. or Non-Pri..) has a Prototype from which it is developed!!!

       Q)   */


      //  class UserDefined{

      //       constructor(num)
      //       {
      //          this.num  = num;
      //       }


      //        f1(){
      //             console.log('f1 function is called!!!!');
      //       }
      //        f2(){
      //             console.log('f2 function is called!!!!');
      //       }
      //        f3(){
      //             console.log('f3 function is called!!!!');
      //       }


      //  };


      //  let ud1  = new UserDefined(9);

      
       








       


       
            
            
      
      
      
     















                                                                                                                                    












    


               


                 
                

                
         



   
 
    



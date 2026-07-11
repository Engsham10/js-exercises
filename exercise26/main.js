
// Blocking example

function blocking(){
   setTimeout(()=>{
    console.log("i am starting now, (blocking)");
   },2000);
}
console.log("Blocking/ Synchrous programming");
blocking();
// non-blocking example
function nonBlocking(){
   setTimeout(()=>{
    console.log("i am starting now, (non-blocking)");
   });
}
console.log("Non-Blocking/ ASynchrous programming");
nonBlocking();
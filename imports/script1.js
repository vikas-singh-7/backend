// console.log("hello world");
// import{name,frnd} from "./script2.js"   // for web


// console.log(name,frnd)   // in conole of web


// it toally work but remeber we do imports and export without using module.export it only works in browser engine 
// to make sure that import and export run in node we use module.export=variables


// for node


const{backend,developer, frnd}=require('./script2.js')

console.log(backend, "by" , developer , "and she is " , frnd)



// first get the package and intall it and then require it 

var jokes=require('one-liner-joke');
console.log(jokes.getRandomJoke({
    'exclude_tags':['life']
}))
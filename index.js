function shout(string){
  return string.toUpperCase()
}
function whisper(string){
  return string.toLowerCase()
}
function logShout(string){
  console.log(string.toUpperCase())
}
function logWhisper(string){
  console.log(string.toLowerCase())
}
function sayHiToGrandma(string){
 var Response;
 if (string.toLowerCase()){
   Response = "I can't hear you!"
 }
 else (string.toUpperCase()){
   Response = "YES INDEED!"
 }
   else if (string = "I love you, Grandma"){
     Response = "I love you, too"
   }
   return Response
}

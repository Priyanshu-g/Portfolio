letters=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p"]
function edit(){
 for(i=0;i<letters.length;i++){
   document.getElementById("k"+letters[i]).innerHTML=document.getElementById("t"+letters[i]).innerHTML
 }
}
function setAll(x){
  for(i=0;i<letters.length;i++){
    document.getElementById("t"+letters[i]).innerHTML=x
  }
  edit()
}
function toggleT(x){
  if(x.innerHTML=="0"){
    x.innerHTML="1"
  }
  else{
    x.innerHTML="0"
  }
  edit()
}
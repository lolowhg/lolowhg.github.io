let myImage=document.querySelector('img');
myImage.onclick=()=>{
    let mySrc=myImage.getAttribute('src');
    if(mySrc==='images/firefox-icon.png'){
        myImage.setAttribute('src','images/firefox2.png');
    }else{
        myImage.setAttribute('src','images/firefox-icon.png');
    }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
    let myName = prompt('请输入你的名字。');
    localStorage.setItem('name', myName);
    myHeading.textContent = myName+'酷毙了!';
  }
if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent =storedName+'酷毙了!';
  }
  myButton.onclick = function() {
    setUserName();
 }
 
 
   
  
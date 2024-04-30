// errormsg = document.getElementById("errormsg");

// try{
//      num = prompt("Enter a number:")
//     if(isNaN(num))
//     throw 'Enter a number not alphabet'
// }
// catch(error){
//   9  console.log(error)
//     errormsg.innerHTML = error

// }
fetch('https://bible-api.com/romans+12:1-2')
.then((res)=>res.json())
.then((msg)=>console.log(msg.verses[0].text))
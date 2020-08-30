//  var para = document.querySelector('.p1').style.style.backgroundColor="red";

// para.addEventListener('click', updateName);

//  function updateName() {
// let name = prompt('Enter a new name');
// para.textContent = 'Player 1: ' + name;
// }

 var Student = ["DEEPSHIKHA", "MONI",  
                 "DEEP", "SHIBU"]; 
            var g = Student.entries(); 
            var f=Student.values();
            var d=Student.keys();
  
            for (x of g) { 
                document.getElementById("geeks") 
                  .innerHTML += x + "<br>"; 

            } 
            
            for (x of f) { 
                document.getElementById("value") 
                  .innerHTML += x + "<br>"; 

            } 

            
            for (x of d) { 
                document.getElementById("key") 
                  .innerHTML += x + "<br>"; 

            } 
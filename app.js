function display(){
    document.getElementById("spann").style.display = "block";

};

/*window.addEventListner('load',()=> {
var long;
var lat;

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition => {
      long = showPosition.coords.longitude;
      lat = showPosition.coords.longitude;
      });
    } 
 
});
*/
var asamplaca;
function getasamPlaca(){
asamplaca = document.getElementById("boxktiba").value;
console.log(asamplaca);
var api = 'http://api.weatherapi.com/v1/current.json?key=d8d0ddba9b54406bb6c81332202411&q='+asamplaca;
console.log(api);
fetch(api)
   .then(response => {
       return response.json();
   })
   .then(data => {


    if(typeof data.error === 'undefined'){
        display();
        document.getElementById("location").innerHTML = data.location.name;

        document.getElementById("icon").innerHTML = data.current.condition.text;
        document.getElementById("temperature-degree").innerHTML = data.current.temp_c;

    }
        else if(data.error.code=1006){
         console.log('makach manha placa');
         document.getElementById("location").innerHTML = "mat existich placa";

    }
   });

};


/*function swapcf(){
if(typeof data.current.tem)
};*/





















var input = document.getElementById("boxktiba");
input.addEventListener("keyup", function(event){
    if (event.keyCode === 13) {
     event.preventDefault();
     document.getElementById("button").click();
    };});
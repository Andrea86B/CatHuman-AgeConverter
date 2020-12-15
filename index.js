document.getElementById("submitBtn").addEventListener('click', function(){
    var catAge = document.getElementById("catAgeInput").value;
    if(catAge == 1){
        document.getElementById("result").innerHTML = "15";
    } else if (catAge == 2) {
        document.getElementById("result").innerHTML = "28";
    } else {
        var age = 28 + (4*(catAge-2));
        document.getElementById("result").innerHTML = age;
    }
})
function calculateTip(){
    var billamt = document.getElementById('billamt').value;
    var servicequal= document.getElementById('serviceQual').value;
    var peopleamt = document.getElementById('peopleamt').value;


    if (billamt ==="" || servicequal==0){
        alert('please enter a value');
        return;
    }
    // if (peopleamt === "" || peopleamt <= 1) {
    //     peopleamt = 1;
    //     document.getElementById("each").style.display = "none";
    //   } else {
    //     document.getElementById("each").style.display = "block";
    //   }

      var total = (billamt * servicequal) / peopleamt;
    total = Math.round(total * 100) / 100;
    total = total.toFixed(2);
    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerHTML = total;


    
}
$(document).ready(function(){

    var config = {
        apiKey: "AIzaSyDBbWiCkM5YQzcx2U8H8bc4mU5vzSTC3Yg",
        authDomain: "traingame-759fc.firebaseapp.com",
        databaseURL: "https://traingame-759fc.firebaseio.com",
        projectId: "traingame-759fc",
        storageBucket: "traingame-759fc.appspot.com",
        messagingSenderId: "1036691998131"
    };
    firebase.initializeApp(config);
    
    // Create a variable to reference the database.
    var database = firebase.database();
    


var listarray = [
    {
        "name": "Maeve",
        "destination": "Georgia",
        "date": "11/11/11",
        "rate": "4"
    },
    {
        "name": "Mickey",
        "destination": "Alabama",
        "date": "11/11/11",
        "rate": "8"
    }
]

function rowCreate() {

    for (var i = 0; i < listarray.length; i++) {
        var vals = Object.values(listarray[i]);
        var row = $("<tr>");

        for (var j = 0; j < vals.length; j++) {
            var cell = $("<td>").text(vals[j]); 
            row.append(cell);   
        }

        $("#table").append(row);
    }
}

rowCreate();



$("#submit").on("click", function() {
    event.preventDefault();

    var name = $("#name-input").val().trim();
    var destination = $("#destination-input").val().trim();
    var date = $("#date-input").val().trim();
    var rate = $("#rate-input").val().trim();

    var newtrain={
        name: name,
        destination: destination,
        date: date,
        rate: rate,
    };

    console.log(newtrain);

    $("#name-input").val("");
    $("#destination-input").val("");
    $("#date-input").val("");
    $("#rate-input").val("");


    database.ref().push(newtrain);



    listarray.push(newtrain);
    
    console.log(listarray);

    rowCreate();

    // }, function (errorObject) {
    //     console.log("Errors handled: " + errorObject.code);
    });

})
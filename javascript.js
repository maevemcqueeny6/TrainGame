
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
            "name": "NJTransit",
            "destination": "NYC",
            "startTime": "5:00",
            "rate": "4"
        },
        {
            "name": "Path Train",
            "destination": "Christopher Street",
            "startTime": "23:00",
            "rate": "8"
        }
    ]

    // function rowCreate() {

        

    //     for (var i = 0; i < listarray.length; i++) {
    //         var train = listarray[i];
    //         var vals = Object.values(listarray[i]);
    //         var row = $("<tr>");
            
    //         var namecell = $("<td>").text(train.name);
    //         var destination = $("<td>").text(train.destination);
    //         var frequency = $("<td>").text(train.rate);
    //         var nextArrival = $("<td>").text(nexttrain(frequency, train.startTime));

    //         row.append(namecell, destination, frequency, nextArrival);

    //         $("#table").append(row);
    //     }
    // }

    // rowCreate();

    


    $("#submit").on("click", function () {
        event.preventDefault();

        var name = $("#name-input").val().trim();
        var destination = $("#destination-input").val().trim();
        var startTime = $("#startTime-input").val().trim();
        var rate = $("#rate-input").val().trim();

        var newtrain = {
            name: name,
            destination: destination,
            start: startTime,
            rate: rate,
        };

        console.log(newtrain);

        $("#name-input").val("");
        $("#destination-input").val("");
        $("#startTime-input").val("");
        $("#rate-input").val("");


        database.ref().push(newtrain);



        listarray.push(newtrain);

        console.log(listarray);

        // rowCreate(newtrain);

        // }, function (errorObject) {
        //     console.log("Errors handled: " + errorObject.code);
    

    var convertedDate = moment(startTime, "HH:mm").subtract(1, "years");

    var now = moment();

    var difference = moment().diff(moment(startTime), "minutes");

    var remainder = difference % newtrain.rate;

    var tMinutesTillTrain = newtrain.rate - remainder;

    var nextTrain = (moment().add(tMinutesTillTrain, "minutes")).format("HH:mm");


    var newRow = $("<tr>").append(
        $("<td>").text(newtrain.name),
        $("<td>").text(newtrain.destination),
        $("<td>").text(newtrain.rate),
        $("<td>").text(nextTrain),
        $("<td>").text(tMinutesTillTrain),
   );

   $("#table").append(newRow);

    // function nexttrain(frequency, firstTrain) {
    //     var firstTrainStop = moment(firstTrain, "hh:mm");
    //     if (firstTrainStop.diff(moment(), "minutes") > 0) {
    //         return firstTrain;
    //     }
    // //     else {
    //     }
    // }

    // for (var i = 0; i < listarray.length; i++) {
    //     var train = listarray[i];
    //     var vals = Object.values(listarray[i]);
    //     var row = $("<tr>");
        
    //     var namecell = $("<td>").text(train.name);
    //     var destination = $("<td>").text(train.destination);
    //     var frequency = $("<td>").text(train.rate);
    //     var nextArrival = $("<td>").text(nexttrain(frequency, train.startTime));

    //     row.append(namecell, destination, frequency, nextArrival);

    //     $("#table").append(row);

});

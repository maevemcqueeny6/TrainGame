
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
var dataRef = firebase.database();

$("#submit").on("click", function () {
    event.preventDefault();

    var newTrainName = $("#name-input").val();
    var newTraindestination = $("#destination-input").val();
    var newTrainStartTime = $("#startTime-input").val();
    var newTrainrate = $("#rate-input").val();

    // Everything User generated gets stored
    var newTrain = {
        name: newTrainName,
        destination: newTraindestination,
        start: newTrainStartTime,
        rate: newTrainrate
    };

    // Stores the given fields / pushes it up to firebase
    dataRef.ref().push(newTrain);

    $("#name-input").val("");
    $("#destination-input").val("");
    $("#startTime-input").val("");
    $("#rate-input").val("");

});


dataRef.ref().on("child_added", function (childSnapshot) {
    // Pull the information we stored so we can manipulate it with calculations 

    var name = childSnapshot.val().name;
    var destination = childSnapshot.val().destination;
    var firstTrain = childSnapshot.val().start;
    var frequency = childSnapshot.val().rate;


    var firstTrainConverted = moment(firstTrain, "MMMM Do YYYY, HH:mm").subtract(1, "years");

    var timedifference = moment().diff(moment(firstTrainConverted), "minutes");

    var timeRemaining = timedifference % frequency;

    var minutesTillTrain = frequency - timeRemaining;

    var nextComingTrain = (moment().add(minutesTillTrain), "minutes");


    $("#table").append("<tr class='well'><td class='member-name'> " +
        childSnapshot.val().name +
        " </td><td class='train-rate'> " + childSnapshot.val().destination +
        " </td><td class='train-rate'> " + childSnapshot.val().rate +
        " </td><td class='train-next'> " + nextComingTrain +
        " </td><td class='train-minutes-away'> " + minutesTillTrain +
        " </td></tr>");

    // }, function (errorObject) {
    //     console.log("Errors handled: " + errorObject.code);
});


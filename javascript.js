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

$("#submit").on("click", function(event) {
    event.preventDefault();
    console.log("we got here");

    var name = $("#name-input").val().trim();
    var role = $("#role-input").val().trim();
    var date = $("#date-input").val().trim();
    var rate = $("#rate-input").val().trim();

    // Code for handling the push
    database.ref().push({
      name: name,
      role: role,
      date: date,
      rate: rate,
      dateAdded: firebase.database.ServerValue.TIMESTAMP
    });
    $("#name-input").text(" ");
});

  // Firebase watcher .on("child_added"
  database.ref().on("child_added", function(snapshot) {
    // storing the snapshot.val() in a variable for convenience
    var sv = snapshot.val();

    // Console.loging the last user's data
    console.log(sv.name);
    console.log(sv.role);
    console.log(sv.date);
    console.log(sv.rate);

    // Change the HTML to reflect
    var appName = $("<td>").attr("id", "app-name");
    var appRole = $("<td>").attr("id", "app-role");
    var appDate = $("<td>").attr("id", "app-date");
    var appRate = $("<td>").attr("id", "app-rate");
    var appMonths = $("<td>").attr("id", "app-months");
    var appGross = $("<td>").attr("id", "app-gross");
    var row = $("<tr>");
    row.append(appName, appRole, appDate, appRate, appMonths, appGross);
    $("#app-name").text(sv.name);
    $("#app-role").text(sv.role);
    $("#app-date").text(sv.date);
    $("#app-rate").text(sv.rate);
    $("#app-months").text();
    $("#app-gross").text();

    // Handle the errors
  }, function(errorObject) {
    console.log("Errors handled: " + errorObject.code);
  });

function monthsWorked() {
    // Convert date entered to moment
    moment(sv.date)
};

// function calcPay {
//     // number of months worked * pay rate
//     rate
// };
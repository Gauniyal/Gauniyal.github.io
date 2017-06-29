document.getElementById("go").onclick = function() {
    var input = $("#input-box").val();
    var output = "Hi, " + input;
    document.getElementById("output").innerHTML = output;
};
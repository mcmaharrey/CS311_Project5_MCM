function generate() {
    var word1 = document.getElementById("word1").value;
    var word2 = document.getElementById("word2").value;
    var word3 = document.getElementById("word3").value;
    var word4 = document.getElementById("word4").value;
    var word5 = document.getElementById("word5").value;
    var word6 = document.getElementById("word6").value;
    var word7 = document.getElementById("word7").value;
    var word8 = document.getElementById("word8").value;
    var word9 = document.getElementById("word9").value;
    var word10 = document.getElementById("word10").value;
    var word11 = document.getElementById("word11").value;
    var word12 = document.getElementById("word12").value;
    var word13 = document.getElementById("word13").value;

    var content = "You won't believe what my pet <span class='entered-word'>" + word1 + "</span>, <span class='entered-word'>" + word2 + "</span> did last <span class='entered-word'>" + word3 + "</span> After a long day of <span class='entered-word'>" + word4 + "</span> at <span class='entered-word'>" + word5 + "</span>, I came home" +
    " to find that they had <span class='entered-word'>" + word6 + "</span> all over the new <span class='entered-word'>" + word7 + "</span>. I had just bought it last <span class='entered-word'>" + word8 + "</span>, and it is already <span class='entered-word'>" + word9 + "</span>." +
    " I have no idea what I'm going to do about this. I do know, however, that I need to punish my pet! I was considering <span class='entered-word'>" + word10 + "</span> them," +
    " but I felt that would be a bit <span class='entered-word'>" + word11 + "</span>. Maybe I should just let it slide and try to calm down by eating my comfort food, <span class='entered-word'>" + word12 + "</span>, <span class='entered-word'>" + word13 + "</span>.";


    document.getElementById("wordEntry").style.display = "none";
    document.getElementById("createdMadLib").style.display = "block";
    document.getElementById("madLibContent").innerHTML = content;

}

function resetMadLib() {
    document.getElementById("word1").value = "";
    document.getElementById("word2").value = "";
    document.getElementById("word3").value = "";
    document.getElementById("word4").value = "";
    document.getElementById("word5").value = "";
    document.getElementById("word6").value = "";
    document.getElementById("word7").value = "";
    document.getElementById("word8").value = "";
    document.getElementById("word9").value = "";
    document.getElementById("word10").value = "";
    document.getElementById("word11").value = "";
    document.getElementById("word12").value = "";
    document.getElementById("word13").value = "";

    document.getElementById("wordEntry").style.display = "block";
    document.getElementById("createdMadLib").style.display = "none";

}
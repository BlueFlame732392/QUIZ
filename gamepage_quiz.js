player_1name = localStorage.getItem("player_1name");


player_2name = localStorage.getItem("player_2name");



player_1score = 0;
player_2score = 0;

document.getElementById("player_1name").innerHTML = player_1name + ":";
document.getElementById("player_2name").innerHTML = player_2name +":";

document.getElementById("player_1score").innerHTML = player_1score;
document.getElementById("player_2score").innerHTML = player_2score; 

document.getElementById("player_question").innerHTML = "Question Turn -" + player_1name;
document.getElementById("player_answer").innerHTML = "Answer Turn -" + player_2name;


function send(){
   number1 = document.getElementById("number1").value;
   number2 = document.getElementById("number2").value;
   actual_answer = parseInt(number1) * parseInt(number2);



question_number = "<h4>" + number1 + "x" + number2 + "</h4>" ;
input_box = "<br> Answer: <input type = 'text' id = 'input_check_box' > ";
check_button = "<br></br><button class = 'btn-btn info' onclick = 'check()'>Check</button> ";
row = question_number + input_box + check_button;

document.getElementById("output").innerHTML= row;

document.getElementById("number1").value="";
document.getElementById("number2").value="";

}

question_turn = "player1";
answer_turn = "player2";

function check() {

get_answer = document.getElementById("input_check_box").value;
if(get_answer == actual_answer){
  if(answer_turn=="player1"){
    
    player_1score = player_1score +1;
    document.getElementById("player_1score").innerHTML = player_1score;

  }
  else{
    player_2score = player_2score+1;
    document.getElementById("player_2score").innerHTML = player_2score;

  }



}
if(question_turn == "player1"){
    question_turn = "player2";
    document.getElementById("player_question").innerHTML = "Question Turn-" + player_2name;


}
else{
    question_turn = "player1";
    document.getElementById("player_question").innerHTML = "Question Turn- " + player_1name;

}

if(answer_turn == "player1"){
    answer_turn = "player2";
    document.getElementById("player_answer").innerHTML = "Answer Turn -" + player_2name;
}
else{
    answer_turn = "player1";
    document.getElementById("player_answer").innerHTML = "Answer Turn -" + player_1name;
}
document.getElementById("output").innerHTML="";
}





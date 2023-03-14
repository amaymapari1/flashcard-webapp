$(document).ready(function () {
    
    var cardState;
    var currentQuestion=0;
    var qbank=new Array;
   
    loadDB();
   
    function loadDB(){
     $.getJSON("activity.json", function(data) {
      for(i=0;i<data.questionlist.length;i++){
       qbank[i]=[];
       qbank[i][0]=data.questionlist[i].cardfront;
       qbank[i][1]=data.questionlist[i].cardback;
      }//for
      beginActivity();
     })//gtjson
    }//loadDB
   
    function beginActivity(){
     cardState=0;
    
     $("#cardArea").empty();
     $("#cardArea").append('<div id="card1" class="card">' + qbank[currentQuestion][0] + '</div>');
     $("#cardArea").append('<div id="card2" class="card">' + qbank[currentQuestion][1] + '</div>');
     $("#card1").css("background-color","#FF7F50");
     $("#card2").css("background-color","#6A5ACD");
     $("#card2").css("top","350px");
     $("#cardArea").on("click",function(){
      if(cardState!=1){
       cardState=1;
       //togglePosition();
       $("#card1").animate({top: "-=350"}, 150, function() {cardState=0;togglePosition();});
       $("#card2").animate({top: "-=350"}, 150, function() {togglePosition2();});
      }//if
     });//click function
     
    //  currentQuestion--;
    //  $("#buttonArea").empty();
    //  $("#buttonArea").append('<div id="previousButton">PREVIOUS</div>');
    //  $("#previousButton").on("click",function(){
    //   if(currentQuestion<qbank.length){beginActivity();}
    //   else{displayFinalMessage();}
    //  });//click function
     currentQuestion++;
     $("#buttonArea").empty();
     $("#buttonArea").append('<div id="nextButton">NEXT</div>');
     $("#nextButton").on("click",function(){
      if(currentQuestion<qbank.length){beginActivity();}
      else{displayFinalMessage();}
     });//click function
   
    }//beginactivity
   
    function togglePosition(){
     if($("#card1").position().top==-350){$("#card1").css("top","350px");};
    }//toggle
   
    function togglePosition2(){
     if($("#card2").position().top==-350){$("#card2").css("top","350px");};
    }//toggle2
   
    function displayFinalMessage(){
     $("#buttonArea").empty();
     $("#cardArea").empty();
     $("#cardArea").append('<div id="finalMessage">You have finished the activity.</div>');
    }//final message
   
   });
   $(document).ready(function () {

    
    var cardState;
    var currentQuestion=0;
    var qbank=new Array;
   
    loadDB1();
   
    function loadDB1(){
     $.getJSON("activity1.json", function(data) {
      for(i=0;i<data.questionlist.length;i++){
       qbank[i]=[];
       qbank[i][0]=data.questionlist[i].cardfront;
       qbank[i][1]=data.questionlist[i].cardback;
      }//for
      beginActivity1();
     })//gtjson
    }//loadDB
   
    function beginActivity1(){
     cardState=0;
    
     $("#cardArea1").empty();
     $("#cardArea1").append('<div id="card3" class="cardam">' + qbank[currentQuestion][0] + '</div>');
     $("#cardArea1").append('<div id="card4" class="cardam">' + qbank[currentQuestion][1] + '</div>');
     $("#card3").css("background-color","#FF7F50");
     $("#card4").css("background-color","#6A5ACD");
     $("#card4").css("top","350px");
     $("#cardArea1").on("click",function(){
      if(cardState!=1){
       cardState=1;
       //togglePosition();
       $("#card3").animate({top: "-=350"}, 150, function() {cardState=0;togglePosition3();});
       $("#card4").animate({top: "-=350"}, 150, function() {togglePosition4();});
      }//if
     });//click function
     
    //  currentQuestion--;
    //  $("#buttonArea").empty();
    //  $("#buttonArea").append('<div id="previousButton">PREVIOUS</div>');
    //  $("#previousButton").on("click",function(){
    //   if(currentQuestion<qbank.length){beginActivity();}
    //   else{displayFinalMessage();}
    //  });//click function
     currentQuestion++;
     $("#buttonArea1").empty();
     $("#buttonArea1").append('<div id="nextButton1">NEXT</div>');
     $("#nextButton1").on("click",function(){
      if(currentQuestion<qbank.length){beginActivity1();}
      else{displayFinalMessage1();}
     });//click function
   
    }//beginactivity
   
    function togglePosition3(){
     if($("#card3").position().top==-350){$("#card3").css("top","350px");};
    }//toggle3
   
    function togglePosition4(){
     if($("#card4").position().top==-350){$("#card4").css("top","350px");};
    }//toggle4
   
    function displayFinalMessage1(){
     $("#buttonArea1").empty();
     $("#cardArea1").empty();
     $("#cardArea1").append('<div id="finalMessage">You have finished the activity.</div>');
    }//final message
   
   });
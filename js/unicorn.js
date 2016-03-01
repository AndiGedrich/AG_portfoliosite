  console.log("can you read me?")
    x = 0;
    window.onclick = function animateUnicorn(){
      if (document.getElementById("unicorn") != null){
      var unicorn = document.getElementById("unicorn");
      x = x+1;
      if (x==1){
        unicorn.style.backgroundPosition= "-130px -1px";
        unicorn.style.width = "160px";
        unicorn.style.marginLeft = "-1px";
      } else if (x==2) {
        unicorn.style.backgroundPosition= "-290px -1px";
        unicorn.style.width = "165px";
        unicorn.style.marginLeft = "10px";
      } else if (x==3){
        unicorn.style.backgroundPosition= "-442px -1px";
        unicorn.style.width = "158px";
        unicorn.style.marginLeft = "-6px";
      } else if (x==4){
        unicorn.style.backgroundPosition= "-1px -1px";
        unicorn.style.width = "135px";
        unicorn.style.marginLeft = "0px";
        x = 0;
        }
      }
      else {
        return;
    }
    window.setTimeout(animateUnicorn, 200);
  }

  left = 0;
   function moveUnicorn(e){
    if (e.keyCode == 39){
      if (document.getElementById("unicorn") == null) {
        var unicorn = document.getElementById("unicornBack");
        console.log(e.keyCode);
        left += 50;
        unicorn.style.left = left + "px";
        document.getElementById("unicornBack").id = "unicorn";
        x = 0;
      } else {
        var unicorn = document.getElementById("unicorn");
        console.log(e.keyCode);
        left += 50;
        unicorn.style.left = left + "px";
        x = 0;
      }
    }
    if (e.keyCode == 37){
      if (document.getElementById("unicorn") == null){
        var unicorn = document.getElementById("unicornBack");
        console.log(e.keyCode);
        left += -50;
        unicorn.style.left = left + "px";
        animateUnicornBack();
      } else {
        var unicorn = document.getElementById("unicorn");
        console.log(e.keyCode);
        left += 50;
        unicorn.style.left = left + "px";
        unicorn.id = "unicornBack";
        animateUnicornBack();
      }
    }
  }
  //  function startup(){
  //   animateUnicorn();
  // }
  // startup();
  window.onkeydown= moveUnicorn;

  function animateUnicornBack(){
    x = 5;
    if (document.getElementById("unicornBack") != null){
      function a(){
        var unicornBack = document.getElementById("unicornBack");
        x = x+1;
        if (x==6){
          //console.log("animate back x6: " + x)
          unicornBack.style.backgroundPosition= "bottom right";
          unicornBack.style.width = "130px";
          unicornBack.style.marginLeft = "-1px";
        } else if (x==7) {
          //console.log("animate back x7: " + x)
          unicornBack.style.backgroundPosition= "250px 600px";
          unicornBack.style.width = "165px";
          unicornBack.style.marginLeft = "25px";
        } else if (x==8){
          console.log ("animate back x8: " + x)
          unicornBack.style.backgroundPosition= "442px 600px";
          unicornBack.style.width = "158px";
          unicornBack.style.marginLeft = "-6px";
        } else if (x==9){
          console.log("animate back x9: " + x)
          unicornBack.style.backgroundPosition= "1px 600px";
          unicornBack.style.width = "135px";
          unicornBack.style.marginLeft = "0px";
          x = 5;
        }
      }
      //else {
        //return;
      //}
    }
    window.setTimeout(animateUnicornBack, 1000);
  }


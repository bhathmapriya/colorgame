var num=6;
var color=generaterandomcolor(num);
var reset=document.querySelector("#reset");
var easy=document.querySelector("#easybtn");
var hard=document.querySelector("#hardbtn");
var p=document.querySelector("p");
var h2=document.querySelector("h2");
var square=document.getElementsByClassName("square");
var line=document.querySelector("#top");
var message=document.querySelector("#message");
var mode=document.querySelectorAll(".mode");
var clickcolor=color[Math.floor(Math.random()*6)];
//console.log(clickcolor);
line.textContent=clickcolor;
for(var i=0;i<square.length;i++){
    square[i].style.background=color[i];
    square[i].addEventListener("click",function(){
      
        var available=this.style.background;
       // console.log("available:");
        //console.log(available);
        //console.log(clickcolor);
       /*var clickcolor=this.style.background;
       line.textContent=clickcolor;*/
       if(available==clickcolor){
      //  p.style.background=this.style.background;
      
        h2.style.background=this.style.background;
           reset.textContent="play again?"
           message.textContent="Correct!!"
          
           var c=this.style.background;
           for(var j=0;j<square.length;j++){
               square[j].style.background=c;
           }


       }
       else{
        this.style.background="#232323";
        message.textContent="Wrong..";
       // p.style.background="white";
        h2.style.background="steelblue";
       }

    });
}
for(var i=0;i<mode.length;i++){
    mode[i].addEventListener("click",function(){
        //easy
        h2.style.background="steelblue";
        mode[0].classList.remove("btnclr");
        mode[1].classList.remove("btnclr");
        this.classList.add("btnclr");
        if(this.textContent==="Easy"){
            num=3;
        }
        else{
            num=6;
        }
        resett();

    });
    
}

reset.addEventListener("click",function(){
   // h2.style.background:"steelblue";
    //generation of random colors
   //  color=generaterandomcolor(num);
    //setting colors in arrays
    //for(var g=0;g<square.length;g++){
      //  square[g].style.background=color[g];
    //}
    //generate the quiz color 
    //clickcolor=color[Math.floor(Math.random()*num)];
    //line.textContent=clickcolor;
    resett();
    //change the colors of headings
    h2.style.background="steelblue";
  //  p.style.background="white";
  message.textContent=" ";
  reset.textContent="New colors"
   // console.log(message.textContent);


});
/*easy.addEventListener("click",function(){
    h2.style.background="steelblue";
    //p.style.background="white";
   this.classList.add("btnclr");
    hard.classList.remove("btnclr");
     num=3
     color=generaterandomcolor(num);
    clickcolor=color[Math.floor(Math.random()*3)];
    line.textContent=clickcolor;
    //console.log(clickcolor);
    for(var t=0;t<square.length;t++){
        if(color[t])
        {   //console.log(t);
            
            square[t].style.background=color[t];
            //console.log(  square[t].style.background);
        }
        else
       {
        square[t].style.display="none";}
    }
    
    
});
hard.addEventListener("click",function(){
    h2.style.background="steelblue";
    //p.style.background="white";
    this.classList.add("btnclr");
    easy.classList.remove("btnclr");
    num=6
    color=generaterandomcolor(num);
    clickcolor=color[Math.floor(Math.random()*6)];
    line.textContent=clickcolor;
    for(var t=0;t<square.length;t++){
        
            square[t].style.background=color[t];
           // console.log(  square[t].style.background);
           square[t].style.display="block";
       
    }
});*/
function resett(){
    color=generaterandomcolor(num);
    clickcolor=color[Math.floor(Math.random()*num)];
    line.textContent=clickcolor;
    for(var i=0;i<square.length;i++){
        if(color[i]){
            square[i].style.display="block";
            square[i].style.background=color[i];
        }
        else{
            square[i].style.display="none";
        }
       
    }
    //clickcolor=color[Math.floor(Math.random()*num)];
    //line.textContent=clickcolor;
}
function generaterandomcolor(num){
    var array=[];
    
    for(var t=0;t<num;t++){
        array[t]=randompick();
    }
    return array;

}
function randompick(){
    var r=Math.floor(Math.random()*256);
    var g=Math.floor(Math.random()*256);
    var b=Math.floor(Math.random()*256);
    return("rgb("+r+", "+g+", "+b+")");
}
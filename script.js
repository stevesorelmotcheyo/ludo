

let milieu = document.getElementById('milieu');
let cercle1 = document.getElementById("cercle1");
let vert1 = document.createElement('img');
vert1.src="image/vert/vert1.bmp";
// vert1.style.top = 55 + "px";
// vert1.style.left = 55 +"px";
cercle1.appendChild(vert1);


let cercle2 = document.getElementById("cercle2");
let vert2 = document.createElement('img');
vert2.src="image/vert/vert2.bmp";
// vert2.style.top = 55 + "px";
// vert2.style.left=  195+ "px";
cercle2.appendChild(vert2);




let cercle3 = document.getElementById("cercle3");
let vert3 = document.createElement('img');
vert3.src="image/vert/vert3.bmp";
// vert3.style.top = 195 + "px";
// vert3.style.left=  55+ "px";
cercle3.appendChild(vert3);



let cercle4 = document.getElementById("cercle4");
let vert4 = document.createElement('img');
vert4.src="image/vert/vert4.bmp";
// vert4.style.top = 195 + "px";
// vert4.style.left=  195+ "px";
cercle4.appendChild(vert4);

//--------------------------------------------------------------

let cercle5 = document.getElementById("cercle5");
let vert5 = document.createElement('img');
vert5.src="image/jaune/jaune1.bmp";
// vert5.style.top = 55 + "px";
// vert5.style.left = 505 + "px";
cercle5.appendChild(vert5);

let cercle6 = document.getElementById("cercle6");
let vert6 = document.createElement('img');
vert6.src="image/jaune/jaune2.bmp";
// vert6.style.left = 645 + "px";
// vert6.style.top =  55 + "px";

cercle6.appendChild(vert6);

let cercle7 = document.getElementById("cercle7");
let vert7 = document.createElement('img');
vert7.src="image/jaune/jaune3.bmp";
// vert7.style.left = 505 + "px";
// vert7.style.top =  195 + "px";
cercle7.appendChild(vert7);


let cercle8 = document.getElementById("cercle8");
let vert8 = document.createElement('img');
vert8.src="image/jaune/jaune4.bmp";
// vert8.style.left = 645 + "px";
// vert8.style.top =  195 + "px";
cercle8.appendChild(vert8);

//------------------------------------------------------------

let cercle9 = document.getElementById("cercle9");
let vert9 = document.createElement('img');
vert9.src="image/rouge/rouge1.bmp";
// vert9.style.left =55 + "px";
// vert9.style.top = 505+ "px";
cercle9.appendChild(vert9);

let cercle10 = document.getElementById("cercle10");
let vert10 = document.createElement('img');
vert10.src="image/rouge/rouge2.bmp";
// vert10.style.left =195 + "px";
// vert10.style.top = 505+ "px";
cercle10.appendChild(vert10);


let cercle11 = document.getElementById("cercle11");
let vert11 = document.createElement('img');
vert11.src="image/rouge/rouge3.bmp";
// vert11.style.left =55 + "px";
// vert11.style.top = 645+ "px";
cercle11.appendChild(vert11);


let cercle12 = document.getElementById("cercle12");
let vert12 = document.createElement('img');
vert12.src="image/rouge/rouge4.bmp";
// vert12.style.left =195 + "px";
// vert12.style.top = 645+ "px";
cercle12.appendChild(vert12);


//------------------------------------------------------------

let cercle13 = document.getElementById("cercle13");
let vert13 = document.createElement('img');
vert13.src="image/bleu/bleu1.bmp";
// vert13.style.left = 505+"px";
// vert13.style.top = 505+"px";
cercle13.appendChild(vert13);

let cercle14 = document.getElementById("cercle14");
let vert14 = document.createElement('img');
vert14.src="image/bleu/bleu2.bmp";
// vert14.style.left = 645 +"px";
// vert14.style.top = 505  +"px";
cercle14.appendChild(vert14);


let cercle15 = document.getElementById("cercle15");
let vert15 = document.createElement('img');
vert15.src="image/bleu/bleu3.bmp";
// vert15.style.left = 505+"px";
// vert15.style.top = 645+"px";
cercle15.appendChild(vert15);


let cercle16 = document.getElementById("cercle16");
let vert16 = document.createElement('img');
vert16.src="image/bleu/bleu4.bmp";
// vert16.style.left = 645+"px";
// vert16.style.top = 645+"px";
cercle16.appendChild(vert16);


/*
  code du de

*/ 

const rand = document.getElementById('de');
let dice=0;
let dice2=0;

function lancer()
{
 
   dice = Math.floor(Math.random() * 6) + 1;
   rand.classList.add('anime');
   rand.textContent = dice;
   setTimeout(() => {
     rand.classList.remove('anime');
   }, 600);    
}

//----------------------------------------


 let chemin_vert = [
     
              { x:50, y: 300},{ x:100, y: 300},{ x:150, y: 300},{ x:200, y: 300},{ x:250, y: 300},
              { x:300, y: 250},{ x:300, y: 200},{ x:300, y: 150},{ x:300, y: 100},{ x:300, y: 50},{ x:300, y: 0},
              { x:350, y: 0},{ x:400, y: 0},
              { x:400, y: 50},{ x:400, y: 100},{ x:400, y: 150},{ x:400, y: 200},{ x:400, y: 250},
              { x:450, y: 300},{ x:500, y: 300},  { x:550, y: 300},  { x:600, y: 300},  { x:650, y: 300},  { x:700, y: 300},
              { x:700, y: 350}, { x:700, y: 400},
              { x:650, y: 400},{ x:600, y: 400},{ x:550, y: 400},{ x:500, y: 400},{ x:450, y: 400}
             ,{ x:400, y: 450} ,{ x:400, y: 500},{ x:400, y: 550},{ x:400, y: 600},{ x:400, y: 650},{ x:400, y: 700},
              { x:350, y: 700},{ x:300, y: 700},
              { x:300, y: 650},{ x:300, y: 600},{ x:300, y: 550},{ x:300, y: 500},{ x:300, y: 450},
              { x:250, y: 400},  { x:200, y: 400},  { x:150, y: 400},  { x:100, y: 400},  { x:50, y: 400},  { x:0, y: 400},
              { x:0, y: 350},  { x:50, y: 350},  { x:100, y: 350},   { x:150, y: 350},  { x:200, y: 350}, { x:250, y: 350},
              { x:300, y: 350}

  ]; 

  let chemin_jaune = [
    
  //  { x:400, y: 0},

    { x:400, y: 50},
    { x:400, y: 100},{ x:400, y: 150},{ x:400, y: 200},{ x:400, y: 250},
    { x:450, y: 300},{ x:500, y: 300},  { x:550, y: 300},  { x:600, y: 300},  { x:650, y: 300},  { x:700, y: 300},
    { x:700, y: 350}, { x:700, y: 400},
    { x:650, y: 400},{ x:600, y: 400},{ x:550, y: 400},{ x:500, y: 400},{ x:450, y: 400}
   ,{ x:400, y: 450} ,{ x:400, y: 500},{ x:400, y: 550},{ x:400, y: 600},{ x:400, y: 650},{ x:400, y: 700},
    { x:350, y: 700},{ x:300, y: 700},
    { x:300, y: 650},{ x:300, y: 600},{ x:300, y: 550},{ x:300, y: 500},{ x:300, y: 450},
    { x:250, y: 400},  { x:200, y: 400},  { x:150, y: 400},  { x:100, y: 400},  { x:50, y: 400},  { x:0, y: 400},
    { x:0, y: 350},{x:0 , y:300},
    { x:50, y: 300},{ x:100, y: 300},{ x:150, y: 300},{ x:200, y: 300},{ x:250, y: 300},
    { x:300, y: 250},{ x:300, y: 200},{ x:300, y: 150},{ x:300, y: 100},{ x:300, y: 50},{ x:300, y: 0},
    { x:350, y: 0}, 
    { x:350, y: 50},{ x:350, y: 100}, { x:350, y: 200},  { x:350, y: 250}, { x:350, y: 300}
]; 


let chemin_bleu = [
  
    { x:650, y: 400},{ x:600, y: 400},{ x:550, y: 400},{ x:500, y: 400},{ x:450, y: 400}
   ,{ x:400, y: 450} ,{ x:400, y: 500},{ x:400, y: 550},{ x:400, y: 600},{ x:400, y: 650},{ x:400, y: 700},
    { x:350, y: 700},{ x:300, y: 700},
    { x:300, y: 650},{ x:300, y: 600},{ x:300, y: 550},{ x:300, y: 500},{ x:300, y: 450},
    { x:250, y: 400},  { x:200, y: 400},  { x:150, y: 400},  { x:100, y: 400},  { x:50, y: 400},  { x:0, y: 400},
    { x:0, y: 350},{x:0 , y:300},
    { x:50, y: 300},{ x:100, y: 300},{ x:150, y: 300},{ x:200, y: 300},{ x:250, y: 300},
    { x:300, y: 250},{ x:300, y: 200},{ x:300, y: 150},{ x:300, y: 100},{ x:300, y: 50},{ x:300, y: 0},
    { x:350, y: 0},    
   { x:400, y: 0},
    { x:400, y: 50},
    { x:400, y: 100},{ x:400, y: 150},{ x:400, y: 200},{ x:400, y: 250},
    { x:450, y: 300},{ x:500, y: 300},  { x:550, y: 300},  { x:600, y: 300},  { x:650, y: 300},  { x:700, y: 300},
    { x:700, y: 350},
    { x:650, y: 350},  { x:600, y: 350},  { x:550, y: 350},  { x:500, y: 350},  { x:450, y: 350},  { x:400, y: 350},
    
]; 


let chemin_rouge = [
  

  { x:300, y: 650},{ x:300, y: 600},{ x:300, y: 550},{ x:300, y: 500},{ x:300, y: 450},
  { x:250, y: 400},  { x:200, y: 400},  { x:150, y: 400},  { x:100, y: 400},  { x:50, y: 400},  { x:0, y: 400},
  { x:0, y: 350},{x:0 , y:300},
  { x:50, y: 300},{ x:100, y: 300},{ x:150, y: 300},{ x:200, y: 300},{ x:250, y: 300},
  { x:300, y: 250},{ x:300, y: 200},{ x:300, y: 150},{ x:300, y: 100},{ x:300, y: 50},{ x:300, y: 0},
  { x:350, y: 0},    
 { x:400, y: 0},
  { x:400, y: 50},
  { x:400, y: 100},{ x:400, y: 150},{ x:400, y: 200},{ x:400, y: 250},
  { x:450, y: 300},{ x:500, y: 300},  { x:550, y: 300},  { x:600, y: 300},  { x:650, y: 300},  { x:700, y: 300},
  { x:700, y: 350},

  { x:650, y: 400},{ x:600, y: 400},{ x:550, y: 400},{ x:500, y: 400},{ x:450, y: 400}
 ,{ x:400, y: 450} ,{ x:400, y: 500},{ x:400, y: 550},{ x:400, y: 600},{ x:400, y: 650},{ x:400, y: 700},
  { x:350, y: 700},

  { x:350, y: 650}, { x:350, y: 600}, { x:350, y: 550}, { x:350, y: 500},  { x:350, y: 450}, { x:350, y: 400},

]; 

   

  // let positionx = chemin_bleu[0].x;
  // let positiony = chemin_bleu[0].y;

  let positionsecondairex1 = 0 ;
  let positionsecondairey1 = 0 ;
  let positionsecondairex2 = 0 ;
  let positionsecondairey2 = 0 ;
  let positionsecondairex3 = 0 ;
  let positionsecondairey3 = 0 ;
  let positionsecondairex4 = 0 ;
  let positionsecondairey4 = 0 ;


  let positionsecondairex5 = 0 ;
  let positionsecondairey5 = 0 ;
  let positionsecondairex6 = 0 ;
  let positionsecondairey6 = 0 ;
  let positionsecondairex7 = 0 ;
  let positionsecondairey7 = 0 ;
  let positionsecondairex8 = 0 ;
  let positionsecondairey8 = 0 ;


  let positionsecondairex9  = 0 ;
  let positionsecondairey9  = 0 ;
  let positionsecondairex10 = 0 ;
  let positionsecondairey10 = 0 ;
  let positionsecondairex11 = 0 ;
  let positionsecondairey11 = 0 ;
  let positionsecondairex12 = 0 ;
  let positionsecondairey12 = 0 ;


  let positionsecondairex13 = 0 ;
  let positionsecondairey13 = 0 ;
  let positionsecondairex14 = 0 ;
  let positionsecondairey14 = 0 ;
  let positionsecondairex15 = 0 ;
  let positionsecondairey15 = 0 ;
  let positionsecondairex16 = 0 ;
  let positionsecondairey16 = 0 ;



 

   function deplacement_vert(x,y,piont,position_x,position_y)
   {
   
    piont.onclick = ()=>{

    let nombrey = parseInt(piont.style.top);
    let nombrex = parseInt(piont.style.left);
    let nombrex2 = parseInt(piont.style.left);
    let nombrey2 = parseInt(piont.style.top);
      if(dice == 6 &&  nombrey == position_y  && nombrex == position_x)
        {
              piont.style.top = chemin_vert[0].y + "px";
              piont.style.left = chemin_vert[0].x + "px";
        }
      else if(nombrex2!=position_x && nombrey2 !=position_y)
          {
             let index = dice + x;
             let indey = dice + y;
             piont.style.top = chemin_vert[indey].y + "px";
             piont.style.left = chemin_vert[index].x + "px";
             x = index;
             y = indey ;
          }
          if(dice!=6)
            {
              
            }
    }
  }

  function deplacement_jaune(x,y,piont,position_x,position_y)
  {
  
   piont.onclick = ()=>{

   let nombrey = parseInt(piont.style.top);
   let nombrex = parseInt(piont.style.left);
   let nombrex2 = parseInt(piont.style.left);
   let nombrey2 = parseInt(piont.style.top);
     if(dice == 6 &&  nombrey == position_y  && nombrex == position_x)
       {
             piont.style.top = chemin_jaune[0].y + "px";
             piont.style.left = chemin_jaune[0].x + "px";
       }
     else if(nombrex2!=position_x && nombrey2 !=position_y && dice!=6)
         {
            let index = dice + x;
            let indey = dice + y;
            piont.style.top = chemin_jaune[indey].y + "px";
            piont.style.left = chemin_jaune[index].x + "px";
            x = index;
            y = indey;
         }
      else if(nombrex2!=position_x && nombrey2 !=position_y && dice==6)
          {
             let index = dice + x;
             let indey = dice + y;
             piont.style.top = chemin_jaune[indey].y + "px";
             piont.style.left = chemin_jaune[index].x + "px";
             x = index;
             y = indey;
             i=i;
          }
   }
 }
 
 function deplacement_rouge(x,y,piont,position_x,position_y)
 {
 
  piont.onclick = ()=>{

  let nombrey = parseInt(piont.style.top);
  let nombrex = parseInt(piont.style.left);
  let nombrex2 = parseInt(piont.style.left);
  let nombrey2 = parseInt(piont.style.top);
    if(dice == 6 &&  nombrey == position_y  && nombrex == position_x)
      {
            piont.style.top = chemin_rouge[0].y + "px";
            piont.style.left = chemin_rouge[0].x + "px";
      }
    else if(nombrex2!=position_x && nombrey2 !=position_y)
        {
           let index = dice + x;
           let indey = dice + y;
           piont.style.top = chemin_rouge[indey].y + "px";
           piont.style.left = chemin_rouge[index].x + "px";
           x = index;
           y = indey ;
        }
      
  }
}


function deplacement_bleu(x,y,piont,position_x,position_y)
{

 piont.onclick = ()=>{

 let nombrey = parseInt(piont.style.top);
 let nombrex = parseInt(piont.style.left);
 let nombrex2 = parseInt(piont.style.left);
 let nombrey2 = parseInt(piont.style.top);
   if(dice == 6 &&  nombrey == position_y  && nombrex == position_x)
     {
           piont.style.top = chemin_bleu[0].y + "px";
           piont.style.left = chemin_bleu[0].x + "px";
     }
   else if(nombrex2!=position_x && nombrey2 !=position_y)
       {
          let index = dice + x;
          let indey = dice + y;
          piont.style.top = chemin_bleu[indey].y + "px";
          piont.style.left = chemin_bleu[index].x + "px";
          x = index;
          y = indey ;
       }
     
 }
}


// alert(
//   `La longeur du tableau rouge est ${chemin_rouge.length-1}\n` + 
//   `La longeur du tableau bleu est ${chemin_bleu.length-1}\n`+
//   `La longeur du tableau jaune est ${chemin_jaune.length-1}\n`+
//   `La longeur du tableau vert est ${chemin_vert.length-1}\n`
// );



deplacement_vert(positionsecondairex1,positionsecondairey1,vert1,55,55);
deplacement_vert(positionsecondairex2,positionsecondairey2,vert2,195,55);
deplacement_vert(positionsecondairex3,positionsecondairey3,vert3,55,195);
deplacement_vert(positionsecondairex4,positionsecondairey4,vert4,195,195);


deplacement_jaune(positionsecondairex5,positionsecondairey5,vert5,505,55);
deplacement_jaune(positionsecondairex6,positionsecondairey6,vert6,645,55);
deplacement_jaune(positionsecondairex7,positionsecondairey7,vert7,505,195);
deplacement_jaune(positionsecondairex8,positionsecondairey8,vert8,645,195);


deplacement_rouge(positionsecondairex9,positionsecondairey9,vert9,55,505);
deplacement_rouge(positionsecondairex10,positionsecondairey10,vert10,195,505);
deplacement_rouge(positionsecondairex11,positionsecondairey11,vert11,55,645);
deplacement_rouge(positionsecondairex12,positionsecondairey12,vert12,195,645);     


deplacement_bleu(positionsecondairex13,positionsecondairey13,vert13,505,505);
deplacement_bleu(positionsecondairex14,positionsecondairey14,vert14,645,505);
deplacement_bleu(positionsecondairex15,positionsecondairey15,vert15,505,645);
deplacement_bleu(positionsecondairex16,positionsecondairey16,vert16,645,645);   

rand.addEventListener('click',lancer);

      let i = 1 ;

      let couleur = ['green','yellow','red','blue'];
  

      function deplacement_ordre()
      {
          if(i==1)
          {
              milieu.style.backgroundColor=couleur[0];
              if(dice==6)
              {
                 
              }
          }

      }

      deplacement_ordre();
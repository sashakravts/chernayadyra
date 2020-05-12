(function() {
    'use strict';
 
    var w=document.body.offsetWidth,
    h=document.body.offsetHeight,
    rd=document.getElementsByTagName('div'),
    mw=800,mh=400,c;
 
 if((w>mw)&&(h>mh)) {
 for(c=0;c<rd.length;c++) {
 if(rd[c].className=='random') {
    rd[c].style.position='absolute';
    var xCoord=Math.floor(Math.random()*w);
    var yCoord=Math.floor(Math.random()*h);
 if(xCoord>=w-rd[c].offsetWidth-10){
    xCoord=w-rd[c].offsetWidth-10;
  }
 if(xCoord<=10){
    xCoord=10;
  }
 if(yCoord>=h-rd[c].offsetHeight-10){
    yCoord=h-rd[c].offsetHeight-10;
  }
 if(yCoord<=10){
    yCoord=10;
  }
    rd[c].style.left=xCoord+'px';
    rd[c].style.top=yCoord+'px';  
    } 
   }
  }
 })();
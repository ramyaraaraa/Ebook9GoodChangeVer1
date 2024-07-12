// Get the video element
var audio;
var emptyAudio;

const audio1 = document.getElementById('title');
const audio2 = document.getElementById('apg34');
const audio3 = document.getElementById('apg56');
const audio4 = document.getElementById('apg78');
const audio5 = document.getElementById('apg910');
const audio6 = document.getElementById('apg1112');
const audio7 = document.getElementById('apg1314');
const audio8 = document.getElementById('apg1516');
const audio9 = document.getElementById('apg1718');
const audio10 = document.getElementById('apg1920');
const audio11 = document.getElementById('apg2122');
const audio12 = document.getElementById('apg2324');
const audio13 = document.getElementById('apg2526');
const audio14 = document.getElementById('apg2728');

var nextPage;
var prevPage;
const img1 = document.getElementById('page1');
const img2 = document.getElementById('page2');
const img3 = document.getElementById('page3');
const img4 = document.getElementById('page4');
const img5 = document.getElementById('page5');
const img6 = document.getElementById('page6');
const img7 = document.getElementById('page7');
const img8 = document.getElementById('page8');
const img9 = document.getElementById('page9');
const img10 = document.getElementById('page10');
const img11 = document.getElementById('page11');
const img12 = document.getElementById('page12');
const img13 = document.getElementById('page13');
const img14 = document.getElementById('page14');
const img15 = document.getElementById('page15');
const img16 = document.getElementById('page16');
const img17 = document.getElementById('page17');

const vid1 = document.getElementById('page1vid');
const vid2 = document.getElementById('page2vid');
const vid3 = document.getElementById('page3vid');
const vid4 = document.getElementById('page4vid');
const vid5 = document.getElementById('page5vid');


const timeKeeper = document.getElementById('playtime');

var currentPage = 1;

var text = document.getElementById('textbox');

var sen1;
var sen2;
var sen3;
var sen4;
var sen5;
var sen6;
var sen7;
var sen8;
var sen9;
var sen10;
var sen11;
var sen12;
var sen13;
var sen14;
var sen15;
var sen16;
var sen17;
var sen18;
var sen19;
var sen20;
var sen21;
var sen22;
var sen23;
var sen24;
var sen25;
var sen26;
var sen27;
var sen28;
var sen29;
var sen30;

var stnEmpty;

var stn1 = document.getElementById('sentence1');
var stn1a = document.getElementById('sentence1a');
var stn2 = document.getElementById('sentence2');
var stn2a = document.getElementById('sentence2a');
var stn2b = document.getElementById('sentence2b');
var stn3 = document.getElementById('sentence3');
var stn3a = document.getElementById('sentence3a');
var stn3b = document.getElementById('sentence3b');
var stn3c = document.getElementById('sentence3c');
var stn4 = document.getElementById('sentence4');
var stn4a = document.getElementById('sentence4a');
var stn5 = document.getElementById('sentence5');
var stn5a = document.getElementById('sentence5a');
var stn5b = document.getElementById('sentence5b');
var stn6 = document.getElementById('sentence6');
var stn6a = document.getElementById('sentence6a');
var stn7 = document.getElementById('sentence7');
var stn7a = document.getElementById('sentence7a');
var stn7b = document.getElementById('sentence7b');
var stn8 = document.getElementById('sentence8');
var stn8a = document.getElementById('sentence8a');
var stn8b = document.getElementById('sentence8b');
var stn8c = document.getElementById('sentence8c');
var stn8d = document.getElementById('sentence8d');
var stn9 = document.getElementById('sentence9');
var stn9a = document.getElementById('sentence9a');
var stn9b = document.getElementById('sentence9b');


var stn10 = document.getElementById('sentence10');
var stn10a = document.getElementById('sentence10a');
var stn11 = document.getElementById('sentence11');
var stn11a = document.getElementById('sentence11a');
var stn12 = document.getElementById('sentence12');
var stn12a = document.getElementById('sentence12a');
var stn12b = document.getElementById('sentence12b');
var stn12c = document.getElementById('sentence12c');
var stn13 = document.getElementById('sentence13');
var stn13a = document.getElementById('sentence13a');
var stn14 = document.getElementById('sentence14');
var stn14a = document.getElementById('sentence14a');
var stn15 = document.getElementById('sentence15');
var stn15a = document.getElementById('sentence15a');
var stn15b = document.getElementById('sentence15b');
var stn16 = document.getElementById('sentence16');
var stn16a = document.getElementById('sentence16a');
var stn17 = document.getElementById('sentence17');
var stn17a = document.getElementById('sentence17a');
var stn18 = document.getElementById('sentence18');
var stn18a = document.getElementById('sentence18a');
var stn19 = document.getElementById('sentence19');
var stn20 = document.getElementById('sentence20');
var stn20a = document.getElementById('sentence20a');
var stn21 = document.getElementById('sentence21');
var stn21a = document.getElementById('sentence21a');
var stn22 = document.getElementById('sentence22');
var stn22a = document.getElementById('sentence22a');
var stn22b = document.getElementById('sentence22b');
var stn22c = document.getElementById('sentence22c');


var stn23 = document.getElementById('sentence23');
var stn23a = document.getElementById('sentence23a');
var stn23b = document.getElementById('sentence23b');
var stn23c = document.getElementById('sentence23c');
var stn23d = document.getElementById('sentence23d');
var stn23e = document.getElementById('sentence23e');
var stn24 = document.getElementById('sentence24');
var stn24a = document.getElementById('sentence24a');
var stn24b = document.getElementById('sentence24b');
var stn24c = document.getElementById('sentence24c');
var stn24d = document.getElementById('sentence24d');
var stn25 = document.getElementById('sentence25');
var stn25a = document.getElementById('sentence25a');
var stn25b = document.getElementById('sentence25b');
var stn26 = document.getElementById('sentence26');
var stn26a = document.getElementById('sentence26a');
var stn26b = document.getElementById('sentence26b');
var stn27 = document.getElementById('sentence27');
var stn27a = document.getElementById('sentence27a');
var stn27b = document.getElementById('sentence27b');
var stn27c = document.getElementById('sentence27c');
var stn28 = document.getElementById('sentence28');
var stn28a = document.getElementById('sentence28a');
var stn28b = document.getElementById('sentence28b');
var stn29 = document.getElementById('sentence29');
var stn29a = document.getElementById('sentence29a');
var stn29b = document.getElementById('sentence29b');
var stn29c = document.getElementById('sentence29c');
var stn30 = document.getElementById('sentence30');
var stn30a = document.getElementById('sentence30a');
var stn31 = document.getElementById('sentence31');
var stn32 = document.getElementById('sentence32');
var stn33 = document.getElementById('sentence33');
var stn34 = document.getElementById('sentence34');
var stn35 = document.getElementById('sentence35');
var stn36 = document.getElementById('sentence36');
var stn36a = document.getElementById('sentence36a');
var stn37 = document.getElementById('sentence37');
var stn37a = document.getElementById('sentence37a');
var stn38 = document.getElementById('sentence38');
var stn38a = document.getElementById('sentence38a');
var stn39 = document.getElementById('sentence39');
var stn39a = document.getElementById('sentence39a');
var stn39b = document.getElementById('sentence39b');
var stn39c = document.getElementById('sentence39c');
var stn40 = document.getElementById('sentence40');
var stn40a = document.getElementById('sentence40a');
var stn40b = document.getElementById('sentence40b');
var stn41 = document.getElementById('sentence41');
var stn41a = document.getElementById('sentence41a');
var stn42 = document.getElementById('sentence42');
var stn42a = document.getElementById('sentence42a');
var stn42b = document.getElementById('sentence42b');
var stn43 = document.getElementById('sentence43');
var stn43a = document.getElementById('sentence43a');


var index = 0;
var currentTimeStamps = [];
var timestamp1 = [0,2,4,6.5,8.5,13.5,16.5,17.5,23,25,28,32,34,36,38,39.5,42.5,45.5,48.5,51.5,52.5,55,57.5,60,63,65,66];
var timestamp2 = [0,3.5,6,8,10,11.5,14,17,22,23.5,26,29,33.5,36,38,40,42,45.5,50,54,56,58.5,62.5,64.5,67,69,71.5,73.5,76,78];
var timestamp3 = [0,4,6.5,9,10.5,13,16,19.5,20,22,24,25,27.5,28.5,31.5,33.5,34.5,37,39.5,43,46.5,49.5,52,53.5,56.5,58.9,59.5,62,65,68];
var timestamp4 = [0,3.5,5.5,7.5,8,11,12,14,15.5,17.5,18.5,21,22,24,25,27,29.5,31,33,34.5,38,41,43.7,46,48];

var textshow1 = ["sen1","sen1a","sen1b","sen1c","sen1d","sen2","sen3","sen4","sen5","sen6","sen7","sen8"]


function GoPrev(){
	document.getElementById("myModal").style.display = "none";
	document.getElementById("myModal2").style.display = "none";
	document.getElementById("myModal3").style.display = "none";
	document.getElementById("myModal4").style.display = "none";
	//alert(currentPage)
  currentPage--;
  if(audio != emptyAudio){
    audio.pause();
    audio.currentTime = 0;
  }
  timeSlider.value = 0;
  if(currentPage < 1){
    currentPage = 1;
  }
  const a = CheckPageItem(currentPage);
  a.style.visibility = 'visible';
  const b = CheckPageItem(currentPage+1);
  b.style.visibility = 'hidden'
  ResetVideoVisibility();
  UpdatePage(currentPage);
}

function GoNext(){
	document.getElementById("myModal").style.display = "none";
	document.getElementById("myModal2").style.display = "none";
	document.getElementById("myModal3").style.display = "none";
	document.getElementById("myModal4").style.display = "none";
	
  //currentPage++;
  if(audio != emptyAudio){
    audio.pause();
    audio.currentTime = 0;
  }
  timeSlider.value = 0;
  if(currentPage == 8){
    currentPage = 8;
  }else{
	    currentPage++;
  }
	//alert(currentPage);
  const a = CheckPageItem(currentPage);
  a.style.visibility = 'visible';
  const b = CheckPageItem(currentPage-1);
  b.style.visibility = 'hidden'
  ResetVideoVisibility();
  UpdatePage(currentPage);
}

function Replay(){
  timeSlider.value = 0;
  if(audio != emptyAudio){
      audio.currentTime = 0;
      audio.play();
  }
}

function UpdatePage(index){
  switch(index){
    case 1:
      audio = emptyAudio;
		    document.getElementById('page1vid').style.visibility = 'visible';
		   vid1.style.visibility = 'visible';
		   document.getElementById('page1vid').play();
      break;
    case 2:
		   document.getElementById('page1vid').style.visibility = 'hidden';
		    document.getElementById('page2vid').style.visibility = 'hidden';
		    document.getElementById('page3vid').style.visibility = 'hidden';
		    document.getElementById('page4vid').style.visibility = 'hidden';
		   document.getElementById('page5vid').style.visibility = 'hidden';
      audio = audio1;
      UpdateSlider();
      ResetParagraph();
	  break;
    case 3:
		  	document.getElementById('page1vid').style.visibility = 'hidden';
		    document.getElementById('page3vid').style.visibility = 'hidden';
		    document.getElementById('page4vid').style.visibility = 'hidden';
		    document.getElementById('page5vid').style.visibility = 'hidden';
      audio = audio2;
      UpdateSlider();
      ResetParagraph();
	   vid2.style.visibility = 'visible';
	   document.getElementById('page2vid').play();
      document.getElementById('Page3').style.visibility = 'visible';
      sen1 = stn1;
	  sen2 = stn1a;
	  sen3 = stn2;
	  sen4 = stn2a;
	  sen5 = stn2b;
      sen6 = stn3;
      sen7 = stn3a;
	  sen8 = stn3b;
      sen9 = stn3c;
	  sen10 = stn4;
      sen11 = stn4a;
      sen12 = stn5;
      sen13 = stn5a;
      sen14 = stn5b;
      sen15 = stn6;
      sen16 = stn6a;
      sen17 = stn7;
      sen18 = stn7a;
      sen19 = stn7b;
	  sen20 = stn8;
	  sen21 = stn8a;
	  sen22 = stn8b;
	  sen23 = stn8c;
	  sen24 = stn8d;
	  sen25 = stn9;
	  sen26 = stn9a;
	  sen27 = stn9b;
	  sen28 = stnEmpty;
	  sen29 = stnEmpty;
	  sen30 = stnEmpty;
	  
      currentTimeStamps = timestamp1;
      break;
    case 4:
		  document.getElementById('page1vid').style.visibility = 'hidden';
		    document.getElementById('page2vid').style.visibility = 'hidden';
		    document.getElementById('page4vid').style.visibility = 'hidden';
		    document.getElementById('page5vid').style.visibility = 'hidden';
      audio = audio3;
      UpdateSlider();
      ResetParagraph();
		   vid3.style.visibility = 'visible';
	   document.getElementById('page3vid').play();
      document.getElementById('Page4').style.visibility = 'visible';
      sen1 = stn10;
	  sen2 = stn10a;
	  sen3 = stn11;
	  sen4 = stn11a;
	  sen5 = stn12;
	  sen6 = stn12a;
	  sen7 = stn12b;
      sen8 = stn12c;
      sen9 = stn13;
      sen10 = stn13a;
      sen11 = stn14;
      sen12 = stn14a;
      sen13 = stn15;
      sen14 = stn15a;
      sen15 = stn15b;
      sen16 = stn16;
      sen17 = stn16a;
      sen18 = stn17;
      sen19 = stn17a;
      sen20 = stn18;
      sen21 = stn18a;
	  sen22 = stn19;
	  sen23 = stn20;
	  sen24 = stn20a;
	  sen25 = stn21;
	  sen26 = stn21a;
	  sen27 = stn22;
	  sen28 = stn22a;
	  sen29 = stn22b;
	  sen30 = stn22c;
	  
      currentTimeStamps = timestamp2;
      break;
    case 5:
		   document.getElementById('page1vid').style.visibility = 'hidden';
		    document.getElementById('page2vid').style.visibility = 'hidden';
		    document.getElementById('page3vid').style.visibility = 'hidden';
		    document.getElementById('page5vid').style.visibility = 'hidden';
      audio = audio4;
      UpdateSlider();
      ResetParagraph();
    //  vid3.style.visibility = 'visible';
		  vid4.style.visibility = 'visible';
	   document.getElementById('page4vid').play();
      document.getElementById('Page5').style.visibility = 'visible';
      sen1 = stn23;
      sen2 = stn23a;
      sen3 = stn23b;
      sen4 = stn23c;
      sen5 = stn23d;
      sen6 = stn23e;
      sen7 = stn24;
      sen8 = stn24a;
      sen9 = stn24b;
      sen10 = stn24c;
      sen11 = stn24d;
      sen12 = stn25;
      sen13 = stn25a;
      sen14 = stn25b;
      sen15 = stn26;
	  sen16 = stn26a;
	  sen17 = stn26b;
	  sen18 = stn27;
	  sen19 = stn27a;
	  sen20 = stn27b;
	  sen21 = stn27c;
	  sen22 = stn28;
	  sen23 = stn28a;
	  sen24 = stn28b;
	  sen25 = stn29;
	  sen26 = stn29a;
	  sen27 = stn29b;
	  sen28 = stn29c;
	  sen29 = stn30;
	  sen30 = stn30a;
	  
      currentTimeStamps = timestamp3;
      break;
    case 6:
		  document.getElementById('page1vid').style.visibility = 'hidden';
		    document.getElementById('page2vid').style.visibility = 'hidden';
		    document.getElementById('page3vid').style.visibility = 'hidden';
		    document.getElementById('page5vid').style.visibility = 'hidden';
      audio = audio5;
      UpdateSlider();
      ResetParagraph();
		  vid5.style.visibility = 'visible';
	   document.getElementById('page5vid').play();
      document.getElementById('Page6').style.visibility = 'visible';
      sen1 = stn31;
      sen2 = stn32;
      sen3 = stn33;
      sen4 = stn34;
      sen5 = stn35;
      sen6 = stn36;
      sen7 = stn36a;
      sen8 = stn37;
      sen9 = stn37a;
      sen10 = stn38;
      sen11 = stn38a;
      sen12 = stn39;
      sen13 = stn39a;
      sen14 = stn39b;
      sen15 = stn39c;
	  sen16 = stn40;
	  sen17 = stn40a;
	  sen18 = stn40b;
	  sen19 = stn41;
	  sen20 = stn41a;
	  sen21 = stn42;
	  sen22 = stn42a;
	  sen23 = stn42b;
	  sen24 = stn43;
	  sen25 = stn43a;
	  sen26 = stnEmpty;
	  sen27 = stnEmpty;
	  sen28 = stnEmpty;
	  sen29 = stnEmpty;
	  sen30 = stnEmpty;
	  
      currentTimeStamps = timestamp4;
      break;
    case 7:
		  document.getElementById('page1vid').style.visibility = 'hidden';
		    document.getElementById('page2vid').style.visibility = 'hidden';
		    document.getElementById('page3vid').style.visibility = 'hidden';
		   document.getElementById('page4vid').style.visibility = 'hidden';
		    document.getElementById('page5vid').style.visibility = 'hidden';
      audio = emptyAudio;
      ResetParagraph();
      break;
    case 8:
      audio = emptyAudio;
	  ResetParagraph();
      break;
    default:
  }
  if(audio != emptyAudio){
    audio.play();
  }
}

function PlayAudio() {

  switch(currentPage){
    case 2:
      audio.play();
      break;
    case 3:
      audio.play();
      break;
    case 4:
      audio.play();
      break;
    case 5:
      audio.play();
      break;
    case 6:
      audio.play();
      break;
    default:
      audio = emptyAudio;
      // code block
  }
}

function PauseAudio() {
  switch(currentPage){
    case 2:
      audio.pause();
      break;
    case 3:
      audio.pause();
      break;
    case 4:
      audio.pause();
      break;
    case 5:
      audio.pause();
      break;
    case 6:
      audio.pause();
      break;
    default:
      audio = emptyAudio;
      // code block
  }
}

function CheckTime(time){
  if(currentTimeStamps.length != 0){
    currentTimeStamps.forEach((item, i) => {
      if(time >= currentTimeStamps[i]){
        index = i;
      }
    });
    ShowSelection(index);
  }
}

function ShowSelection(index){
  switch(index) {
    case 0:
      ResetColour();
      sen1.style.color = 'red';
      break;
    case 1:
      ResetColour();
      sen2.style.color = 'red';
      break;
    case 2:
      ResetColour();
      sen3.style.color = 'red';
      break;
    case 3:
      ResetColour();
      sen4.style.color = 'red';
      break;
    case 4:
      ResetColour();
      sen5.style.color = 'red';
      break;
    case 5:
      ResetColour();
      sen6.style.color = 'red';
      break;
    case 6:
      ResetColour();
      sen7.style.color = 'red';
      break;
    case 7:
      ResetColour();
      sen8.style.color = 'red';
      break;
    case 8:
      ResetColour();
      sen9.style.color = 'red';
      break;
    case 9:
      ResetColour();
      sen10.style.color = 'red';
      break;
    case 10:
      ResetColour();
      sen11.style.color = 'red';
      break;
    case 11:
      ResetColour();
      sen12.style.color = 'red';
      break;
    case 12:
      ResetColour();
      sen13.style.color = 'red';
      break;
    case 13:
      ResetColour();
      sen14.style.color = 'red';
      break;
    case 14:
      ResetColour();
      sen15.style.color = 'red';
      break; 
	case 15:
      ResetColour();
      sen16.style.color = 'red';
      break;  
	case 16:
      ResetColour();
      sen17.style.color = 'red';
      break;  
	case 17:
      ResetColour();
      sen18.style.color = 'red';
      break;  
	case 18:
      ResetColour();
      sen19.style.color = 'red';
      break;
	case 19:
      ResetColour();
      sen20.style.color = 'red';
      break;
	case 20:
      ResetColour();
      sen21.style.color = 'red';
      break;
	case 21:
      ResetColour();
      sen22.style.color = 'red';
      break;
	case 22:
      ResetColour();
      sen23.style.color = 'red';
      break;
	case 23:
      ResetColour();
      sen24.style.color = 'red';
      break;
	case 24:
      ResetColour();
      sen25.style.color = 'red';
      break;
	case 25:
      ResetColour();
      sen26.style.color = 'red';
      break;
	case 26:
      ResetColour();
      sen27.style.color = 'red';
      break;
	case 27:
      ResetColour();
      sen28.style.color = 'red';
      break;
	case 28:
      ResetColour();
      sen29.style.color = 'red';
      break;
	case 29:
      ResetColour();
      sen30.style.color = 'red';
      break;  
	 
    default:
      // code block
  }
}

function ResetColour(){
  if(sen1 != stnEmpty){sen1.style.color = 'black';}
  if(sen2 != stnEmpty){sen2.style.color = 'black';}
  if(sen3 != stnEmpty){sen3.style.color = 'black';}
  if(sen4 != stnEmpty){sen4.style.color = 'black';}
  if(sen5 != stnEmpty){sen5.style.color = 'black';}
  if(sen6 != stnEmpty){sen6.style.color = 'black';}
  if(sen7 != stnEmpty){sen7.style.color = 'black';}
  if(sen8 != stnEmpty){sen8.style.color = 'black';}
  if(sen9 != stnEmpty){sen9.style.color = 'black';}
  if(sen10 != stnEmpty){sen10.style.color = 'black';}
  if(sen11 != stnEmpty){sen11.style.color = 'black';}
  if(sen12 != stnEmpty){sen12.style.color = 'black';}
  if(sen13 != stnEmpty){sen13.style.color = 'black';}
  if(sen14 != stnEmpty){sen14.style.color = 'black';}
  if(sen15 != stnEmpty){sen15.style.color = 'black';}
  if(sen16 != stnEmpty){sen16.style.color = 'black';}
  if(sen17 != stnEmpty){sen17.style.color = 'black';}
  if(sen18 != stnEmpty){sen18.style.color = 'black';}
  if(sen19 != stnEmpty){sen19.style.color = 'black';}
  if(sen20 != stnEmpty){sen20.style.color = 'black';}
  if(sen21 != stnEmpty){sen21.style.color = 'black';}
  if(sen22 != stnEmpty){sen22.style.color = 'black';}
  if(sen23 != stnEmpty){sen23.style.color = 'black';}
  if(sen24 != stnEmpty){sen24.style.color = 'black';}
  if(sen25 != stnEmpty){sen25.style.color = 'black';}
  if(sen26 != stnEmpty){sen26.style.color = 'black';}
  if(sen27 != stnEmpty){sen27.style.color = 'black';}
  if(sen28 != stnEmpty){sen28.style.color = 'black';}
  if(sen29 != stnEmpty){sen29.style.color = 'black';}
  if(sen30 != stnEmpty){sen30.style.color = 'black';}
  
}

// Get the time slider element
const timeSlider = document.getElementById('timeSlider');


function UpdateSlider(){
  // Set the maximum value of the time slider to the video duration

  if(audio != emptyAudio){
    audio.addEventListener('play', function() {
      timeSlider.setAttribute('max', audio.duration);
    });

    // Update the time slider value as the video plays
    audio.addEventListener('timeupdate', function() {
      timeSlider.value = audio.currentTime;
      CheckTime(audio.currentTime);
    });

    audio.addEventListener('ended', function() {
		if(audio.currentTime==audio.duration)
		   {
		    GoNext();
		   }
     // GoNext();
    });

    // Update the video playback time when the user changes the slider position
    timeSlider.addEventListener('input', function() {
      audio.currentTime = timeSlider.value;
      CheckTime(audio.currentTime);
    });
  }
}

function CheckPageItem(index){
  switch (index) {
    case 1:
      return img1;
      break;
    case 2:
      return img2;
      break;
    case 3:
      return img3;
      break;
    case 4:
      return img4;
      break;
    case 5:
      return img5;
      break;
    case 6:
      return img6;
      break;
    case 7:
      return img7;
      break;
    case 8:
      return img8;
      break;
    case 9:
      return img9;
      break;
    case 10:
      return img10;
      break;
    case 11:
      return img11;
      break;
    case 12:
      return img12;
      break;
    case 13:
      return img13;
      break;
    case 14:
      return img14;
      break;
    case 15:
      return img15;
      break;
    case 16:
      return img16;
      break;
    case 17:
      return img17;
      break;
    default:

  }
}

function ResetVideoVisibility(){
  vid1.style.visibility = 'hidden';
  vid2.style.visibility = 'hidden';
  vid3.style.visibility = 'hidden';
  vid4.style.visibility = 'hidden';
  vid5.style.visibility = 'hidden';
}

function ResetParagraph(){
	
      document.getElementById('Page3').style.visibility = 'hidden';
      document.getElementById('Page4').style.visibility = 'hidden';
      document.getElementById('Page5').style.visibility = 'hidden';
      document.getElementById('Page6').style.visibility = 'hidden';
    /*   document.getElementById('Page7').style.visibility = 'hidden';
      document.getElementById('Page8').style.visibility = 'hidden';
     document.getElementById('Page9').style.visibility = 'hidden';
      document.getElementById('Page10').style.visibility = 'hidden';
      document.getElementById('Page11').style.visibility = 'hidden';
      document.getElementById('Page12').style.visibility = 'hidden';
      document.getElementById('Page13').style.visibility = 'hidden';
      document.getElementById('Page14').style.visibility = 'hidden';
      document.getElementById('Page15').style.visibility = 'hidden';*/
}

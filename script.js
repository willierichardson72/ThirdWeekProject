var starWarsPhotos=[];
var choiceOne;
var choiceTwo;
var chooseOne=document.getElementById('photo1');
var chooseTwo=document.getElementById('photo2');
var response=document.getElementById('response');
var canvas=document.getElementById('myChart').getContext('2d');
var theChart;

function StarWarsPhoto (name, path) {
  this.name=name;
  this.path=path;
  this.value=0;
  this.label=name;
  this.color='#9CBABA'
  this.highlight='#D18133'
  starWarsPhotos.push(this);
}

function PhotoSelector () {

  choiceOne=starWarsPhotos[Math.floor(Math.random() * starWarsPhotos.length)];
  choiceTwo=starWarsPhotos[Math.floor(Math.random() * starWarsPhotos.length)];
  while (choiceOne===choiceTwo) {
    choiceTwo=starWarsPhotos[Math.floor(Math.random() * starWarsPhotos.length)]
   }
  chooseOne.src=choiceOne.path;
  chooseTwo.src=choiceTwo.path;
}

function Voteone () {
  console.log('Jar Jar Binks is a Jedi');
  response.innerHTML='Jar Jar Binks is a Jedi!';
  choiceOne.value+=1;
  UpdateChart();
  PhotoSelector();
  localStorage.setItem('starWarsPhotos', JSON.stringify(starWarsPhotos));
  PhotoSelector();
}

function Votetwo () {
  console.log('Jar Jar Binks is a Sith Lord');
  response.innerHTML='Jar Jar Binks is a Sith Lord!';
  choiceTwo.value+=1;
  UpdateChart();
  PhotoSelector();
  localStorage.setItem('starWarsPhotos', JSON.stringify(starWarsPhotos));
  PhotoSelector();
}

function UpdateChart () {
  theChart=new Chart(canvas).Doughnut(starWarsPhotos, {
    animationSteps: 200,
    animationEasing: 'easeOutBounce',
    animateRotate: true,
    animateScale: true
  });
}

var vader=new StarWarsPhoto('Darth Vader', 'Img/Vader.jpg');
var kenobi=new StarWarsPhoto('Obi-Wan Kenobi', 'Img/ObiWan.jpg');
var jarjar=new StarWarsPhoto('Jar Jar Binks', 'Img/jarjar.jpg');
var boba=new StarWarsPhoto('Boba Fett', 'Img/boba.jpg');
var hansolo=new StarWarsPhoto('Han Solo', 'Img/han-solo.jpeg');
var chewy=new StarWarsPhoto('Chewbacca', 'Img/Chewy.jpg');
var leia=new StarWarsPhoto('Princess Leia','Img/leia.png');
var yoda=new StarWarsPhoto('Yoda', 'Img/Yoda.jpg');
var luke=new StarWarsPhoto('Luke Skywalkeer', 'Img/luke.jpg');
var jabba=new StarWarsPhoto('Jabba','Img/jabba.png');
var lando=new StarWarsPhoto('Lando Calrissian','Img/lando.jpg');
var maul=new StarWarsPhoto('Darth Maul', 'Img/maul.jpg');

function CheckLocal () {
  if (localstorage.starWarsPhotos) {
    starWarsPhotos=JSON.parse(localstorage.starWarsPhotos)
  } else {
  var vader=new StarWarsPhoto('Darth Vader', 'Img/Vader.jpg');
  var kenobi=new StarWarsPhoto('Obi-Wan Kenobi', 'Img/ObiWan.jpg');
  var jarjar=new StarWarsPhoto('Jar Jar Binks', 'Img/jarjar.jpg');
  var boba=new StarWarsPhoto('Boba Fett', 'Img/boba.jpg');
  var hansolo=new StarWarsPhoto('Han Solo', 'Img/han-solo.jpeg');
  var chewy=new StarWarsPhoto('Chewbacca', 'Img/Chewy.jpg');
  var leia=new StarWarsPhoto('Princess Leia','Img/leia.png');
  var yoda=new StarWarsPhoto('Yoda', 'Img/Yoda.jpg');
  var luke=new StarWarsPhoto('Luke Skywalkeer', 'Img/luke.jpg');
  var jabba=new StarWarsPhoto('Jabba','Img/jabba.png');
  var lando=new StarWarsPhoto('Lando Calrissian','Img/lando.jpg');
  var maul=new StarWarsPhoto('Darth Maul', 'Img/maul.jpg'); }
}

PhotoSelector();
console.log(choiceOne);

chooseOne.addEventListener('click', Voteone);
chooseTwo.addEventListener('click', Votetwo);


// stateVoting() {
//   two new random numbers
//   display the PhotoSelector
//   hide the chart?
//   turn off or hide the '2 more photos' button
// }

// stateResults() {
//   tally votes
//   render the chart
//   (local storage)
//   turn off the event listeners on the pictures to prevent further Voting
//   turn on or show the '2 more photos button'
// }

// picleft.addEventListener('click', stateResults);
// picRight.addEventListener('click', stateResults);

// Another way to manage stateResults

// if (voting) {
//   thing 1
//   thing 2
// } else {
//   other thing 1
//   other thing 2
// }






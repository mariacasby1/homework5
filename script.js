
$(document).ready(function(){
  var myLocalArray = [];
  var myIndArray = [];

var myChores = localStorage.getItem('chores')
 var myInd = localStorage.getItem('ind');
  var splitInd = myInd.split(",")
  var splitChores = myChores.split(",")
 // if (myLocal !== "") {
//show current hour in a 24 digit

var finalNum;
  for (var i = 0; i < splitInd.length; i++) {
  finalNum = (splitInd[i]);
 num = Number(finalNum);
 var  finalChore = (splitChores[i])
 

$("textarea").eq(num).text(finalChore);
  console.log(finalChore);
}
  //show date on page
var m = moment().format("dddd, MMMM Do YYYY");
$('#currentDay').html(m);

var thishour = moment().format("k");

//changes row color based on hour
$('.spanhour').each(function () {  
    var myhour = $(this).text();
    var myhour2 = Number(myhour)
 //CHANGE THIS BASED ON HOURS
   if (myhour < 12) {
     myhour2 = myhour2 += 12;
    }
  if (myhour2 < thishour) {
     $(this).closest('.row').addClass('before');
   } else if (myhour2 == thishour) {
    $(this).closest('.row').addClass('now');
   }   else {
    $(this).closest('.row').addClass('after');
    }
    console.log(myhour2, thishour);
 })
var myObject = {};
 var myindexarray = [];
 var mychoresarray = [];
$('textarea').each(function () {  
$(this).on('change', function() {
    var myChore = $(this).val();
       console.log(myChore);
       $(this).parent().next().addClass('red');
mychoresarray.push(myChore);
var myIndex = $("textarea").index(this);
myindexarray.push(myIndex);
console.log(myIndex, myChore);
localStorage.setItem('ind', myindexarray);
localStorage.setItem('chores', mychoresarray);
} )
});




$('.saveBtn').each(function () {
    $(this).on('click', function() {
        $(this).removeClass('red');
    
    })
})


//console.log(myLocal);

});
/*
var obj = {key1: "value1", key2: "value2"};
var pair = {key3: "value3"};
obj = {...obj, ...pair};

document.body.innerHTML = JSON.stringify(obj)*/
 //var mysavedtext;
//$('.saveBtn').on('click', (e) => {
 //   var newText = $('input:textarea').val();
 //   console.log(newText);
//})
//console.log(mysavedtext);


//$newItem.on('submit', function(e) {
 //   e.preventDefault();
  //  var newText = $('input:text').val();
   // console.log(newText);
//})



//console.log(mh);
//console.log (moment().isBefore('2020-03-07, 18:00:00', 'hour'));

//if (moment().isBefore('2020-03-07, 18:00:00', 'hour'))



 //console.log(thishour);
//var thishourp = parseInt(thishour);
//console.log(thishourp);


//const isBefore = function () {

    /*
        var myhour = $('.spanhour').text();
        console.log(myhour);
    }*/

 



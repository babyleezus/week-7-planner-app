$(document).ready(function() {
   
    
    $('.saveBtn').on('click', function() {
        localStorage.setItem()


    })
  });

  

  //console.log(moment());

  let today = moment();


  //console.log(today);

  $('#currentDay').text(today.format('dddd Do MMMM YYYY'));

  var currentHour = moment().hour();

  let text = $('textarea').val(); //does this get the value inputted into all the 



  $.each('.row', function()){
    var timeblock = parseInt($(this).siblings(".hour").text()); //dont understand what this is supposed to do 
  if (timeblock < currentHour) { 
        $(this).addClass("past"); 
    } else if (timeblock === currentHour) {
        $(this).addClass("present");
    } else {
        $(this).addClass("future"); 
    }
  }

  $('')


  //console.log(currentHour);

   

   




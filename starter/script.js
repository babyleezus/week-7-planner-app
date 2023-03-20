$(document).ready(function() {
   
    
    $('.saveBtn').on('click', function() {
        localStorage.setItem()


    })
  });

  

  //console.log(moment());

  let today = moment();


  //console.log(today);

  $('#currentDay').text(today.format('dddd Do MMMM YYYY'));

  var currentHour = 12 //moment().hour();

  let text = $('textarea').val(); //does this get the value inputted into all the 



  $(".row").each(function(){
    var timeblock = parseInt($(this).children(".col-md-2").attr('id')); //dont understand what this is supposed to do 
    console.log(timeblock, currentHour, $(this))
  if (timeblock < currentHour) { 
        $(this).addClass("past"); 
    } else if (timeblock === currentHour) {
        $(this).addClass("present");
    } else {
        $(this).addClass("future"); 
    }
  })

  $('')


  //console.log(currentHour);

   

   




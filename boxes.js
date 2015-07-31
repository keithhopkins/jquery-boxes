$(document).on('ready',function(){
  //find secret box and make it white
  // $('#secretBox').css('background','white').removeClass('boxType1');
  //add a heading to secret box
  // $('<h1>').html('Secret Box!').css('color','black').appendTo($('#secretBox'));

  //make entire first row boxType3
  // $('#row1').children().removeClass().addClass('box boxType3');

  //make last box in last row disappear
  // $('#row4').children().last().css('display','none');

  //make all red boxes white
  // $.each($('.box'),function(index, box){
  //   if($(box).hasClass('boxType1')){
  //     $(box).css('background','white');
  //   }
  // });

  //make first 2 boxes in second row lose all styling
  //this doesn't really remove the styling but just hides it
  // $('#row2 :lt(2)').css('visibility','hidden');

  //Get all divs inside the container that are not row divs and are not the secret box div
  //set the width of the divs to 2 pixels
  // $('.box').not('#secretBox').css('width','2px');
  
  //make a click handler that logs the x and y position
  // $('#container').on('click',function(event){
  //   console.log(event.clientX);
  //   console.log(event.clientY);
  // });

  //adds link then makes sure the user can never leave
  $('.boxType1').append("<a href='https://students.galvanize.com/'>Galvanize</a>");

  $('a').on('click',function(event){
    event.preventDefault();
    alert('YOU SHALL NOT PASS!');
  });

  //adds image of a dog on click
  $('.box').on('click',function(event){
    $(this).append("<img src='http://www.imagesbuddy.com/images/121/2013/12/dog-wallpaper-for-your-desktop.jpg'>");
    $('img').css({'height':'95%','width':'95%'});
  });

  //removes dog on click
  $('.box').on('click','img',function(event){
    event.stopPropagation();
    $(this).remove();
  });

  $('#container').on('click',function(event){
    var target = event.target;
    console.log(target);
    if(this.id === 'container'){
      $(this).css('background-color','#32CD32');
    }
    console.log($(this));
    if($(target).hasClass('box')){
      console.log('if');
      $(target).css('background-color','white');
      $(this).css('background-color','black');
    }
  });
});



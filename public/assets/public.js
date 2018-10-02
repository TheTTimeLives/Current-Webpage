
$(document).ready(function () {

    $('.dropdown-trigger').dropdown({
    inDuration: 300,
    outDuration: 225,
    constrainWidth: false,
    gutter: 0, // Spacing from edge
    belowOrigin: true, // Displays dropdown below the button
    alignment: 'left', // Displays dropdown with edge aligned to the left 
    stopPropagation: false // Stops event propagation
  },

  
$('.modal').modal()
  
          


);

$('.back2Link').on('click', function (){
    console.log('back 2 clicked');
    window.location.href = '/back2'
})

$('.pillpairLink').on('click', function (){
    console.log('pill pair clicked');
    window.location.href = '/pillpair'
})

$('.landingLink').on('click', function (){
    console.log('pill pair clicked');
    window.location.href = '/'
})

$('.aboutLink').on('click', function (){
    console.log('about clicked');
    window.location.href = '/about'
})

$('.contactLink').on('click', function (){
    console.log('about clicked');
    window.location.href = '/contact'
})
    







})




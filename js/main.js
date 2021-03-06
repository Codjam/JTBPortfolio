 jQuery(document).ready(function(){

   "use strict"
    $('.slider').ripples({
      dropRadius: 15,
      perturbance: 0.01,

    });

     $(".text").typed({
        strings:["<strong> THINK </strong><strong class='primary'> FREE </strong>","<strong> CODE </strong><strong class='primary'> FREE </strong>"],
         typespeed:0,
         loop:true

     });

    $(window).scroll(function(){

       var top = $(window).scrollTop();
        if(top>=60){
          $("nav").addClass('secondary');
        }

        else
            if($("nav").hasClass('secondary')){
                $("nav").removeClass('secondary');
            }
    });

      $('.work').magnificPopup({
      delegate: 'a', // child items selector, by clicking on it popup will open
      type: 'image',
      gallery: {
      enabled: true
       }

    });

      $("#team-members").owlCarousel({
          items:3,
          autoplay:true,
          smartSpeed:700,
          loop:true,
          autoplayHoverPause:true,
            responsive:{
              0:{

                 items:1
              },
             480:{

                 items:2
              },

             768:{

                 items:3
              }
            }



      });
     $('.counter').counterUp({
                delay: 10,
                time: 4000
            });

      $("a.smooth-scroll").click(function (event) {
        event.preventDefault();

        var section = $(this).attr("href");

        $('html, body').animate({
            scrollTop: $(section).offset().top - -2
        }, 1250, "easeInOutExpo");


    });
     new WOW().init();



     // Initialize Firebase
       var config = {
         apiKey: "AIzaSyBJ3BKz-33EmJiPpg-pXvJNiUSXaSTYFwI",
         authDomain: "contactformportfolio-8bb52.firebaseapp.com",
         databaseURL: "https://contactformportfolio-8bb52.firebaseio.com",
         projectId: "contactformportfolio-8bb52",
         storageBucket: "contactformportfolio-8bb52.appspot.com",
         messagingSenderId: "768198699806"
       };
       firebase.initializeApp(config);

       // Reference messages collection
       var messagesRef = firebase.database().ref('messages');


      //Listen for form submit
      document.getElementById('contactform').addEventListener('submit',submitForm);

     // Submit form
      function submitForm(e){
        e.preventDefault();

        //Get values
        var name = getInputVal('name');
        var email = getInputVal('email');
        var subject = getInputVal('subject');
        var message = getInputVal('message');
        var statusElm = $('.status')
        statusElm.empty()


        //Save message
        saveMessage(name, email, subject, message);

        //Show alert
        document.querySelector('.alert').style.display = 'block';


     //Hide alert after 3 seconds
     setTimeout(function(){
       document.querySelector('.alert').style.display = 'none';

     },3000);

      }

      //function to get form values
      function getInputVal(id){
        return document.getElementById(id).value;
      }

      //Save message to firebase
      function saveMessage(name, email, subject, message){
        var newMessageRef = messagesRef.push();
        newMessageRef.set({
          name: name,
          email: email,
          subject: subject,
          message: message
        });
      }










    //Email/Form Functional
     // $(document).ready(function () {
     //   $('.submit').click(function (event) {
     //     event.preventDefault()
     //     console.log('clicked Button');
     //
     //     var name = $('.name').val()
     //     var email = $('.email').val()
     //     var subject = $('.subject').val()
     //     var message = $('.message').val()
     //     var statusElm = $('.status')
     //     statusElm.empty()
     //
     //     if(name.lenght >= 2 ) {
     //       statusElm.append('<div>Name is valid</div>')
     //     } else {
     //       statusElm.append('<div>Name is not valid</div>')
     //     }
     //
     //     if(email.lenght >= 5 && email.includes('@') && email.includes('.')) {
     //       statusElm.append('<div>Email is valid</div>')
     //     } else {
     //       statusElm.append('<div>Email is not valid</div>')
     //     }
     //
     //     if(subject.lenght >= 20) {
     //       statusElm.append('<div>Subject is valid</div>')
     //     } else {
     //       statusElm.append('<div>Subject is not valid</div>')
     //     }
     //
     //     if(message.lenght >= 250) {
     //       statusElm.append('<div>Message is valid</div>')
     //     } else {
     //       statusElm.append('<div>Message is not valid</div>')
     //     }
     //
     //   })
     // })

 });


//Email/Form Functional

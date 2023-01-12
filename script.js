$(document).ready(function(){
    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('header').toggleClass('toggle');
    });
    $(window).on('scroll load',function(){
        $('#menu').removeClass('fa-times');
        $('header').removeClass('toggle');
    });

    // if($(window).scrollTop()>0){
    //     $('.top').show();
    // }
    // else{
    //     $('.top').hide();
    // }

});




const form = document.querySelector('.contact-form');
function senMsg(e){
    e.preventDefault();
    
    const name1 = Document.querySelector('.name1');
    email = Document.querySelector('.email');
    project = Document.querySelector('.project');
    message = Document.querySelector('.message');

    
    Email.send({
        SecureToken : "b71291dc-466d-45bb-a6b9-70d772fe5bb0 ",
        To : 'srishtisharma861.hitcse52020@gmail.com',
        From : email.value,
        Subject : "Contact Form",
        Body : message.value
    }).then(
      message => alert("ok")
    );
}

form .addEventListener('submit' ,senMsg);

    
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



// email js
function sendMail(){
    var params = {
        from_name : document.getElementById("name").value,
        email_id : document.getElementById("email").value,
        project : document.getElementById("project").value,
        message : document.getElementById("message").value
    }
    emailjs.send("service_77bb4sf","template_0hjuc7c",params).then(function (res){
        alert("Succesfully sent! "+res.status);
    })
}

    

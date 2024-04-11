$(document).ready(function(){
    $("#register").click(function(){
        var username=$("#user_name").val();
        var email=$("#email").val();
        var password=$("#password").val();
        var password2=$("#password2").val();
        

        
        $.post("registration.php",{"username":username,"email":email,"password":password},function(res){
            $(".message").html(res);
        })
    })
})
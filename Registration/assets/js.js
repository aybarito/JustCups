$(document).ready(function(){
    $("#submit").click(function(){
        var name=$("#name").val();
        var password=$("#password").val();
        var password2=$("#password2").val();
        var email=$("#email").val();
        if(name==""){
            alert("введите ваше имя ");
        }
        else if(password==""){
            alert("введите ваш пароль");
        }
        else if(password2==""){
            alert("Повторите пароль");
        }
        else if(password!=password2){
            alert("Ввведенные пароли не совпадают");
        }
        else if(password.length<6){
            alert("Пароль должен быть не меньше 6 символов");
        }
        else if (email==""){
            alert("Введите ваш E-mail");
        }
        else{
            alert("Сфоткайте чтоб не забыть")
            alert("Имя: "+ name+ " Пароль:"+password+" E-mail "+email );
            
        }
    });
});
$("document").ready(function () {
    $("#mybutton").click(function (e) {
        e.preventDefault();
        var name = ($("#name").val()).trim();
        var surname = ($("#surname").val()).trim();
        var phone = ($("#phone").val()).trim();
        var email = ($("#email").val()).trim();
        var message = ($("#message").val()).trim();
        let re = /\S+@\S+\.\S+/;
        let agree = $("#defaultCheck1").is(":checked")
        if(name && surname && phone && re.test(email) && agree){
            $.ajax({
                type:"POST",
                url:"/send-email",
                data:{'_token': $('meta[name="csrf-token"]').attr('content'),"name":name,"surname":surname,"phone":phone,"email":email,"message":message},
                success:function (data) {
                    swal("Успех!","Ваше письмо успешно отправлено!",{icon:"success"})
                },
                error:function (data) {
                    swal("Упс","Произошла ошибка! Попробуйте позже!",{icon:"warning"})
                }
            })
        }
        else{
            swal("Упс","Заполните поля, пожалуйста",{icon:"warning"})
        }

    })
})

let index = {
    init: function () {
        $('#btn-create-account').on('click', () => {
            this.createAccount();
        });

        $('#btn-login').on('click', () => {
            this.login();
        });

        $('#btn-update').on('click', () => {
            this.update();
        });
    },

    createAccount: function () {
        let data = {
            username: $('#username').val(),
            password: $('#password').val()
        }

        $.ajax({
            type: "POST",
            url: "/auth/create-account",
            data: JSON.stringify(data),
            contentType: "application/json; charset=utf-8",
            dataType: "json"
        }).done(function (response) {
            if (response.statusCode === 200) {
                alert(response.message);
                location.href = "/login"
            } else {
                alert(response.errorMessage);
            }
        }).fail(function (error) {
            alert(error.responseJSON.message);
        });
    },

    update: function () {
        let data = {
            id: $('#id').val(),
            username: $('#username').val(),
            email: $('#email').val(),
            password: $('#password').val()
        }

        // ajax 통신을 이용해서 3개의 데이터를 json 으로 변경하여 insert 요청.
        $.ajax({
            type: "PUT",
            url: "/user",
            data: JSON.stringify(data),
            contentType: "application/json; charset=utf-8", // body data 가 어떤 타입인지(MIME)
            dataType: "json"
        }).done(function (response) {
            alert('회원정보 수정이 완료되었습니다.');
            location.href = '/';
            console.log(response);
        }).fail(function (error) {
            console.log(error);
            // alert(JSON.stringify(error))
        });
    },
}

index.init()
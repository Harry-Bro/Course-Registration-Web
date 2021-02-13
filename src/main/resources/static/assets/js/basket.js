let basket = {

    saveLecture: function (lectureID) {
        $.ajax({
            type: "POST",
            url: 'api/basket/' + lectureID,
        }).done(function (response) {
            if (response.statusCode === 200) {
                alert(response.message);
            } else {
                alert(response.errorMessage);
            }
        }).fail(function (error) {
            console.log(error);
        });
    },

    deleteLecture: function (lectureID) {
        $.ajax({
            type: "DELETE",
            url: 'api/basket/' + lectureID,
        }).done(function (response) {
            if (response.statusCode === 200) {
                alert(response.message)
            }
            console.log(response);
            location.href = '/basket';
        }).fail(function (error) {
            console.log(error);
        });
    }

}
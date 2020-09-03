function getIdQueryParam() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id');
}
const userid = getIdQueryParam();

function updateUser() {
    $.ajax({
        method: 'PUT',
        url: "http://localhost:3000/users" + '/' + userid,
        data: {
            name: $('#name').val(),
            birthday: $('#birthYear').val(),
            email: $('#email').val(),
            phone: $('#phone').val()
        }
    }).done(function () {
        if (true) window.location.href = '/';
    })
}

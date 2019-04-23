
    $(document).ready(function () {
    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/photos',
        type: 'get',
        timeout: 10000,
        datatype: 'json'
    })
        .done(function (responseJson) {
            for (let i = 0; i < 10; i++) {
                $('<div>').addClass('post')
                    .appendTo('.blog-container')
                    .html(`<img class="post-img" src="${responseJson[i].url}"></img>
              <div> ${responseJson[i].title}</div>`);
            };
        })

        .fail(function () {
        });
    $('h1').addClass("animation-onload-h1")
    $(".dont-click-here").addClass("animation-onload");
    $(".dont-click-here").click(function () {
        alert("I told you DO NOT click here!!!");
    });
});


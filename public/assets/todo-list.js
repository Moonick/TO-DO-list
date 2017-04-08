$(function() {
    $("input").keypress(function(event) {
        if (event.keyCode == 13) {
            var todo = { item: this.value.trim() };
            this.value = "";
            if (todo.item == "") {
                alert("Enter a task");
            } else {
                $.ajax({
                    type: 'POST',
                    url: '/todo',
                    data: todo,
                    success: function(data) {
                        location.reload();
                    }
                });
            }
        }
    });

    $('li').on('click', function() {
        var item = $(this).text().replace(/ /g, "-");

        $.ajax({
            type: 'DELETE',
            url: '/todo' + item,
            success: function(data) {
                location.reload();
            }
        })

    });


});



// $("<li><input type='checkbox'>" + todo + "<img class='close' src='x.png' alt='close'></li>").appendTo("ul")
//     .css({
//         "list-style-type": "none",
//         "border-bottom": "1px solid black",
//         "width": "100%",
//         "height": "30px",
//         "font-size": "1.3em",
//         "background-color": "#C9CCD2"
//     });

// $(".close").on("click", function() {
//     console.log($(this).parent().remove())
// });
// $("input[type=checkbox]").on("change", function() {
//     console.log($(this)[0].checked)
//     if ($(this)[0].checked) {
//         $(this).parent().css({
//             "text-decoration": "line-through",
//             "color": "white",
//             "background-color": "#87A6B1"
//         });
//     } else {
//         $(this).parent().css({
//             "text-decoration": "none",
//             "color": "black",
//             "background-color": "#C9CCD2"
//         });
//     }
// });
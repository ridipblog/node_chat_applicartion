$(document).ready(function () {
  console.log("Ok");
  $("#registration_form").on("submit", function (e) {
    e.preventDefault();
    let form_data = $(this).serialize();
    $.ajax({
      type: "post",
      url: "/registration",
      data: form_data,
      dataType: "json",
      //   contentType: false,
      //   processData: false,
      beforeSend: function () {
        console.log("Lodding");
      },
      success: async function (result) {
        console.log(result);
      },
      error: function (data) {
        console.log(data);
      },
    });
  });
});

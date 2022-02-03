var $messages = $(".messages-content"),
  d,
  h,
  m,
  i = 0;

$(window).load(function () {
  $messages.mCustomScrollbar();
  setTimeout(function () {
    introMessage();
  }, 100);
});

function updateScrollbar() {
  $messages.mCustomScrollbar("update").mCustomScrollbar("scrollTo", "bottom", {
    scrollInertia: 10,
    timeout: 0,
  });
}

function setDate() {
  d = new Date();
  if (m != d.getMinutes()) {
    m = d.getMinutes();
    $('<div class="timestamp">' + d.getHours() + ":" + m + "</div>").appendTo(
      $(".message:last")
    );
  }
}

function insertMessage() {
  msg = $(".message-input").val();
  if ($.trim(msg) == "") {
    return false;
  }
  $('<div class="message message-personal">' + msg + "</div>")
    .appendTo($(".mCSB_container"))
    .addClass("new");
  setDate();
  $(".message-input").val(null);
  updateScrollbar();
  setTimeout(function () {
    handleUserMessage(msg);
  }, 1000 + Math.random() * 20 * 100);
}

$(".message-submit").click(function () {
  insertMessage();
});

$(window).on("keydown", function (e) {
  if (e.which == 13) {
    insertMessage();
    return false;
  }
});

function introMessage() {
  if ($(".message-input").val() != "") {
    return false;
  }
  $(
    '<div class="message loading new"><figure class="avatar"><img src="https://www.pikpng.com/pngl/m/557-5578161_image-set-png-256x256-px-chat-icon-chat.png" /></figure><span></span></div>'
  ).appendTo($(".mCSB_container"));
  updateScrollbar();

  setTimeout(function () {
    $(".message.loading").remove();
    $(
      '<div class="message new"><figure class="avatar"><img src="https://www.pikpng.com/pngl/m/557-5578161_image-set-png-256x256-px-chat-icon-chat.png" /></figure>' +
        "Hallo Sahabat..." +
        "</div>"
    )
      .appendTo($(".mCSB_container"))
      .addClass("new");
    $(
      '<div class="message new"><figure class="avatar"><img src="https://www.pikpng.com/pngl/m/557-5578161_image-set-png-256x256-px-chat-icon-chat.png" /></figure>' +
        "Kenalin nih aku Si paling kalem dari calm.com, Apakah hari ini kamu sedang baik?" +
        "</div>"
    )
      .appendTo($(".mCSB_container"))
      .addClass("new");
    setDate();
    updateScrollbar();
    i++;
  }, 1000 + Math.random() * 20 * 100);
}

function handleUserMessage(msg) {
  if ($(".message-input").val() != "") {
    return false;
  }
  $(
    '<div class="message loading new"><figure class="avatar"><img src="https://www.pikpng.com/pngl/m/557-5578161_image-set-png-256x256-px-chat-icon-chat.png" /></figure><span></span></div>'
  ).appendTo($(".mCSB_container"));
  updateScrollbar();

  switch (msg) {
    case "baik":
      response = "Alhamdulillah kalo baik, Hubungi kami kalo sedang tidak baik";
      break;
    case "tidak baik":
      response =
        "Silahkan hubungi kami dibagian bawah untuk konsultasi lebih lanjut";
      break;
    default:
      response =
        "Mohon maaf layanan ini masih dalam tahap pengembangan, untuk info lebih lanjut silahkan email atau WhatsApp ke admin calm.com";
      break;
  }

  setTimeout(function () {
    $(".message.loading").remove();
    $(
      '<div class="message new"><figure class="avatar"><img src="https://www.pikpng.com/pngl/m/557-5578161_image-set-png-256x256-px-chat-icon-chat.png" /></figure>' +
        response +
        "</div>"
    )
      .appendTo($(".mCSB_container"))
      .addClass("new");
    setDate();
    updateScrollbar();
    i++;
  }, 1000 + Math.random() * 20 * 100);
}

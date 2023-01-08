function toggleDetail(e) {
  const target = $(e.target);

  if ($(target).hasClass("active")) {
    $(target).html("More Info").removeClass("active");
  } else {
    $(target).html("Less Info").addClass("active");
  }

  const item = $(target).parents(".about-exp-item");
  const detail = $(item).children(".about-exp-item-detail");
  $(detail).slideToggle();
}
function onFormSubmit(e) {
  e.preventDefault();
  const email = $("#inp_email");
  const Subject = $("#inp_Subject");
  const Message = $("#inp_Message");

  if (!$(email).val()) {
    alert("Email is required");
  } else if (!$(subject).val()) {
    alert("Subject is required");
  } else if (!$(massage).val()) {
    alert("Massage is required");
  } else {
    $(email).val("");
    $(subject).val("");
    $(massage).val("");
    alert("Form Submitted");
  }
}

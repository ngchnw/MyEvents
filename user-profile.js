var edit_profile_button = document.getElementById("edit_profile_button");
var change_password_button = document.getElementById("change_password_button");
var delete_account_button = document.getElementById("delete_account_button");
var report_error_button = document.getElementById("report_error_button");
var log_out_button = document.getElementById("log_out_button");
var overlay = document.getElementById("overlay");

var discard_changes_button = document.getElementById("discard_changes_button");
var edit_profile_modal = document.getElementById("edit_profile_modal");


edit_profile_button.addEventListener("click", open_modal);
discard_changes_button.addEventListener("click", close_modal);

function open_modal() {
    overlay.style.display = "none";
    edit_profile_modal.style.display = "block";
}

function close_modal() {
    overlay.style.display = "block";
    edit_profile_modal.style.display = "none";
}

// .classList.add()
// .addEventListener()
var pfp_border_radius_slider_element = document.getElementById("pfp-border-radius-slider");
var pfp = document.getElementById("pfp-container");
var pfp_container = document.getElementById("pfp");

pfp_border_radius_slider_element.addEventListener("input", function() {
    pfp_container.style.borderRadius = pfp_border_radius_slider_element.value + "px";
});

var primary_color_picker = document.getElementById("main-color-colorPicker");

primary_color_picker.addEventListener("input", function() {
    document.documentElement.style.setProperty("--primary-color", primary_color_picker.value);
});

function resetPrimaryColor(){
    primary_color_picker.value = "rgb(66, 164, 213)";
    document.documentElement.style.setProperty("--primary-color", "rgb(66, 164, 213)");
}

function printPage() {
    window.print();
    return
}

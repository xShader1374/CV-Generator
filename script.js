var json_info_holder = {
    "pfp_info": {
        "pfp": "",
        "pfp_roundness": 0,
        "pfp_shadow_color": "rgb(0, 0, 0)",
        "pfp_shadow_blur": 32,
        "pfp_shadow_spread": 0
    },
    "primary-color": "rgb(66, 164, 213)",
    "primary-text-color": "rgb(109, 189, 229)",
    "bg-darkness": 16,
    "personal_info": {
      "name": "Name",
      "surname": "Surname",
      "bdate": "29-03-2903",
      "phone_number": "+12 345 678 1234",
      "email": "youremail@gmail.com",
      "address": "Your Address, 1 70029 Santeramo in Colle (BA)"
    },
    "skills": [],
    "work_experience": [],
    "studies": [],
    "hobbies": [],
    "courses": []
  };

var meta_theme_color = document.getElementById("meta-theme-color");

var cv_sidebar = document.getElementById("cv-sidebar");
var cv_jobs_container = document.getElementById("cv-jobs-container")
var skills_container = document.getElementById("skills-container");

var pfp_border_radius_slider_element = document.getElementById("pfp-border-radius-slider");
var pfp_border_radius_slider_text_element = document.getElementById("pfp-border-radius-slider-text");
var pfp = document.getElementById("pfp");
var pfp_container = document.getElementById("pfp-container");

var name_surname_text = document.getElementById("name-surname-text");
var bdate_text = document.getElementById("bdate-text");
var phone_number_text = document.getElementById("phone-number-text");
var email_text = document.getElementById("email-text");
var address_text = document.getElementById("address-text");
var name_input = document.getElementById("name-input");
var surname_input = document.getElementById("surname-input");
var birthdate_input = document.getElementById("birthdate-input");

// Customizables
var primary_color_picker = document.getElementById("main-color-colorPicker");
var text_primary_color_picker = document.getElementById("text-main-color-colorPicker");
var bg_luminosity_slider = document.getElementById("bg-luminosity-slider");
var bg_luminosity_slider_text_element = document.getElementById("bg-luminosity-slider-text");
var pfp_shadow_color_picker = document.getElementById("pfp-shadow-color-colorPicker");
var pfp_shadow_blur_slider_element = document.getElementById("pfp-shadow-blur-slider");
var pfp_shadow_blur_slider_text_element = document.getElementById("pfp-shadow-blur-slider-text");
var pfp_shadow_spread_slider_element = document.getElementById("pfp-shadow-spread-slider");
var pfp_shadow_spread_slider_text_element = document.getElementById("pfp-shadow-spread-slider-text");

bg_luminosity_slider.addEventListener("wheel", function(e) {
    e.preventDefault();

    if (e.deltaY < 0) {
        addBGLuminosityAmount(1);
    } else {
        addBGLuminosityAmount(-1);
    }
});
bg_luminosity_slider.addEventListener("input", function() {
    json_info_holder["bg-darkness"] = bg_luminosity_slider.value;
    document.documentElement.style.setProperty("--bg-darkness", json_info_holder["bg-darkness"]);
    
    bg_luminosity_slider_text_element.value = json_info_holder["bg-darkness"];
}, {passive: true});
bg_luminosity_slider_text_element.addEventListener("input", function() {
    json_info_holder["bg-darkness"] = bg_luminosity_slider_text_element.value;
    document.documentElement.style.setProperty("--bg-darkness", json_info_holder["bg-darkness"]);
    
    bg_luminosity_slider.value = bg_luminosity_slider_text_element.value;
}, {passive: true});
function addBGLuminosityAmount(amount) {
    let newValue = Number(bg_luminosity_slider.value) + amount;
    newValue = Math.min(100, Math.max(0, newValue));
    
    json_info_holder["bg-darkness"] = newValue;
    bg_luminosity_slider.value = json_info_holder["bg-darkness"];
    document.documentElement.style.setProperty("--bg-darkness", json_info_holder["bg-darkness"]);
    
    bg_luminosity_slider_text_element.value = json_info_holder["bg-darkness"];
}

pfp_border_radius_slider_element.addEventListener("wheel", function(e) {
    e.preventDefault();

    if (e.deltaY < 0) {
        addPfpBorderRadiusAmount(1);
    } else {
        addPfpBorderRadiusAmount(-1);
    }
});
pfp_border_radius_slider_element.addEventListener("input", function() {
    json_info_holder["pfp_info"]["pfp_roundness"] = pfp_border_radius_slider_element.value;
    document.documentElement.style.setProperty("--pfp-roundness", json_info_holder["pfp_info"]["pfp_roundness"] + "px");
    
    pfp_border_radius_slider_text_element.value = pfp_border_radius_slider_element.value;
}, {passive: true});
pfp_border_radius_slider_text_element.addEventListener("input", function() {
    json_info_holder["pfp_info"]["pfp_roundness"] = pfp_border_radius_slider_text_element.value;
    document.documentElement.style.setProperty("--pfp-roundness", json_info_holder["pfp_info"]["pfp_roundness"] + "px");
    
    pfp_border_radius_slider_element.value = pfp_border_radius_slider_text_element.value;
}, {passive: true});
function addPfpBorderRadiusAmount(amount) {
    let newValue = Number(pfp_border_radius_slider_element.value) + amount;
    newValue = Math.min(100, Math.max(0, newValue));
    
    json_info_holder["pfp_info"]["pfp_roundness"] = newValue;
    pfp_border_radius_slider_element.value = json_info_holder["pfp_info"]["pfp_roundness"];
    document.documentElement.style.setProperty("--pfp-roundness", json_info_holder["pfp_info"]["pfp_roundness"] + "px");
    
    pfp_border_radius_slider_text_element.value = json_info_holder["pfp_info"]["pfp_roundness"];
}

// PFP Shadow Blur Slider
pfp_shadow_blur_slider_element.addEventListener("wheel", function(e) {
    e.preventDefault();

    if (e.deltaY < 0) {
        addPfpShadowBlurAmount(1);
    } else {
        addPfpShadowBlurAmount(-1);
    }
});
pfp_shadow_blur_slider_element.addEventListener("input", function() {
    json_info_holder["pfp_info"]["pfp_shadow_blur"] = pfp_shadow_blur_slider_element.value;
    document.documentElement.style.setProperty("--pfp-shadow-blur", json_info_holder["pfp_info"]["pfp_shadow_blur"] + "px");
    
    pfp_shadow_blur_slider_text_element.value = pfp_shadow_blur_slider_element.value;
}, {passive: true});
pfp_shadow_blur_slider_text_element.addEventListener("input", function() {
    json_info_holder["pfp_info"]["pfp_shadow_blur"] = pfp_shadow_blur_slider_text_element.value;
    document.documentElement.style.setProperty("--pfp-shadow-blur", json_info_holder["pfp_info"]["pfp_shadow_blur"] + "px");
    
    pfp_shadow_blur_slider_element.value = pfp_shadow_blur_slider_text_element.value;
}, {passive: true});
function addPfpShadowBlurAmount(amount) {
    let newValue = Number(pfp_shadow_blur_slider_element.value) + amount;
    newValue = Math.min(100, Math.max(0, newValue)); // Assuming max 100 and min 0 for blur
    
    json_info_holder["pfp_info"]["pfp_shadow_blur"] = newValue;
    pfp_shadow_blur_slider_element.value = json_info_holder["pfp_info"]["pfp_shadow_blur"];
    document.documentElement.style.setProperty("--pfp-shadow-blur", json_info_holder["pfp_info"]["pfp_shadow_blur"] + "px");
    
    pfp_shadow_blur_slider_text_element.value = json_info_holder["pfp_info"]["pfp_shadow_blur"];
}

pfp_shadow_spread_slider_element.addEventListener("wheel", function(e) {
    e.preventDefault();

    if (e.deltaY < 0) {
        addPfpShadowSpreadAmount(1);
    } else {
        addPfpShadowSpreadAmount(-1);
    }
});
pfp_shadow_spread_slider_element.addEventListener("input", function() {
    json_info_holder["pfp_info"]["pfp_shadow_spread"] = pfp_shadow_spread_slider_element.value;
    document.documentElement.style.setProperty("--pfp-shadow-spread", json_info_holder["pfp_info"]["pfp_shadow_spread"] + "px");
    
    pfp_shadow_spread_slider_text_element.value = pfp_shadow_spread_slider_element.value;
}, {passive: true});
pfp_shadow_spread_slider_text_element.addEventListener("input", function() {
    json_info_holder["pfp_info"]["pfp_shadow_spread"] = pfp_shadow_spread_slider_text_element.value;
    document.documentElement.style.setProperty("--pfp-shadow-spread", json_info_holder["pfp_info"]["pfp_shadow_spread"] + "px");
    
    pfp_shadow_spread_slider_element.value = pfp_shadow_spread_slider_text_element.value;
}, {passive: true});
function addPfpShadowSpreadAmount(amount) {
    let newValue = Number(pfp_shadow_spread_slider_element.value) + amount;
    newValue = Math.min(100, Math.max(0, newValue));
    
    json_info_holder["pfp_info"]["pfp_shadow_spread"] = newValue;
    pfp_shadow_spread_slider_element.value = json_info_holder["pfp_info"]["pfp_shadow_spread"];
    document.documentElement.style.setProperty("--pfp-shadow-spread", json_info_holder["pfp_info"]["pfp_shadow_spread"] + "px");
    
    pfp_shadow_spread_slider_text_element.value = json_info_holder["pfp_info"]["pfp_shadow_spread"];
}

name_input.addEventListener("input", function() {
    json_info_holder["personal_info"]["name"] = name_input.value;
    name_surname_text.innerHTML = json_info_holder["personal_info"]["name"] + " " + json_info_holder["personal_info"]["surname"];
}, {passive: true});

birthdate_input.addEventListener("input", function() {
  json_info_holder["personal_info"]["bdate"] = birthdate_input.value;
  bdate_text.innerHTML = '<svg class="generic-svg" fill="#ffffff" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M25 0.09375L24.21875 1.09375C23.515625 1.992188 20 6.578125 20 9C20 11.414063 21.722656 13.441406 24 13.90625L24 10C24 9.449219 24.449219 9 25 9C25.550781 9 26 9.449219 26 10L26 13.90625C28.277344 13.441406 30 11.414063 30 9C30 6.578125 26.484375 1.992188 25.78125 1.09375 Z M 23 15C21.347656 15 20 16.347656 20 18L20 26L30 26L30 18C30 16.347656 28.652344 15 27 15 Z M 11 28C8.179688 28 5.761719 29.683594 4.65625 32.09375C5.226563 33.597656 5.804688 34.398438 5.8125 34.40625C6.703125 35.59375 8.390625 37 11.40625 37C13.863281 37 15.6875 36.15625 17 34.40625L17.75 33.375L18.5625 34.375C20.042969 36.152344 22.152344 37 25 37C27.769531 37 30 36.101563 31.4375 34.375L32.25 33.375L33 34.40625C34.3125 36.15625 36.136719 37 38.59375 37C41.050781 37 42.875 36.15625 44.1875 34.40625C44.214844 34.371094 44.964844 33.414063 45.375 32.125C44.277344 29.691406 41.839844 28 39 28 Z M 4 35.3125L4 42L46 42L46 35.34375C45.875 35.523438 45.792969 35.609375 45.78125 35.625C44.113281 37.847656 41.679688 39 38.59375 39C35.941406 39 33.785156 38.167969 32.15625 36.5C30.753906 37.785156 28.5 39 25 39C22.039063 39 19.640625 38.164063 17.84375 36.5C16.214844 38.164063 14.054688 39 11.40625 39C7.5625 39 5.351563 37.144531 4.1875 35.59375C4.175781 35.578125 4.113281 35.484375 4 35.3125 Z M 0 44L0 45C0 50 4.890625 50 6.5 50L43.5 50C45.105469 50 50 50 50 45L50 44Z"></path></g></svg>' + (json_info_holder["personal_info"]["bdate"] ? json_info_holder["personal_info"]["bdate"].replace(/-/g, ' / ') : "DD / MM / YYYY");
});

surname_input.addEventListener("input", function() {
    json_info_holder["personal_info"]["surname"] = surname_input.value;
    name_surname_text.innerHTML = json_info_holder["personal_info"]["name"] + " " + json_info_holder["personal_info"]["surname"];
}, {passive: true});

// Initialize Name and Surname input fields and text
name_input.value = json_info_holder.personal_info.name;
surname_input.value = json_info_holder.personal_info.surname;
name_surname_text.innerHTML = json_info_holder.personal_info.name + " " + json_info_holder.personal_info.surname;

// Initialize Birthdate input field and text
birthdate_input.value = json_info_holder.personal_info.bdate;
bdate_text.innerHTML = '<svg class="generic-svg" fill="#ffffff" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M25 0.09375L24.21875 1.09375C23.515625 1.992188 20 6.578125 20 9C20 11.414063 21.722656 13.441406 24 13.90625L24 10C24 9.449219 24.449219 9 25 9C25.550781 9 26 9.449219 26 10L26 13.90625C28.277344 13.441406 30 11.414063 30 9C30 6.578125 26.484375 1.992188 25.78125 1.09375 Z M 23 15C21.347656 15 20 16.347656 20 18L20 26L30 26L30 18C30 16.347656 28.652344 15 27 15 Z M 11 28C8.179688 28 5.761719 29.683594 4.65625 32.09375C5.226563 33.597656 5.804688 34.398438 5.8125 34.40625C6.703125 35.59375 8.390625 37 11.40625 37C13.863281 37 15.6875 36.15625 17 34.40625L17.75 33.375L18.5625 34.375C20.042969 36.152344 22.152344 37 25 37C27.769531 37 30 36.101563 31.4375 34.375L32.25 33.375L33 34.40625C34.3125 36.15625 36.136719 37 38.59375 37C41.050781 37 42.875 36.15625 44.1875 34.40625C44.214844 34.371094 44.964844 33.414063 45.375 32.125C44.277344 29.691406 41.839844 28 39 28 Z M 4 35.3125L4 42L46 42L46 35.34375C45.875 35.523438 45.792969 35.609375 45.78125 35.625C44.113281 37.847656 41.679688 39 38.59375 39C35.941406 39 33.785156 38.167969 32.15625 36.5C30.753906 37.785156 28.5 39 25 39C22.039063 39 19.640625 38.164063 17.84375 36.5C16.214844 38.164063 14.054688 39 11.40625 39C7.5625 39 5.351563 37.144531 4.1875 35.59375C4.175781 35.578125 4.113281 35.484375 4 35.3125 Z M 0 44L0 45C0 50 4.890625 50 6.5 50L43.5 50C45.105469 50 50 50 50 45L50 44Z"></path></g></svg>' + (json_info_holder.personal_info.bdate ? json_info_holder.personal_info.bdate.replace(/-/g, ' / ') : "DD / MM / YYYY");

// Helper function to obtain a sliced rgb value
function slice_rgb(rgb_value) {
    var rgb = rgb_value.match(/\d+/g);

    return `${rgb[0]} ${rgb[1]} ${rgb[2]}`;
}
let hex2rgb = c=> `rgb(${c.match(/\w\w/g).map(x=>+`0x${x}`)})`;
let rgb2hex = c=> '#'+c.match(/\d+/g).map(x=>(+x).toString(16).padStart(2,0)).join``;


primary_color_picker.addEventListener("input", function() {
    json_info_holder["primary-color"] = hex2rgb(primary_color_picker.value);
    document.documentElement.style.setProperty("--primary-color", json_info_holder["primary-color"]);
    document.documentElement.style.setProperty("--primary-color-alt", slice_rgb(json_info_holder["primary-color"]));
    meta_theme_color.content = rgb2hex(json_info_holder["primary-color"]);
}, {passive: true});
text_primary_color_picker.addEventListener("input", function() {
    json_info_holder["primary-text-color"] = hex2rgb(text_primary_color_picker.value);
    document.documentElement.style.setProperty("--text-primary-color", json_info_holder["primary-text-color"]);
}, {passive: true});
pfp_shadow_color_picker.addEventListener("input", function() {
    json_info_holder["pfp_info"]["pfp_shadow_color"] = hex2rgb(pfp_shadow_color_picker.value);
    document.documentElement.style.setProperty("--pfp-shadow-color", json_info_holder["pfp_info"]["pfp_shadow_color"]);
}, {passive: true});
function resetColor(whatColor){
    switch (whatColor) {
        case "primary":
            json_info_holder["primary-color"] = "rgb(66, 164, 213)";
            console.log(rgb2hex(json_info_holder["primary-color"]));
            
            primary_color_picker.value = rgb2hex(json_info_holder["primary-color"]);
            meta_theme_color.content = rgb2hex(json_info_holder["primary-color"]);
            
            document.documentElement.style.setProperty("--primary-color", json_info_holder["primary-color"]);
            document.documentElement.style.setProperty("--primary-color-alt", slice_rgb(json_info_holder["primary-color"]));

            break;
        
        case "text-primary":
            json_info_holder["primary-text-color"] = "rgb(109, 189, 229)";
            console.log(rgb2hex(json_info_holder["primary-text-color"]));
            text_primary_color_picker.value = rgb2hex(json_info_holder["primary-text-color"]);
            document.documentElement.style.setProperty("--text-primary-color", json_info_holder["primary-text-color"]);

            break;

        case "pfp-shadow-color":
            json_info_holder["pfp_info"]["pfp_shadow_color"] = "rgb(0, 0, 0)";
            console.log(rgb2hex(json_info_holder["pfp_info"]["pfp_shadow_color"]));
            
            pfp_shadow_color_picker.value = rgb2hex(json_info_holder["pfp_info"]["pfp_shadow_color"]);
            document.documentElement.style.setProperty("--pfp-shadow-color", json_info_holder["pfp_info"]["pfp_shadow_color"]);
            // Reset PFP Shadow Blur to default as well
            json_info_holder["pfp_info"]["pfp_shadow_blur"] = 32;
            pfp_shadow_blur_slider_element.value = json_info_holder["pfp_info"]["pfp_shadow_blur"];
            pfp_shadow_blur_slider_text_element.value = json_info_holder["pfp_info"]["pfp_shadow_blur"];
            document.documentElement.style.setProperty("--pfp-shadow-blur", json_info_holder["pfp_info"]["pfp_shadow_blur"] + "px");
            // Reset PFP Shadow Spread to default as well
            json_info_holder["pfp_info"]["pfp_shadow_spread"] = 0;
            pfp_shadow_spread_slider_element.value = json_info_holder["pfp_info"]["pfp_shadow_spread"];
            pfp_shadow_spread_slider_text_element.value = json_info_holder["pfp_info"]["pfp_shadow_spread"];
            document.documentElement.style.setProperty("--pfp-shadow-spread", json_info_holder["pfp_info"]["pfp_shadow_spread"] + "px");

            break;

        default:

            break;
    }}

function changePfp() {
    var input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*'; // Accepts only image files

    input.onchange = e => { 

        // Getting a hold of the file reference
        var file = e.target.files[0]; 

        // Setting up the reader
        var reader = new FileReader();
        reader.readAsDataURL(file); // this is reading as data url

        // Here we tell the reader what to do when it's done reading...
        reader.onload = readerEvent => {
            json_info_holder["pfp_info"]["pfp"] = readerEvent.target.result; // This is the content!
            pfp.src = json_info_holder["pfp_info"]["pfp"];
        }

    }

    input.click();
}

function printPage() {
    window.print();
}

function importJSON() {
    let generic_loading_overlay = document.getElementById("generic-loading-overlay");
    generic_loading_overlay.style.display = "block";

    var input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json';

    input.onchange = e => {
        var file = e.target.files[0];
        
        var reader = new FileReader();
        reader.readAsText(file);

        reader.onload = readerEvent => {
            // Aggiungiamo un piccolo ritardo artificiale per assicurarci che l'overlay sia visibile
            setTimeout(() => {
                try {
                    json_info_holder = JSON.parse(readerEvent.target.result);
                    
                    primary_color_picker.value = rgb2hex(json_info_holder["primary-color"]);
                    document.documentElement.style.setProperty("--primary-color", json_info_holder["primary-color"]);
                    document.documentElement.style.setProperty("--primary-color-alt", slice_rgb(json_info_holder["primary-color"]));
                    meta_theme_color.content = rgb2hex(json_info_holder["primary-color"]);

                    text_primary_color_picker.value = rgb2hex(json_info_holder["primary-text-color"]);
                    document.documentElement.style.setProperty("--text-primary-color", json_info_holder["primary-text-color"]);

                    bg_luminosity_slider.value = json_info_holder["bg-darkness"];
                    bg_luminosity_slider_text_element.value = json_info_holder["bg-darkness"];
                    document.documentElement.style.setProperty("--bg-darkness", json_info_holder["bg-darkness"]);

                    pfp.src = json_info_holder["pfp_info"]["pfp"];
                    document.documentElement.style.setProperty("--pfp-roundness", json_info_holder["pfp_info"]["pfp_roundness"] + "px");
                    pfp_border_radius_slider_text_element.value = json_info_holder["pfp_info"]["pfp_roundness"];
                    pfp_border_radius_slider_element.value = json_info_holder["pfp_info"]["pfp_roundness"];

                    // Load PFP Shadow Blur
                    pfp_shadow_blur_slider_element.value = json_info_holder["pfp_info"]["pfp_shadow_blur"];
                    pfp_shadow_blur_slider_text_element.value = json_info_holder["pfp_info"]["pfp_shadow_blur"];
                    document.documentElement.style.setProperty("--pfp-shadow-blur", json_info_holder["pfp_info"]["pfp_shadow_blur"] + "px");
                    // Load PFP Shadow Spread
                    pfp_shadow_spread_slider_element.value = json_info_holder["pfp_info"]["pfp_shadow_spread"];
                    pfp_shadow_spread_slider_text_element.value = json_info_holder["pfp_info"]["pfp_shadow_spread"];
                    document.documentElement.style.setProperty("--pfp-shadow-spread", json_info_holder["pfp_info"]["pfp_shadow_spread"] + "px");
                    pfp_shadow_color_picker.value = rgb2hex(json_info_holder["pfp_info"]["pfp_shadow_color"]);
                    document.documentElement.style.setProperty("--pfp-shadow-color", json_info_holder["pfp_info"]["pfp_shadow_color"]);

                    name_input.value = json_info_holder["personal_info"]["name"];
                    surname_input.value = json_info_holder["personal_info"]["surname"];
                    name_surname_text.innerHTML = json_info_holder["personal_info"]["name"] + " " + json_info_holder["personal_info"]["surname"];
                    bdate_text.innerHTML        = '<svg class="generic-svg" fill="#ffffff" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M25 0.09375L24.21875 1.09375C23.515625 1.992188 20 6.578125 20 9C20 11.414063 21.722656 13.441406 24 13.90625L24 10C24 9.449219 24.449219 9 25 9C25.550781 9 26 9.449219 26 10L26 13.90625C28.277344 13.441406 30 11.414063 30 9C30 6.578125 26.484375 1.992188 25.78125 1.09375 Z M 23 15C21.347656 15 20 16.347656 20 18L20 26L30 26L30 18C30 16.347656 28.652344 15 27 15 Z M 11 28C8.179688 28 5.761719 29.683594 4.65625 32.09375C5.226563 33.597656 5.804688 34.398438 5.8125 34.40625C6.703125 35.59375 8.390625 37 11.40625 37C13.863281 37 15.6875 36.15625 17 34.40625L17.75 33.375L18.5625 34.375C20.042969 36.152344 22.152344 37 25 37C27.769531 37 30 36.101563 31.4375 34.375L32.25 33.375L33 34.40625C34.3125 36.15625 36.136719 37 38.59375 37C41.050781 37 42.875 36.15625 44.1875 34.40625C44.214844 34.371094 44.964844 33.414063 45.375 32.125C44.277344 29.691406 41.839844 28 39 28 Z M 4 35.3125L4 42L46 42L46 35.34375C45.875 35.523438 45.792969 35.609375 45.78125 35.625C44.113281 37.847656 41.679688 39 38.59375 39C35.941406 39 33.785156 38.167969 32.15625 36.5C30.753906 37.785156 28.5 39 25 39C22.039063 39 19.640625 38.164063 17.84375 36.5C16.214844 38.164063 14.054688 39 11.40625 39C7.5625 39 5.351563 37.144531 4.1875 35.59375C4.175781 35.578125 4.113281 35.484375 4 35.3125 Z M 0 44L0 45C0 50 4.890625 50 6.5 50L43.5 50C45.105469 50 50 50 50 45L50 44Z"></path></g></svg>' + (json_info_holder["personal_info"]["bdate"] ? json_info_holder["personal_info"]["bdate"].replace(/-/g, ' / ') : "DD / MM / YYYY");
  birthdate_input.value = json_info_holder["personal_info"]["bdate"]; // Assicura che l'input sia aggiornato quando si carica il JSON
                    phone_number_text.innerHTML = '<svg class="generic-svg" fill="#ffffff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M21.384,17.752a2.108,2.108,0,0,1-.522,3.359,7.543,7.543,0,0,1-5.476.642C10.5,20.523,3.477,13.5,2.247,8.614a7.543,7.543,0,0,1,.642-5.476,2.108,2.108,0,0,1,3.359-.522L8.333,4.7a2.094,2.094,0,0,1,.445,2.328A3.877,3.877,0,0,1,8,8.2c-2.384,2.384,5.417,10.185,7.8,7.8a3.877,3.877,0,0,1,1.173-.781,2.092,2.092,0,0,1,2.328.445Z"></path></g></svg>' + json_info_holder["personal_info"]["phone_number"];
                    phone_number_text.setAttribute("href", "tel:" + json_info_holder["personal_info"]["phone_number"]);
                    email_text.innerHTML        = '<svg class="generic-svg" fill="#ffffff" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 109.294 109.294" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M54.648,48.141L101.063,19.2c-0.505-0.08-1.017-0.132-1.542-0.132H9.775c-0.525,0-1.038,0.054-1.541,0.132L54.648,48.141z"></path> <path d="M57.569,59.331c-0.062,0.04-0.13,0.066-0.194,0.104c-0.067,0.037-0.139,0.073-0.206,0.107 c-0.365,0.188-0.741,0.339-1.125,0.439c-0.04,0.011-0.078,0.017-0.116,0.025c-0.423,0.099-0.848,0.16-1.274,0.16 c-0.001,0-0.003,0-0.004,0s-0.003,0-0.005,0c-0.426,0-0.852-0.06-1.273-0.16c-0.039-0.009-0.079-0.015-0.118-0.025 c-0.384-0.101-0.757-0.252-1.124-0.439c-0.069-0.034-0.139-0.07-0.207-0.107c-0.065-0.037-0.132-0.063-0.196-0.104L0.153,27.172 C0.06,27.715,0,28.271,0,28.843v51.609c0,5.398,4.375,9.774,9.774,9.774H99.52c5.398,0,9.774-4.376,9.774-9.774V28.843 c0-0.572-0.059-1.127-0.154-1.671L57.569,59.331z"></path> </g> </g></svg>' + json_info_holder["personal_info"]["email"];
                    email_text.setAttribute("href", "mailto:" + json_info_holder["personal_info"]["email"]);
                    address_text.innerHTML      = '<svg class="generic-svg" fill="#ffffff" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>home</title> <path d="M19.469 12.594l3.625 3.313c0.438 0.406 0.313 0.719-0.281 0.719h-2.719v8.656c0 0.594-0.5 1.125-1.094 1.125h-4.719v-6.063c0-0.594-0.531-1.125-1.125-1.125h-2.969c-0.594 0-1.125 0.531-1.125 1.125v6.063h-4.719c-0.594 0-1.125-0.531-1.125-1.125v-8.656h-2.688c-0.594 0-0.719-0.313-0.281-0.719l10.594-9.625c0.438-0.406 1.188-0.406 1.656 0l2.406 2.156v-1.719c0-0.594 0.531-1.125 1.125-1.125h2.344c0.594 0 1.094 0.531 1.094 1.125v5.875z"></path> </g></svg>' + json_info_holder["personal_info"]["address"];
                    address_text.setAttribute("href", "https://www.google.com/maps/place/" + json_info_holder["personal_info"]["address"].replace(/ /g, '+'));

                    skills_container.innerHTML = "";
                    json_info_holder["skills"].forEach(skill => {
                        skills_container.appendChild(create_skill_element(
                            skill["skill_name"],
                            skill["level"]
                        ));
                    });

                    cv_jobs_container.innerHTML = "";
                    json_info_holder["work_experience"].forEach(job => {
                        cv_jobs_container.appendChild(create_job_element(
                            job["company_name"],
                            job["job_description"],
                            job["job_title"],
                            job["start_date"],
                            job["end_date"],
                            job["location"]
                        ));
                        console.log(job);
                    });

                    let studies_container = document.createElement('div');
                    studies_container.className = "cv-sections-container";
                    studies_container.setAttribute("id", "studies-container");
                    
                    let studies_container_title = document.createElement('h1');
                    studies_container_title.innerText = "Studies";
                    studies_container_title.setAttribute("style", "text-align: center;");
                    studies_container.appendChild(studies_container_title);
                    
                    cv_jobs_container.appendChild(studies_container);
                    json_info_holder["studies"].forEach(study => {
                        studies_container.appendChild(create_study_element(
                            study["school_name"],
                            study["category"],
                            study["title"],
                            study["additional_description"],
                            study["start_date"],
                            study["end_date"],
                            study["location"],
                            study["vote"]
                        ));
                    });

                    json_info_holder["hobbies"].forEach(hobby => {
                        console.log(hobby);
                    });

                    json_info_holder["courses"].forEach(course => {
                        console.log(course);
                    });

                    var eu_consent_p = document.createElement('p');
                    eu_consent_p.textContent = "Autorizzo il trattamento dei dati personali contenuti nel mio CV ex art. 13 del decreto legislativo 196/2003 e art. 13 del regolamento UE 2016/679 sulla protezione dei singoli cittadini in merito al trattamento dei dati personali";
                    cv_jobs_container.appendChild(eu_consent_p);

                    var signature_element = document.createElement('p');
                    signature_element.className = "signature"
                    signature_element.textContent = json_info_holder["personal_info"]["name"] + " " + json_info_holder["personal_info"]["surname"];
                    cv_jobs_container.appendChild(signature_element);

                    // Nascondiamo l'overlay solo dopo che tutto è stato caricato
                    generic_loading_overlay.style.display = "none";

                } catch (error) {
                    console.error('File JSON non valido:', error);
                    generic_loading_overlay.style.display = "none";
                }
            }, 500); // Ritardo di 500ms per garantire la visibilità dell'overlay
        }
    }

    input.oncancel = (event) => {
        if (event.type == 'cancel' || event.type == 'abort') {
            // Gestione dell'annullamento del caricamento del file
            generic_loading_overlay.style.display = "none";
            console.log('Caricamento annullato: ', event);
        }
    }

    input.click();
} function exportJSON() {
    // Crea un oggetto Blob contenente il JSON
    const blob = new Blob([JSON.stringify(json_info_holder)], {type: 'application/json'});
    
    // Crea un URL temporaneo per il blob
    const url = window.URL.createObjectURL(blob);
    
    // Crea un elemento <a> per il download
    const a = document.createElement('a');
    a.href = url;
    a.download = 'cv_data.json';
    
    // Simula il click per far partire il download
    document.body.appendChild(a);
    a.click();
    
    // Pulisce l'URL e rimuove l'elemento
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
}

function create_skill_element(skill_name, skill_level) {
    let skill_element = document.createElement('div');
    skill_element.className = "personal-info-paragraph";
    
    let skill_name_element = document.createElement('div');
    skill_name_element.innerText = skill_name;
    skill_element.appendChild(skill_name_element);

    let skill_levels_container_element = document.createElement('div');
    skill_levels_container_element.innerHTML = `
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
    `;
    skill_levels_container_element.className = "skill-levels-container";
    skill_element.appendChild(skill_levels_container_element);

    let skill_level_slider_element = document.createElement('input');
    skill_level_slider_element.className = "slider skill-slider";
    skill_level_slider_element.setAttribute("type", "range");
    skill_level_slider_element.setAttribute("min", 1);
    skill_level_slider_element.setAttribute("max", 5);
    skill_level_slider_element.setAttribute("value", skill_level);
    skill_element.appendChild(skill_level_slider_element);

    return skill_element;
}

function create_job_element(company_name, job_description, job_title, start_date, end_date, location) {
    let job_element = document.createElement('div');
    job_element.className = 'job-card';

    let company_name_element = document.createElement('h3');
    company_name_element.innerHTML = 
    '<svg class="generic-svg" fill="#ffffff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M11,3a1,1,0,0,0-1-1H3A1,1,0,0,0,2,3V22h9ZM9,18H4V16H9Zm0-4H4V12H9Zm0-4H4V8H9ZM9,6H4V4H9ZM21,8H14a1,1,0,0,0-1,1V22h9V9A1,1,0,0,0,21,8ZM17,20H15V18h2Zm0-4H15V14h2Zm0-4H15V10h2Zm3,8H18V18h2Zm0-4H18V14h2Zm0-4H18V10h2Z"></path></g></svg>'+
    '<div class="company-name-and-description">'+
        '<div>'+ 
            company_name+
        '</div>'+
        '<div class="job-description">'+
            job_description+ 
        '</div>'+
    '</div>'
    ;
    company_name_element.className = "company-name";
    job_element.appendChild(company_name_element);

    let job_title_element = document.createElement('h4');
    job_title_element.innerHTML =  job_title;
    job_title_element.className = "job-title";
    job_element.appendChild(job_title_element);

    let date_element = document.createElement('p');
    date_element.innerHTML =  start_date.replace(/-/g, ' / ') + ' - ' + end_date.replace(/-/g, ' / ');
    date_element.className = "job-date";
    job_element.appendChild(date_element);

    let location_element = document.createElement('p');
    location_element.innerHTML = '<svg class="generic-svg location-svg" fill="#ffffff" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 124.634 124.634" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M62.713,0.02V0c-0.134,0-0.265,0.008-0.396,0.008S62.055,0,61.921,0v0.02C35.144,0.446,13.565,22.269,13.565,49.148 c0,36.221,42.526,70.601,48.752,75.486c6.227-4.884,48.752-39.266,48.752-75.486C111.069,22.269,89.491,0.446,62.713,0.02z M62.713,70.289c-14.011,0-25.367-11.354-25.367-25.363c0-14.013,11.356-25.369,25.367-25.369s25.368,11.356,25.368,25.369 C88.081,58.935,76.724,70.289,62.713,70.289z"></path> </g> </g></svg>' + location;
    location_element.className = "location-container";
    job_element.appendChild(location_element);

    return job_element;
}

function create_study_element(school_name, category, title, additional_description, start_date, end_date, location, vote) {
    let study_element = document.createElement('div');
    study_element.className = 'job-card';

    let company_name_element = document.createElement('h3');
    company_name_element.innerHTML = 
    '<svg class="generic-svg" fill="#ffffff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M11,3a1,1,0,0,0-1-1H3A1,1,0,0,0,2,3V22h9ZM9,18H4V16H9Zm0-4H4V12H9Zm0-4H4V8H9ZM9,6H4V4H9ZM21,8H14a1,1,0,0,0-1,1V22h9V9A1,1,0,0,0,21,8ZM17,20H15V18h2Zm0-4H15V14h2Zm0-4H15V10h2Zm3,8H18V18h2Zm0-4H18V14h2Zm0-4H18V10h2Z"></path></g></svg>'+
    '<div class="company-name-and-description">'+
        '<div>'+
            school_name+
        '</div>'+
        '<div class="job-description">'+
            category+
        '</div>'+
    '</div>'
    ;
    company_name_element.className = "company-name";
    study_element.appendChild(company_name_element);

    let job_title_element = document.createElement('h4');
    job_title_element.innerHTML =  title + (additional_description ? '<br>' + additional_description : '');
    job_title_element.className = "job-title";
    study_element.appendChild(job_title_element);

    let date_element = document.createElement('p');
    date_element.innerHTML =  start_date.replace(/-/g, ' / ') + ' - ' + end_date.replace(/-/g, ' / ');
    date_element.className = "job-date";
    study_element.appendChild(date_element);

    let vote_element = document.createElement('p');
    vote_element.innerHTML = "Vote: " + vote;
    vote_element.className = "study-vote";
    study_element.appendChild(vote_element);

    let location_element = document.createElement('p');
    location_element.innerHTML = '<svg class="generic-svg location-svg" fill="#ffffff" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 124.634 124.634" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M62.713,0.02V0c-0.134,0-0.265,0.008-0.396,0.008S62.055,0,61.921,0v0.02C35.144,0.446,13.565,22.269,13.565,49.148 c0,36.221,42.526,70.601,48.752,75.486c6.227-4.884,48.752-39.266,48.752-75.486C111.069,22.269,89.491,0.446,62.713,0.02z M62.713,70.289c-14.011,0-25.367-11.354-25.367-25.363c0-14.013,11.356-25.369,25.367-25.369s25.368,11.356,25.368,25.369 C88.081,58.935,76.724,70.289,62.713,70.289z"></path> </g> </g></svg>' + location;
    location_element.className = "location-container";
    study_element.appendChild(location_element);

    return study_element;
}
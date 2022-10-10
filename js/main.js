let specHeading = document.querySelector('.spec-heading');
let eMark = document.querySelector('.exclamation-mark');

// Wiggles the exclamation mark left and right on hover & bolds the heading
//wiggles the mark to the right and bolds the heading
function wiggle(){
    eMark.style.transform = "rotate(20deg)";
    specHeading.style.fontWeight = "800";
    console.log('Exclamation mark wiggle to the right, specHeading is Bolder');
}

//Resets the mark change and heading weight
function wiggleReset(){
    eMark.style.transform = "rotate(340deg)";
    specHeading.style.fontWeight = "400";
    console.log('Exclamation mark & specHeading reset');
}

// Toggles the PC specs visibility
function displaySpecs(){
    var x = document.querySelector('.specs');
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
    console.log('Toggle specs visibility');
}

// Displays the Email form
function displayEmail(){
    document.querySelector('.email-wrap').style.display = "block";
    console.log('Display Email Input');
}

// Displays the Date of Birth form
function displayDob(){
    document.querySelector('.dob-wrap').style.display = "block";
    console.log('Display Dob Input');
}

// Displays the Gender form
function displayGender(){
    document.querySelector('.gender-wrap').style.display = "block";
    console.log('Display Gender Input');
}

// Displays the Favourite Game Question form
function displayFavGame(){
    document.querySelector('.fav-wrap').style.display = "block";
    console.log('Display Fav Game Input');
}

// Displays the Gaming Frequency form
function displayFrequency(){
    document.querySelector('.frequency-wrap').style.display = "block";
    console.log('Display Frequency Input');
}

// Displays the Game Genre form
function displayGenre(){
    document.querySelector('.genre-wrap').style.display = "block";
    console.log('Display Genre Input');
}

// Displays the PC Setup Preference form
function displayPreference(){
    document.querySelector('.preference-wrap').style.display = "block";
    console.log('Display PC Preference Input');
}

// Displays the Enter Button
function displayEnter(){
    document.querySelector('.enter-wrap').style.display = "block";
    console.log('Display Enter Giveaway Button');
}
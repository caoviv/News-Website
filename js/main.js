let specHeading = document.querySelector('.spec-heading');
let eMark = document.querySelector('.exclamation-mark');
function wiggle(){
    eMark.style.transform = "rotate(20deg)";
    specHeading.style.fontWeight = "800";
    console.log('Exclamation mark wiggle to the right, specHeading is Bolder');
}

function wiggleReset(){
    eMark.style.transform = "rotate(340deg)";
    specHeading.style.fontWeight = "400";
    console.log('Exclamation mark & specHeading reset');
}

function displaySpecs(){
    var x = document.querySelector('.specs');
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
    console.log('Toggle specs visibility')
}

function displayEmail(){
    document.querySelector('.email-wrap').style.display = "block";
    console.log('Display Email Input')
}

function displayDob(){
    document.querySelector('.dob-wrap').style.display = "block";
    console.log('Display Dob Input')
}

function displayGender(){
    document.querySelector('.gender-wrap').style.display = "block";
    console.log('Display Gender Input')
}

function displayFavGame(){
    document.querySelector('.fav-wrap').style.display = "block";
    console.log('Display Fav Game Input')
}

function displayFrequency(){
    document.querySelector('.frequency-wrap').style.display = "block";
    console.log('Display Frequency Input')
}

function displayGenre(){
    document.querySelector('.genre-wrap').style.display = "block";
    console.log('Display Genre Input')
}

function displayPreference(){
    document.querySelector('.preference-wrap').style.display = "block";
    console.log('Display PC Preference Input')
}

function displayEnter(){
    document.querySelector('.enter-wrap').style.display = "block";
    console.log('Display Enter Giveaway Button')
}
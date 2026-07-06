// Get the English, Japanese, Tagalog buttons, and body element
const englishButton = document.getElementById('englishButton');
const japaneseButton = document.getElementById('japaneseButton');
const tagalogButton = document.getElementById('tagalogButton');
const body = document.body;

// Track whether a language has been selected
let languageSelected = false;

// Hover effects only if no language has been selected
englishButton.addEventListener('mouseenter', function() {
  if (!languageSelected) {
    body.style.backgroundImage = "url('https://www.travelguide.net/media/new-york.jpeg')";  // New York Image
  }
});

englishButton.addEventListener('mouseleave', function() {
  if (!languageSelected) {
    body.style.backgroundImage = "url('https://marble.com/uploads/materials/946/1280X720/granite_Absolute-Black-Leather_NsBR9BNR45aapXifqLv3.jpg')";  // Default image
  }
});

japaneseButton.addEventListener('mouseenter', function() {
  if (!languageSelected) {
    body.style.backgroundImage = "url('https://offbeatjapan.com/wp-content/uploads/2011/10/tokyo-tower-night-landmark.jpg')";  // Tokyo Tower Image
  }
});

japaneseButton.addEventListener('mouseleave', function() {
  if (!languageSelected) {
    body.style.backgroundImage = "url('https://marble.com/uploads/materials/946/1280X720/granite_Absolute-Black-Leather_NsBR9BNR45aapXifqLv3.jpg')";  // Default image
  }
});

tagalogButton.addEventListener('mouseenter', function() {
  if (!languageSelected) {
    body.style.backgroundImage = "url('https://www.citigroup.com/rcs/v1/siteIds/citigpa/asset/6387810293f43a40814edd0d.jpg')";  // Tagalog Image
  }
});

tagalogButton.addEventListener('mouseleave', function() {
  if (!languageSelected) {
    body.style.backgroundImage = "url('https://marble.com/uploads/materials/946/1280X720/granite_Absolute-Black-Leather_NsBR9BNR45aapXifqLv3.jpg')";  // Default image
  }
});

// Set background and language text on selection
function selectLanguage(language) {
  document.getElementById('languagePage').style.display = 'none'; // Hide the language selection page
  document.getElementById('mainPage').style.display = 'block'; // Show the main page

  const welcomeMessage = document.getElementById('welcomeMessage');
  const movieButton = document.getElementById('movieButton');
  const bookButton = document.getElementById('bookButton');
  const animeButton = document.getElementById('animeButton');
  const musicButton = document.getElementById('musicButton');
 

  // Lock the language selection
  languageSelected = true;

  // Change background based on selected language
  if (language === 'english') {
    body.style.backgroundImage = "url('https://mixmag.asia/assets/uploads/images/_full/Murakami-3.jpeg')";  // New York Image
    
     cargame.textContent = ' Car Game';
    matchinggame.textContent = 'Matching Game';
    contact.textContent = 'Contact';
    returnToLanguageSelector.textContent = 'Language';
    welcomeMessage.textContent = 'Welcome!';
    movieButton.textContent = 'Movie';
    bookButton.textContent = 'Book';
    animeButton.textContent = 'Anime';
    musicButton.textContent ='Music';
  } else if (language === 'japanese') {
    body.style.backgroundImage = "url('https://mixmag.asia/assets/uploads/images/_full/Murakami-3.jpeg')";  // Tokyo Tower Image
    cargame.textContent = ' くるま のゲーム';
    matchinggame.textContent = 'マッチングゲーム';
    contact.textContent = 'れんらくさき';
    returnToLanguageSelector.textContent = '日本語';
    welcomeMessage.textContent = 'ようこそ!';
    movieButton.textContent = ' えいが ';
    bookButton.textContent = '本';
    animeButton.textContent = 'アニメ';
    musicButton.textContent ='音楽';
  } else if (language === 'tagalog') {
    body.style.backgroundImage = "url('https://mixmag.asia/assets/uploads/images/_full/Murakami-3.jpeg')";  // Tagalog Image
    
    cargame.textContent = ' laro ng kotse';
    matchinggame.textContent = 'pagtutugma ng laro';
    contact.textContent = 'Impormasyon';
    returnToLanguageSelector.textContent = 'Wika';
    welcomeMessage.textContent = 'Maligayang pagdating!';
    movieButton.textContent = 'Pelikula';
    bookButton.textContent = 'Libro';
    animeButton.textContent = 'Anime';
    musicButton.textContent = 'Musika';
  }
}

// Reset back to language selection page
function goBackToLanguagePage() {
  document.getElementById('mainPage').style.display = 'none'; // Hide the main page
  document.getElementById('languagePage').style.display = 'block'; // Show the language selection page

  // Unlock hover effects
  languageSelected = false;

  // Revert to the default background
  body.style.backgroundImage = "url('https://mixmag.asia/assets/uploads/images/_full/Murakami-3.jpeg')";
}


//open URL
movieButton.addEventListener('click', function() {
  window.location.href = 'https://cdpn.io/pen/debug/bGXyxYw?authentication_hash=NjkYzZGEnXeM'; 
})

//open URL
bookButton.addEventListener('click', function() {
  window.location.href = 'https://cdpn.io/pen/debug/zYgQeOe?authentication_hash=dGMXWejzZXZk'; 
})

//open URL
animeButton.addEventListener('click', function() {
  window.location.href = 'https://cdpn.io/pen/debug/bGXyzdr?authentication_hash=bZMQWpKOQKdA'; 
})

//open URL
musicButton.addEventListener('click', function() {
  window.location.href = 'https://cdpn.io/pen/debug/wBwzqNM?authentication_hash=yYMyLegYaxek'; 
})





let folders = []; // Array to store folders

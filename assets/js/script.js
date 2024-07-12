const openMenuBtn = document.getElementById('open-menu-btn');
const closeMenuBtn = document.getElementById('close-menu-btn');
const navMenu = document.querySelector('.nav-menu');

openMenuBtn.addEventListener('click', () => {
    navMenu.classList.add('nav-active');
    document.querySelector('nav').classList.add('nav-active');
});

closeMenuBtn.addEventListener('click', () => {
    navMenu.classList.remove('nav-active');
    document.querySelector('nav').classList.remove('nav-active');
});

try {
  window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll-nav', window.scrollY >1);
    document.querySelector('#logo').classList.toggle('window-scroll-logo', window.scrollY >1);
  });
} catch (e) {
  console.log(`Error caught in navbar: ${e}`);
}




try {
  const galleryObject = [
    {
      num: 1,
      id:"image-gallery-1",
      img: "./assets/images/gallery/msd-gallery-img1.jpg"
    },
    {
      num: 2,
      id:"image-gallery-2",
      img: "./assets/images/gallery/msd-gallery-img2.jpg"
    },
    {
      num: 3,
      id:"image-gallery-3",
      img: "./assets/images/gallery/msd-gallery-img3.jpg"
    },
    {
      num: 4,
      id:"image-gallery-4",
      img: "./assets/images/gallery/msd-gallery-img4.jpg"
    },
    {
      num: 5,
      id:"image-gallery-5",
      img: "./assets/images/gallery/msd-gallery-img5.jpg"
    },
    {
      num: 6,
      id:"image-gallery-6",
      img: "./assets/images/gallery/msd-gallery-img6.jpg"
    },
    {
      num: 7,
      id:"image-gallery-7",
      img: "./assets/images/gallery/msd-gallery-img7.jpg"
    },
    {
      num: 8,
      id:"image-gallery-8",
      img: "./assets/images/gallery/msd-gallery-img8.jpg"
    },
    {
      num: 9,
      id:"image-gallery-9",
      img: "./assets/images/gallery/msd-gallery-img9.jpg"
    },
    {
      num: 10,
      id:"image-gallery-10",
      img: "./assets/images/gallery/msd-gallery-img10.jpg"
    },
    {
      num: 11,
      id:"image-gallery-1",
      img: "./assets/images/gallery/msd-gallery-img11.jpg"
    },
    {
      num: 12,
      id:"image-gallery-12",
      img: "./assets/images/gallery/msd-gallery-img12.jpg"
    },
    {
      num: 13,
      id:"image-gallery-13",
      img: "./assets/images/gallery/msd-gallery-img13.jpg"
    },
    {
      num: 14,
      id:"image-gallery-14",
      img: "./assets/images/gallery/msd-gallery-img14.jpg"
    },
    {
      num: 15,
      id:"image-gallery-15",
      img: "./assets/images/gallery/msd-gallery-img15.jpg"
    },
    {
      num: 16,
      id:"image-gallery-16",
      img: "./assets/images/gallery/msd-gallery-img16.jpg"
    },
    {
      num: 17,
      id:"image-gallery-17",
      img: "./assets/images/gallery/msd-gallery-img17.jpg"
    },
    {
      num: 18,
      id:"image-gallery-18",
      img: "./assets/images/gallery/msd-gallery-img18.jpg"
    },
    {
      num: 19,
      id:"image-gallery-19",
      img: "./assets/images/gallery/msd-gallery-img19.jpg"
    },
    {
      num: 20,
      id:"image-gallery-20",
      img: "./assets/images/gallery/msd-gallery-img20.jpg",
    },
    {
      num: 21,
      id:"image-gallery-21",
      img: "./assets/images/gallery/msd-gallery-img21.jpg"
    },
    {
      num: 22,
      id:"image-gallery-22",
      img: "./assets/images/gallery/msd-gallery-img22.jpg"
    },
    {
      num: 23,
      id:"image-gallery-23",
      img: "./assets/images/gallery/msd-gallery-img23.jpg"
    },
    {
      num: 24,
      id:"image-gallery-24",
      img: "./assets/images/gallery/msd-gallery-img24.jpg"
    },
    {
      num: 25,
      id:"image-gallery-25",
      img: "./assets/images/gallery/msd-gallery-img25.jpg"
    },
    {
      num: 26,
      id:"image-gallery-26",
      img: "./assets/images/gallery/msd-gallery-img26.jpg"
    },
    {
      num: 27,
      id:"image-gallery-27",
      img: "./assets/images/gallery/msd-gallery-img27.jpg"
    },
    {
      num: 28,
      id:"image-gallery-28",
      img: "./assets/images/gallery/msd-gallery-img28.jpg"
    },
    {
      num: 29,
      id:"image-gallery-29",
      img: "./assets/images/gallery/msd-gallery-img29.jpg"
    },
    {
      num: 30,
      id:"image-gallery-30",
      img: "./assets/images/gallery/msd-gallery-img30.jpg"
    },
    {
      num: 31,
      id:"image-gallery-31",
      img: "./assets/images/gallery/msd-gallery-img31.jpg"
    },
    {
      num: 32,
      id:"image-gallery-32",
      img: "./assets/images/gallery/msd-gallery-img32.jpg"
    },
    {
      num: 33,
      id:"image-gallery-33",
      img: "./assets/images/gallery/msd-gallery-img33.jpg"
    },
    {
      num: 34,
      id:"image-gallery-34",
      img: "./assets/images/gallery/msd-gallery-img34.jpg"
    },
    {
      num: 35,
      id:"image-gallery-35",
      img: "./assets/images/gallery/msd-gallery-img35.jpg"
    },
    {
      num: 36,
      id:"image-gallery-36",
      img: "./assets/images/gallery/msd-gallery-img36.jpg"
    },
    {
      num: 37,
      id:"image-gallery-37",
      img: "./assets/images/gallery/msd-gallery-img37.jpg"
    },
    {
      num: 38,
      id:"image-gallery-38",
      img: "./assets/images/gallery/msd-gallery-img38.jpg"
    },
    {
      num: 39,
      id:"image-gallery-39",
      img: "./assets/images/gallery/msd-gallery-img39.jpg"
    },
    {
      num: 40,
      id:"image-gallery-40",
      img: "./assets/images/gallery/msd-gallery-img40.jpg"
    },
    {
      num: 41,
      id:"image-gallery-41",
      img: "./assets/images/gallery/msd-gallery-img41.jpg"
    },
    {
      num: 42,
      id:"image-gallery-42",
      img: "./assets/images/gallery/msd-gallery-img42.jpg"
    },
    {
      num: 43,
      id:"image-gallery-43",
      img: "./assets/images/gallery/msd-gallery-img43.jpg"
    },
    {
      num: 44,
      id:"image-gallery-44",
      img: "./assets/images/gallery/msd-gallery-img44.jpg"
    },
    {
      num: 45,
      id:"image-gallery-45",
      img: "./assets/images/gallery/msd-gallery-img45.jpg"
    },
    {
      num: 46,
      id:"image-gallery-46",
      img: "./assets/images/gallery/msd-gallery-img46.jpg"
    },
    {
      num: 47,
      id:"image-gallery-47",
      img: "./assets/images/gallery/msd-gallery-img47.jpg"
    },
    {
      num: 48,
      id:"image-gallery-48",
      img: "./assets/images/gallery/msd-gallery-img48.jpg"
    }
  ]; 
  const gallery = document.querySelector('#image-gallery'); 
  const largeGallery = document.querySelector('#full-screen-gallery'); 
  const largeImgContainer = document.querySelector('#full-screen-image-container'); 
  const galleryBtn = document.querySelector('#gallery-btn'); 
  const closeBtnGallery = document.querySelectorAll('.close-gallery-btn'); 
  const previousBtnGallery = document.querySelector('.previous-gallery-btn'); 
  const nextBtnGallery = document.querySelector('.next-gallery-btn'); 

  let currentImageIndex = 0;
  let totalImages = galleryObject.length;

  window.addEventListener('DOMContentLoaded', function (){
    displayGalleryImages(galleryObject); 
  });

  galleryBtn.addEventListener('click', fullGalleryView);
  gallery.addEventListener('click', fullScreenGallery);

  function displayGalleryImages(images){
    let displayGallery = galleryObject.map(function(image){
      return `<figure>
                <img src=${image.img} alt="MS Dhoni Image" class="gallery-img" id=${image.id}>
              </figure>`;
    });
    displayGallery = displayGallery.join(''); 
    gallery.innerHTML = displayGallery; 
  }

  function fullGalleryView () {
    const visibility = galleryBtn.getAttribute("data-visible"); 
    if (visibility === "false") {        
      galleryBtn.setAttribute("data-visible", true);       
      gallery.classList.add('full-gallery');    
      galleryBtn.innerText = "Show Less"; 
    } else {        
      galleryBtn.setAttribute("data-visible", false); 
      gallery.classList.remove('full-gallery');    
      galleryBtn.innerText = "Show More";    
    }
  }

  function fullScreenGallery (e) {
    var clickedImage = e.target;
    var source = clickedImage.getAttribute('src');
    var currentImage;

    largeGallery.classList.add('full-screen-display'); 
    largeGallery.classList.remove('no-display'); 
    document.querySelector('body').classList.add('overflow-hidden'); 

    galleryObject.forEach(function(image, index) {
      if (source == image.img) {
        currentImageIndex = index;
        currentImage = image;
      }
    });

    largeImgContainer.innerHTML = `
      <figure>
        <img src=${currentImage.img} alt="MS Dhoni Image" class="gallery-img" id=${currentImage.id}>
      </figure>`;
    
    
    previousBtnGallery.addEventListener('click', showPreviousImage);
    nextBtnGallery.addEventListener('click', showNextImage);
  }

  function showPreviousImage() {
    currentImageIndex = (currentImageIndex - 1 + totalImages) % totalImages;
    displayFullScreenImage();
  }

  function showNextImage() {
    currentImageIndex = (currentImageIndex + 1) % totalImages;
    displayFullScreenImage();
  }

  function displayFullScreenImage() {
    const imageToShow = galleryObject[currentImageIndex];
    largeImgContainer.innerHTML = `
      <figure>
        <img src=${imageToShow.img} alt="MS Dhoni Image" class="gallery-img" id=${imageToShow.id}>
      </figure>`;
  }

  closeBtnGallery.forEach(function (closeBtn){
    closeBtn.addEventListener('click', () =>{
      largeGallery.classList.remove('full-screen-display'); 
      largeGallery.classList.add('no-display');
      document.querySelector('body').classList.remove('overflow-hidden'); 
      previousBtnGallery.removeEventListener('click', showPreviousImage);
      nextBtnGallery.removeEventListener('click', showNextImage);
    });
  });
} catch (e) {
  console.log(`Error caught in gallery: ${e}`);
}

try {
  
  const t20iDisplay = document.getElementById('t20i-records'); 
  const odiDisplay = document.getElementById('odi-records');
  const testDisplay = document.getElementById('test-records');
  const iplDisplay = document.getElementById('ipl-records');
  var closeBtnRecords = document.querySelectorAll('.close-record-btn');

  
  t20iDisplay.addEventListener('click', () =>{
    var element = document.querySelector('#t20i-records-display');
    element.classList.add('full-screen-display'); 
    element.classList.add('display-records');
    element.classList.remove('no-display');
    document.querySelector('body').classList.add('overflow-hidden'); 
  });

  
  odiDisplay.addEventListener('click', () =>{
    var element = document.querySelector('#odi-records-display');
    element.classList.add('full-screen-display'); 
    element.classList.add('display-records');
    element.classList.remove('no-display');
    document.querySelector('body').classList.add('overflow-hidden'); 
  });

  testDisplay.addEventListener('click', () =>{
    var element = document.querySelector('#test-records-display');
    element.classList.add('full-screen-display'); 
    element.classList.add('display-records');
    element.classList.remove('no-display');
    document.querySelector('body').classList.add('overflow-hidden'); 
  });

  
  iplDisplay.addEventListener('click', () =>{
    var element = document.querySelector('#ipl-records-display');
    element.classList.add('full-screen-display'); 
    element.classList.add('display-records');
    element.classList.remove('no-display'); 
    document.querySelector('body').classList.add('overflow-hidden'); 
  });

  
  closeBtnRecords.forEach(function (closeBtn){
    closeBtn.addEventListener('click', () =>{
      var parent = closeBtn.parentElement;
      parent.classList.remove('full-screen-display'); 
      parent.classList.remove('display-records');
      parent.classList.add('no-display');
      document.querySelector('body').classList.remove('overflow-hidden'); 
    })
  });
} catch (e) {
    console.log(`Error caught in records: ${e}`);
}



try{
  var biographyBtn = document.querySelectorAll('.biography-detailed-btn'); 
  var closeBtnBiography = document.querySelectorAll('.close-biography-btn'); 

  
  biographyBtn.forEach(function(btn) {
    var parentContainer = btn.parentElement.parentElement;
    var parent = btn.parentElement;
    var details = btn.nextElementSibling;
    var closeBtn = btn.previousElementSibling;

    
    btn.addEventListener('click', function (){
      parentContainer.classList.add('full-screen-display');
      details.classList.remove('no-display');
      closeBtn.classList.remove('no-display');
      btn.classList.add('no-display');    
      document.querySelector('body').classList.add('overflow-hidden'); 
    });  

    
    closeBtn.addEventListener('click', function(){
      parentContainer.classList.remove('full-screen-display');
      details.classList.add('no-display');
      closeBtn.classList.add('no-display');
      btn.classList.remove('no-display');
      document.querySelector('body').classList.remove('overflow-hidden'); 
    });

  });
} catch (e) {
  console.log(`Error caught in biography: ${e}`);
}

try{
  const honourBtn1 = document.querySelector('#national-honour-btn'); 
  const honourBtn2 = document.querySelector('#all-honour-btn');
  const honourBtn3 = document.querySelector('#sporting-honour-btn');
  const honourContent1 = document.querySelector('.national-honours-ul'); 
  const honourContent3 = document.querySelector('.sporting-honours-ul');

  
  honourBtn1.addEventListener('click', function () {
    honourBtn3.classList.remove('clicked-btn');  
    honourBtn2.classList.remove('clicked-btn');
    honourBtn1.classList.add('clicked-btn'); 
    honourContent1.classList.remove('no-display'); 
    honourContent3.classList.add('no-display'); 
  });

  honourBtn2.addEventListener('click', function () {
    honourBtn1.classList.remove('clicked-btn'); 
    honourBtn3.classList.remove('clicked-btn');
    honourBtn2.classList.add('clicked-btn'); 
    honourContent3.classList.remove('no-display'); 
    honourContent1.classList.remove('no-display'); 
  });

  honourBtn3.addEventListener('click', function () {
    honourBtn1.classList.remove('clicked-btn'); 
    honourBtn2.classList.remove('clicked-btn');
    honourBtn3.classList.add('clicked-btn'); 
    honourContent3.classList.remove('no-display'); 
    honourContent1.classList.add('no-display'); 
  });
} catch (e) {
  console.log(`Error caught in honours: ${e}`);
}

try{
  
  const chart1= document.getElementById('captainship').getContext('2d');
  const captainship = new Chart(chart1, {
    type: 'pie',
    data: {
      labels: ["PLAYED","LOST", "WON"],
      datasets: [{
        label: 'WON',
        data: [331, 178, 120],
        backgroundColor: [
          'rgba(0, 119, 182, 0.95)',
          'rgba(247, 88, 66, 0.95)',
          'rgba(247, 201, 75, 0.95)'
        ]
      }]
    },
    options: {
      responsive: false,
      animation: {
        duration: 3500,
        easing: 'easeInOutQuint',
        loop: true
      }
    }    
  });

  const chart2 = document.getElementById('icc-tornaments').getContext('2d');
  const iccTornaments = new Chart(chart2, {
    type: 'pie',
    data: {
      labels: ["PLAYED","RUNNER UP","LOST", "WON"],
      datasets: [{
        label: 'WON',
        data: [7, 3, 1, 4],
        backgroundColor: [
          'rgba(0, 119, 182, 0.95)',
          'rgba(0, 191, 142, 0.95)',
          'rgba(247, 88, 66, 0.95)',        
          'rgba(247, 201, 75, 0.95)',
        ]
      }]
    },
    options: {
      responsive: false,
      animation: {
        duration: 3700,
        easing: 'easeInOutQuint',
        loop: true
      }
    }
  });

  const chart3 = document.getElementById('ipl-league').getContext('2d');
  const iplLeague = new Chart(chart3, {
    type: 'pie',
    data: {
      labels: ["PLAYED","RUNNER UP", "LOST", "WON"],
      datasets: [{
        label: 'WON',
        data: [12, 4, 5, 4],
        backgroundColor: [
          'rgba(0, 119, 182, 0.95)',
          'rgba(0, 191, 142, 0.95)',
          'rgba(247, 88, 66, 0.95)',        
          'rgba(247, 201, 75, 0.95)',
        ]
      }]
    },
    options: {
      responsive: false,
      animation: {
        duration: 3300,
        easing: 'easeInOutQuint',
        loop: true
      }
    }
  });

  const chart4= document.getElementById('boundaries').getContext('2d');
  const boundariesChart = new Chart(chart4, {
    type: 'line',
    data: {
      labels: ["TEST", "ODI", "T20", "IPL"],
      datasets: [{
        label: 'FOUR',
        data: [544, 826, 116, 335],
        
        backgroundColor: [
          'rgba(0, 119, 182, 0.95)',
          'rgba(0, 191, 142, 0.95)',
          'rgba(247, 88, 66, 0.95)',        
          'rgba(247, 201, 75, 0.95)',
        ],
        borderColor: [
          'rgba(0, 119, 182, 1)'
        ]
      },
      {
        label: 'SIX',
        data: [78, 229, 52, 222],
        backgroundColor: [
          'rgba(0, 119, 182, 0.95)',
          'rgba(0, 191, 142, 0.95)',
          'rgba(247, 88, 66, 0.95)',        
          'rgba(247, 201, 75, 0.95)',
        ],
        borderColor: [        
          'rgba(0, 191, 142, 1)'
        ]
      }]    
    },
    options: {
      responsive: false,
      animation: {
        duration: 4000,
        easing: 'easeInOutCirc',
        loop: true
      }
    }
  });

  const chart5 = document.getElementById('avg-str').getContext('2d');
  const AvgStrChart = new Chart(chart5, {
    type: 'line',
    data: {
      labels: ["TEST", "ODI", "T20", "IPL"],
      datasets: [{
        label: 'AVERAGE',
        data: [38.1, 50.6, 37.6, 40.0],
        
        backgroundColor: [
          'rgba(0, 119, 182, 0.95)',
          'rgba(0, 191, 142, 0.95)',
          'rgba(247, 88, 66, 0.95)',        
          'rgba(247, 201, 75, 0.95)'
        ],
        borderColor: [
          'rgba(0, 119, 182, 1)'
        ]
      },
      {
        label: 'STRIKE RATE',
        data: [59.1, 87.6, 126.1, 135.6],
        backgroundColor: [
          'rgba(0, 119, 182, 0.95)',
          'rgba(0, 191, 142, 0.95)',
          'rgba(247, 88, 66, 0.95)',        
          'rgba(247, 201, 75, 0.95)'
        ],
        borderColor: [        
          'rgba(0, 191, 142, 1)'
        ]
      }]    
    },
    options: {
      responsive: false,
      animation: {
        duration: 4500,
        easing: 'easeInOutCirc',
        loop: true
      }
    }
  });

  const chart6 = document.getElementById('50-100').getContext('2d');
  const century = new Chart(chart6, {
    type: 'line',
    data: {
      labels: ["TEST", "ODI", "T20", "IPL"],
      datasets: [{
        label: 'HALF CENTURIES',
        data: [33, 73, 2, 24],      
        backgroundColor: [
          'rgba(0, 119, 182, 0.95)',
          'rgba(0, 191, 142, 0.95)',
          'rgba(247, 88, 66, 0.95)',        
          'rgba(247, 201, 75, 0.95)'
        ],
        borderColor: [
          'rgba(0, 119, 182, 1)'
        ]
      },
      {
        label: 'CENTURIES',
        data: [6, 10, 0, 0],
        backgroundColor: [
          'rgba(0, 119, 182, 0.95)',
          'rgba(0, 191, 142, 0.95)',
          'rgba(247, 88, 66, 0.95)',        
          'rgba(247, 201, 75, 0.95)'
        ],
        borderColor: [        
          'rgba(0, 191, 142, 1)'
        ]
      }]    
    },
    options: {
      responsive: false,
      animation: {
        duration: 5000,
        easing: 'easeInOutCirc',
        loop: true
      }
    }
  });

  const chart7 = document.getElementById('run-scored').getContext('2d');
  const runScoredChart = new Chart(chart7, {
    type: 'doughnut',
    data: {
      labels: ["TEST RUNS", "ODI RUNS", "T20 RUNS", "IPL RUNS"],
      datasets: [{
        label: 'Run Scored',
        data: [4876, 10773, 1617, 4835],
        backgroundColor: [
          'rgba(0, 119, 182, 0.95)',
          'rgba(0, 191, 142, 0.95)',
          'rgba(247, 88, 66, 0.95)',        
          'rgba(247, 201, 75, 0.95)',
        ]
      }]
    },
    options: {
      responsive: false,
      animation: {
        duration: 3250,
        easing: 'easeInOutExpo',
        loop: true
      }
    }
  });

  
  const chart8 = document.getElementById('wicket-keeper').getContext('2d');
  const wicketKeeper = new Chart(chart8, {
    type: 'doughnut',
    data: {
      labels: ["CATCHES", "STUMPINGS","RUN OUTS"],
      datasets: [{
        label: 'WON',
        data: [762, 54, 234],
        backgroundColor: [        
          'rgba(0, 191, 142, 0.95)',
          'rgba(0, 119, 182, 0.95)',      
          'rgba(247, 201, 75, 0.95)'
        ]
      }]
    },
    options: {
      responsive: false,
      animation: {
        duration: 3200,
        easing: 'easeInOutExpo',
        loop: true
      }
    }
  });
} catch (e) {
  console.log(`Error caught in statistics: ${e}`);
}

const personalitiesDots = Array.prototype.slice.call(document.getElementById("personalities-dots").children);
const personalitiesQuotes = Array.prototype.slice.call(document.getElementById("personalities-quotes").children);
const  personalitiesSpeed = 4500;
var currentSlide = 0;
var currentActive = 0;
var personalitiesTimer;

window.onload = function(){
function playSlide(slide){
  for (var k=0; k<personalitiesDots.length; k++){
    personalitiesQuotes[k].classList.remove("active");
    personalitiesQuotes[k].classList.remove("inactive");
    personalitiesDots[k].classList.remove("active");
  }
  if(slide < 0){
    slide = currentSlide = personalitiesQuotes.length - 1;
  }
  if(slide > personalitiesQuotes.length -1){
    slide = currentSlide = 0;
  }
  if(currentActive != currentSlide){
    personalitiesQuotes[currentActive].classList.add("inactive");
  }

  personalitiesQuotes[slide].classList.add("active");
  personalitiesDots[slide].classList.add("active");

  currentActive = currentSlide;
  clearTimeout(personalitiesTimer);
  personalitiesTimer = setTimeout(function () {
    playSlide(currentSlide += 1);
  }, personalitiesSpeed)
}
for (var l=0; l < personalitiesDots.length; l++) {
  personalitiesDots[l].addEventListener("click", function () {
    playSlide(currentSlide = personalitiesDots.indexOf(this));
  })
}
playSlide(currentSlide);
}

AOS.init();






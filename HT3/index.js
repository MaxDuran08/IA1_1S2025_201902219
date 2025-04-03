const showInfo = () => {
    let y = 0;
    const profileButton = document.querySelector("#profile-button");
    const webButton = document.querySelector("#web-button");
    const emailButton = document.querySelector("#email-button");
    const locationButton = document.querySelector("#location-button");
    const text = document.querySelector("#text");
  
    profileButton.setAttribute("visible", true);
    setTimeout(() => {
      webButton.setAttribute("visible", true);
    }, 300);
    setTimeout(() => {
      emailButton.setAttribute("visible", true);
    }, 600);
    setTimeout(() => {
      locationButton.setAttribute("visible", true);
    }, 900);
  
    let currentTab = '';
    webButton.addEventListener('click', function (evt) {
      text.setAttribute("value", "https://softmind.tech");
      currentTab = 'web';
    });
    emailButton.addEventListener('click', function (evt) {
      text.setAttribute("value", "hello@softmind.tech");
      currentTab = 'email';
    });
    profileButton.addEventListener('click', function (evt) {
      text.setAttribute("value", "AR, VR solutions and consultation");
      currentTab = 'profile';
    });
    locationButton.addEventListener('click', function (evt) {
      console.log("loc");
      text.setAttribute("value", "Vancouver, Canada | Hong Kong");
      currentTab = 'location';
    });
  
    text.addEventListener('click', function (evt) {
      if (currentTab === 'web') {
        window.location.href = "https://softmind.tech";
      }
    });
  }
  
  AFRAME.registerComponent('mytarget', {
    init: function () {
      this.el.addEventListener('targetFound', event => {
        console.log("target found");
        showInfo();
      });
      this.el.addEventListener('targetLost', event => {
        console.log("target lost");
      });
    }
  });
  
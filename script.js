let nav = document.querySelector("#nav-menu")
const menu = document.querySelector(".ri-menu-line")
const closebtn = document.querySelector(".ri-close-circle-line")
const Open = () =>{
    menu.style.display = "none"
    closebtn.style.display = "block"
    nav.style.display = "flex"
}
const Close = () =>{
    closebtn.style.display = "none"
        menu.style.display = "flex"
    nav.style.display = "none"
}

  const roles = [
      "FrontEnd Dev!",
      "Data Analyst!",
      "Excel Pro!",
      "Python Dev!"
    ];

    const colors = [
      "#FF6B6B", // red
      "#6BCB77", // green
      "#4D96FF", // blue
      "#FFC300", // yellow
      "#D885FF"  // purple
    ];

    let index = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typingSpeed = 100;
    const erasingSpeed = 50;
    const delayBetween = 2000;
    const roleText = document.getElementById("role-text");

    function type() {
      const currentText = roles[index];
      const currentColor = colors[index];

      if (isDeleting) {
        roleText.textContent = currentText.substring(0, charIndex--);
        if (charIndex < 0) {
          isDeleting = false;
          index = (index + 1) % roles.length;
          setTimeout(type, typingSpeed);
        } else {
          setTimeout(type, erasingSpeed);
        }
      } else {
        roleText.textContent = currentText.substring(0, charIndex++);
        roleText.style.color = currentColor;
        if (charIndex > currentText.length) {
          isDeleting = true;
          setTimeout(type, delayBetween);
        } else {
          setTimeout(type, typingSpeed);
        }
      }
    }

    type(); // start
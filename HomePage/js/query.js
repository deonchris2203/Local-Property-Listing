function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
}

function redirectToBuy(){
  window.location.href = "/"
}


function redirectToSell(){
  window.location.replace("D:/Local Property Renting/Sell-Upload/html/new.html");
}
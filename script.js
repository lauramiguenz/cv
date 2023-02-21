document.addEventListener('DOMContentLoaded', function() {
  var h2s = document.getElementsByTagName('h2');
  for (var i = 0; i < h2s.length; i++) {
    h2s[i].addEventListener('mouseover', function() {
      this.style.color = 'salmon';
    });
    h2s[i].addEventListener('mouseout', function() {
      this.style.color = "#193154";
    });
  }

  function showAlert() {
    alert("TP Final Argentina Programa 4.0 - FrontEnd: CV");
  }

  showAlert();
});

//No soy muy buena con JS//
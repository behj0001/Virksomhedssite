function skiftSektion(nyId) {
  const aktiv = document.querySelector('.fade.show');
  const ny = document.getElementById(nyId);

  if (aktiv) {
    aktiv.classList.remove('show');
    aktiv.classList.add('hide');
    setTimeout(() => {
      aktiv.classList.remove('hide');
      ny.classList.add('show');
    }, 500);
  } 
}

// Knappetriggere
function bekymret() { skiftSektion('bekymret'); }
function lært() { skiftSektion('lært'); }
function bedste() { skiftSektion('bedste'); }
function værste() { skiftSektion('værste'); }
function råd() { skiftSektion('råd'); }
function tilbage() { skiftSektion('startside'); }
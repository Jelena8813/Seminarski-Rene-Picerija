function validacijaForme() {
    var username = document.getElementById('ime').value; 
    var password = document.getElementById('lozinka').value;

    if (username == "") {
        alert("Unesite korisničko ime!");
    }
    else if (password == ""){
      alert("Unesite korisničku lozinku!");
    }
};
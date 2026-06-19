document.addEventListener("DOMContentLoaded", function () {

    let formulaire = document.querySelector("form");

    if (formulaire) {

        formulaire.addEventListener("submit", function (event) {

            event.preventDefault();

            alert("Votre inscription a été enregistrée avec succès !");

        });

    }

});

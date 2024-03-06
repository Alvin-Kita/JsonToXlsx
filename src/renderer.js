const { app } = require('electron');
const fs = require('fs');
const path = require('path');

const dropzone = document.getElementById("dropzone");
const dropInfoDiv = document.getElementById("dropInfo");
const btnConvert = document.getElementById("btnConvert");

dropzone.addEventListener("dragover", (e) => {
    e.stopPropagation();
    e.preventDefault();
});

dropzone.addEventListener("drop", async (e) => {
    e.stopPropagation();
    e.preventDefault();

    const files = e.dataTransfer.files;

    for (const file of files) {
        const isFile = await window.api.isFile(file.path);
        console.log(file, isFile);

        // Affichage des attributs du fichier
        const fileName = file.name;
        const filePath = file.path;
        const fileType = file.type;

        //TODO: Voir si potentielles failles avec innerHTML
        dropInfoDiv.innerHTML += `
            Informations sur le fichier déposé : <br>
            <b>Nom</b> : ${fileName}<br>
            <b>Chemin</b> : ${filePath}<br>
            <b>Type</b> : ${fileType}`;

        btnConvert.classList.remove("hide");

        // Lecture du contenu du fichier JSON


    }
});
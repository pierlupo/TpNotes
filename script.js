let student = document.querySelector('.window0');
let mat = document.querySelector('.window1');
let affichNote = document.querySelector('.window2');

let btn1 = true, btn2 = true, btn3 = true;

onOffElev.addEventListener('click', () => {
    student.classList.add("hidden");
    if(btn1){
        onOffElev.value = "OFF";
        btn1 = false;
    }else {
        onOffElev.value = "ON";
        btn1 = true;
        student.classList.remove("hidden");
    }
})

console.log(student);
onOffMat.addEventListener('click', () => {
    mat.classList.add("hidden");
    if(btn2){
        onOffMat.value = "OFF";
        btn2 = false;
    }else {
        onOffMat.value = "ON";
        btn2 = true;
        mat.classList.remove("hidden");
    }
})

onOffNote.addEventListener('click', () => {
    affichNote.classList.add("hidden");
    if(btn3){
        onOffNote.value = "OFF";
        btn3 = false;
    }else {
        onOffNote.value = "ON";
        btn3 = true;
        affichNote.classList.remove("hidden");
    }
})


// function changeText(){
//     let element = document.getElementsByClassName("onOff");
//     console.log(element);
//     if (element.value=="ON") 
//         element.value = "OFF";
//     else 
//         element.value = "ON";
// }

const result = document.querySelector('#result');

let message = "", nom, prenom, matiere;

Valider = () => {
    nom = document.querySelector('#ajoutNom').value;
    prenom = document.querySelector('#ajoutPrenom').value;
    Afficher();
}

/*ValiderajoutMat = () => {
    mat = document.querySelector('#ajoutMatiere').value;
    Afficher();
}*/

Afficher = () => {
    //result.textContent += `<h3> Vous avez saisi : ${nom} ${prenom} </h3>`
    result.innerHTML += `<h3> Vous avez saisi : ${nom} ${prenom} </h3>`
}

// select.addEventListener("change", () => {
    //     let moyMat = select.value;
    //     if(moyMat != 0){
        //         output.textContent = `La moyenne de la classe en ${matiere} est de : ${moyMat}`;
        //     }else {
            //         output.textContent="";
            //     }
            
            // });
            //
            // const select = document.getElementById("mySelect");
            
            // select.addEventListener("change", () => {
                //     console.log(select.value);
                // });
                
                let etudiants = [ 
                    { 
                        prenom: "John", 
                        nom: "Smith", 
                        notes: {
                            'Français':[16,15,9,12],
                            'Mathématiques':[15,12,14,8]
                        }
                    }, 

                    { 
                        prenom: "Drew", 
                        nom: "Baxter", 
                        notes : {
                            'Français':[12,6,5,12],
                            'Mathématiques':[13,8,10,8]
                        }
                            
                        } 
                    
                ]; 
                
                let matieres = ["Français", "Anglais", "Maths", "Histoire"];
                
                const btn = document.getElementById('valider0');
                let mySelect = document.getElementById('select_elev');
                //let mySelectMat = document.getElementById('mat_select_0');
                console.log(mySelect.innerHTML);
                //console.log(mySelectMat.innerHTML);
                // for(let i = 0; i<etudiants.length; i++){
                    //         console.log(etudiants[i].prenom +" "+ etudiants[i].nom)
                    
                    // }
                    
                    const refreshEleveSelect = () => {
                        mySelect.innerHTML =`<option value="0">Sélectionnez un élève</option>`;
                        etudiants.forEach(eleve => {
                            //console.log(eleve.nom);
                            select_elev.innerHTML += `<option value ="${etudiants.indexOf(eleve)+1}"> ${eleve.prenom} ${eleve.nom}</option>`;
                        });
                    }
                    refreshEleveSelect();

                    // const refreshMatSelect = () => {
                    //     mySelectMat.innerHTML =`<option value="0">Sélectionnez une matière</option>`;
                    //     matieres.forEach(eleve => {
                    //         //console.log(eleve.nom);
                    //         mySelectMat.innerHTML += `<option value ="${etudiants.indexOf(eleve)+1}"> ${eleve.matiere} </option>`;
                    //     });
                    // }
                    // refreshMatSelect();

                    btn.addEventListener("click", () => {

                        let newName = document.getElementById("ajoutNom").value;
                        let newPrenom = document.getElementById("ajoutPrenom").value;
                       // let newMat = document.getElementById("ajoutMatiere").value;
                        etudiants.push({
                            nom : newName,
                            prenom : newPrenom,
                           // matières : newMat
                        })

                        
                        console.table(etudiants);
                        // newPrenom.textContent = "";
                        // newName.value = "";
                        
                    });
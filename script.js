let eleves = document.querySelector('.window0');
let mat = document.querySelector('.window1');
let affichNote = document.querySelector('.window2');

let btn1 = true, btn2 = true, btn3 = true;

onOffElev.addEventListener('click', () => {
    eleves.classList.add("hidden");
    if(btn1){
        onOffElev.value = "OFF";
        btn1 = false;
    }else {
        onOffElev.value = "ON";
        btn1 = true;
        eleves.classList.remove("hidden");
    }
})

console.log(eleves);
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

const result = document.querySelector('#result');

let message = "", nom, prenom;

Valider = () => {
    nom = document.querySelector('#ajoutNom').value;
    prenom = document.querySelector('#ajoutPrenom').value;
    //mati = document.querySelector('ajoutMatiere').value;
    Afficher();
}


Afficher = () => {
    //result.textContent += `<h3> Vous avez saisi : ${nom} ${prenom} </h3>`
    result.innerHTML += `<h3> Vous avez ajouté l'élève : ${prenom} ${nom} </h3>`
    //result.texContent = "";
}

                let etudiants = [ 
                    { 
                        prenom: "john", 
                        nom: "smith", 
                        notes: {
                            'français':[16,15,9,12],
                            'mathématiques':[15,12,14,8]
                        }
                    }, 

                    { 
                        prenom: "drew", 
                        nom: "baxter", 
                        notes : {
                            'français':[12,6,5,12],
                            'mathématiques':[13,8,10,8]
                        }
                            
                        } 
                    
                ]; 
                
                let matieres = ["français", "mathématiques","anglais", "histoire"];

                console.table(matieres);

                let btnAjoutStudent = document.getElementById('valider0');
                console.log(btnAjoutStudent);

                let btnAjoutMat = document.getElementById('valider1');
                let btnAjoutNote = document.getElementById('valider2');
                let mySelect = document.getElementById('select_elev');
                let mySelectMat = document.getElementById('mat_select');
                let selectAll = document.getElementById('select_elevAll');
                let selectAllMat = document.getElementById('mat_selectAll');

                console.log(mySelect.innerHTML);

                const capitalize = (value) => {
                    // console.log(value);
                    value = value.toLowerCase(); 
                    return value.replace(value[0],value[0].toUpperCase());
                }
                    
                    const refreshSelect = () => {
                        mySelect.innerHTML =`<option value="0">Sélectionnez un élève</option>`;
                        selectAll.innerHTML =`<option value="0">Toute la classe</option>`;
                        etudiants.forEach(eleve => {
                            //console.log(eleve.nom);
                            select_elev.innerHTML += `<option value ="${etudiants.indexOf(eleve)+1}">${capitalize(eleve.prenom)} ${capitalize(eleve.nom)}</option>`;
                            selectAll.innerHTML += `<option value ="${etudiants.indexOf(eleve)+1}">${capitalize(eleve.prenom)} ${capitalize(eleve.nom)}</option>`;
                        });
                        mySelectMat.innerHTML =`<option value="0">Sélectionnez une matière</option>`;
                        selectAllMat.innerHTML =`<option value="0">Toutes les matières</option>`;
                            matieres.forEach(matiere => {
                                //console.log();
                                mySelectMat.innerHTML += `<option value ="${matieres.indexOf(matiere)+1}"> ${capitalize(matiere)} </option>`;
                                selectAllMat.innerHTML += `<option value ="${matieres.indexOf(matiere)+1}"> ${capitalize(matiere)} </option>`;
                            });
                    }
                    refreshSelect();

                    btnAjoutStudent.addEventListener("click", () => {
                        
                        let newName = document.getElementById("ajoutNom").value;
                        let newPrenom = document.getElementById("ajoutPrenom").value;
                       // let newMat = document.getElementById("ajoutMatiere").value;

                       const newStudent = {
                        nom : newName, // document.getElementById("ajoutNom").value;
                        prenom : newPrenom, // document.getElementById("ajoutPrenom").value;
                       }
                        // etudiants.push({
                        //     nom : newName,
                        //     prenom : newPrenom,
                        //    // matières : newMat
                        // })

                        etudiants.push(newStudent);

                        refreshSelect();
                        
                        console.table(etudiants);
                        // newPrenom.textContent = "";
                        // newName.value = "";
                        
                    });

                    btnAjoutMat.addEventListener("click", () => {
                        
                       const newMat = document.getElementById("ajoutMatiere").value.toLowerCase();
 
                       matieres.push(newMat);

                       refreshSelect();
                       
                       console.table(matieres);
                       // newPrenom.textContent = "";
                       // newName.value = "";
                       
                   });

                   btnAjoutNote.addEventListener("click", () => {
                        
                   const newNote = Number(document.getElementById("notes").value);
                   const student = etudiants[(document.querySelector("#select_elev").value)-1];
                   console.log(student)
                    
                   const matAjout = document.querySelector("#mat_select").value;

                   //console.log(matAjout)
                   const mat = matieres[matAjout-1];
                   //console.log(matieres[matAjout-1]);
                   //console.log(student.notes['français']);

                   student.notes[mat].push(newNote);
                   console.table(matieres);
                   // newPrenom.textContent = "";
                   // newName.value = "";
                   
               });


            const tableDatas = document.querySelector('#table-data');

            selectAll.addEventListener("change", () =>{
                refreshTableElements();
                refreshAverageGrade();
            })

            selectAllMat.addEventListener("change", () =>{
                refreshTableElements();
                refreshAverageGrade();
            })

            const averageGradeOutput = document.getElementById('average_output');

            const calculateAverage = (notes) =>{
                let sum = 0;
                for(const note of notes) sum += note;
                return (sum / grades.length).toFixed(1);
            }

            const refreshAverageGrade = () =>{
                console.log("refresh grade");
                let currentGrades = [];
            }


            const refreshTableElements = () => {

                console.log('refresh table');
                tableDatas.innerHTML= "";
                


                if(selectAll.value == 0 && selectAllMat.value == 0){
                    console.log("cas toute la classe et toutes les matières");
                    for(const student of etudiants){
                        for(const matiere in student.notes){
                            for(const note of student.notes[matiere]){
                                tableDatas.innerHTML += 
                                `<tr>
    
                                <td>${student.nom}</td>
                                <td>${student.prenom}</td>
                                <td>${matiere}</td>
                                <td>${note}</td>
    
                                </tr>
    
                                `
                            }
    
                        }
                    
                    }

                }else if(selectAllMat.value == 0){
                    console.log("aucune matière");
                    const student = etudiants[(document.querySelector("#select_elevAll").value)-1];
                    //console.log((document.querySelector("#select_elevAll").value)-1);
                    for(const matiere in student.notes){
                        for(const note of student.notes[matiere]){
                            tableDatas.innerHTML +=

                             `  <tr>
                                <td>${student.nom}</td>
                                <td>${student.prenom}</td>
                                <td>${matiere}</td>
                                <td>${note}</td>
                                </tr>
                            `
                    }
                    }
                
                }else if(selectAll.value == 0){
                    console.log("aucun étudiant");
                    const student = etudiants[(document.querySelector("#select_elevAll").value)-1];
                    const matAjout = document.querySelector("#mat_selectAll").value;
                    const mat = matieres[matAjout-1]
                    for (const student of etudiants){
                        for(const note of student.notes[mat]){
                            tableDatas.innerHTML += 

                             `   
                                 <tr>
                                 <td>${student.nom}</td>
                                 <td>${student.prenom}</td>
                                 <td>${matAjout}</td>
                                 <td>${note}</td>
                                 </tr>

                            `
                    }
                    }

                }else{
                    console.log("un étudiant et une matière");
                    const student = etudiants[(document.querySelector("#select_elevAll").value)-1];
                    const matAjout = document.querySelector("#mat_selectAll").value;
                    const mat = matieres[matAjout-1]

                    for(const note of student.notes[mat]){
                        tableDatas.innerHTML += 

                        `
                        <tr>
                        <td>${student.nom}</td>
                        <td>${student.prenom}</td>
                        <td>${mat}</td>
                        <td>${note}</td>
                        </tr>

                        `

                    }
                    
                }

            };
                        
    
            refreshSelect();                        
                    
                    
                    




            

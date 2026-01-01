// let notes = JSON.parse(localStorage.getItem("notes")) || [];
// const notelist = document.getElementById("noteslist");
// const noteTitle = document.getElementById("noteTitle");
// const noteText = document.getElementById("noteText");
// const editIndex = document.getElementById("editIndex");
// const saveBtn = document.getElementById("saveBtn");


// function displayNotes() {
//     notelist.innerHTML = "";
//     notes.forEach(noteText, i => {
//         notelist.innerHTML += `
//             <div class="col-md-4">
//                 <div class="note-card"${note.colors}>
//                     <div class="note-action">
//                         <i class="bi bi-pencil-square onclick="editNote(${i})></i>
//                         <i class="bi bi-trash" onclick="deleteNote(${i})"></i>
//                     </div>
//                     <h6>${note.title}</h6>
//                     <p>${note.text}</p>
//                 </div>
//             </div> `;

//     })
//         ;
// }

// saveBtn.addEventListener("click", () => {
//     const title = noteTitle.value.trim();
//     const text = noteText.value.trim();
//     if (!title || !text) return alert("plase fill all fields");


//     const colors = ["bg-yellow", "bg-blue", "bg-red"];
//     const random = colors[Math.floor(Math.random() * colors.length)];
//     const idx = editIndex.value;
//     if (idx == +"") {
//         note.push({ title, text, colors: random });
//     } else {
//         notes[idx] = { title, text, colors: random };
//     }
//     localStorage.setItem("notes", JSON.stringify(notes));
//     noteTitle.value = "",
//         noteText.value = "",
//         editIndex.value = "",
//         document.querySelector(".btn-close").click();
//     displayNotes();
// });

// function editNote(i) {
//     noteTitle.value = notes[i].title;
//     noteText.value = note[i].text;
//     editIndex.value = i;

//     document.getElementById("modalTitle").innerText = "Edit Notes";
//     new bootsrap.modal(document.getElementById("noteModal")).show();
// }
// function deleteNote(i) {
//     notes.splice(i, i);
//     localStorage.setItem("notes", JSON.stringify(notes));
//     displayNotes();

// }
// displayNotes();


let notes = JSON.parse(localStorage.getItem("notes")) || [];

const notelist = document.getElementById("noteslist");
const noteTitle = document.getElementById("noteTitle");
const noteText = document.getElementById("noteText");
const editIndex = document.getElementById("editIndex");
const saveBtn = document.getElementById("saveBtn");

// ---------------- DISPLAY NOTES ----------------
function displayNotes() {
    notelist.innerHTML = "";

    notes.forEach((note, i) => {                     // ✅ CHANGED
        notelist.innerHTML += `
            <div class="col-md-4">
                <div class="note-card ${note.colors}"> <!-- ✅ CHANGED -->
                    <div class="note-action">
                        <i class="bi bi-pencil-square" onclick="editNote(${i})"></i> <!-- ✅ CHANGED -->
                        <i class="bi bi-trash" onclick="deleteNote(${i})"></i>       <!-- ✅ CHANGED -->
                    </div>
                    <h6>${note.title}</h6>
                    <p>${note.text}</p>
                </div>
            </div>
        `;
    });
}

// ---------------- SAVE NOTE ----------------
saveBtn.addEventListener("click", () => {
    const title = noteTitle.value.trim();
    const text = noteText.value.trim();

    if (!title || !text) {
        alert("Please fill all fields");
        return;
    }

    const colors = ["bg-yellow", "bg-blue", "bg-red"];
    const random = colors[Math.floor(Math.random() * colors.length)];

    const idx = editIndex.value;

    if (idx === "") {                               // ✅ CHANGED
        notes.push({ title, text, colors: random }); // ✅ CHANGED
    } else {
        notes[idx] = { title, text, colors: random };
    }

    localStorage.setItem("notes", JSON.stringify(notes));

    noteTitle.value = "";
    noteText.value = "";
    editIndex.value = "";

    document.querySelector(".btn-close").click();
    displayNotes();
});

// EDIT NOTE ----------------
function editNote(i) {
    noteTitle.value = notes[i].title;
    noteText.value = notes[i].text;                 // ✅ CHANGED
    editIndex.value = i;

    document.getElementById("modalTitle").innerText = "Edit Notes";

    new bootstrap.Modal(                            // ✅ CHANGED
        document.getElementById("noteModal")
    ).show();
}

// ---------------- DELETE NOTE ----------------
function deleteNote(i) {
    notes.splice(i, 1);                             // ✅ CHANGED
    localStorage.setItem("notes", JSON.stringify(notes));
    displayNotes();
}

displayNotes();



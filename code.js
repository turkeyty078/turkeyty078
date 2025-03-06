document.addEventListener("DOMContentLoaded", function () {
    let noteArea = document.getElementById("note");
    let saveBtn = document.getElementById("saveBtn");
    let clearBtn = document.getElementById("clearBtn");
    let downloadBtn = document.getElementById("downloadBtn");

    // Load saved note when page loads
    noteArea.value = localStorage.getItem("note") || "";

    // Save button click event
    saveBtn.addEventListener("click", function () {
        localStorage.setItem("note", noteArea.value);
        alert("Note saved!");
    });

    // Clear button click event
    clearBtn.addEventListener("click", function () {
        if (confirm("Are you sure you want to clear the note?")) {
            noteArea.value = "";
            localStorage.removeItem("note");
        }
    });

    // Download button click event
    downloadBtn.addEventListener("click", function () {
        let text = noteArea.value;
        let blob = new Blob([text], { type: "text/plain" });
        let link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = "note.txt";
        link.click();
    });
});



// Accordion Sidebar Logic
function toggleAccordion(btn) {
    if (btn.classList.contains('disabled')) return;

    const item = btn.parentElement;
    const content = item.querySelector('.accordion-content');

    // Toggle active state
    if (item.classList.contains('active')) {
        item.classList.remove('active');
        content.classList.remove('show');
    } else {
        // Optional: Close other open accordions if strictly 1 open at a time is wanted
        // document.querySelectorAll('.accordion-item.active').forEach(openItem => {
        //     openItem.classList.remove('active');
        //     openItem.querySelector('.accordion-content').classList.remove('show');
        // });

        item.classList.add('active');
        content.classList.add('show');
    }
}

// Post-it Note Logic
let currentOpenNote = null;

function toggleNote(noteId) {
    const noteElement = document.getElementById(noteId);

    // If clicking the same note that's open, just close it
    if (currentOpenNote === noteElement) {
        closeNote();
        return;
    }

    // Close previously open note if any
    if (currentOpenNote) {
        currentOpenNote.classList.remove('open');
    }

    // Open new note
    noteElement.classList.add('open');
    currentOpenNote = noteElement;
}

function closeNote() {
    if (currentOpenNote) {
        currentOpenNote.classList.remove('open');
        currentOpenNote = null;
    }
}

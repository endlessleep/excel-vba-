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

// Sidebar Toggle Logic


function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const mainContent = document.querySelector('.main-content');
    const menuToggle = document.querySelector('.menu-toggle');
    
    if(sidebar) {
        sidebar.classList.toggle('closed');
        if (sidebar.classList.contains('closed')) {
            if(menuToggle) menuToggle.style.display = 'block';
        } else {
            if(menuToggle) menuToggle.style.display = 'none';
        }
    }
    if(mainContent) mainContent.classList.toggle('expanded');
}

// Initialize button state immediately
document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.querySelector('.sidebar');
    const menuToggle = document.querySelector('.menu-toggle');
    if(sidebar && menuToggle) {
        if(sidebar.classList.contains('closed')) {
            menuToggle.style.display = 'block';
        } else {
            menuToggle.style.display = 'none';
        }
    }
});

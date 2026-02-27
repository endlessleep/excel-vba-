function toggleFolder(btn) {
    const folder = btn.parentElement;

    if (folder.classList.contains('active')) {
        folder.classList.remove('active');
        folder.querySelector('.folder-content').classList.remove('show');
    } else {
        folder.classList.add('active');
        folder.querySelector('.folder-content').classList.add('show');
    }
}

function switchTab(btn, sectionId, tabType) {
    // 1. Get the container for this section
    const sectionContainer = btn.closest('.concept-card');

    // 2. Remove 'active' class from all buttons in this section
    const buttons = sectionContainer.querySelectorAll('.segment-btn');
    buttons.forEach(b => b.classList.remove('active'));

    // 3. Add 'active' class to the clicked button
    btn.classList.add('active');

    // 4. Hide all tab panes in this section
    const panes = sectionContainer.querySelectorAll('.tab-pane');
    panes.forEach(p => p.classList.remove('active'));

    // 5. Show the targeted tab pane based on the sectionId and tabType
    const targetPane = document.getElementById(`${sectionId}-${tabType}`);
    targetPane.classList.add('active');
}

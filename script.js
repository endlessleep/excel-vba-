function toggleTheory(id, btn) {
    const theoryDiv = document.getElementById(id);
    const chevron = btn.querySelector('.chevron');
    
    if (theoryDiv.classList.contains('show')) {
        theoryDiv.classList.remove('show');
        chevron.style.transform = 'rotate(0deg)';
        btn.classList.remove('active');
    } else {
        theoryDiv.classList.add('show');
        chevron.style.transform = 'rotate(180deg)';
        btn.classList.add('active');
    }
}

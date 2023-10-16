const users = document.querySelectorAll('.user');

users.forEach(user => {
    const icon = user.querySelector('.icon');
    const answer = user.querySelector('.answer');

    user.addEventListener('click', () => {
       
        if (icon.classList.contains('active')) {
            icon.classList.remove('active');
            answer.style.maxHeight = null;
        } else {
            icon.classList.add('active');
            answer.style.maxHeight = answer.scrollHeight + 'px';
        }
    })
})
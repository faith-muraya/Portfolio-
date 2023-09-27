const bookingElement = document.getElementById('booking');

bookingElement.addEventListener("click", () => {
    alert('Thankyou for booking us')
})

const names = document.querySelectorAll('.me');

names.forEach(name => {
    const originalText = name.textContent;

    name.addEventListener('mouseover', () => {
        name.textContent = `Hello My Name is ${originalText}`;
    });

    name.addEventListener('mouseout', () => {
        name.textContent = originalText;
    });
});



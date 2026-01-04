function typeText(elementId, speed = 100) {
    const element = document.getElementById(elementId);
    const text = element.textContent;
    element.textContent = "";
    let index = 0;

    function type() {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            index++;
            setTimeout(type, speed);
        }
    }

    type();
}
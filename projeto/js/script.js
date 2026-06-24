function agendar() {
    alert("Entre em contato pelo WhatsApp para agendar sua avaliação!");
}

function toggleFAQ() {
    const box = document.getElementById("faqBox");

    if (box.style.display === "none" || box.style.display === "") {
        box.style.display = "block";
    } else {
        box.style.display = "none";
    }
}
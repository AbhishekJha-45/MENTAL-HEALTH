document.getElementById('logout').addEventListener('click', () => {
    alert("Successfully Logeed out");
    window.location.href = "index.html";
})

const chat = document.getElementById('community');
chat.addEventListener("click", () => {
    window.location = "http://localhost:2019/";
})
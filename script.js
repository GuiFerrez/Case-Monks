function Mobile() {
    let menuBar = document.querySelector(".menu-bar");
    let menuIcon = document.querySelector(".menu-icon");

    if (menuBar.classList.contains("open")) {
        menuBar.classList.remove("open");
        menuIcon.src = "assets/img/menu_white.png";
    } else {
        menuBar.classList.add("open");
        menuIcon.src = "assets/img/close_white.png";
    }
}


function Soma() {
    const result = 1055;

    const userValue = document.getElementById("value").value;

    const messageDiv = document.getElementById("message");

    if (!userValue) {
        messageDiv.textContent = "O campo resultado está vazio!!!";
    } else {

        if(parseFloat(userValue) === result){
            messageDiv.textContent = "O código foi verificado com sucesso!";
        } else {
            messageDiv.textContent = "O Código está incorreto, tente novamente.";
        }
    }

}



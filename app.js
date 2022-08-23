document.getElementById('card-container').addEventListener("click", function (event) {
    const buttonElement = event.target;
    const buttonText = event.target.innerText;
    console.log("clivled kdkdke")
    if (isNaN(buttonText)) {
        if (buttonText === "SELECT") {
            const parentElement = buttonElement.parentNode;
            const playerName = parentElement.firstElementChild.nextElementSibling.innerText;
            console.log(playerName)
            const li = document.createElement("li");
            li.innerText = playerName;
            li.classList.add("players-list");
            const selectedPlayerList = document.getElementById('selected-players-list')
            selectedPlayerList.appendChild(li);
            const liCount = document.getElementsByClassName('players-list').length;
            console.log(liCount)
            if(liCount > 5){
                alert('you do not select more than 5 players')
                selectedPlayerList.removeChild(li);
                buttonElement.style.backgroundColor = "purple";
            }else{
            }
            if(playerName ){
                buttonElement.setAttribute('disabled', true);
                buttonElement.style.backgroundColor = "red";
                if(liCount > 5){{
                    buttonElement.style.backgroundColor = "#015196";
                    buttonElement.removeAttribute('disabled');
                }}            
            }   
            }
    }
});
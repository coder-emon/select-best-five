function getAmount(elementId){
    const elementValueString = document.getElementById(elementId).value;
    if(isNaN(elementValueString)){
        alert("Plase Provide a valid amount")
    }else{
        const elementValue = parseInt(elementValueString);
        return elementValue;
    }
}
function setAmount(elementId, amount){
    const element = document.getElementById(elementId);
    element.innerText = amount;
}
document.getElementById('card-container').addEventListener("click", function (event) {
    const buttonElement = event.target;
    const buttonText = event.target.innerText;
    if (isNaN(buttonText)) {
        if (buttonText === "SELECT") {
            const parentElement = buttonElement.parentNode;
            const playerName = parentElement.firstElementChild.nextElementSibling.innerText;
            const li = document.createElement("li");
            li.innerText = playerName;
            li.classList.add("players-list");
            const selectedPlayerList = document.getElementById('selected-players-list')
            selectedPlayerList.appendChild(li);
            const liCount = document.getElementsByClassName('players-list').length;
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
            document.getElementById('player-cost-btn').addEventListener('click', function () {
                const playerCost = getAmount("player-cost");
                const totalPlayerCost = playerCost * (liCount -1) ;
                setAmount("player-expenses", totalPlayerCost)
                document.getElementById('player-cost-total').addEventListener('click', function () {
                    const managerCost = getAmount("manager-cost");
                    const coachCost = getAmount("coach-cost");
                    const totalExpenses = totalPlayerCost + managerCost + coachCost;
                    setAmount("total-expenses", totalExpenses);
                });
            })
            }
    }
});

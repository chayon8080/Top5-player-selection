function getPlayerName(btnId, textId) {
    document.getElementById(btnId).addEventListener('click', function () {
        document.getElementById(btnId).disabled = 'true';
        const nameOfPlayerField = document.getElementById(textId)
        const nameOfPlayer = nameOfPlayerField.innerText;
        const inputName = document.getElementById('serial-inputName');
        const li1 = document.createElement('li');
        li1.innerText = nameOfPlayer;
        inputName.appendChild(li1);
        let playersNumber = inputName.childNodes.length;
        if (playersNumber > 6) {
            alert('you have already selected 5 players');
            inputName.removeChild(li1);
        }
        else {
            return;
        }
    })
}
const messi = getPlayerName('call-messi', 'messi');
const naymer = getPlayerName('call-neymar', 'neymar');
const ozil = getPlayerName('call-ozil', 'ozil');
const ronaldo = getPlayerName('call-ronaldo', 'ronaldo');
const luis = getPlayerName('call-luis', 'luis');
const marcelo = getPlayerName('call-marcelo', 'marcelo');





document.getElementById('perPlayer-cost-btn').addEventListener('click', function () {
    const perPlayerCost = document.getElementById('perPlayer-cost');
    const costValue = perPlayerCost.value;
    const selectedPlayersCost = document.getElementById('serial-inputName').childNodes.length - 1;
    const playersExpences = costValue * selectedPlayersCost;
    const playersCostFeild = document.getElementById('players-cost');
    playersCostFeild.innerText = playersExpences;
})

document.getElementById('calculate-total').addEventListener('click', function () {
    const managerCostField = document.getElementById('manager-cost');
    const managerCost = parseFloat(managerCostField.value);
    const coachCostField = document.getElementById('coach-cost');
    const coachCost = parseFloat(coachCostField.value);
    const playerscostForHireField = document.getElementById('players-cost');
    const playerscostForHire = parseFloat(playerscostForHireField.innerText);
    const costTotal = playerscostForHire + managerCost + coachCost;
    const totalField = document.getElementById('total');
    totalField.innerText = costTotal;

})



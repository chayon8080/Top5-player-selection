function getPlayerName(btnId, textId) {
    document.getElementById(btnId).addEventListener('click', function () {
        document.getElementById(btnId).disabled = 'true';
        const nameOfPlayerField = document.getElementById(textId)
        const nameOfPlayer = nameOfPlayerField.innerText;
        const inputName = document.getElementById('serial-inputName');
        const li1 = document.createElement('li');
        li1.innerText = nameOfPlayer;
        inputName.appendChild(li1);
        let numb = inputName.childNodes.length;
        if (numb > 6) {
            alert('you have already selected 5 players');
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







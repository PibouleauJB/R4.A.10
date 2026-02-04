const eventManager = new EventManager();

function updateDisplay(state) {
    let data = document.getElementById("tempList");
    let text = document.getElementById("tempText");

    data.textContent = state.currentTemperature + "°C";
    data.className = state.category;
    text.textContent = state.message;
    console.log(state.category);

    const historyList = document.getElementById('historyList');
    if (historyList) {
        const separator = historyList.textContent ? " ; " : "";
        historyList.textContent += separator + state.currentTemperature;
    }
}

eventManager.subscribe(updateDisplay);

const intervalID = setInterval(() => {
    eventManager.updateState();
}, 1000);

const tabs = document.querySelectorAll('[role="tab"]');
const panels = document.querySelectorAll('[role="tabpanel"]');

tabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
        // Désactiver tous les onglets
        tabs.forEach(t => {
            t.setAttribute('aria-selected', 'false');
            t.setAttribute('tabindex', '-1');
        });

        panels.forEach(p => {
            p.hidden = true;
        });

        e.target.setAttribute('aria-selected', 'true');
        e.target.setAttribute('tabindex', '0');

        const panelId = e.target.getAttribute('aria-controls');
        document.getElementById(panelId).hidden = false;
    });
});

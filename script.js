const aircraftData = {
    'Su-25': { wingspan: 15.53, length: 15.53, height: 5.61 },
    'F-22': { wingspan: 13.56, length: 19.05, height: 5.57 },
    'Su-27': { wingspan: 14.7, length: 21.9, height: 6.09 },
    'F-16': { wingspan: 9.13, length: 15.06, height: 4.88 },
    'MiG-29': { wingspan: 11.36, length: 16.38, height: 4.73 },
    'Typhoon': { wingspan: 11.08, length: 15.96, height: 5.29 },
    'F-35': { wingspan: 10.70, length: 15.21, height: 4.57 },
    'Rafale': { wingspan: 10.80, length: 15.27, height: 5.34 }
};

// Função para preencher dinamicamente a lista de aeronaves
function populateAircraftList() {
    const aircraftList = document.querySelector('.aircraft-list');
    aircraftList.innerHTML = ''; // Limpar lista existente
    for (let aircraft in aircraftData) {
        let li = document.createElement('li');
        li.textContent = aircraft;
        li.dataset.aircraft = aircraft;
        li.innerHTML += `<span>(L: ${aircraftData[aircraft].length.toFixed(2)}m, W: ${aircraftData[aircraft].wingspan.toFixed(2)}m, H: ${aircraftData[aircraft].height.toFixed(2)}m)</span>`; // Adiciona medidas em metros
        aircraftList.appendChild(li);
    }
}

// Pesquisar aeronave
document.getElementById('search-input').addEventListener('input', function() {
    const query = this.value.toLowerCase();
    const aircraftItems = document.querySelectorAll('.aircraft-list li');
    aircraftItems.forEach(item => {
        const aircraftName = item.getAttribute('data-aircraft').toLowerCase();
        if (aircraftName.includes(query)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
});

// Exibir detalhes da aeronave
document.querySelectorAll('.aircraft-list li').forEach(item => {
    item.addEventListener('click', function() {
        const aircraftName = this.getAttribute('data-aircraft');
        const data = aircraftData[aircraftName];
        if (data) {
            document.getElementById('aircraft-details').innerHTML = `
                <p>Wingspan: ${data.wingspan.toFixed(2)} meters</p>
                <p>Length: ${data.length.toFixed(2)} meters</p>
                <p>Height: ${data.height.toFixed(2)} meters</p>
            `;
        }
    });
});

// Conversão de metros para FP Blocks
document.getElementById('convert-btn').addEventListener('click', function() {
    const valueInMeters = document.getElementById('input-value').value;
    if (valueInMeters) {
        const result = (valueInMeters / 0.84).toFixed(2);
        document.getElementById('conversion-result').innerHTML = `
            <p>${valueInMeters} meters = ${result} FlightPoint Blocks</p>
        `;
    }
});

// Inicializar a lista de aeronaves
populateAircraftList();

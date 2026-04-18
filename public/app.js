async function sendData() {
    const source = document.getElementById('source').value;
    const payloadText = document.getElementById('payload').value;

    let payload;

    try {
        payload = JSON.parse(payloadText);
    } catch {
        alert('Payload inválido (JSON)');
        return;
    }

    await fetch('/data', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ source, payload })
    });

    loadData();
}

async function loadData() {
    const res = await fetch('/data');
    const data = await res.json();

    const list = document.getElementById('dataList');
    list.innerHTML = '';

    data.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `[${item.source}] ${JSON.stringify(item.payload)}`;
        list.appendChild(li);
    });
}

async function importUsers() {
    await fetch('/import/users');
    loadData();
}

// carregar ao abrir
loadData();
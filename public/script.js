(function() {
    const ping = document.getElementById('ping');
    const time = document.getElementById('time');
    const jsonInput = document.getElementById('json-data');
    const button = document.getElementById('submitButton');

    function measurePing() {
        const start = Date.now();
        fetch(location.href + '?t=' + start).then(() => {
            const latency = Date.now() - start;
            ping.textContent = latency + ' ms';
        });
    }
    setInterval(measurePing, 1000);

    function updateTime() {
        const now = new Date().toLocaleTimeString('en-US', { hour12: true, timeZone: 'Asia/Manila' });
        time.textContent = now;
    }
    setInterval(updateTime, 1000);
    updateTime();

    document.getElementById('agreeCheckbox').addEventListener('change', function() {
        button.disabled = !this.checked;
    });

    window.State = async function() {
        if (!jsonInput.value.trim()) return showResult('Please enter JSON data.');
        button.disabled = true;
        try {
            const data = JSON.parse(jsonInput.value);
            const response = await fetch('/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ state: data })
            });
            const result = await response.json();
            showResult(result.message || 'Executed.');
        } catch (e) {
            showResult('Invalid JSON input.');
        } finally {
            button.disabled = false;
        }
    };

    function showResult(message) {
        document.getElementById('result').innerHTML = '<h5>' + message + '</h5>';
    }

    window.selectAllCommands = () => toggleAll('.commands');
    window.selectAllEvents = () => toggleAll('.handleEvent');

    function toggleAll(selector) {
        const items = document.querySelectorAll(selector);
        const allChecked = Array.from(items).every(el => el.checked);
        items.forEach(el => {
            el.checked = !allChecked;
            el.nextElementSibling.classList.toggle('disable', !allChecked);
        });
    }

    window.commandList = async function() {
        const listOfCommands = document.getElementById('listOfCommands');
        const listOfCommandsEvent = document.getElementById('listOfCommandsEvent');
        const { commands = [], handleEvent = [] } = await (await fetch('/commands')).json();
        commands.forEach((cmd, idx) => listOfCommands.appendChild(createItem(idx + 1, cmd, 'commands')));
        handleEvent.forEach((evt, idx) => listOfCommandsEvent.appendChild(createItem(idx + 1, evt, 'handleEvent')));
    };

    function createItem(idx, name, type) {
        const div = document.createElement('div');
        div.className = 'form-check form-switch';
        const input = document.createElement('input');
        input.type = 'checkbox';
        input.className = `form-check-input ${type}`;
        const label = document.createElement('label');
        label.className = `form-check-label ${type}`;
        label.textContent = `${idx}. ${name}`;
        div.appendChild(input);
        div.appendChild(label);
        return div;
    }

    commandList();
})();

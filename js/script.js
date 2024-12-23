let currentNote = ""; // Текущая заметка


function loadNote() {
    currentNote = localStorage.getItem('currentNote') || '';
    document.getElementById('noteText').value = currentNote;
}


function saveNote() {
    currentNote = document.getElementById('noteText').value;
    localStorage.setItem('currentNote', currentNote);
    alert('Заметка сохранена!');
}

function saveNoteAs() {
    let newNoteName = prompt("Введите имя для новой заметки:");
    if (newNoteName) {
        let noteContent = document.getElementById('noteText').value;
        localStorage.setItem(newNoteName, noteContent);
        alert('Заметка сохранена как "' + newNoteName + '"!');
    }
}


function deleteNote() {
    if (confirm("Удалить текущую заметку?")) {
        localStorage.removeItem('currentNote');
        document.getElementById('noteText').value = '';
        currentNote = "";
        alert('Заметка удалена!');
    }
}

function openFolder() {
    alert("Доступ к файловой системе браузера ограничен. Эта функция не реализована.");
}

function closeFolder() {
  alert("Доступ к файловой системе браузера ограничен. Эта функция не реализована.");
}

function applyStyle(style) {
    let selection = window.getSelection();
    if (selection.rangeCount > 0) {
        let range = selection.getRangeAt(0);
        let newNode = document.createElement("span");
        newNode.textContent = selection.toString();
        if (style === 'italic') newNode.style.fontStyle = 'italic';
        if (style === 'bold') newNode.style.fontWeight = 'bold';
        if (style === 'highlight') newNode.style.backgroundColor = 'yellow';

        range.deleteContents();
        range.insertNode(newNode);
    }
}

loadNote(); // Загружаем заметку при загрузке страницы

document.getElementById("styleMenu").style.display = "block";

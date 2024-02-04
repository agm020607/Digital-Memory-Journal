function addMemory() {
    const memoryDate = document.getElementById('memoryDate').value;
    const memoryText = document.getElementById('memoryText').value;
    const memoryPhoto = document.getElementById('memoryPhoto').files[0];

    const memoryEntry = document.createElement('div');
    memoryEntry.className = 'memory-entry';

    const dateParagraph = document.createElement('p');
    dateParagraph.textContent = `Date: ${memoryDate}`;
    memoryEntry.appendChild(dateParagraph);

    const textParagraph = document.createElement('p');
    textParagraph.textContent = `Memory: ${memoryText}`;
    memoryEntry.appendChild(textParagraph);

    if (memoryPhoto) {
        const imageElement = document.createElement('img');
        imageElement.src = URL.createObjectURL(memoryPhoto);
        imageElement.alt = 'Memory Image';
        memoryEntry.appendChild(imageElement);
    }

    const memoriesContainer = document.getElementById('memoriesContainer');
    memoriesContainer.appendChild(memoryEntry);
}

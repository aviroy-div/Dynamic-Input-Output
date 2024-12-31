let outputIndex = 1; // To generate unique IDs for output elements

function submitInputs() {
    const input1Value = document.getElementById('input1').value.trim();
    const input2Value = document.getElementById('input2').value.trim();

    if (input1Value !== '') {
        addOutput(input1Value);
    }

    if (input2Value !== '') {
        addOutput(input2Value);
    }

    // Clear input fields after submission
    document.getElementById('input1').value = '';
    document.getElementById('input2').value = '';
}

function addOutput(value) {
    const outputContainer = document.getElementById('outputContainer');
    const outputId = 'output' + outputIndex;

    // Create new output element
    const outputElement = document.createElement('div');
    outputElement.setAttribute('id', outputId);
    outputElement.classList.add('result');
    outputElement.innerHTML = '<p>' + value + '</p>';

    // Create edit button
    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.onclick = function() {
        editValue(outputElement);
    };

    // Create delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = function() {
        outputContainer.removeChild(outputElement);
    };

    // Append buttons to output element
    outputElement.appendChild(editButton);
    outputElement.appendChild(deleteButton);

    // Append the output element to the container
    outputContainer.appendChild(outputElement);

    outputIndex++;
}

function editValue(outputElement) {
    const currentValue = outputElement.querySelector('p').textContent;
    const newValue = prompt("Edit the result:", currentValue);
    if (newValue !== null) {
        outputElement.querySelector('p').textContent = newValue;
    }
}

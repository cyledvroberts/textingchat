const inputBox = document.getElementById('textInput');
    const bubble = document.getElementById('bubble');

    // Function to generate a random color
    function generateRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    inputBox.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            const inputValue = inputBox.value;
            if (inputValue.trim() !== '') {
                const userColor = generateRandomColor(); // Generate a random color for the user
                showBubble(inputValue, userColor);
                inputBox.value = '';
            }
        }
    });

    function showBubble(text, color) {
        bubble.textContent = text;
        bubble.style.backgroundColor = color;
        bubble.style.display = 'block';
        positionBubble();
    }

    function positionBubble() {
        const inputBoxRect = inputBox.getBoundingClientRect();
        const bubbleRect = bubble.getBoundingClientRect();
        const topPos = inputBoxRect.top - bubbleRect.height - 10;
        const leftPos = inputBoxRect.left + (inputBoxRect.width - bubbleRect.width) / 2;
        bubble.style.top = `${topPos}px`;
        bubble.style.left = `${leftPos}px`;
    }
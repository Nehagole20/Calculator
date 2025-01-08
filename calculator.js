
        // Get the display element
        const display = document.getElementById('display');

        // Append value to display
        function appendToDisplay(value) {
            display.value += value;
        }

        // Clear the display
        function clearDisplay() {
            display.value = '';
        }

        // Calculate the result
        function calculate() {
            try {
                display.value = eval(display.value);
            } catch (error) {
                display.value = 'Error';
                setTimeout(() => clearDisplay(), 1500); // Clear after showing error
            }
        }
document.addEventListener('DOMContentLoaded', function () {
    function runCode() {
        let htmlCode = document.getElementById('html-code');
        let cssCode = document.getElementById('css-code');
        let jsCode = document.getElementById('js-code');
        let output = document.getElementById('output');
        let consoleFrame = document.getElementById('consoleFrame');

        output.contentDocument.body.innerHTML = htmlCode.value + '<style>' + cssCode.value + '</style>';

        // Create a new document for console output
        let consoleDocument = consoleFrame.contentWindow.document;
        consoleDocument.open();
        consoleDocument.write('<html><head><title>Console Output</title></head><body><div id="console"></div></body></html>');
        consoleDocument.close();

        // Redefine console.log inside the iframe
        output.contentWindow.console.log = function (message) {
            let consoleOutput = consoleDocument.getElementById('console');
            consoleOutput.innerHTML += `<div>${message}</div>`;
        };

        // Apply styles to the console iframe
        let consoleStyles = `
            <style>
                body {
                    color: #ffffff;
                    font-family: Arial, sans-serif;
                }
                #console div {
                    padding: 4px;
                }
            </style>
        `;
        consoleDocument.head.innerHTML += consoleStyles;

        try {
            output.contentWindow.eval(jsCode.value);
        } catch (error) {
            console.error('JavaScript Error:', error);
        }
    }

    const runButton = document.getElementById('runButton');
    runButton.addEventListener('click', runCode);

    const textAreas = document.querySelectorAll('.tab');
    textAreas.forEach(textArea => {
        textArea.addEventListener('keyup', runCode);
    });
});

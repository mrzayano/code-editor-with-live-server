const htmlTextarea = document.getElementById('html');
const cssTextarea = document.getElementById('css');
const jsTextarea = document.getElementById('js');
const outputFrame = document.getElementById('output');
const tabButtons = document.querySelectorAll('.tab-btn');
const tabs = document.querySelectorAll('.tab');

// Function to update the output
function updateOutput() {
  const htmlCode = htmlTextarea.value;
  const cssCode = `<style>${cssTextarea.value}</style>`;
  const jsCode = `<script>${jsTextarea.value}</script>`;

  const outputHTML = `${htmlCode}${cssCode}<body>${jsCode}</body>`;
  outputFrame.contentDocument.body.innerHTML = outputHTML;
}

// Event listeners for input changes
htmlTextarea.addEventListener('input', updateOutput);
cssTextarea.addEventListener('input', updateOutput);
jsTextarea.addEventListener('input', updateOutput);

// Event listener for tab buttons
tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    const tabType = button.getAttribute('data-type');
    tabs.forEach(tab => {
      tab.classList.remove('active');
      if (tab.getAttribute('id') === tabType) {
        tab.classList.add('active');
      }
    });
    tabButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    updateOutput();
  });
});

updateOutput();

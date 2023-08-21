const value = document.getElementById('value'),
  plusButton = document.getElementById('plus'),
  minusButton = document.getElementById('minus'),
  resetButton = document.getElementById('reset');

// Função para atualizar o valor na página
const updateValue = () => {
  value.innerHTML = count;
};

// Função para atualizar o valor no localStorage e na página
const updateAndSaveValue = () => {
  localStorage.setItem('count', count);
  updateValue();
};

// Inicialização do contador a partir do localStorage (se disponível)
let count = parseInt(localStorage.getItem('count')) || 0;
updateValue(); // Atualiza a página com o valor inicial

// Event listeners para os botões
plusButton.addEventListener('click', () => {
  count += 1;
  updateAndSaveValue();
});

minusButton.addEventListener('click', () => {
  count -= 1;
  updateAndSaveValue();
});

resetButton.addEventListener('click', () => {
  count = 0;
  updateAndSaveValue();
});
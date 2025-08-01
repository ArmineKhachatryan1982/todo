function  displayValidationErrors(errors) {
    console.log(errors,4444)
  // Очистка предыдущих сообщений и подсветки
  Object.keys(errors).forEach(field => {
    const input = document.getElementById(field);
    const errorDiv = document.getElementById(`${field}-error`);

    input.classList.remove('is-invalid');
    errorDiv.textContent = '';
  });

  for (const field in errors) {
    const input = document.getElementById(field);
    const errorDiv = document.getElementById(`${field}-error`);

    if (input && errorDiv) {
      input.classList.add('is-invalid');
      errorDiv.textContent = errors[field][0]; // первая ошибка
    }
  }
}

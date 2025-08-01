document.getElementById('todoForm').addEventListener('submit', async function (e) {
  e.preventDefault();

   document.querySelectorAll('.invalid-feedback').forEach(el => {
        el.textContent = '';
    });
    document.querySelectorAll('.form-control').forEach(el => {
        el.classList.remove('is-invalid');
    });

  const title = document.getElementById('title').value;
  const description = document.getElementById('description').value;
  const status = document.getElementById('status').value;

  try {
    const response = await fetch("/api/todos", {

      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',

      },
      body: JSON.stringify({ title, description, status }),
    });


    // const data = await response.json(); // ⚠️ Ошибка тут, если backend вернёт HTML
    if (response.status === 422) {

      const errorData = await response.json();
      console.log(errorData.errors,'+++++')
      displayValidationErrors(errorData.errors);
      return;
    }
    if (response.ok) {
    //   alert('Успешно создано!');
     const data = await response.json(); // ← получить JSON

        if(data.message=="success"){
            window.location.href="list"
        }
    } else {
      console.error('Ошибка валидации:', data);
    }
  } catch (error) {
    console.error('Ошибка:', error);
  }


});



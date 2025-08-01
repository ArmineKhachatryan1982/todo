 fetch('/api/todos')
            .then(response => response.json())
            .then(data => {
                const messageDiv = document.getElementById('message');
                const table = document.getElementById('todo-table');
                const tbody = table.querySelector('tbody');

                if (data.length === 0) {
                   messageDiv.classList.remove('d-none');
                    messageDiv.textContent = 'There is no record';
                } else {
                    table.style.display = 'table'; // показать таблицу
                    data.forEach((todo,index) => {
                        const tr = document.createElement('tr');
                        tr.setAttribute('data-id',todo.id)
                        tr.innerHTML = `
                            <td>${ index+1 }</td>
                            <td>${ todo.title }</td>
                            <td>${ todo.description }</td>
                            <td>${ todo.status }</td>
                            <td>${formatDate(todo.created_at) }</td>
                            <td>
                             <span class="editing-label text-warning fw-semibold me-2 d-none">Editing</span>
                                <i class="bi bi-pencil-square text-primary cursor-pointer mx-2"
                                   onclick="onEdit(${todo.id},this)"
                                  ></i>
                                <i class="bi bi-trash3 text-danger cursor-pointer"
                                   onclick="onDelete(${todo.id})"
                                   ></i>
                            </td>
                        `;
                        tbody.appendChild(tr);
                    });
                }
            })
            .catch(error => {
                console.error('Ошибка при получении задач:', error);
                document.getElementById('message').textContent = 'Ошибка при загрузке данных.';
            });
// ===========converting time ===================
function formatDate(dateString) {
    const date = new Date(dateString);

    const day = String(date.getDate()).padStart(2, '0');         // 2 цифры
    const month = String(date.getMonth() + 1).padStart(2, '0');  // Месяцы с 0
    const year = date.getFullYear();

    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');

    return `${day}.${month}.${year} ${hours}:${minutes}`;
}

// =============== edit section start ===================
let currentEditIcon = null
    function onEdit(id,iconElement) {
         currentEditIcon = iconElement;


        fetch(`/api/todos/${id}`)
        .then(response => {
            if (!response.ok) throw new Error('Ошибка при загрузке');
            return response.json();
        })
        .then(data => {
            console.log(data.message)
            document.getElementById('title').value = data.message.title;
            document.getElementById('description').value = data.message.description;
            document.getElementById('status').value = data.message.status;
            document.getElementById('id').value = data.message.id;
                $('#editModal').modal('show');
        })
        .catch(error => {
            alert('Ошибка загрузки задачи');
            console.error(error);
        });
    }
    // ========== update section start =================
function onUpdate() {

    document.querySelectorAll('.invalid-feedback').forEach(el => {
        el.textContent = '';
    });
    document.querySelectorAll('.form-control').forEach(el => {
        el.classList.remove('is-invalid');
    });
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const status = document.getElementById('status').value;
    const currentEditId = document.getElementById('id').value;
    const csrf = document.querySelector('meta[name="csrf-token"]').content
    console.log(title,description,status,currentEditId,'++++')

    fetch(`/api/todos/${currentEditId}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'X-CSRF-TOKEN':csrf
        },
        body: JSON.stringify({ title, description, status, })
    })
    .then(async response => {
        if (response.status === 422) {
            const errorData = await response.json();
            displayValidationErrors(errorData.errors);
            return;
        }

        if (response.ok) {
            const rezult = await response.json();
            console.log(rezult.message)
            // alert('Обновлено успешно');
            $('#editModal').modal('hide');
            updateTableRow(rezult.message)
             // Сначала скрываем все "Editing"
            document.querySelectorAll('.editing-label').forEach(el => {
                 el.classList.add('d-none');
            });
            // Показать "Editing" рядом с выбранной задачей
            const parentTd = currentEditIcon.closest('td');
            const label = parentTd.querySelector('.editing-label');
            if (label) {
                label.classList.remove('d-none');
            }

        } else {
            alert('Ошибка обновления');
        }
    })
    .catch(error => {
        console.error('Ошибка при обновлении:', error);
    });
}
// ====== update tr content =====================
function updateTableRow(todo) {
    // Найти все tr с data-id = todo.id
    const rows = document.querySelectorAll(`tr[data-id="${todo.id}"]`);

    rows.forEach(tr => {
        // Обновляем содержимое ячеек в строке (по порядку td)
        const tds = tr.querySelectorAll('td');
        if (tds.length >= 6) {
            tds[1].textContent = todo.title;
            tds[2].textContent = todo.description;
            tds[3].textContent = todo.status;
            tds[4].textContent = formatDate(todo.created_at);

        }
    });
}
// ======= delete section start ======================
function onDelete(id) {

     $('#notificationModal').modal('show');
     document.getElementById('delete_record').setAttribute('data-id',id)
     const deleteBtn = document.getElementById('delete_record');
    // deleteBtn.setAttribute('data-id', id);

    // Очищаем старый обработчик и добавляем новый
    deleteBtn.onclick = function () {
        deleteRecord(id);
    };
}
function deleteRecord(id){

    fetch(`/api/todos/${id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => {
            if (!response.ok) throw new Error("Ошибка при удалении");
            return response.json();
        })
        .then(data => {
            if (data.message === 'success') {

              $('#notificationModal').modal('hide');
               window.location.reload()

            } else {
                alert("Что-то пошло не так");
            }
        })
        .catch(error => {
            console.error(error);
            alert("Ошибка удаления");
        });


}



const form = document.querySelector('#form_1')
const submitBtn = document.querySelector('[type=submit]')
let formData = {}


submitBtn.addEventListener('click', postDataToLocalStorage)
    function postDataToLocalStorage(){
        localStorage.clear()
    }
    postDataToLocalStorage()

// Получение данных с инпутов
form.addEventListener('input', changeData)
    function changeData(e) {
        formData[e.target.name] = e.target.value
        // сохранение данных в локальный стор браузера:
        localStorage.setItem('username', JSON.stringify(formData))
        // получаем значение с input'а:
        // localStorage.getItem('username')
    }
    changeData()
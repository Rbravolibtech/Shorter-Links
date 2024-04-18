const button = document.getElementById('menu-button')
const menu = document.getElementById('menu')




const input = document.getElementById('link-input')
const linkForm = document.getElementById('link-form')
const errorMsg = document.getElementById('error-msg')

button.addEventListener('click',navToggle)

linkForm.addEventListener('submit', formSubmit)

/////////////* TOGGLE MOBILE MENU *////////////////////
function navToggle () {
button.classList.toggle('open')
menu.classList.toggle('open')
menu.classList.toggle('hidden')
}


// Validate a URL
function validURL(str) {
    var pattern = new RegExp(
      '^(https?:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' +
        '((\\d{1,3}\\.){3}\\d{1,3}))' +
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' +
        '(\\?[;&a-z\\d%_.~+=-]*)?' +
        '(\\#[-a-z\\d_]*)?$',
      'i'
    )
    return !!pattern.test(str)
  }


  

function formSubmit(e) {
    e.preventDefault()

    if (input.value === '') {
        errorMsg.innerHTML = 'PLEASE ENTER SOMETHING!!!!'
        input.classList.add('border-red')
    } else if (!validURL(input.value)) {
        errorMsg.innerHTML = 'PLEASE ENTER A VALID URL!!!!'
        input.classList.add('border-red')
    } else {
        errorMsg.innerHTML = ''
        input.classList.remove('border-red')
        alert('Success')
    }
    
}
  
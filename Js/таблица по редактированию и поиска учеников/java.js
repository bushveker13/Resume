const surname = document.querySelector('.surname');
const names = document.querySelector('.name');
const patronymic = document.querySelector('.patronymic')
const add = document.querySelector('.add')
const saveButn = document.querySelector('.save-contact')
const tBody = document.querySelector('.tablebody')
const modalList = document.querySelector(".modal__list");
const button = document.querySelector("#button");
const base = document.querySelector(".modal__base");
const btnClose = document.querySelectorAll(".btn-close");
const addContact = document.querySelector(".modal__addContact");
const modalAdd = document.querySelector(".modal__add");
const modalChange = document.querySelector(".modal-change");
const btnChangeSave = document.querySelector('.btn__changesave');
const btnChangeDelete = document.querySelector('.btn__changedelete');
const btnSortID = document.querySelector('.sort__ID');
const btnSortSNP = document.querySelector('.sort__SNP');
const bthSortCreation = document.querySelector('.sort__Creation');
const bthSortChange = document.querySelector('.sort__Change');
const serchInput = document.querySelector('.searh__input');
const modalDelete = document.querySelector('.modal__delete');
const deletContact = document.querySelector('.bth__change-detele-contact')
const btnCancel = document.querySelector('.bth__change-cancel')
const bthCanselAdd = document.querySelector('.bth__modalsdd-cancel')
let inputS = document.querySelectorAll('.input')
let inputSpan = document.querySelectorAll('.input__span')

const modalChangeAddContact = document.querySelector('.modal-change__addContact');
let modalContacts2 = document.querySelector('.modal__contacts2');
let modalContacts = document.querySelector('.modal__contacts');
const contact = ["Facebook", "VK", "Телефон", "Email", "Другое"];
let idChange
let selectContact;
let inputadd;
let counter = 0;
document.addEventListener('DOMContentLoaded', function () {
  create__tables()
})

function sortCreateTable(todo) {
  tBody.innerHTML = ''
  for (let elem of todo) {
    // записываем ID
    let tr = document.createElement('tr');
    let td1 = document.createElement('td');
    td1.classList.add('id__td', 'id-2')
    td1.textContent = elem.id
    tr.appendChild(td1);

    //записываем время создания
    let td2 = document.createElement('td');
    td2.textContent = elem.surname + ' ' + elem.name + ' ' + elem.lastName;
    td2.classList.add('fio__td')
    tr.appendChild(td2);

    let td3 = document.createElement('td');
    let div = document.createElement('div');
    div.classList.add('padding-tami');
    td3.classList.add('create__data');
    let dateCalendar = elem.createdAt;
    let data2 = dateCalendar.slice(0, 10).split('-').reverse().join('.');
    let data1 = dateCalendar.slice(11, 16);
    div.innerHTML = data1;
    td3.innerHTML = data2;
    td3.appendChild(div);
    tr.appendChild(td3);

    let td4 = document.createElement('td');
    td4.classList.add('create__data');
    let generalDivChangeDate = document.createElement('div');
    generalDivChangeDate.classList.add('padding-tami');
    let dateChange = elem.updatedAt;
    let dataChange2 = dateChange.slice(0, 10).split('-').reverse().join('.');
    let dataChange1 = dateChange.slice(11, 16);
    generalDivChangeDate.innerHTML = dataChange1;
    td4.innerHTML = dataChange2;
    td4.appendChild(generalDivChangeDate)
    td4.classList.add('id__changes');
    tr.appendChild(td4);

    let td5 = document.createElement('td');
    // контакты 
    td5.classList.add('contact__td');
    let divGeneralToltip = document.createElement('div');
    divGeneralToltip.classList.add('general__toltip')
    ///////начало !!!!!!!!!!!!!!!!!!!!!!
    let divGeneralToltip2 = document.createElement('div');
    divGeneralToltip2.classList.add('general__toltip', 'modal__base-of');


    // создаем контакты из массивы
    let i = 0;
    let arrContact = [] // массив для контакто которые не поместились в первый блок
    for (let elem2 of elem.contacts) {
      i = i + 1
      let divBodyTolpit = document.createElement('div');
      divBodyTolpit.classList.add('relatic')
      let butnTolpit = document.createElement('button');
      let spatTolpitText = document.createElement('span');
      spatTolpitText.classList.add('toltip')
      if (elem2.type == 'VK') {
        butnTolpit.insertAdjacentHTML('afterbegin', `<svg class="icon">
          <use xlink:href="#Vk"></use>
        </svg>`)
        spatTolpitText.innerHTML = 'VK:' + ' ' + elem2.value;
      }
      else if (elem2.type == 'Facebook') {
        butnTolpit.insertAdjacentHTML('afterbegin', `<svg class="icon">
          <use xlink:href="#fb"></use>
        </svg>`)
        spatTolpitText.innerHTML = 'Facebook:' + ' ' + elem2.value;
      }
      else if (elem2.type == 'Email') {
        butnTolpit.insertAdjacentHTML('afterbegin', `<svg class="icon">
          <use xlink:href="#mail"></use>
        </svg>`)
        spatTolpitText.innerHTML = 'Email:' + ' ' + elem2.value;
      }
      else if (elem2.type == 'Другое') {
        butnTolpit.insertAdjacentHTML('afterbegin', `<svg class="icon">
          <use xlink:href="#Subtract"></use>
        </svg>`)
        spatTolpitText.innerHTML = 'Другое:' + ' ' + elem2.value;
      }
      else if (elem2.type == 'Телефон') {
        butnTolpit.insertAdjacentHTML('afterbegin', `<svg class="icon">
          <use xlink:href="#phone"></use>
        </svg>`)
        spatTolpitText.innerHTML = 'Телефон:' + ' ' + elem2.value;
      }
      butnTolpit.classList.add('butntoltip')
      spatTolpitText.classList.add('toltip')

      divGeneralToltip.appendChild(divBodyTolpit);
      // создаем кнопку где скрываем один контакт а за место него вствляем кнопку
      if (i == 5) {
        butnTolpit.classList.add('general__toltip', 'modal__base-of')
        let buX = document.createElement('button')
        buX.classList.add('btn-display-contacts')
        buX.innerHTML = '+' + (elem.contacts.length - i + 1)
        divBodyTolpit.appendChild(buX)
        // раскрываем оставшиеся контакты а кнопку скрываем             
        buX.addEventListener('click', function () {
          buX.nextElementSibling.classList.remove('modal__base-of')
          divGeneralToltip2.classList.remove('modal__base-of')
          for (let elem of arrContact) {
            elem.classList.remove('modal__base-of')
            divGeneralToltip2.append(elem)
            console.log(elem)
          }
          buX.remove()
        })
      }
      // остальную часть не поместившуюся, пушим в массив
      if (i >= 6) {

        divGeneralToltip2.appendChild(divBodyTolpit);
        divBodyTolpit.classList.add('modal__base-of')
        arrContact.push(divBodyTolpit)
        butnTolpit.classList.add('general__toltip')

      }

      divBodyTolpit.appendChild(butnTolpit);
      divBodyTolpit.appendChild(spatTolpitText)
      //console.log(elem2.value)
    }
    td5.appendChild(divGeneralToltip);
    td5.appendChild(divGeneralToltip2);

    tr.appendChild(td5);

    let td6 = document.createElement('td');
    td6.classList.add('id__td');
    let change = document.createElement('button')
    let deleteBtn = document.createElement('button')
    deleteBtn.classList.add('bth-delete')
    change.classList.add('buth-change')
    change.textContent = 'изменить'
    deleteBtn.textContent = 'удалить'
    change.insertAdjacentHTML('afterBegin', `<svg class="icon-pens">
        <use xlink:href="#pens"></use>
        </svg>`);
    td6.appendChild(change)
    deleteBtn.insertAdjacentHTML('afterBegin', `<svg class="delete-icon">
        <use xlink:href="#delete-icon"></use>
      </svg>`);
    td6.appendChild(deleteBtn)
    tr.appendChild(td6);
    // создание переменных и функция выбора для выбора клиента по ID с запросоам на сервер
    change.addEventListener('click', async () => {
      console.log(elem.id);
      const serverClick2 = await fetch(`http://localhost:3000/api/clients/${elem.id}`);
      let client = await serverClick2.json();
      change.insertAdjacentHTML('afterBegin', `<svg class="loading">
      <use xlink:href="#load"></use>
      </svg>`);

      /////начало!!!!!!!!!!!!!!!!!!!!!!!!!
      const surname1 = document.querySelector('.surname_change');
      const name1 = document.querySelector('.name_change');
      const patronymic1 = document.querySelector('.patronymic_change');
      idChange = document.querySelector('.id_change');
      idChange.textContent = elem.id
      base.classList.remove("modal__base-of");
      modalChange.classList.remove("modal__base-of");
      surname1.value = client.surname;
      name1.value = client.name;
      patronymic1.value = client.lastName;
      for (let i = 0; i < inputS.length; i++) {
        if (inputS[i].value.length == 0) {
          inputSpan[i].classList.remove('sr')
        }

        else {
          inputSpan[i].classList.add('sr')
        }

      }

      for (let elem of client.contacts) {
        counter++;
        console.log(counter)
        let div2 = document.createElement("div");
        div2.classList.add("general__contact");
        modalChangeAddContact.insertAdjacentElement("beforeBegin", div2);
        let selectContact2 = document.createElement("select");
        let input = document.createElement("input");
        input.classList.add('input__personal-contact');
        input.value = elem.value;

        div2.appendChild(selectContact2);
        div2.appendChild(input);
        let option_selec3;
        let containGeneralDelettoltip = document.createElement('div')
        containGeneralDelettoltip.classList.add('relatic')
        let deletSpanTultip = document.createElement('span');
        deletSpanTultip.textContent = 'удалить контакт';
        deletSpanTultip.classList.add('toltip_delete')
        butnDeleteContact = document.createElement('button');
        butnDeleteContact.classList.add("btn-delet_contact");
        butnDeleteContact.insertAdjacentHTML('afterBegin', `<svg class="deleteModal-icon">
        <use xlink:href="#delete-icon"></use>
        </svg>`)
        containGeneralDelettoltip.appendChild(butnDeleteContact)
        containGeneralDelettoltip.appendChild(deletSpanTultip)
        div2.appendChild(containGeneralDelettoltip);


        for (let i = 0; i < contact.length; i++) {
          option_selec3 = document.createElement("option");
          option_selec3.innerHTML = contact[i];
          option_selec3.classList.add("upa");
          if (contact[i] == elem.type) {
            selectContact2.value = elem.type
          }
          selectContact2.prepend(option_selec3);

        }
        let deletes = document.querySelectorAll(".btn-delet_contact");

        for (elem of deletes) {
          elem.addEventListener('click', function () {
            --counter;
            this.parentElement.parentElement.remove();
            if (counter == 10) {
              modalChangeAddContact.disabled = true;
            }
            else if (counter < 10) {
              modalChangeAddContact.disabled = false;
            }

          })
        }
        const choices = new Choices(selectContact2, {
          searchEnabled: false,
          placeholderValue: null,
          position: 'bottom'
        });
      }

      if (counter == 10) {
        modalChangeAddContact.disabled = true;
      }
      else if (counter < 10) {
        modalChangeAddContact.disabled = false;
      }
    })
    deleteBtn.addEventListener('click', async function () {
      const response = await fetch(`http://localhost:3000/api/clients/${elem.id}`, {
        method: 'DELETE',
      })
      create__tables()
    })
    tBody.appendChild(tr);
    let butnTolpitss = document.querySelectorAll('.butntoltip');
    for (let elem of butnTolpitss) {
      elem.addEventListener('mouseover', function () {
        elem.nextElementSibling.classList.add('color');
      })
      elem.addEventListener('mouseout', function () {
        elem.nextElementSibling.classList.remove('color');
      })
    }

  }
}

// создание ТАБЛИЦЫ ПРИ ЗАГРУЗКЕ
async function create__tables() {
  const serverClick2 = await fetch('http://localhost:3000/api/clients');
  const todo = await serverClick2.json()
  todo.sort(function (a, b) {
    return b.id - a.id
  })
  //console.log(todo)
  //создание таблицы из сервера
  tBody.innerHTML = ''
  for (let elem of todo) {
    // записываем ID
    let tr = document.createElement('tr');
    let td1 = document.createElement('td');
    td1.classList.add('id__td', 'id-2')
    td1.textContent = elem.id
    tr.appendChild(td1);

    //записываем время создания
    let td2 = document.createElement('td');
    td2.textContent = elem.surname + ' ' + elem.name + ' ' + elem.lastName;
    td2.classList.add('fio__td')
    tr.appendChild(td2);

    let td3 = document.createElement('td');
    let div = document.createElement('div');
    div.classList.add('padding-tami');
    td3.classList.add('create__data');
    let dateCalendar = elem.createdAt;
    let data2 = dateCalendar.slice(0, 10).split('-').reverse().join('.');
    let data1 = dateCalendar.slice(11, 16);
    div.innerHTML = data1;
    td3.innerHTML = data2;
    td3.appendChild(div);
    tr.appendChild(td3);

    let td4 = document.createElement('td');
    td4.classList.add('create__data');
    let generalDivChangeDate = document.createElement('div');
    generalDivChangeDate.classList.add('padding-tami');
    let dateChange = elem.updatedAt;
    let dataChange2 = dateChange.slice(0, 10).split('-').reverse().join('.');
    let dataChange1 = dateChange.slice(11, 16);
    generalDivChangeDate.innerHTML = dataChange1;
    td4.innerHTML = dataChange2;
    td4.appendChild(generalDivChangeDate)
    td4.classList.add('id__changes');
    tr.appendChild(td4);

    let td5 = document.createElement('td');
    // контакты 
    td5.classList.add('contact__td');
    let divGeneralToltip = document.createElement('div');
    let divGeneralToltip2 = document.createElement('div');
    divGeneralToltip.classList.add('general__toltip')
    divGeneralToltip2.classList.add('general__toltip', 'modal__base-of')
    // создаем контакты из массивы
    let i = 0;
    let arrContact = [] // массив для контакто которые не поместились в первый блок
    for (let elem2 of elem.contacts) {
      i = i + 1
      let divBodyTolpit = document.createElement('div');
      divBodyTolpit.classList.add('relatic')
      let butnTolpit = document.createElement('button');
      let spatTolpitText = document.createElement('span');
      spatTolpitText.classList.add('toltip')
      if (elem2.type == 'VK') {
        butnTolpit.insertAdjacentHTML('afterbegin', `<svg class="icon">
            <use xlink:href="#Vk"></use>
          </svg>`)
        spatTolpitText.innerHTML = 'VK:' + ' ' + elem2.value;
      }
      else if (elem2.type == 'Facebook') {
        butnTolpit.insertAdjacentHTML('afterbegin', `<svg class="icon">
            <use xlink:href="#fb"></use>
          </svg>`)
        spatTolpitText.innerHTML = 'Facebook:' + ' ' + elem2.value;
      }
      else if (elem2.type == 'Email') {
        butnTolpit.insertAdjacentHTML('afterbegin', `<svg class="icon">
            <use xlink:href="#mail"></use>
          </svg>`)
        spatTolpitText.innerHTML = 'Email:' + ' ' + elem2.value;
      }
      else if (elem2.type == 'Другое') {
        butnTolpit.insertAdjacentHTML('afterbegin', `<svg class="icon">
            <use xlink:href="#Subtract"></use>
          </svg>`)
        spatTolpitText.innerHTML = 'Другое:' + ' ' + elem2.value;
      }
      else if (elem2.type == 'Телефон') {
        butnTolpit.insertAdjacentHTML('afterbegin', `<svg class="icon">
            <use xlink:href="#phone"></use>
          </svg>`)
        spatTolpitText.innerHTML = 'Телефон:' + ' ' + elem2.value;
      }
      butnTolpit.classList.add('butntoltip')


      divGeneralToltip.appendChild(divBodyTolpit);
      // создаем кнопку где скрываем один контакт а за место него вствляем кнопку
      if (i == 5) {
        butnTolpit.classList.add('general__toltip', 'modal__base-of')
        let buX = document.createElement('button')
        buX.classList.add('btn-display-contacts')
        buX.innerHTML = '+' + (elem.contacts.length - i + 1)
        divBodyTolpit.appendChild(buX)
        // раскрываем оставшиеся контакты а кнопку скрываем             
        buX.addEventListener('click', function () {
          buX.nextElementSibling.classList.remove('modal__base-of')
          divGeneralToltip2.classList.remove('modal__base-of')
          for (let elem of arrContact) {
            elem.classList.remove('modal__base-of')
            divGeneralToltip2.append(elem)
            console.log(elem)
          }
          buX.remove()
        })
      }
      // остальную часть не поместившуюся, пушим в массив
      if (i >= 6) {
        divGeneralToltip2.appendChild(divBodyTolpit);
        divBodyTolpit.classList.add('modal__base-of')
        arrContact.push(divBodyTolpit)
        butnTolpit.classList.add('general__toltip')
      }

      divBodyTolpit.appendChild(butnTolpit);
      divBodyTolpit.appendChild(spatTolpitText)
      //console.log(elem2.value)
    }
    td5.appendChild(divGeneralToltip);
    td5.appendChild(divGeneralToltip2);
    tr.appendChild(td5);

    let td6 = document.createElement('td');
    td6.classList.add('id__td');
    let change = document.createElement('button')
    let deleteBtn = document.createElement('button')
    deleteBtn.classList.add('bth-delete')
    change.classList.add('buth-change')
    change.textContent = 'изменить'
    deleteBtn.textContent = 'удалить'
    change.insertAdjacentHTML('afterBegin', `<svg class="icon-pens">
        <use xlink:href="#pens"></use>
        </svg>`);
    td6.appendChild(change)
    deleteBtn.insertAdjacentHTML('afterBegin', `<svg class="delete-icon">
        <use xlink:href="#delete-icon"></use>
      </svg>`);
    td6.appendChild(deleteBtn)
    tr.appendChild(td6);
    // создание переменных и функция выбора для выбора клиента по ID с запросоам на сервер
    change.addEventListener('click', async () => {

      const serverClick2 = await fetch(`http://localhost:3000/api/clients/${elem.id}`);
      let client = await serverClick2.json();

      change.insertAdjacentHTML('afterBegin', `<svg class="loading">
      <use xlink:href="#load"></use>
      </svg>`);

      /////начало!!!!!!!!!!!!!!!!!!!!!!!!!
      const surname1 = document.querySelector('.surname_change');
      const name1 = document.querySelector('.name_change');
      const patronymic1 = document.querySelector('.patronymic_change');
      idChange = document.querySelector('.id_change');
      idChange.textContent = elem.id
      base.classList.remove("modal__base-of");
      modalChange.classList.remove("modal__base-of");
      surname1.value = client.surname;
      name1.value = client.name;
      patronymic1.value = client.lastName;
      for (let i = 0; i < inputS.length; i++) {
        if (inputS[i].value.length == 0) {
          inputSpan[i].classList.remove('sr')
        }

        else {
          inputSpan[i].classList.add('sr')
        }

      }

      for (let elem of client.contacts) {
        counter++;
        console.log(counter)
        let div2 = document.createElement("div");
        div2.classList.add("general__contact");
        modalChangeAddContact.insertAdjacentElement("beforeBegin", div2);
        let selectContact2 = document.createElement("select");
        let input = document.createElement("input");
        input.classList.add('input__personal-contact');
        input.value = elem.value;

        div2.appendChild(selectContact2);
        div2.appendChild(input);
        let option_selec3;
        let containGeneralDelettoltip = document.createElement('div')
        containGeneralDelettoltip.classList.add('relatic')
        let deletSpanTultip = document.createElement('span');
        deletSpanTultip.textContent = 'удалить контакт';
        deletSpanTultip.classList.add('toltip_delete')
        butnDeleteContact = document.createElement('button');
        butnDeleteContact.classList.add("btn-delet_contact");
        butnDeleteContact.insertAdjacentHTML('afterBegin', `<svg class="deleteModal-icon">
        <use xlink:href="#delete-icon"></use>
        </svg>`)
        containGeneralDelettoltip.appendChild(butnDeleteContact)
        containGeneralDelettoltip.appendChild(deletSpanTultip)

        div2.appendChild(containGeneralDelettoltip);


        for (let i = 0; i < contact.length; i++) {
          option_selec3 = document.createElement("option");
          option_selec3.innerHTML = contact[i];
          option_selec3.classList.add("upa");
          if (contact[i] == elem.type) {
            selectContact2.value = elem.type
          }
          selectContact2.prepend(option_selec3);

        }
        let deletes = document.querySelectorAll(".btn-delet_contact");

        for (elem of deletes) {
          elem.addEventListener('click', function () {
            --counter;
            this.parentElement.parentElement.remove();
            if (counter > 5) {
              modalChangeAddContact.disabled = true;
            }
            else if (counter < 5) {
              modalChangeAddContact.disabled = false;
            }

          })
        }
        const choices = new Choices(selectContact2, {
          searchEnabled: false,
          placeholderValue: null,
          position: 'bottom'
        });
      }

      if (counter == 10) {
        modalChangeAddContact.disabled = true;
      }
      else if (counter < 10) {
        modalChangeAddContact.disabled = false;
      }
    })
    deleteBtn.addEventListener('click', async function () {
      const response = await fetch(`http://localhost:3000/api/clients/${elem.id}`, {
        method: 'DELETE',
      })
      create__tables()
    })
    tBody.appendChild(tr);
  }
  let butnTolpitss = document.querySelectorAll('.butntoltip');
  for (let elem of butnTolpitss) {
    elem.addEventListener('mouseover', function () {
      elem.nextElementSibling.classList.add('color');
    })
    elem.addEventListener('mouseout', function () {
      elem.nextElementSibling.classList.remove('color');
    })
  }
}
///////


for (let i = 0; i < inputS.length; i++) {

  inputS[i].addEventListener('input', function () {
    inputSpan[i].classList.add('sr')
  })

  inputS[i].addEventListener('blur', function () {
    if (inputS[i].value.length == 0) {
      inputSpan[i].classList.remove('sr')
    }
  })
}
addContact.addEventListener("click", function () {
  let option_selec
  modalContacts.style.paddingTop = '20px';
  modalContacts.style.paddingBottom = '20px'
  let div = document.createElement("div")
  div.classList.add("general__contact")
  let inputadd = document.createElement("input")
  inputadd.type = 'text';
  inputadd.placeholder = 'Введите данные контакта';
  inputadd.classList.add('input__personal-contact');
  let selectContact = document.createElement("select");
  // создаю по клику новый выбор контакта
  addContact.insertAdjacentElement("beforeBegin", div);
  div.appendChild(selectContact)
  div.appendChild(inputadd)
  for (i = 0; i < contact.length; i++) {
    option_selec = document.createElement("option");
    option_selec.innerHTML = contact[i];
    option_selec.classList.add("upa");
    selectContact.appendChild(option_selec);
  }

  const choices = new Choices(selectContact, {
    searchEnabled: false,
    placeholderValue: null,
    position: 'bottom'
  });
  // если телефон то применяеться маска для инпута
  inputadd.addEventListener('click', function () {
    let selector
    let im
    if (selectContact.value == 'Телефон') {
      inputadd.type = "tel";
      selector = document.querySelector("input[type='tel']");
      im = new Inputmask("+7(999) 999-99-99");
      im.mask(selector);
    }
    else {
      inputadd.inputmask.remove()
      inputadd.type = "text";
      inputadd.placeholder = 'Введите данные контакта';
    }
  })
  // при изменения содержания инпута, появляется кнопка для удаления
  inputadd.addEventListener('change', function func() {
    let containGeneralDelettoltip = document.createElement('div')
    containGeneralDelettoltip.classList.add('relatic')
    let deletSpanTultip = document.createElement('span');
    deletSpanTultip.textContent = 'удалить контакт';
    deletSpanTultip.classList.add('toltip_delete')

    butnDeleteContact = document.createElement('button');
    butnDeleteContact.classList.add("btn-delet_contact");
    butnDeleteContact.insertAdjacentHTML('afterBegin', `<svg class="deleteModal-icon">
    <use xlink:href="#delete-icon"></use>
    </svg>`)
    containGeneralDelettoltip.appendChild(butnDeleteContact);
    containGeneralDelettoltip.appendChild(deletSpanTultip);



    div.appendChild(containGeneralDelettoltip);
    this.removeEventListener('change', func);
    let deletes = document.querySelectorAll(".btn-delet_contact")

    for (elem of deletes) {
      elem.addEventListener('click', function () {
        this.parentElement.parentElement.remove();
      })

    }
  })
})


bthCanselAdd.addEventListener('click', function () {
  close()
})

add.addEventListener("click", function () {
  base.classList.remove("modal__base-of");
  modalAdd.classList.remove("modal__base-of");
});

function close() {
  base.classList.add("modal__base-of");
  modalAdd.classList.add("modal__base-of");
  modalChange.classList.add("modal__base-of");
  modalDelete.classList.add('modal__base-of')
  surname.value = '';
  names.value = '';
  patronymic.value = '';
  counter = 0;
  let div2 = document.querySelectorAll(".general__contact")
  div2.forEach(function (elem) {
    elem.remove()
  })
  for (let elem of inputSpan) {
    elem.classList.remove('sr')
  }
  let iconLoad = document.querySelector('.loading')
  iconLoad.remove()
}
// закрытие модального  окна при клике на крестик
for (let elem of btnClose) {
  elem.addEventListener("click", function () {
    close();
  });
}

//закрытие модального кона при клике вне его границ 
window.addEventListener("click", function (event) {
  if (event.target.className == "modal__base") {
    close();
  }
});
// сохранения конкта на сервер и выгрузка их в таблицу 
saveButn.addEventListener('click', async function () {
  let arr1 = [];
  let selectValue = document.querySelectorAll('.choices__input');
  let personalContact = document.querySelectorAll('.input__personal-contact');
  for (let i = 0; i < selectValue.length; i++) {
    let obj = {}
    obj['type'] = selectValue[i].value;
    obj['value'] = personalContact[i].value;
    arr1.push(obj)
  }

  const response = await fetch('http://localhost:3000/api/clients', {
    method: 'POST',
    body: JSON.stringify({
      name: names.value,
      surname: surname.value,
      lastName: patronymic.value,
      contacts: arr1
    }),
    headers: {
      'Content-Type': 'application/json',
    }

  })
  create__tables()

  //удаляем всю историю заполнения в модальном окне добавить
  surname.value = '';
  names.value = '';
  patronymic.value = '';
  close()
  let div2 = document.querySelectorAll(".general__contact")
  div2.forEach(function (elem) {
    elem.remove()
  })
})

modalChangeAddContact.addEventListener("click", function () {
  counter++
  if (counter == 10) {
    modalChangeAddContact.disabled = true;
  }
  else if (counter < 10) {
    modalChangeAddContact.disabled = false;
  };
  let div2 = document.createElement("div");
  div2.classList.add("general__contact");
  modalChangeAddContact.insertAdjacentElement("beforeBegin", div2);
  let input = document.createElement("input");
  input.type = 'text';
  input.placeholder = 'Введите данные контакта';
  input.classList.add('input__personal-contact');
  let selectContact3 = document.createElement("select");

  div2.appendChild(selectContact3)
  div2.appendChild(input)
  for (i = 0; i < contact.length; i++) {
    let option_selec = document.createElement("option");
    option_selec.innerHTML = contact[i];
    option_selec.classList.add("upa");
    selectContact3.appendChild(option_selec);
  }
  const choices = new Choices(selectContact3, {
    searchEnabled: false,
    placeholderValue: null,
    position: 'bottom'
  });

  input.addEventListener('change', function func() {
    let containGeneralDelettoltip = document.createElement('div')
    containGeneralDelettoltip.classList.add('relatic')
    let deletSpanTultip = document.createElement('span');
    deletSpanTultip.textContent = 'удалить контакт';
    deletSpanTultip.classList.add('toltip_delete')
    butnDeleteContact = document.createElement('button');
    butnDeleteContact.classList.add("btn-delet_contact");
    butnDeleteContact.insertAdjacentHTML('afterBegin', `<svg class="deleteModal-icon">
    <use xlink:href="#delete-icon"></use>
    </svg>`)
    containGeneralDelettoltip.appendChild(butnDeleteContact);
    containGeneralDelettoltip.appendChild(deletSpanTultip);

    div2.appendChild(containGeneralDelettoltip);
    this.removeEventListener('change', func);
    let deletes = document.querySelectorAll(".btn-delet_contact")

    for (elem of deletes) {
      elem.addEventListener('click', function () {
        this.parentElement.parentElement.remove();
      })
    }
  })
})

btnChangeSave.addEventListener('click', async function () {
  let changeSurname = document.querySelector('.surname_change');
  let changeName = document.querySelector('.name_change');
  let changePatronymic = document.querySelector('.patronymic_change');

  let arr1 = [];
  let selectValue = document.querySelectorAll('.choices__input');
  let personalContact = document.querySelectorAll('.input__personal-contact');

  for (let i = 0; i < selectValue.length; i++) {
    let obj = {}
    obj['type'] = selectValue[i].value;
    obj['value'] = personalContact[i].value;
    arr1.push(obj)
  }
  console.log(arr1)

  const response = await fetch(`http://localhost:3000/api/clients/${idChange.innerHTML}`, {
    method: 'PATCH',
    body: JSON.stringify({
      name: changeName.value,
      surname: changeSurname.value,
      lastName: changePatronymic.value,
      contacts: arr1
    }),
    headers: {
      'Content-Type': 'application/json',
    }
  })
  create__tables()

})

btnChangeDelete.addEventListener('click', function () {
  modalDelete.classList.remove('modal__base-of')
  modalChange.classList.add('modal__base-of')
})
deletContact.addEventListener('click', async function () {
  const response = await fetch(`http://localhost:3000/api/clients/${idChange.textContent}`, {
    method: 'DELETE',
  })
  close()
  create__tables()
})
btnCancel.addEventListener('click', function () {
  console.log('+')
  modalChange.classList.remove('modal__base-of')
  modalDelete.classList.add('modal__base-of')
})


btnSortID.addEventListener('click', async function () {
  btnSortID.classList.toggle('sort')
  const serverClick2 = await fetch('http://localhost:3000/api/clients');
  const todo = await serverClick2.json()

  if (document.querySelector(".sort__ID").classList.contains("sort")) {
    todo.sort(function (a, b) {
      return a.id - b.id
    })
  }
  else {
    todo.sort(function (a, b) {
      return b.id - a.id
    })
  }
  sortCreateTable(todo)
})

btnSortSNP.addEventListener('click', async function () {
  btnSortSNP.classList.toggle('sort')
  const serverClick2 = await fetch('http://localhost:3000/api/clients');
  const todo = await serverClick2.json()

  if (document.querySelector(".sort__SNP").classList.contains("sort")) {
    todo.sort(function (a, b) {
      if (a.surname > b.surname) {
        return 1;
      }
      if (a.surname < b.surname) {
        return -1;
      } else {
        return 0;
      }
    })
  }
  else {
    todo.sort(function (a, b) {
      if (a.surname < b.surname) {
        return 1;
      }
      if (a.surname > b.surname) {
        return -1;
      } else {
        return 0;
      }
    })
  }
  sortCreateTable(todo)
})

bthSortCreation.addEventListener('click', async function () {
  bthSortCreation.classList.toggle('sort')
  const serverClick2 = await fetch('http://localhost:3000/api/clients');
  const todo = await serverClick2.json()
  if (document.querySelector(".sort__Creation").classList.contains("sort")) {
    todo.sort(function (a, b) {
      let data1 = new Date(a.createdAt);
      let data2 = new Date(b.createdAt);
      if (data1 > data2) return 1;
      else if (data1 < data2) return -1;
      return 0;
    });
  }
  else {
    todo.sort(function (a, b) {
      let data1 = new Date(a.createdAt);
      let data2 = new Date(b.createdAt);
      if (data1 < data2) return 1;
      else if (data1 > data2) return -1;
      return 0;
    });
  }
  sortCreateTable(todo)
})

bthSortChange.addEventListener('click', async function () {
  bthSortChange.classList.toggle('sort')
  const serverClick2 = await fetch('http://localhost:3000/api/clients');
  const todo = await serverClick2.json()
  if (document.querySelector(".sort__Change").classList.contains("sort")) {
    todo.sort(function (a, b) {
      let data1 = new Date(a.updatedAt);
      let data2 = new Date(b.updatedAt);
      if (data1 > data2) return 1;
      else if (data1 < data2) return -1;
      return 0;
    });
  }
  else {
    todo.sort(function (a, b) {
      let data1 = new Date(a.updatedAt);
      let data2 = new Date(b.updatedAt);
      if (data1 < data2) return 1;
      else if (data1 > data2) return -1;
      return 0;
    });
  }
  sortCreateTable(todo)
})


serchInput.addEventListener('change', async function func() {
  let i = 0;
  let time = setInterval(async function () {
    i++
    const response = await fetch(`http://localhost:3000/api/clients?search=${serchInput.value}`)
    let todo = await response.json();
    sortCreateTable(todo)
    if (i == 2) {
      clearInterval(time)
    }
  }, 300)


})
'use strict'

const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')
const showBtnModal = document.querySelectorAll('.show-modal')
const closeBtnModal = document.querySelector('.close-modal')
const card = document.querySelector('.card')

const users = [
  {
    id: 1,
    name: 'Akshin',
    surname: 'Azizov',
    image: 'https://blogs.vmware.com/security/files/2020/05/haking_is_the_new_espionage.jpg',
    description: `Hi! I'm Akshin! I work as an Ethical Hacker and Computer Specialist for the Federal Government of the United States. I work to stop groups of hackers like Ayhan Amirli's hacking group that is terrorizing the world!`,
    work: {
      name: 'Ethical Hacker',
      company: 'Federal Government'
    }
  },

  {
    id: 2,
    name: 'Ehtiram',
    surname: 'Azizov',
    image: 'https://khazar.org/uploads/articles/o_1b322mui71d5o17cemfrqphn16m.JPG',
    description: `Hi! I'm Ehtiram! I work as a Petroluem Engineer with BP! I have over 20 years of experience in Petroluem Engineering, and I am regarded as one of the best Oil Engineers in history. In this image on the left, I am lecturing students on problems in a oil well in Azerbaijan.`,
    work: {
      name: 'Petroluem Engineer',
      company: '(Former) Schlumberger, Trican; (Current) BP'
    }
  },


  {
    id: 3,
    name: 'Salim',
    surname: 'Azizov',
    image: 'https://media.licdn.com/dms/image/C5603AQGuRz5Bc96jqQ/profile-displayphoto-shrink_800_800/0/1570351405196?e=2147483647&v=beta&t=Po4Qh1DlwcN-rB-rir-brlH9MVt7oTw0nortp8aDaco',
    description: `Hi! I'm Salim! I am a retired Engineer and Businessman. I own a PhD in Pure Advanced Physics, and I used to own several businesses in my earlier days. Then I lost my business's because of an insurance scam, and now I am a 73 year old retiree.`,
    work: {
      name: 'Physics Engineer, Businessman',
      company: 'N/A'
    }
  }



]

for (let i=0; i < showBtnModal.length; i++) {
  showBtnModal[i].addEventListener('click', function() {
    openModal(i+1)
  })
}

function openModal (index) {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");

  const user = users.find(u => u.id ===index)
  generateMarkup(user)
};

function generateMarkup(user) {
  card.innerHTML = ''
  const markup = `
  <img class="img" src="${user.image}" alt="">
  <div class="text-wrapper">
    <p class="review">${user.description}</p>
    <p class="author">${user.name} ${user.surname}</p>
    <p class="work">${user.work.name}, ${user.work.company}</p>
  </div>
 `

 card.insertAdjacentHTML('beforeend', markup)
}



const closeModal = function() {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
  generateMarkup()
}

closeBtnModal.addEventListener('click', closeModal)

overlay.addEventListener('click', closeModal)

document.addEventListener('keydown', function(event) {
  if(event.key === 'Escape') {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
  }
})



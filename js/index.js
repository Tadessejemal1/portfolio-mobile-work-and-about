const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});
document.querySelectorAll('.nav-link').forEach((n) =>
  n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
  })
);
//const popupModal = document.querySelector(".modal-container");
//const projectSee = document.querySelector(".project-see");
//const btnX = document.querySelector(".btn-x")

//projectSee.addEventListener("click",() => {
//   popupModal.style.display="block";
//})

//btnX.addEventListener("click", () => {
//  popupModal.style.display = "none";

//})

const value = document.createDocumentFragment();
const popupModal = document.querySelector('.modal-container');
const projectSee = document.querySelectorAll('.project-see');
const btnX = document.querySelector('.btn-x');
const modalContent = document.querySelector('.popup-content');
const overlayModal = document.querySelector('#overlay')
// Project list

const projects = [
  {
    title: 'Keeping track',
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    featuredImage: './images/popup.png',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    livelink:
      'https://tadessejemal1.github.io/portfolio-mobile-work-and-about/',
    sourcelink:
      'https://github.com/Tadessejemal1/portfolio-mobile-work-and-about',
  },
  {
    title: 'Keeping track',
    technologies: ['HTML', 'CSS', 'Ruby'],
    featuredImage: './images/popup.png',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    livelink:
      'https://tadessejemal1.github.io/portfolio-mobile-work-and-about/',
    sourcelink:
      'https://github.com/Tadessejemal1/portfolio-mobile-work-and-about',
  },
  {
    title: 'Project Post',
    technologies: ['Java', 'SpringBoot', 'Ruby'],
    featuredImage: './images/popup.png',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    livelink:
      'https://tadessejemal1.github.io/portfolio-mobile-work-and-about/',
    sourcelink:
      'https://github.com/Tadessejemal1/portfolio-mobile-work-and-about',
  },
  {
    title: 'More Projects',
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    featuredImage: './images/popup.png',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    livelink:
      'https://tadessejemal1.github.io/portfolio-mobile-work-and-about/',
    sourcelink:
      'https://github.com/Tadessejemal1/portfolio-mobile-work-and-about',
  },
  {
    title: 'Project 4',
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    featuredImage: './images/popup.png',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    livelink:
      'https://tadessejemal1.github.io/portfolio-mobile-work-and-about/',
    sourcelink:
      'https://github.com/Tadessejemal1/portfolio-mobile-work-and-about',
  },
  {
    title: 'Project 5',
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    featuredImage: './images/popup.png',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    livelink:
      'https://tadessejemal1.github.io/portfolio-mobile-work-and-about/',
    sourcelink:
      'https://github.com/Tadessejemal1/portfolio-mobile-work-and-about',
  },
  {
    title: "Post Project",
    technologies: ['HTML', 'CSS', 'Java'],
    featuredImage: './images/popup.png',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    livelink:
      'https://tadessejemal1.github.io/portfolio-mobile-work-and-about/',
    sourcelink:
      'https://github.com/Tadessejemal1/portfolio-mobile-work-and-about',
  },
];
let title;
let medias;
let img;
let description;
let buttons;
let seeLiveButton;
let sourceButton;
for (let i = 0; i < projectSee.length; i++) {
  projectSee[i].onclick = function createModal() {
    popupModal.style.display = 'block';
    overlayModal.style.display = 'block';

    title = document.createElement('h3');
    title.setAttribute('class', 'modal-title');
    title.appendChild(document.createTextNode(projects[i].title));

    medias = document.createElement('div');
    medias.setAttribute('class', 'modal-media');
    for (let i = 0; i < projects[i].technologies.length; i++) {
      const techDisplay = document.createElement('span');
      techDisplay.setAttribute('class', 'badge');
      techDisplay.appendChild(
        document.createTextNode(projects[i].technologies[i])
      );
      medias.appendChild(techDisplay);
    }

    img = document.createElement('img');
    img.setAttribute('class', 'image-container');
    img.setAttribute('src', projects[i].featuredImage);
    img.setAttribute('alt', 'image of the project');

    description = document.createElement('p');
    description.setAttribute('class', 'description');
    description.appendChild(document.createTextNode(projects[i].description));

    buttons = document.createElement('div');
    buttons.setAttribute('class', 'modal-button');

    seeLiveButton = document.createElement('button');
    seeLiveButton.setAttribute('class', 'btn-modal');
    seeLiveButton.setAttribute('type', 'button');
    seeLiveButton.setAttribute(
      'onclick',
      `location.href="${projects[i].livelink}";`
    );
    seeLiveButton.innerHTML = 'See Live <i class="fa fa-github"></i>';

    sourceButton = document.createElement('button');
    sourceButton.setAttribute('class', 'btn-modal');
    sourceButton.setAttribute('type', 'button');
    sourceButton.setAttribute(
      'onclick',
      `location.href="${projects[i].sourcelink}";`
    );
    sourceButton.innerHTML = 'See Source <i class="fa fa-github" aria-hidden="true"></i>';

    buttons.appendChild(seeLiveButton);
    buttons.appendChild(sourceButton);

    value.appendChild(title);
    value.appendChild(medias);
    value.appendChild(img);
    value.appendChild(description);
    value.appendChild(buttons);

    modalContent.appendChild(value);
  };
}
btnX.addEventListener('click', () => {
  popupModal.style.display = 'none';
  modalContent.innerHTML = '';
  overlayModal.style.display = 'none';
});

// When the user clicks anywhere outside of the modal, close it
window.onclick = function closeButtonB(event) {
  if (event.target === popupModal) {
    popupModal.style.display = 'none';
    modalContent.innerHTML = '';
  }
};

// validation email

const form = document.querySelector('.contact-forms');
const error = document.querySelector('.errors');
const EMAIL_INVALID = 'Email address should be written in lower case';
const email = document.querySelector ("#mail")

function validateEmail() {
  const emailValue = email.value.trim();
  const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$/;

  if (!emailRegex.test(emailValue)) {
    return false;
  }

  return true;
}

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const { email } = form.elements;
  const isValidEmail = validateEmail(email);

  if (isValidEmail) {
    error.style.display = 'none';
    form.submit();
  } else {
    error.style.display = 'block';
    error.innerHTML = `${EMAIL_INVALID}!\n`;
  }
});

// preserve data on the local Storage

// var testObject = { 'one': 10, 'two': 20, 'three': 3 };
// localStorage.setItem('testObject', JSON.stringify(testObject));
// var retrievedObject = JSON.parse(localStorage.getItem('testObject'));
// console.log('retrievedObject: ', retrievedObject);

const inputElements = document.querySelectorAll('.contact-forms-input');

const contactMessage = {
  name: '',
  email: '',
  message: '',
};

function dataStorage() {
  localStorage.setItem('dataForm', JSON.stringify(contactMessage));
}

inputElements.forEach((input) => {
  input.addEventListener('change', () => {
    contactMessage[input.name] = form.elements[input.name].value.trim();
    dataStorage();
  });
});

window.addEventListener('load', () => {
  const inputElements = document.querySelectorAll('.contact-forms-input');
  if (localStorage.getItem('dataForm') !== '' || localStorage.getItem('dataForm') !== null) {
    inputElements.forEach((input) => {
      input.value = JSON.parse(localStorage.getItem('dataForm'))[input.name];
      contactMessage[input.name] = input.value;
    });
  }
});
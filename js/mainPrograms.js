const mainProgramsSection = document.querySelector(
  '.main-programs-container'
);

const mainPrograms = [
  {
    icon: './img/web-design.png',
    name: '',
    title: 'Lecture',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    icon: './img/web-design.png',
    name: '',
    title: 'Lecture',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    icon: './img/web-design.png',
    name: '',
    title: 'Exhibition',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    icon: './img/web-design.png',
    name: '',
    title: 'Forum',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    icon: './img/web-design.png',
    name: '',
    title: 'Workshop',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    icon: './img/web-design.png',
    name: '',
    title: 'CC Ignite',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
];

mainPrograms.forEach((item) => {
  const { icon, title, description } = item;

  mainProgramsSection.innerHTML += `
    <div class='flex justify-between items-center gap-x-4 w-[100%]'>
      <img class="h-[50px] w-[50px] object-contain" src=${icon} alt=${name}/>
      <h3>${title}</h3>
      <p class='justify-self-end'>${description}</p>
    </div>
  `;
});

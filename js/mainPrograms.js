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
    title: 'People',
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
    title: 'Work',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    icon: './img/web-design.png',
    name: '',
    title: 'Ignite',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
];

mainPrograms.forEach((item) => {
  const { icon, title, description } = item;

  mainProgramsSection.innerHTML += `
    <div class='project flex justify-between items-center w-[100%] h-auto px-4 py-6'>
      <div class='w-[50%] flex justify-start items-center gap-x-1'>
        <img class="h-[30px] w-[30px] object-contain" src=${icon} alt=${name}/>
        <h3 class='text-lg font-medium text-primary-orange'>${title}</h3>
      </div>
      <div class='grow ml-8 w[50%] h-[100%]'>
        <p class='justify-self-end text-base leading-0 text-off-white'>${description}</p>
      </div>
    </div>
  `;
});

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
    <div class='project flex justify-between items-center w-[100%] gap-x-2 h-auto px-4 py-6'>
      <div class='w-[40%] h-[100%] flex justify-start items-center'>
        <img class="h-[40px] w-[40px] object-contain" src=${icon} alt=${name}/>
        <h3 class='text-base font-semibold text-primary-orange ml-[5px]'>${title}</h3>
      </div>
      <div class='grow w-[60%] h-[100%]'>
        <p class='justify-self-end text-sm leading-0 text-off-white'>${description}</p>
      </div>
    </div>
  `;
});

const mainProgramsSection = document.querySelector(
  '.main-programs-container',
);

const mainPrograms = [
  {
    icon: './img/icons/new-products.png',
    program: 'web design',
    title: 'Lecture',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    icon: './img/icons/app-development.png',
    program: 'app development',
    title: 'People',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    icon: './img/icons/coding.png',
    program: 'coding',
    title: 'Forum',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    icon: './img/icons/coder.png',
    program: 'coder',
    title: 'Work',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    icon: './img/icons/desktop.png',
    program: 'desktop',
    title: 'Ignite',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
];

mainPrograms.forEach((item) => {
  const {
    icon, title, description, program,
  } = item;

  mainProgramsSection.innerHTML += `
    <div class='project flex md:flex-col justify-between items-center w-[100%] gap-x-2 h-auto px-4 py-6'>
      <div class='w-[40%] md:w-[100%] h-[100%] flex md:flex-col justify-start items-center'>
        <img class="h-[40px] w-[40px] object-contain" src=${icon} alt=${program}/>
        <h3 class='text-lg md:text-xl font-bold md:font-medium text-primary-orange ml-[10px] md:ml-0 md:mt-4'>${title}</h3>
      </div>
      <div class='grow w-[60%] md:w-[100%] h-[100%] md:mt-4'>
        <p class='justify-self-end text-base md:text-base md:text-center leading-0 md:leading-[1.8rem] text-off-white'>${description}</p>
      </div>
    </div>
  `;
});

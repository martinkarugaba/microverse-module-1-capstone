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
      'Bibendum neque egestas congue quisque egestas diam in.',
  },
  {
    icon: './img/icons/coding.png',
    program: 'coding',
    title: 'Forum',
    description:
      'In metus vulputate eu scelerisque felis imperdiet proin leo.',
  },
  {
    icon: './img/icons/coder.png',
    program: 'coder',
    title: 'Work',
    description: 'Fermentum et sollicitudin ac orci phasellus.',
  },
  {
    icon: './img/icons/desktop.png',
    program: 'desktop',
    title: 'Ignite',
    description:
      'Tristique senectus et netus et malesuada fames ac turpis. ',
  },
];

mainPrograms.forEach((item) => {
  const {
    icon, title, description, program,
  } = item;

  mainProgramsSection.innerHTML += `
    <div class='project flex md:flex-col justify-center items-center md:gap-y-0 md:h-[260px] w-[100%] md:grow gap-x-2 h-auto px-4 py-6'>
      <div class='w-[40%] md:w-[100%] h-[100%] flex md:flex-col justify-start md:justify-between md:h-[150px] items-center'>
        <img class="h-[40px] w-[40px] object-contain" src=${icon} alt=${program}/>
        <h3 class='text-lg md:text-[1.2rem] font-bold md:font-semibold text-primary-orange ml-[10px] md:ml-0 md:mt-2'>${title}</h3>
      </div>
      <div class='grow w-[60%] md:w-[100%] h-[100%] md:grow-0 md:mt-[0.5rem]'>
        <p class='justify-self-end text-base md:text-base md:text-center leading-0 md:leading-[1.8rem] text-off-white'>${description}</p>
      </div>
    </div>
  `;
});

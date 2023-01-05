const featuredSpeakersSection = document.querySelector(
  '.featured-speakers-section'
);

const featuredSpeakersList = [
  {
    name: 'Elon Musk',
    jobTitle: 'CEO Twitter',
    img: './img/featured_speakers/man_1.jpg',
    chess: '/img/featured_speakers/black_chess_board.gif',
    about:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
  },
  {
    name: 'Danny Thompson',
    jobTitle: 'Senior Software Engineer @Google',
    img: './img/featured_speakers/man_2.jpg',
    chess: '/img/featured_speakers/black_chess_board.gif',

    about:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
  },
  {
    name: 'Olawale Ayo',
    jobTitle: 'Product Manager @YouTube',
    img: './img/featured_speakers/man_3.jpg',
    chess: '/img/featured_speakers/black_chess_board.gif',

    about:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
  },
  {
    name: 'Brad Traversy',
    jobTitle: 'Dev Rel @GitHub',
    img: './img/featured_speakers/man_4.jpg',
    chess: '/img/featured_speakers/black_chess_board.gif',

    about:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
  },
  {
    name: 'Net Ninja',
    jobTitle: 'Product Manager @Andela Kenya',
    img: './img/featured_speakers/man_5.jpg',
    chess: '/img/featured_speakers/black_chess_board.gif',

    about:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
  },
  {
    name: 'Brandon Goldman',
    jobTitle: 'UX Engineer @Microsoft',
    img: './img/featured_speakers/man_6.jpg',
    chess: '/img/featured_speakers/black_chess_board.gif',

    about:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
  },
];


featuredSpeakersList.forEach((speaker) => {
  const { name, jobTitle, img, about, chess } = speaker;

  featuredSpeakersSection.innerHTML += `
    <article class='featuredSpeaker w-[100%] md:w-[45%] md:gap-x-[10px] flex justify-between items-center gap-x-4'>
      <div class='featuredSpeaker__img-container'>
        <img class='chess_board' src=${chess} alt='black chess board'>
        <img class= 'speaker' src=${img} alt=${name}/>
      </div>
      <div class='w-[60%]'>
        <h3 class='font-semibold md:text-lg'>${name}</h3>
        <p class='text-sm text-primary-orange italic'>${jobTitle}</p>
        <div class="w-[30px] h-[2px] bg-primary-grey mt-2"></div>
        <p class='text-sm md:text-base mt-2'>${about}</p>
      </div>
    </article>
  `;
})


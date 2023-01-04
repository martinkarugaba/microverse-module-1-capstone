const featuredSpeakersSection = document.querySelector(
  '.featured-speakers-section'
);

const featuredSpeakersList = [
  {
    name: 'Elon Musk',
    jobTitle: 'CEO Twitter',
    img: './img/featured_speakers/man.jpg',
    chess: '/img/featured_speakers/black_chess_board.gif',
    about:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
  },
  {
    name: 'Elon Musk',
    jobTitle: 'CEO Twitter',
    img: './img/featured_speakers/man.jpg',
    chess: '/img/featured_speakers/black_chess_board.gif',

    about:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
  },
  {
    name: 'Elon Musk',
    jobTitle: 'CEO Twitter',
    img: './img/featured_speakers/man.jpg',
    chess: '/img/featured_speakers/black_chess_board.gif',

    about:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
  },
  {
    name: 'Elon Musk',
    jobTitle: 'CEO Twitter',
    img: './img/featured_speakers/man.jpg',
    chess: '/img/featured_speakers/black_chess_board.gif',

    about:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
  },
  {
    name: 'Elon Musk',
    jobTitle: 'CEO Twitter',
    img: './img/featured_speakers/man.jpg',
    chess: '/img/featured_speakers/black_chess_board.gif',

    about:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
  },
  {
    name: 'Elon Musk',
    jobTitle: 'CEO Twitter',
    img: './img/featured_speakers/man.jpg',
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
        <h3 class='font-semibold'>${name}</h3>
        <p class='text-sm text-primary-orange italic'>${jobTitle}</p>
        <div class="w-[30px] h-[2px] bg-primary-grey mt-2"></div>
        <p class='text-sm mt-2'>${about}</p>
      </div>
    </article>
  `;
})


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
    <article class='flex justify-between w-[100%] items-start gap-x-2 border border-red-700'>
      <div class='featuredSpeaker__img-container'>
        <img class='chess_board' src=${chess} alt='black chess board'>
        <img class= 'speaker' src=${img} alt=${name}/>
      </div>
      <div class='w-[50%]'>
        <h3 class='font-semibold'>${name}</h3>
        <p class='text-sm text-primary-orange'>${jobTitle}</p>
        <div class="w-[40px] h-[2px] bg-primary-orange mt-4"></div>
        <p class='text sm'>${about}</p>
      </div>
    </article>
  `;
})
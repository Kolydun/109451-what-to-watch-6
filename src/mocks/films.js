import {nanoid} from "nanoid";
import dayjs from "dayjs";

const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

const randomBoolean = () => {
  return Boolean(getRandomInteger(0, 1));
};

const createTitle = () => {
  const filmTitles = [
    `Inception`,
    `Dark knight`,
    `Lord of the Rings`,
    `Hobbit`,
    `Goodfellows`,
    `Apocalypses now`,
    `Bohemian Rhapsody`,
    `Harry Potter`
  ];
  const randomNameNumber = getRandomInteger(0, filmTitles.length - 1);

  return filmTitles[randomNameNumber];
};

const createRandomPreview = () => {
  const posters = [
    `fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    `bohemian-rhapsody.jpg`,
    `no-country-for-old-men.jpg`,
    `pulp-fiction.jpg`,
    `snatch.jpg`,
    `bg-the-grand-budapest-hotel.jpg`,
    `aviator.jpg`
  ];

  const getRandomPoster = `img/` + posters[getRandomInteger(0, posters.length - 1)];

  return getRandomPoster;
};

const createDescription = () => {
  const descriptions = [
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit. `,
    `Cras aliquet varius magna, non porta ligula feugiat eget. `,
    `Fusce tristique felis at fermentum pharetra. `,
    `Aliquam id orci ut lectus varius viverra. `,
    `Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. `,
    `Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. `,
    `Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. `,
    `Sed sed nisi sed augue convallis suscipit in sed felis. `,
    `Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. `,
    `In rutrum ac purus sit amet tempus. `
  ];

  const randomDescriptionNumber = getRandomInteger(1, 5);
  const randomDescription = [];
  for (let i = 0; i < randomDescriptionNumber; i++) {
    randomDescription.push(descriptions[getRandomInteger(0, descriptions.length - 1)]);
  }
  return randomDescription;
};

const createRandomDirector = () => {
  const directors = [
    `Quentin Tarantino`,
    `Buster Keaton`,
    `Bong Joon Ho`,
    `Christopher Nolan`,
    `David Lynch`
  ];
  return directors[getRandomInteger(0, directors.length - 1)];
};

const createRandomActors = () => {
  const actors = [
    ` Denzel Washington`,
    ` Katharine Hepburn`,
    ` Marlon Brando`,
    ` Jack Nicholson`,
    ` Robert De Niro`,
    ` Daniel Day-Lewis`,
    ` Meryl Streep`
  ];
  let randomActorsSet = new Set();
  const counter = getRandomInteger(1, 5);
  for (let i = 0; i < counter; i++) {
    randomActorsSet.add(actors[getRandomInteger(0, actors.length - 1)]);
  }

  const randomActors = Array.from(randomActorsSet);

  return randomActors;
};

const createGenre = () => {
  const genres = [
    `Documentary`,
    `Comedy`,
    `Horror`,
    `Crime`,
    `Drama`,
    `Sci-Fi`,
    `Romance`,
    `Kids & Family`,
    `Thrillers`,
  ];

  return genres[getRandomInteger(0, genres.length - 1)];
};

const createReleaseDate = () => {
  const filmYears = [
    `2000`,
    `1997`,
    `2010`,
    `1990`,
    `2005`,
    `1996`,
    `2015`
  ];

  const randomYearIndex = getRandomInteger(0, filmYears.length - 1);
  const randomYear = filmYears[randomYearIndex];

  return dayjs(randomYear).format(`YYYY`);
};

const createComment = () => {
  return {
    id: nanoid(),
    user: {
      id: nanoid(),
      name: `User` + ` ` + getRandomInteger(1, 100)
    },
    rating: getRandomInteger(1, 10),
    comment: `Текст-заглушка, который будет заменен позже`,
    date: dayjs().format(`MMMM DD, YYYY`)
  };
};

const createRandomComments = () => {
  const randomComments = [];
  const counter = getRandomInteger(0, 5);

  for (let i = 0; i < counter; i++) {
    randomComments.push(createComment());
  }
  return randomComments;
};

export const generateFilmCard = () => {
  return {
    id: nanoid(),
    name: createTitle(),
    previewImage: createRandomPreview(),
    posterImage: `img/the-grand-budapest-hotel-poster.jpg`,
    backgroundImage: createRandomPreview(),
    backgroundColor: `ffffff`,
    videoLink: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    previewVideoLink: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    description: createDescription(),
    rating: getRandomInteger(1, 10),
    scoresCount: getRandomInteger(0, 500),
    director: createRandomDirector(),
    starring: createRandomActors(),
    runTime: getRandomInteger(60, 210),
    genre: createGenre(),
    released: createReleaseDate(),
    isFavorite: randomBoolean(),
    comments: createRandomComments()
  };
};

//Import Images
import athlete from "./img/athlete-small.png";
import couple from "./img/couple.jpg";
import athlete2 from "./img/athlete2.png";
import goodtimes2 from "./img/good-times2.jpg";
import theracer2 from "./img/the-racer2.jpg";
import car from "./img/car.jpg";

export const MovieState = () => {
  return [
    {
      title: "The Athlete",
      mainImg: athlete,
      secondaryImg: athlete2,
      url: "/react-capture-portfolio/work/the-athlete",
      awards: [
        {
          title: "Edge of your seat thrill ride.",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "Wonderfully shot.",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "Non-stop action.",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
      ],
    },
    {
      title: "Good Times",
      mainImg: couple,
      url: "/react-capture-portfolio/work/good-times",
      secondaryImg: goodtimes2,
      awards: [
        {
          title: "Great family movie",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "Romantic feel good that's bound to make you smile.",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "Fantastic.",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
      ],
    },
    {
      title: "The Racer",
      mainImg: car,
      url: "/react-capture-portfolio/work/the-racer",
      secondaryImg: theracer2,
      awards: [
        {
          title: "Truly A masterpiece",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "Fresh look on a brutal sport.",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "It's okay.",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
      ],
    },
  ];
};

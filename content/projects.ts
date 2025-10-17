export type Project = {
  slug: string
  title: string
  year?: number
  blurb: string
  long?: string
  tech?: string[]
  github?: string
  live?: string
  links?: string[]
  thumbnail: string   // /projects/*.webp or .jpg (16:9)
  alt: string
}

export const projects: Project[] = [
  {
    slug: "last-chance",
    title: "Last Chance",
    blurb:
      "Here is a project I made for my friends, omg it was so much fun haha. It is a video game we made for a game jam, which we made in 48 hours. Omg it was so much fun we stayed up until 4am working on this project. I could barely stay awake. After we won the best game award it was all worth it haha.",
    long:
      "Here is a project I made for my friends, omg it was so much fun haha. It is a video game we made for a game jam, which we made in 48 hours. Omg it was so much fun we stayed up until 4am working on this project. I could barely stay awake. After we won the best game award it was all worth it haha.",
    live: "https://prisoner99.itch.io/last-chance",
    links: ["https://globalgamejam.org/games/2025/last-chance-5"],
    thumbnail: "/projects/last-chance.webp",
    alt: "Last Chance game screenshot—top-down maze with player path and UI",
  },

  {
    slug: "balloon-animal-artist",
    title: "Balloon Animal Artist",
    blurb:
      "Wow I used to work as a balloon animal freelancer. I used to go to private parties and just twist balloon animals. It first started off as a hobby and I made it into a career. Wow, good times. I used to work for $20 an hour.",
    long:
      "Wow I used to work as a balloon animal freelancer. I used to go to private parties and just twist balloon animals. It first started off as a hobby and I made it into a career. Wow, good times. I used to work for $20 an hour.",
    thumbnail: "/projects/balloon-freelance.webp",
    alt: "photo of a balloon animal setup from my freelance gigs",
  },

  {
    slug: "nextbot-nightmare",
    title: "NextBot Nightmare",
    blurb:
      "This was the first VR video game I’ve ever made. Wow, making this game was awesome, it got me into game development. This is a game where you had to complete tasks inside a maze while an evil NextBot was chasing you around. Super scary with jump scares LOL.",
    long:
      "This was the first VR video game I’ve ever made. Wow, making this game was awesome, it got me into game development. This is a game where you had to complete tasks inside a maze while an evil NextBot was chasing you around. Super scary with jump scares LOL.",
    thumbnail: "/projects/nextbot-nightmare.webp",
    alt: "VR maze game screenshot with a pursuing NextBot and task UI",
  },

  {
    slug: "cat-outta-here",
    title: "Cat Outta Here",
    blurb:
      "Where do I begin, this game is beautiful. I love the art so much, it is so cute omg. This game is where you play as a cat who had just stolen food from the dinner table and you are running away trying to avoid obstacles, super fun two-player game!!",
    long:
      "Where do I begin, this game is beautiful. I love the art so much, it is so cute omg. This game is where you play as a cat who had just stolen food from the dinner table and you are running away trying to avoid obstacles, super fun two-player game!!",
    live: "https://akoalafied.itch.io/cat-outta-here",
    thumbnail: "/projects/cat-outta-here.webp",
    alt: "Cat Outta Here game art and gameplay with cute hand-drawn style",
  },

  {
    slug: "spud-showdown",
    title: "Spud Showdown",
    blurb:
      "Awesome game, this game first started off simple. But the more I worked on this game the more and more features I wanted to add. This ended up being a game with so much stuff going on at once. It is so fun LOL.",
    long:
      "Awesome game, this game first started off simple. But the more I worked on this game the more and more features I wanted to add. This ended up being a game with so much stuff going on at once. It is so fun LOL.",
    live: "https://ericlongs.itch.io/spud-showdown",
    thumbnail: "/projects/spud-showdown.webp",
    alt: "Spud Showdown gameplay—arena where players toss a hot potato",
  },

  {
    slug: "hack-hayward",
    title: "Hack Hayward",
    blurb:
      "Made a super dope and cool AI chatbot which gives you information on transit times. Give it a destination and it will tell you if the bus has delays or not and what your ETA is and which buses you gotta take. I made this with a team of 4: Jay, me, Dino, Brian. Wow such an amazing team, it was awesome and I’ll never forget the 48 hours we spent grinding out this project LOL. Some days I wish I would relive those days again.",
    long:
      "Made a super dope and cool AI chatbot which gives you information on transit times. Give it a destination and it will tell you if the bus has delays or not and what your ETA is and which buses you gotta take. I made this with a team of 4: Jay, me, Dino, Brian. Wow such an amazing team, it was awesome and I’ll never forget the 48 hours we spent grinding out this project LOL. Some days I wish I would relive those days again.",
    thumbnail: "/projects/hack-hayward.webp",
    alt: "Transit chatbot web UI showing routes and ETA details",
  },

  {
    slug: "happy-doodle",
    title: "Happy Doodle",
    blurb:
      "I made this game for the DevNetwork API + Cloud + Data Hackathon. It was super fun to make it. I learned how to use Foxit, pretty cool tool. The video game is made on the web browser using Vercel. Basically this is a party game where two people doodle based on a prompt then the audience votes which doodle they liked more. It’s a showdown!!",
    long:
      "I made this game for the DevNetwork API + Cloud + Data Hackathon. It was super fun to make it. I learned how to use Foxit, pretty cool tool. The video game is made on the web browser using Vercel. Basically this is a party game where two people doodle based on a prompt then the audience votes which doodle they liked more. It’s a showdown!!",
    thumbnail: "/projects/happy-doodle.webp",
    alt: "Happy Doodle browser game with two doodle canvases and vote UI",
  },
]

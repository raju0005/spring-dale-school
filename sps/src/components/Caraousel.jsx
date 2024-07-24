import { Carousel, Typography, Button } from "@material-tailwind/react";

function Carousell() {
  return (
    <Carousel className="rounded-xl" aria-label="Image carousel showcasing events">
      <div className="relative h-full w-full" role="group" aria-roledescription="slide">
        <img
          src="https://placehold.co/600x400/grey/grey?text="
          alt="Annual Day Celebrations"
          className="h-full w-full object-cover"
          aria-label="Annual Day Celebrations"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/10">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="green"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
              aria-label="Annual Day Celebrations"
            >
              Annual Day Celebrations
            </Typography>
            <Typography
              variant="lead"
              color="green"
              className="mb-12 opacity-80"
              aria-label="Celebrating Excellence in Sports. Join us in celebrating athletic achievement and team spirit. A day dedicated to fun, competition, and camaraderie!"
            >
              "Celebrating Excellence in Sports. Join us in celebrating athletic
              achievement and team spirit. A day dedicated to fun, competition,
              and camaraderie!"
            </Typography>
          </div>
        </div>
      </div>
      <div className="relative h-full w-full" role="group" aria-roledescription="slide">
        <img
          src="https://placehold.co/600x400/grey/grey?text="
          alt="Science Exhibition"
          className="h-full w-full object-cover"
          aria-label="Science Exhibition"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/10">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="green"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
              aria-label="Science Exhibition"
            >
              Science Exhibition
            </Typography>
            <Typography
              variant="lead"
              color="green"
              className="mb-12 opacity-80"
              aria-label="Showcasing Student Innovations. Explore groundbreaking projects and creative solutions. A celebration of young minds and their brilliant ideas!"
            >
              "Showcasing Student Innovations. Explore groundbreaking projects
              and creative solutions. A celebration of young minds and their
              brilliant ideas!"
            </Typography>
          </div>
        </div>
      </div>
      <div className="relative h-full w-full" role="group" aria-roledescription="slide">
        <img
          src="https://placehold.co/600x400/grey/grey?text="
          alt="Cultural Fest"
          className="h-full w-full object-cover"
          aria-label="Cultural Fest"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/10">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="green"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
              aria-label="Cultural Fest"
            >
              Cultural Fest
            </Typography>
            <Typography
              variant="lead"
              color="green"
              className="mb-12 opacity-80"
              aria-label="Embracing Diversity and Creativity. Celebrate the rich tapestry of cultures and artistic expressions. A vibrant showcase of tradition, innovation, and talent!"
            >
              "Embracing Diversity and Creativity. Celebrate the rich tapestry
              of cultures and artistic expressions. A vibrant showcase of
              tradition, innovation, and talent!"
            </Typography>
          </div>
        </div>
      </div>
    </Carousel>
  );
}

export default Carousell;

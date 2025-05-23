import Cta from "../components/Cta";

const AboutPage = () => {
  return (
    <main className="flex flex-col gap-8 w-5-6 md:w-1/2 mx-auto">
      <img
        src="/about.webp"
        alt="A customer enjoying the night sky while sitting on their van in front of their rooftop tent"
      />
      <h1 className="text-neutral-500 font-bold text-3xl">
        Don’t squeeze in a sedan when you could relax in a van.
      </h1>
      <div className="font-medium space-y-6">
        <p>
          Our mission is to enliven your road trip with the perfect travel van
          rental. Our vans are recertified before each trip to ensure your
          travel plans can go off without a hitch. (Hitch costs extra 😉)
        </p>
        <p>
          Our team is full of vanlife enthusiasts who know firsthand the magic
          of touring the world on 4 wheels.
        </p>
      </div>
      <Cta />
    </main>
  );
};

export default AboutPage;

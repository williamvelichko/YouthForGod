import Header from "../../components/Header";
import Footer from "../../components/Footer";
import benImage from "../../assets/benCropped.webp";
import neymanImage from "../../assets/neyman.webp";
import romanImage from "../../assets/roman.webp";
import "./Speakers.scss";

const speakers = [
  {
    name: "Ben Balzhyk",
    title: "Pastor",
    organization: "Independent Baptist Church",
    image: benImage,
  },
  {
    name: "Konstantin Neyman",
    title: "Pastor",
    organization: "Hazel Dell Baptist Church",
    image: neymanImage,
  },
  {
    name: "Roman Balatski",
    title: "Youth Pastor",
    organization: "Bible Baptist Church",
    image: romanImage,
  },
];

export function SpeakersPage() {
  return (
    <>
      <Header />
      <main className="speakers">
        <section className="speakers__hero">
          <p className="speakers__eyebrow">Meet the voices</p>
          <h1>Speakers & Guides</h1>
          <p className="speakers__lead">
            Pastors, practitioners, and creatives committed to equipping the
            next generation with gospel clarity and Spirit-led boldness.
          </p>
        </section>

        <section className="speakers__grid">
          {speakers.map((speaker) => (
            <article key={speaker.name} className="speakers__card">
              <div className="speakers__image-wrap">
                <img src={speaker.image} alt={speaker.name} />
              </div>
              <div className="speakers__card-body">
                <h3>{speaker.name}</h3>
                <p className="speakers__title">{speaker.title}</p>
                <p className="speakers__org">{speaker.organization}</p>
              </div>
            </article>
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
}

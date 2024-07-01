import Banner from "@/layouts/Banner/Banner";
import Header from "@/layouts/Header/Header";
import Technologies from "@/layouts/Technologies/Technologies";
import Projects from "@/layouts/Projects/Projects";
import Education from "@/layouts/Education/Education";
import Certificates from "@/layouts/Certificates/Certificates";

function Home() {
  return (
    <main>
      <Header />
      <Banner />
      <Education />
      <Certificates />
      <Technologies />
      <Projects />
    </main>
  );
}

export default Home;

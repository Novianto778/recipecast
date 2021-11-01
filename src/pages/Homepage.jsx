import React from 'react';
import Navbar from 'src/components/Navbar/Navbar';
import Hero from 'src/components/Hero/Hero';
import Tagline from 'src/components/Tagline/Tagline';
import InfoSection from 'src/components/InfoSection/InfoSection';
import Info1 from 'src/assets/images/info1.webp';
import Info2 from 'src/assets/images/info2.webp';
import CategoriesSection from 'src/components/Categories/CategoriesSection';
import Banner from 'src/components/Banner/Banner';
import Newslater from 'src/components/Newslater/Newslater';
import Footer from 'src/components/Footer/Footer';

const Homepage = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Tagline />
        <InfoSection
          title="Thinking of Making Your Food?"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          eleifend libero purus, sollicitudin malesuada tellus facilisis sed.
          Maecenas magna felis, interdum sagittis tortor nec, consequat mattis
          ex. Donec ac dui eget diam rutrum pretium non sed augue. Fusce
          dignissim vitae."
          image={Info1}
        />
        <InfoSection
          title="Try All Popular Recipe"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          eleifend libero purus, sollicitudin malesuada tellus facilisis sed.
          Maecenas magna felis, interdum sagittis tortor nec, consequat mattis
          ex. Donec ac dui eget diam rutrum pretium non sed augue. Fusce
          dignissim vitae."
          image={Info2}
          imgStart
        />
        <CategoriesSection />
        <Banner />
        <Newslater />
      </main>
      <Footer />
    </>
  );
};

export default Homepage;

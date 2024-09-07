

import React from 'react';
import Navbar from '@/app/components/Navbar'; // Adjust the import according to your file structure
import HeroSubSection from './components/HeroSubSection';
import Section2 from '@/app/components/Section2'
import Section3  from '@/app/components/Section3'
import Section4 from '@/app/components/Section4'
import FAQ from '@/app/components/FAQ'
const HeroSection = () => {
  const videoSrc = "https://player.vimeo.com/video/1006007539?h=25e2d86c9d&background=1";
  const MobSrc= "https://player.vimeo.com/video/1006150672?h=25e2d86c9d&background=1"
  return (<main>
    <div className="relative h-screen w-screen overflow-hidden">
      {/* Background Video */}
      <iframe 
        src={videoSrc}
        className="absolute top-0 left-0 w-full h-full object-cover sm:hidden"
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
        title="Background Video"
      />

<iframe 
        src={MobSrc}
        className="absolute top-0 left-0 w-full h-full object-cover p-4 mt-9 lg:hidden"
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
        title="Background Video"
      />
        <Navbar />
       
    </div> 
<HeroSubSection/>
<Section2/>
<Section3/>
<Section4/>
<FAQ/>
    </main>
  );
};

export default HeroSection;

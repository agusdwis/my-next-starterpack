import React from 'react';
import { NextSeo } from 'next-seo';

const Home = (): JSX.Element => (
  <>
    <NextSeo
      title="Next Starter Pack"
      description="Your description"
      openGraph={{
        url: 'https://www.url.ie/a',
        title: 'Open Graph Title',
        description: 'Open Graph Description',
        site_name: 'SiteName',
        images: [
          {
            url: 'https://www.example.ie/og-image-01.jpg',
            width: 800,
            height: 600,
            alt: 'Og Image Alt',
          },
          {
            url: 'https://www.example.ie/og-image-02.jpg',
            width: 900,
            height: 800,
            alt: 'Og Image Alt Second',
          },
          { url: 'https://www.example.ie/og-image-03.jpg' },
          { url: 'https://www.example.ie/og-image-04.jpg' },
        ],
      }}
    />
    <div className="h-screen w-full">
      <div className="h-full flex justify-center items-center">
        <p className="text-red-700">I&lsquo;m Colored with TailwindCSS</p>
      </div>
    </div>
  </>
);

export default Home;

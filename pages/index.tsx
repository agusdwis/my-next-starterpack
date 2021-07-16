import React, { useEffect } from 'react';
import { GetStaticProps, GetStaticPropsContext } from 'next';
import { connect } from 'react-redux';

import { NextSeo } from 'next-seo';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { TypesMovies } from '@/stores/actions';

const Home = (props: any): JSX.Element => {
  const { movie, getMovies } = props;
  const { t } = useTranslation('common');

  useEffect(() => {
    getMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // eslint-disable-next-line no-console
  console.log(movie);

  return (
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
          <p className="text-red-700">{t('info')}</p>
        </div>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  const { locale } = context;

  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', ['common'])),
    },
  };
};

const mapStateToProps = (state: any) => ({
  movie: state.movie,
});

const mapDispatchToProps = (dispatch: any) => ({
  getMovies: (): void => dispatch({ type: TypesMovies.GET_MOVIES }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);

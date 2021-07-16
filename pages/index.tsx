import React, { useEffect } from 'react';
import { GetStaticProps, GetStaticPropsContext } from 'next';
import { useDispatch } from 'react-redux';

import { NextSeo } from 'next-seo';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { TypesMovies } from '@/stores/actions';

const Home = (): JSX.Element => {
  const { t } = useTranslation('common');
  const dispatch = useDispatch();

  useEffect(() => {
    const getData = async (): Promise<any> => {
      dispatch({
        type: TypesMovies.GET_MOVIES_START,
        payload: { search: 'Batman', page: 1 },
      });
    };

    getData();
  }, [dispatch]);

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

export default Home;

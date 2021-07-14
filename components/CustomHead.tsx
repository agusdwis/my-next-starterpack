import React from 'react';
import { Head } from 'next/document';

const CustomHead = (): JSX.Element => (
  <Head>
    <link rel="icon" href="/favicon.ico" />
    <link rel="manifest" href="/manifest.json" />
    <link
      href="/icons/favicon-16x16.png"
      rel="icon"
      type="image/png"
      sizes="16x16"
    />
    <link
      href="/icons/favicon-32x32.png"
      rel="icon"
      type="image/png"
      sizes="32x32"
    />
    <link rel="apple-touch-icon" href="/icons/apple-icon.png" />
  </Head>
);

export default CustomHead;

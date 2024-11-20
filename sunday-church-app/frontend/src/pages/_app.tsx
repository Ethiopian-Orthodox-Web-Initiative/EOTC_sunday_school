// pages/_app.tsx
import React from 'react';
import { AppProps } from 'next/app';
import '../styles/globals.css'; // Import global styles here

const MyApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default MyApp;

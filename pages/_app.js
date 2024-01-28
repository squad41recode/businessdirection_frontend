// pages/_app.js

import DashboardLayout from '@/components/dashboard/DashboardLayout';
import MainLayout from '@/components/MainLayout';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    if (router.pathname.startsWith('/admin')) {
    }
  }, [router.pathname]);

  return (
    <>
      {router.pathname.startsWith('/admin') ? (
        <DashboardLayout>
          <Component {...pageProps} />
        </DashboardLayout>
      ) : (
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      )}
    </>
  );
}


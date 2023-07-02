import Head from 'next/head';
import './globals.css';

export async function generateMetadata() {
  return ({
    title: 'Create Next App',
    description: 'Generated by create next app',
  });

}

export default function RootLayout({ children, }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='anonymous' />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@300;400;500;700&display=swap" rel="stylesheet" />
      </Head>
      <body>{children}</body>
    </html>
  );
}

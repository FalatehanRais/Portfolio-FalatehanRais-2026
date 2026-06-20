import './globals.css';

export const metadata = {
  title: 'Falatehan Rais — Portfolio',
  description: 'UI/UX Designer, Graphic Designer, Videographer & Photographer',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
          crossOrigin="anonymous"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

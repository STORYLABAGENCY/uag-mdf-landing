export const metadata = {
  title: "Maestría en Derecho Fiscal Online | UAG",
  description: "Maestría en Derecho Fiscal 100% online. Diseña estrategias fiscales, prevén riesgos tributarios y defiende jurídicamente los intereses de personas y organizaciones. UAG + Arizona State University. Inicio septiembre 2026.",
  keywords: "maestría derecho fiscal, UAG, online, planeación fiscal, litigio fiscal, compliance tributario",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800;900&family=Open+Sans:wght@400;600&display=swap" rel="stylesheet" />
      </head>
      <body style={{ margin: 0, padding: 0 }}>
        {children}
      </body>
    </html>
  );
}

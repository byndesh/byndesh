export default function KeystaticLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Bynd BD — CMS</title>
      </head>
      <body>{children}</body>
    </html>
  );
}

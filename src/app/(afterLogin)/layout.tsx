export default function AfterLoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div>Aftet Login Layout</div>
      {children}
    </div>
  );
}

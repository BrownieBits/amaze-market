import Link from 'next/link';
export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      Auth
      <Link href="/">Home</Link>
      <div>{children}</div>
    </section>
  );
}

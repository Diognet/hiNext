import Link from 'next/link';

export const metadata = {
  title: 'About Test',
  description: 'Generated by Diognet',
};

export default function About() {
  return (
    <>
      <Link href="/">Home</Link>
      <h1>About me</h1>
    </>
  );
}

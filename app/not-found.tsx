import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '404 Not found'
}

export default function NotFound() {
  return (
    <div>
      <h1>404 Not found !</h1>
    </div>
  );
}
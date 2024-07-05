import { Metadata } from 'next';
import Link from 'next/link';

export const metaData: Metadata = {
  title: 'Home',
};

export const API_URL: string = 'https://nomad-movies.nomadcoders.workers.dev/movies';

async function getMovies(): Promise<any[]> {
  // await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await fetch(API_URL);
  const json: any[] = await response.json();
  return json;
}

export default async function HomePage() {
  const movies = await getMovies();
  return (
    <div>
      {movies.map(
        movie => (
          <li key={movie.id}>
            <Link href={`/movies/${movie.id}`}>
              {movie.title}
            </Link>
          </li>
        )
      )}
    </div>
  );
}
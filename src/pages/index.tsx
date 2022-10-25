import dynamic from 'next/dynamic';
import places from 'mocks/places';

const Map = dynamic(() => import('components/Map'), {
  ssr: false,
});

export default function Home() {
  return <Map places={places} />;
}

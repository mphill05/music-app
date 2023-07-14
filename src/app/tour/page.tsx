export const dynamic = 'force-static';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tour',
  description: 'Tour dates for {music artist}',
};

export default async function Tour() {
  return <div>Tour Page</div>;
}

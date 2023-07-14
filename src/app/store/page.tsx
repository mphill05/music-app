export const dynamic = 'force-static';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Store',
  description: 'Store page for {music artist}',
};

export default async function Store() {
  return <div>Store Page</div>;
}

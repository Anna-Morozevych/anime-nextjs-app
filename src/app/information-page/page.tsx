import AnimeList from '@/components/AnimeList'
import { getAnimesPerPage, Response } from '@/lib/actions/getAnimesPerPage'
import { notFound } from 'next/navigation';
import React from 'react';


type Props = {
  searchParams: { [key: string]: string | string[] | undefined}
}

export default async function InfoPage({ searchParams }: Props) {
  // Define search params an make request to page
  const page = searchParams['page'] ?? '1';

  const start = (Number(page));


  const data: Response = await getAnimesPerPage(start);

  if (!data.status || !data.pageInfo) {
    notFound();
  }


  return (
    <div>
      {/* Display the list */}
      <AnimeList animeList={data.data} pageInfo={data.pageInfo} />
    </div>
  )
}

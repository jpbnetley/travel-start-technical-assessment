import { search } from "@/utils/get-data/server/search";
import styles from "./page.module.css";
import ArtistSearch from "@/components/composite/artist-search";


export type HomeType = {
  searchParams: { [key: string]: string | string[] | undefined }
}

export default async function Home({ searchParams }: HomeType) {
  const artistSearchParam = searchParams?.artistSearch
  
  const cleanedArtistSearchParam = Array.isArray(artistSearchParam) 
    ? artistSearchParam.join(',')
    : artistSearchParam

  const response = cleanedArtistSearchParam 
  ? await search(cleanedArtistSearchParam, { searchConfig: { searchType: 'artist' } })
  : undefined
  
  return (
    <main className={styles.main}>
    <ArtistSearch initialData={response} />
    </main>
  );
}

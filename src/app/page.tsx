import { search } from "@/utils/get-data/server/artist";
import ArtistSearch from "@/components/composite/artist-search";
import { NextUrlParams } from "@/types/models/next-js/url-params";
import normaliseNextSearchParams from "@/utils/handlers/normalize-next-search-params";
import styles from "./page.module.css";


export type HomeType = {
  searchParams: NextUrlParams
}

export default async function Home({ searchParams }: HomeType) {
  const artistSearchParam = searchParams?.artistSearch
  
  const cleanedArtistSearchParam = normaliseNextSearchParams(artistSearchParam)

  const response = cleanedArtistSearchParam 
  ? await search(cleanedArtistSearchParam)
  : undefined
  
  return (
    <main className={styles.main}>
    <ArtistSearch initialData={response} />
    </main>
  );
}

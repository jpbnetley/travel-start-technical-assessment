import styles from "./page.module.css";
import ArtistSearch from "@/components/composite/artist-search";

export default function Home() {
  return (
    <main className={styles.main}>
    <ArtistSearch />
    </main>
  );
}

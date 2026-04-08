import styles from "./styles.module.css";

export type ArtistType = {
  name: string;
  id: number;
};
const Artist = ({ name }: ArtistType) => (
  <div className={styles["artist-row"]}>
    <label>name: {name}</label>
  </div>
);
export default Artist;

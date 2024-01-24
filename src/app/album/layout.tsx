import TopBar from "@/components/composite/navigation/top-bar";
import styles from './styles.module.css'

export default function ArtistLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <TopBar />
      <div className={styles['page-body']}>
        {children}
      </div>
    </div>
  );
}

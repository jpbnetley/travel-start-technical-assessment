import Button from "@/components/ui/button";
import styles from './styles.module.css'
import Link from "next/link";
import TopBar from "@/components/composite/navigation/top-bar";

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

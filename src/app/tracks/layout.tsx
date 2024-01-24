import Button from "@/components/ui/button";
import styles from './styles.module.css'
import Link from "next/link";

export default function ArtistLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <nav className={styles.nav}>
        <Link href='/'>
          <Button value='Back' />
        </Link>
      </nav>
      <div className={styles['page-body']}>
        {children}
      </div>
    </div>
  );
}

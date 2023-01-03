import Header from './components/menus/header/Header';
import MobileMenu from './components/menus/mobile/Mobile';
import SideBar from './components/menus/sidebar/SideBar';
import styles from './layout.module.scss';
export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.mainWrapper}>
      <Header />
      <main className={styles.mainBox}>
        <SideBar />
        <div className={styles.mainContent}>{children}</div>
      </main>
      <MobileMenu />
    </div>
  );
}

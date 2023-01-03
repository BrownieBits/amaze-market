import Link from 'next/link';
import SideBarItem from '../sidebar_item/SideBarItem';
import menuItems from './sidebar.json';
import styles from './SideBar.module.scss';

export default function SideBar() {
  const items = menuItems.sections;
  return (
    <menu className={styles.menu}>
      {items.map((value: any, index: number) => {
        return (
          <div key={`section-${value.section}`}>
            {value.section !== 'Main' &&
              value.section !== 'Footer' &&
              value.section !== 'Help' && <p>{value.section}</p>}
            {value.section !== 'Footer' &&
              value.items.map((item: any) => {
                return (
                  <SideBarItem
                    icon={item.icon}
                    title={item.title}
                    url={item.url}
                    key={item.title}
                  />
                );
              })}
            {value.section === 'Footer' && (
              <div className={styles.footerLinks}>
                {value.items.map((item: any, index: number) => {
                  return (
                    <div key={item.title}>
                      <p>
                        <Link href={item.url}>{item.title}</Link>{' '}
                        {index !== value.items.length - 1 && <>&nbsp;|&nbsp;</>}
                      </p>
                    </div>
                  );
                })}
              </div>
            )}
            {index !== items.length - 1 && <hr />}
          </div>
        );
      })}
    </menu>
  );
}

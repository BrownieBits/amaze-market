import Link from 'next/link';
import SidebarItem from '../sidebar_item/SideBarItem';
import { getSidebarItems } from './getSidebarItems';
import styles from './Sidebar.module.scss';

export interface ISidebar {}

const Sidebar: React.FC<ISidebar> = () => {
  const items = getSidebarItems();
  return (
    <menu className={styles.menu}>
      {items.map((value, index) => {
        return (
          <div key={`section-${value.section}`}>
            {value.section !== 'Main' &&
              value.section !== 'Footer' &&
              value.section !== 'Help' && <p>{value.section}</p>}
            {value.section !== 'Footer' &&
              value.items.map((item) => {
                return (
                  <SidebarItem
                    icon={item.icon}
                    title={item.title}
                    url={item.url}
                    key={item.title}
                  />
                );
              })}
            {value.section === 'Footer' && (
              <div className={styles.footerLinks}>
                {value.items.map((item, index) => {
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
};

export default Sidebar;

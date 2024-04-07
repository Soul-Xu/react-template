import React, { useEffect } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuProps['items'] = [
  getItem('Navigation One', 'sub1', <MailOutlined />, [
    getItem('Item 1', 'g1', null, [getItem('Option 1', '1'), getItem('Option 2', '2')], 'group'),
    getItem('Item 2', 'g2', null, [getItem('Option 3', '3'), getItem('Option 4', '4')], 'group'),
  ]),

  { type: 'divider' },

  getItem('Group', 'grp', null, [getItem('Option 13', '13'), getItem('Option 14', '14')], 'group'),
];

const itemsCollapsed: MenuProps['items'] = [
  getItem('Navigation One', 'sub1', <MailOutlined />, []),
  getItem('Navigation Two', 'sub2', <AppstoreOutlined />, []),
  { type: 'divider' },
  getItem('Navigation Three', 'sub4', <SettingOutlined />, []),
];

const SidebarMenu: React.FC = ({ collapsed }: any) => {
  const onClick: MenuProps['onClick'] = (e:any) => {
    console.log('click ', e);
  };

  useEffect(() => {
    console.log("subMenu", collapsed)
  }, [collapsed])

  return (
    <Menu
      onClick={onClick}
      style={{ width: collapsed ? 50 : 216 }}
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode="inline"
      items={ collapsed ? itemsCollapsed : items }
    />
  );
};

export default SidebarMenu;
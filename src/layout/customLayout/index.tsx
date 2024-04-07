import React, { ReactNode, useState } from 'react';
import { Layout, Menu } from 'antd';
import SidebarMenu from './SidebarMenu';
import {
  DesktopOutlined,
  FileOutlined,
  UserOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons';
// @ts-ignore
import styles from "./index.scss";
import classnames from "classnames/bind";
const classNames = classnames.bind(styles);

const { Sider, Content } = Layout;

interface CustomLayoutProps {
  children: ReactNode;
  // 可以添加其他属性的类型定义
}

const CustomLayout = ({ children }: CustomLayoutProps) => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider
        width={collapsed ? 50 : 216}
        theme="light"
        className={collapsed ? classNames("custom-sider-collapsed") : classNames("custom-sider")}
      >
        <div className={classNames(collapsed ? "collapsed-logo" :"custom-sider-logo")}>
          <span className={classNames(collapsed ? "collapsed-title" : "")}>科技人员管理</span>
          {collapsed 
            ? <MenuFoldOutlined style={{ fontSize: "24px" }} onClick={toggleCollapsed} /> 
            : <MenuUnfoldOutlined style={{ fontSize: "24px" }} onClick={toggleCollapsed} />}
        </div>
        {/* @ts-ignore */}
        <SidebarMenu collapsed={collapsed}/>
      </Sider>
      <Layout>
        <Content style={{ padding: '16px' }}>{children}</Content>
      </Layout>
    </Layout>
  );
};

export default CustomLayout;

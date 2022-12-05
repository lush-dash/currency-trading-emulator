import React, { useState } from 'react';
import {
  Nav, NavItem, NavLink, TabContent, TabPane, CardHeader,
} from 'reactstrap';
import Trading from '../Trading/Trading';
import './index.css';

export default function Tabbar() {
  const [currentTab, setCurrentTab] = useState('1');

  return (
    <>
      <CardHeader>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={currentTab === '1' ? 'active' : ''}
              onClick={() => { setCurrentTab('1'); }}
            >
              Treading
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={currentTab === '2' ? 'active' : ''}
              onClick={() => { setCurrentTab('2'); }}
            >
              Archive
            </NavLink>
          </NavItem>
        </Nav>
      </CardHeader>
      <TabContent activeTab={currentTab}>
        <TabPane className="tab" tabId="1">
          <Trading />
        </TabPane>
        <TabPane tabId="2" />
      </TabContent>
    </>
  );
}

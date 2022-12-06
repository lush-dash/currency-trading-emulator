import React from 'react';
import {
  Nav, NavItem, NavLink, TabContent, TabPane, CardHeader,
} from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import Archive from '../Archive/Archive';
import Trading from '../Trading/Trading';
import { setCurrentTab } from '../../redux/actions/currentTabActions';
import './index.css';

export default function Tabbar() {
  const currentTab = useSelector((state) => state.currentTab);
  const dispatch = useDispatch();

  return (
    <>
      <CardHeader>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={currentTab === '1' ? 'active' : ''}
              onClick={() => { dispatch(setCurrentTab('1')); }}
            >
              Treading
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={currentTab === '2' ? 'active' : ''}
              onClick={() => { dispatch(setCurrentTab('2')); }}
            >
              Archive
            </NavLink>
          </NavItem>
        </Nav>
      </CardHeader>
      <TabContent activeTab={currentTab}>
        <TabPane tabId="1">
          <Trading />
        </TabPane>
        <TabPane tabId="2">
          <Archive />
        </TabPane>
      </TabContent>
    </>
  );
}

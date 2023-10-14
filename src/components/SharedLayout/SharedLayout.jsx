import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Header } from './Layout.styled';

const SharedLayout = () => {
  return (
    <>
      <Header>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/movies">Movie</NavLink>
            </li>
          </ul>
        </nav>
      </Header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default SharedLayout;

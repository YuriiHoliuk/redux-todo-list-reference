import React from 'react';
import { Link } from 'react-router-dom';

export const Home = () => (
  <>
    <h1>Home page</h1>
    <Link to="/todos">
      Todos
    </Link>
  </>
);

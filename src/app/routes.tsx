import { createBrowserRouter } from 'react-router';
import { Layout } from './components/Layout';
import { Now } from './components/Now';
import { Activity } from './components/Activity';
import { Expense } from './components/Expense';
import { Overall } from './components/Overall';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      { index: true, Component: Now },
      { path: 'activity', Component: Activity },
      { path: 'expense', Component: Expense },
      { path: 'overall', Component: Overall },
    ],
  },
]);
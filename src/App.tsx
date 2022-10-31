import React from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import Tools from './features/Tools/Tools';
import TaskList from './features/TaskList/TaskList';

function App() {
  return (
    <Layout>
      <Tools />
      <TaskList />
    </Layout>
  );
}

export default React.memo(App);

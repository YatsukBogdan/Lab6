import React from 'react';

import Header from '../Header';
import AdminPanel from './AdminPanel';

const AdminPage = React.createClass({
  render() {
    return (
      <div>
        <Header />
        <AdminPanel />
      </div>
    );
  }
});

export default AdminPage;

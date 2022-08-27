import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, DashCard, Tabs } from '../../components';
import styles from './webpages.module.css';
import { useAuth } from '../../hooks/useAuth';
import { getStakeHolders } from '../../services';
import { WebPages, NewsBlog } from './components';

export const Pages = () => {
  const mgtTab = ['Webpages', 'News/Blog'];

  const { stateAuth } = useAuth();

  const {
    location: { hash },
    push,
  } = useHistory();

  const [accepted, setAccepted] = useState({});
  //console.log(stateAuth)

  const renderComponent = () => {
    switch (hash) {
      case `#${mgtTab[0]}`:
        return <WebPages />;
      case `#${mgtTab[1]}`:
        return <NewsBlog />;
      default:
        return <WebPages />;
    }
  };

  return (
    <div className='p-5' style={{ maxWidth: 2000 }}>
      <section style={{ maxWidth: 2000, marginBottom: '2rem' }}>
        <h4 className='blue-title'>Pages</h4>
      </section>
      <section className='mb-45 d-flex justify-content-between'>
        <Tabs tabItems={mgtTab} />
        <Button
          label='Create'
          onClick={() =>
            hash === `#${mgtTab[0]}`
              ? push('/admin/webpages/create_webpage')
              : push('/admin/webpages/create_blog')
          }
        />
      </section>

      <section>{renderComponent()}</section>
    </div>
  );
};

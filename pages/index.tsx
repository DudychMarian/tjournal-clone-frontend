import Head from 'next/head';

import { Header } from '../components/Header';
import { LeftMenu } from '../components/LeftMenu';
import { Post } from '../components/Post';
import { SideComments } from '../components/SideComments';

export default function Home() {
  return (
    <div>
      <Head>
        <title>RJournal</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;0,900;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"></link>
      </Head>
      <Header />
      <div className="wrapper">
        <div className="leftSide">
          <LeftMenu />
        </div>
        <div className="content">
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </div>
        <div className="rightSide">
          <SideComments />
        </div>
      </div>
    </div>
  );
}

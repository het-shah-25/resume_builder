import type { NextPage } from 'next';
import Head from 'next/head';
import { Resume } from 'src/core/containers/Resume';
import { Sidebar } from 'src/core/containers/Sidebar';
import { LeftNav } from 'src/core/containers/LeftNav';
import { FlexHC } from 'src/styles/styles';

const Editor: NextPage = () => {
  return (
    <FlexHC>
      <Head>
        <title>Resume Genius</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <LeftNav />
      <Resume />
      <Sidebar />
    </FlexHC>
  );
};

export default Editor;

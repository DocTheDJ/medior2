import { ReactElement } from 'react';
import { MainText } from '../MainText/MainText';
import style from './Home.module.css';

const Home = (): ReactElement => (
  <>
    <h1 className={style.title}>Welcome, medior!</h1>
    <p className={style.paragraph}>Read carefully README.md!</p>
    <MainText/>
  </>
);

export default Home;

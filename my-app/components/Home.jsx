import { Badge } from 'react-bootstrap'

import css from './Home.module.scss';

const Home = () => {
  return (
    <div className={css.container}>
      <p>Home page</p>
      <Badge bg="secondary">New</Badge>
    </div>
  );
}
 
export default Home;

import React, { useEffect, useState } from 'react';
import ViewItem from '../../components/ViewItem/ViewItem';
import { useRouter } from 'next/router';
import { getGamesDetails } from '../../services/Games.service';
import Header from '../../components/Header/Header';

const GameDetailsPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [gameDetails, setGameDetails] = useState({});


  useEffect(() => {
    const fetchGameDetails = async () => {
      const [err, data] = await getGamesDetails(id);

      if (err) return;

      setGameDetails(data);
    };

    if (id) {
      fetchGameDetails();
    }
  }, [id]);

  return (
    <>
      <Header />
      <ViewItem info={gameDetails} />
    </>
  );
}
 
export default GameDetailsPage;

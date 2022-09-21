import Banner from 'components/Banner';
import Images from 'constants/images';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Container } from 'reactstrap';

MainPage.propTypes = {};

function MainPage(props) {
  const photos = useSelector((state) => state.photos);
  console.log(photos);

  return (
    <div className="photo-main">
      <Banner title="Your awesome photos 🫣" backgroundUrl={Images.ORANGE_BG} />

      <Container className="text-center">
        <Link to="/photos/add">Add new photo</Link>
      </Container>
    </div>
  );
}

export default MainPage;

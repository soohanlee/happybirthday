import React from "react";
import styled from "styled-components";
import Masonry from "react-masonry-css";
import "./App.css";
import _redArrowImg from "./assets/images/red_arrow.png";
import img00 from "./assets/images/00.jpg";
import img01 from "./assets/images/01.jpg";
import img02 from "./assets/images/02.jpg";
import img03 from "./assets/images/03.jpg";
import img04 from "./assets/images/04.jpg";
import img05 from "./assets/images/05.jpg";
import img06 from "./assets/images/06.jpg";
import img07 from "./assets/images/07.jpg";
import img08 from "./assets/images/08.jpg";
import img09 from "./assets/images/09.jpg";
import img10 from "./assets/images/10.jpg";
import img11 from "./assets/images/11.jpg";
import img12 from "./assets/images/12.jpg";
import img13 from "./assets/images/13.jpg";
import img14 from "./assets/images/14.jpg";
import img15 from "./assets/images/15.jpg";
import img16 from "./assets/images/16.jpg";
import img17 from "./assets/images/17.jpg";
import img18 from "./assets/images/18.jpg";
import img19 from "./assets/images/19.jpg";
import img20 from "./assets/images/20.jpg";
import img21 from "./assets/images/21.jpg";
import img22 from "./assets/images/22.jpg";
import img23 from "./assets/images/23.jpg";
import img24 from "./assets/images/24.jpg";
import img25 from "./assets/images/25.jpg";

interface IPhotos {
  src: string;
  width: number;
  height: number;
}

const photos: IPhotos[] = [
  {
    src: img00,
    width: 1080,
    height: 780,
  },
  { src: img01, width: 1080, height: 694 },
  { src: img02, width: 1080, height: 1620 },
  { src: img03, width: 1080, height: 810 },
  { src: img04, width: 1080, height: 160 },
  { src: img05, width: 1080, height: 780 },
  { src: img06, width: 1080, height: 1620 },
  { src: img07, width: 1080, height: 720 },
  { src: img08, width: 1080, height: 810 },
  { src: img09, width: 1080, height: 720 },
  { src: img10, width: 1080, height: 720 },
  { src: img11, width: 1080, height: 721 },
  { src: img12, width: 1080, height: 780 },
  { src: img13, width: 1080, height: 720 },
  { src: img14, width: 1080, height: 1620 },
  { src: img15, width: 1080, height: 720 },
  { src: img16, width: 1080, height: 810 },
  { src: img17, width: 1080, height: 720 },
  { src: img18, width: 1080, height: 720 },
  { src: img19, width: 1080, height: 721 },
  { src: img20, width: 1080, height: 160 },
  { src: img21, width: 1080, height: 720 },
  { src: img22, width: 1080, height: 720 },
  { src: img23, width: 1080, height: 1440 },
  { src: img24, width: 1080, height: 720 },
  { src: img25, width: 1080, height: 1440 },
];

const App = () => {
  const renderPhotos = (photos: IPhotos[]) => {
    return photos.map((photo: IPhotos) => {
      return (
        <div className="photo" key={photo.src}>
          <PhotoImg data-aos="fade-up" src={photo.src} />
        </div>
      );
    });
  };

  return (
    <Container>
      <ClickText>
        클릭!! <ArrowImg src={_redArrowImg} />
      </ClickText>

      <BirthDayContainer>
        <div className="birthday-gift">
          <div className="gift">
            <input id="click" type="checkbox" />
            <label className="click" htmlFor="click"></label>
            <div className="wishes">
              축! <br />
              수린 탄신일
            </div>
            <div className="sparkles">
              <div className="spark1"></div>
              <div className="spark2"></div>
              <div className="spark3"></div>
              <div className="spark4"></div>
              <div className="spark5"></div>
              <div className="spark6"></div>
            </div>
          </div>
        </div>
      </BirthDayContainer>
      <Comment>
        수린아 생일 진심으로 축하해
        <br /> 28살 너의 생일에도 내가 함께 할 수 있어 기뻐 <br /> 태워나줘서
        고맙고 진심으로 많이 사랑해! <br />
        생일 축하해!
      </Comment>
      <Masonry
        style={{ marginTop: "6rem" }}
        breakpointCols={2}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {/* array of JSX items */}
        {renderPhotos(photos)}
      </Masonry>

      <FooterComment data-aos="fade-up">앞으로도 잘해줄게!</FooterComment>
    </Container>
  );
};

export default App;

const Container = styled.div`
  box-sizing: border-box;
  padding: 2rem;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ArrowImg = styled.img`
  width: 2rem;
  height: 2rem;
  transform: scaleX(-1);
  text-align: right;
  position: absolute;
  bottom: -3rem;
  right: 4rem;
`;

const Comment = styled.div`
  font-size: 1.8rem;
`;

const BirthDayContainer = styled.div`
  position: relative;
  width: 100%;
  height: 30rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ClickText = styled.div`
  width: 100%;
  font-size: 2rem;
  margin: 2rem;
  text-align: right;
  position: relative;
`;

const PhotoImg = styled.img`
  width: 100%;
  height: 100%;
`;

const FooterComment = styled(Comment)`
  margin: 10rem 0;
  font-size: 3rem;
`;

import Navigation from "src/components/Navigation/Navigation";
import Header from "src/components/Header/Header";
import Map from "src/components/MapComponent/MapBox";
import DateContainer from "src/components/MapComponent/DateContainer"
import SearchBar from "src/components/MapComponent/SearchBar"

import * as T from './Styles';

function MapPage() {
  return (
    <T.EntireContainer>
      <Header text="코스 만들기" />
      <DateContainer />
      <T.BackFrame>
        <SearchBar />
        <Map />
      </T.BackFrame>
      <Navigation />
    </T.EntireContainer>
  );
}

export default MapPage;

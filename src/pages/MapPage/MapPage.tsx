
import Navigation from "src/components/Navigation/Navigation";
import Map from 'src/components/MapBox';

import * as T from './Styles';

function MapPage() {
  return (
    <T.EntireContainer>
      <T.BackFrame>
        <Map />
      </T.BackFrame>

      <Navigation />
    </T.EntireContainer>
  );
}

export default MapPage;

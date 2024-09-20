import { useRecoilValue } from "recoil";
import { selectedPlaceState } from "../../recoil/atoms";

function DetailsPage() {
    const selectedPlace = useRecoilValue(selectedPlaceState);

    return (
        <div>
            <h1>{selectedPlace.placeName}</h1>
            <p>위도: {selectedPlace.lat}</p>
            <p>경도: {selectedPlace.lng}</p>
            <p>주소: {selectedPlace.placeAddress}</p>
        </div>
    );
}

export default DetailsPage;

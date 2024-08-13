// components
import Navigation from "src/components/Navigation/Navigation";
import FunctionHeader from "src/components/Header/FunctionHeader";

import * as T from "./Styles"



function ViewJourney() {

    return (

        <T.EntireContainer>

            <FunctionHeader content="여행 조회" />

            <Navigation/>

        </T.EntireContainer>

    );
}

export default ViewJourney;
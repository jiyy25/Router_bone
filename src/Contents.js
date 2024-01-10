import { useParams } from "react-router-dom";
import Contentnavi from './data/navi.json'

const Contents = (props) => {
    const { lang } = useParams();
    // const param = useParams.lang;을 구조할당 한것.

    return (
        <>
            {props.children}
            {lang}사이트입니다.
            {
                Contentnavi[lang].navi.map((el) => {
                    return (
                        <p>
                            {el.d1text}
                        </p>
                    )
                }

                )
            }
            {/* children부분은 받아온 자식 엘리먼트를 랜더링한다. */}

        </>
    )
}
export default Contents;
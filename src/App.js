import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import Contents from './Contents';


function App() {
  const navi = [
    {
      d1text: "네이버",
      cls: "naver",
      href: "kr"
    },
    {
      d1text: "다음",
      cls: "daum",
      href: "en"
    }
  ]
  return (
    <div className="App">
      <header>
        {navi.map((el, i) => {
          return (
            <Link to={`/kr/${el.href}`}>{el.d1text}</Link>
            //kr은 어디서 나오는거지..?;;;
          )
        })}

      </header>
      <section>
        <Routes>
          <Route path='/kr/:lang' element={<Contents><p>오이오이~</p></Contents>}></Route>

          {/* <Route path='/kr/daum' element={<Contents><p>OEOE~</p></Contents>}></Route> */}
        </Routes>
        {/* children prop을 통해 엘리먼트를 받아와 랜더링 */}
        {/* 하지만 이렇게 한다묜, 여러개라면 계속 만들어 줘야하는 불편함이 있음. 그래서 주소자체를 : 으로 변수로 만들어준다. kr뒤에 뭐가 오든 그것을 lang이라는 변수에 저장해주겠다. */}
      </section>
    </div >
  );
}

export default App;
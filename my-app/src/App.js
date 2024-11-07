import './App.css';
import ClassComponent from './components/R01_classComponent';
// -> R01_classComponent 에서 export된 HTML 요소를
//    ClassComponent 라고 부르겠다
//  --> <ClassComponent/> 형태로 사용가능
import FunctionComponent from './components/R02_FunctionComponent';

// import 여기서 사용할 이름 form '경로';
import Props1 from './components/R03_Pros1';
import Props2 from './components/R04_Props2';
import Props3 from './components/R05_Props3';

import State1 from './components/R06_State1';
import State2 from './components/R07_State2';
import State3 from './components/R08_State3';

import StateReview from './review/State_review1';
import StateReview2 from './review/State_review2';

import Context1 from './components/R09_Context1';
import Context2 from './components/R10_Context2';

import Context3 from './R11_Context3/Parent';


// 기본적으로 //, /* */ 주석 사용 가능(JS 니까!!)
// 단, HTML 코드가 작성되는 영역에서는 {/* */} 주석 사용 ( ctrl + / )

function App() {
  return (

    <>
      {/* JSX(JS에서 HTML 코드 포함) 주석 */}

      {/* 클래스형 컴포넌트 */}
      {/* <ClassComponent/> */}

      {/* 함수형 컴포넌트 */}
      {/* <FunctionComponent/> */}

      {/* Props */}
      {/* <Props1 num='1' name='홍길동'/>
      <Props1 num='2' name='김미영'/>
      <Props1 /> */}

      {/* <hr /> */}
      {/* <Props2 name='짱구' age='19' address='경기도' gender='남자'/>
      <Props2 name='철수' age='45' address='강남' gender='남자'/> */}


      {/* <Props3 productName='라면' price='3000'/> */}


      {/* State */}
      {/* <State1 /> */}

      {/* <State2 init='0' /> */}

      {/* <hr /> */}
      {/* <State3 /> */}

      {/* <StateReview /> */}

      {/* <StateReview2 /> */}

      {/* <Context1 /> */}

      <hr />
      {/* <Context2 /> */}

      <Context3/>
    </>
  );
}

export default App;

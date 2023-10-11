import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './App.css';
import { Route, Link } from 'react-router-dom';
import { FiInstagram, FiYoutube, FiTwitter} from 'react-icons/fi';
import { RiKakaoTalkLine, RiSearchLine } from 'react-icons/ri';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { RxPerson, RxHamburgerMenu } from 'react-icons/rx';

// Components
import MainPage from './main_page/main_page';
import TotalPage from './total_page/total_page';
import BestPage from './best_page/best_page';
import EventPage from './event_page/event_page';
import SpecialPricePage from './special_price_page/special_price_page';
import BrandPage from './brand_page/brand_page';
import { TextProvider } from './total_data';

function App() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className='wrap'>
        <TextProvider>
      {/* header */}
      <div className='header'>
        <div className='header_top'>
          <h3>공식몰에서만 드리는 월간 혜택 5월호 COUPON BOOK</h3>
        </div>
        <div className='header_in'>
          <div className='mini'>
            <p>로그인</p>
            <p>주문배송</p>
            <p>멤버십</p>
            <p>고객센터</p>
          </div>
          <div className='logo'><Link to="/" className="logo">ma:nyo</Link></div>
          <div className='nav'>
            {/* lINK 영역 */}
            <ul>
              <li className='hamburger'>
                <Button variant="primary" onClick={handleShow} className='hamberger_icon'>
                  <RxHamburgerMenu/>
                </Button>
                <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                <Offcanvas.Title className='hamberger_slide_title'><h2>ma:nyo</h2></Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className='hamberger_slide_body'>
                  <ul>
                    <li><Link to="/total_page/total_page">전체</Link></li>
                    <li><Link to="/best_page/best_page">베스트</Link></li>
                    <li><Link to="/event_page/event_page">이벤트</Link></li>
                    <li><Link to="/special_price_page/special_price_page">특가</Link></li>
                    <li><Link to="/brand_page/brand_page">브랜드</Link></li>
                  </ul>
                </Offcanvas.Body>
                </Offcanvas>
              </li>
              <li><Link to="/total_page/total_page">전체</Link></li>
              <li><Link to="/best_page/best_page">베스트</Link></li>
              <li><Link to="/event_page/event_page">이벤트</Link></li>
              <li><Link to="/special_price_page/special_price_page">특가</Link></li>
              <li><Link to="/brand_page/brand_page">브랜드</Link></li>
            </ul>
            <div>
              <div className='header_search'>
                <input type="text" placeholder='NEW 히더 진정 라인'/>
                <RiSearchLine className='search_icon'/>
              </div>
              <HiOutlineShoppingBag className='my_bag'/>
              <RxPerson className='my_info'/>
            </div>
          </div>
        </div>
        {/* Route 객체 영역 */}
        <div>
          {/* 메인 페이지 */}
          <Route path="/" exact={true} component={MainPage}></Route>

          {/* 전체 페이지 */}
          <Route path="/total_page/total_page" component={TotalPage}></Route>
          {/* 베스트 페이지 */}
          <Route path="/best_page/best_page" component={BestPage}></Route>
          {/* 이벤트 페이지 */}
          <Route path="/event_page/event_page" component={EventPage}></Route>
          {/* 특가 페이지 */}
          <Route path="/special_price_page/special_price_page" component={SpecialPricePage}></Route>
          {/* 브랜드 페이지 */}
          <Route path="/brand_page/brand_page" component={BrandPage}></Route>
        </div>
      </div>

      {/* footer */}
      <div className='footer'>
        <div className='footer_in'>
          <h2>ma:nyo</h2>
          <p>마녀공장</p>
          <div className='span1'>
            <div>
              <span>대표 :유근직</span>
              <span>주소 :서울특별시 강서구 공항대로 518 마녀공장</span>
              <span>사업자등록번호 :108-86-00365</span>
              <span>[ 사업자번호조회 ]</span>
            </div>
            <div>
              <span>통신판매업신고번호 :제2022-서울강서-3344호</span>
              <span>개인정보보호책임자 :최진호</span>
              <span>메일 :manyofactory_cs@manyo.co.kr</span>
              <span>고객센터 :02-6013-0855</span>
              <span>팩스번호 :02-6280-0829</span>
            </div>
          </div>
          <div className='span2'>
            <span>COPYRIGHT © MANYOFACTORY ALL RIGHTS RESERVED.</span>
            <div>
              <span>안전거래를 위해 (주)이니시스의 구매안전(에스크로)에 가입하여 서비스를 제공하고있습니다.</span>
              <span>[가입확인]</span>
            </div>
          </div>
          <div className='span3'>
            <div>
              <span>개인정보처리방침</span>
              <span>이용약관</span>
              <span>제휴문의</span>
              <span>고객센터</span>
              <span>IR정보</span>
            </div>
            <input type='text' placeholder='Brand Site'/>
          </div>
          <div className='footer_icon'>
            <div><FiInstagram/></div>
            <div><FiYoutube/></div>
            <div><RiKakaoTalkLine/></div>
            <div><FiTwitter/></div>
          </div>
        </div>
      </div>

      </TextProvider>
    </div>
  );
}

export default App;

import React, { useState } from "react";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import styles from "./event_page.module.css";

// 진행중인 이벤트
function IngEvent({ingEvent}){
    return(
        <div className={styles.ingEventbox}>
            <img src={ingEvent.src} alt={ingEvent.title}/>
            <h2>{ingEvent.title}</h2>
            <p>{ingEvent.text}</p>
            <p>{ingEvent.date}</p>
        </div>
    );
}

// 종료된 이벤트
function EndEvent({endEvent}){
    return(
        <div className={styles.endEventbox}>
            <img src={endEvent.src} alt={endEvent.title}/>
            <h2>{endEvent.title}</h2>
            <p>{endEvent.text}</p>
            <p>{endEvent.date}</p>
        </div>
    )
}

function EventPage(){
    const [key, setKey] = useState('home');

    // 진행중인 이벤트
    const ingEvent = [
        {
            id: 1,
            src: 'https://godomall.speedycdn.net/246ac6860cab30de5414f7d17e2bb4bc/goods/0/event/7c2d8477e7f4867c377',
            title: '단 1주일, NEW 남성라인 런칭 이벤트',
            text: '',
            date: '2023.05.18 10:00 ~ 2023.05.24 23:59'
        },
        {
            id: 2,
            src: 'https://godomall.speedycdn.net/246ac6860cab30de5414f7d17e2bb4bc/goods/0/event/f92b7d034e3e0378138',
            title: '열여덟 어른에게 좋은 어른이 되어주세요',
            text: '성년의 날 맞이 자립준비청년 지원 캠페인',
            date: '2023.05.15 10:00 ~ 2023.05.22 23:59'
        },
        {
            id: 3,
            src: 'https://www.manyo.co.kr/data/board/upload/event/52d3b2cde86d3fc7',
            title: '월간 혜택 5월호 COUPON BOOK',
            text: '지금 공식몰 단독 혜택을 확인하세요!',
            date: '2023.05.03 10:00 ~ 2023.05.31 23:59'
        },
        {
            id: 4,
            src: 'https://manyo08552.cdn-nhncommerce.com/data/board/upload/event/event_oldboardSno14_0.jpg',
            title: '쏟아지는 혜택',
            text: '',
            date: '2023.04.01 00:00 ~ 2023.12.31 23:59'
        }
    ]

    // 종료된 이벤트
    const endEvent = [
        {
            id: 1,
            src: 'https://www.manyo.co.kr/data/board/upload/event/604e1e8e4e6520a2',
            title: '갈락 에센스 3천명 0원 체험단',
            text: '',
            date: '2023.05.08 10:00 ~ 2023.05.10 16:00'
        },
        {
            id: 2,
            src: 'https://www.manyo.co.kr/data/board/upload/event/12982dfc5c5d9272',
            title: '딱 7일만! 379에센스 런칭 이벤트',
            text: '',
            date: '2023.05.04 10:00 ~ 2023.05.10 23:59'
        },
        {
            id: 3,
            src: 'https://godomall.speedycdn.net/246ac6860cab30de5414f7d17e2bb4bc/goods/0/event/da079b3d192c5dde626',
            title: '5월 감사 기획전',
            text: '',
            date: '2023.05.02 10:00 ~ 2023.05.15 10:00'
        },
        {
            id: 4,
            src: 'https://www.manyo.co.kr/data/board/upload/event/3f0aad22449f8d69',
            title: '선착순 1만명 0원 체험단',
            text: '',
            date: '2023.04.21 09:30 ~ 2023.05.03 10:00'
        },
        {
            id: 5,
            src: 'https://godomall.speedycdn.net/246ac6860cab30de5414f7d17e2bb4bc/event/e3be935656b8c02c',
            title: '4월 봄 햇살에도 맑고 화사한 피부톤!',
            text: '갈락으로 투명 미백, 봄철 피부 날씨도 맑음!',
            date: '2023.04.17 00:00 ~ 2023.05.01 10:00'
        },
        {
            id: 6,
            src: 'https://www.manyo.co.kr/data/board/upload/event/6ac8c987517d8a73',
            title: '빈틈없이 차단하고 생기있게 톤업까지',
            text: '비건 선케어 최대 50% 기획전',
            date: '2023.04.14 10:00 ~ 2023.04.21 10:00'
        },
        {
            id: 7,
            src: 'https://www.manyo.co.kr/data/board/upload/event/87252ab78ebc51f1',
            title: '히더 인정 라인 할인 이벤트',
            text: '딱 일주일만 최대 70% 할인',
            date: '2023.04.07 10:00 ~ 2023.04.14 10:00'
        },
        {
            id: 8,
            src: 'https://www.manyo.co.kr/data/board/upload/event/ba2bebe34cf6b047',
            title: '4월, 함께 나무 심고 기부해요',
            text: '4월 5일 매출 전액 나무 심기 기부',
            date: '2023.04.05 10:00 ~ 2023.04.12 10:00'
        },
    ]

    return(
        
        <div className={styles.container}>
            <h2>이벤트</h2>
            <Tabs
                id="controlled-tab-example"
                activeKey={key}
                onSelect={(k) => setKey(k)}
                className="mb-3"
            >
                <Tab eventKey="home" title="진행중 이벤트">
                    <div className={styles.ingEventArea}>
                        {ingEvent.map((ingEvent)=>(
                            <IngEvent ingEvent ={ingEvent} key={ingEvent.id}/>
                        ))}
                    </div>
                </Tab>
                <Tab eventKey="profile" title="종료된 이벤트">
                    <div className={styles.endEventArea}>
                        {endEvent.map((endEvent)=>(
                            <EndEvent endEvent ={endEvent} key={endEvent.id}/>
                        ))}
                    </div>
                </Tab>
            </Tabs>
        </div>
    );
}

export default EventPage;
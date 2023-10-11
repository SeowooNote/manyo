import React, { useState } from "react";
import styles from "./special_price_page.module.css"
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function Repurchase({repurchase}){
    return(
        <div className={styles.total_item} style={{opacity:repurchase.sold_out? "0.5" : "1"}}>
            <img src={repurchase.src} alt="{repurchase.title}"/>
            <h1 style={{display:repurchase.large_capacity? "block" : "none"}}>대용량</h1>
            <h2 style={{display:repurchase.sold_out? "block" : "none"}}>sold out</h2>
            <h3>{repurchase.title}</h3>
            <div>
                <h2 style={{textDecoration:repurchase.discount_value? "line-through" : "none"}}>{repurchase.price}</h2>
                <div>
                    <h4 style={{display:repurchase.discount_value? "block" : "none"}}>{repurchase.discount_price}</h4>
                    <span style={{display:repurchase.discount_value? "block" : "none"}}>{repurchase.discount_percent}</span>     
                </div>
            </div>
        </div>
    )
}

function Vegan({vegan}){
    return(
        <div className={styles.total_item} style={{opacity:vegan.sold_out? "0.5" : "1"}}>
            <img src={vegan.src} alt="{vegan.title}"/>
            <h1 style={{display:vegan.large_capacity? "block" : "none"}}>대용량</h1>
            <h2 style={{display:vegan.sold_out? "block" : "none"}}>sold out</h2>
            <h3>{vegan.title}</h3>
            <div>
                <h2 style={{textDecoration:vegan.discount_value? "line-through" : "none"}}>{vegan.price}</h2>
                <div>
                    <h4 style={{display:vegan.discount_value? "block" : "none"}}>{vegan.discount_price}</h4>
                    <span style={{display:vegan.discount_value? "block" : "none"}}>{vegan.discount_percent}</span>     
                </div>
            </div>
        </div>
    )
}

function Suncare({suncare}){
    return(
        <div className={styles.total_item} style={{opacity:suncare.sold_out? "0.5" : "1"}}>
            <img src={suncare.src} alt="{suncare.title}"/>
            <h1 style={{display:suncare.large_capacity? "block" : "none"}}>대용량</h1>
            <h2 style={{display:suncare.sold_out? "block" : "none"}}>sold out</h2>
            <h3>{suncare.title}</h3>
            <div>
                <h2 style={{textDecoration:suncare.discount_value? "line-through" : "none"}}>{suncare.price}</h2>
                <div>
                    <h4 style={{display:suncare.discount_value? "block" : "none"}}>{suncare.discount_price}</h4>
                    <span style={{display:suncare.discount_value? "block" : "none"}}>{suncare.discount_percent}</span>     
                </div>
            </div>
        </div>
    )
}

function Award({award}){
    return(
        <div className={styles.total_item} style={{opacity:award.sold_out? "0.5" : "1"}}>
            <img src={award.src} alt="{award.title}"/>
            <h1 style={{display:award.large_capacity? "block" : "none"}}>대용량</h1>
            <h2 style={{display:award.sold_out? "block" : "none"}}>sold out</h2>
            <h3>{award.title}</h3>
            <div>
                <h2 style={{textDecoration:award.discount_value? "line-through" : "none"}}>{award.price}</h2>
                <div>
                    <h4 style={{display:award.discount_value? "block" : "none"}}>{award.discount_price}</h4>
                    <span style={{display:award.discount_value? "block" : "none"}}>{award.discount_percent}</span>     
                </div>
            </div>
        </div>
    )
}

function SpecialPricePage(){
    // 재구매 BEST 기획전
    const repurchase = [
        {
            id: 1,
            src: '/images/repurchase_1.png',
            title: '바이옥실 안티 헤어로스 샴푸 480ml(+손거울 증정)',
            price: '33,000원',
            discount_value: true,
            discount_price: '18,200원',
            discount_percent: '44%',
            large_capacity: false,
            sold_out: false
        },
        {
            id: 2,
            src: '/images/repurchase_2.png',
            title: '소다폼 150ml(+손거울 증정)',
            price: '20,000원',
            discount_value: true,
            discount_price: '11,000원',
            discount_percent: '45%',
            large_capacity: false,
            sold_out: false
        },
        {
            id: 3,
            src: '/images/repurchase_3.png',
            title: '비피다 바이옴 콤플렉스 앰플 50ml(+손거울 증정)',
            price: '35,000원',
            discount_value: true,
            discount_price: '',
            discount_percent: '',
            large_capacity: false,
            sold_out: false
        },
        {
            id: 4,
            src: '/images/repurchase_4.png',
            title: '갈락토닉 나이아신 에센스 50ml(+손거울 증정)',
            price: '29,000원',
            discount_value: true,
            discount_price: '17,400원',
            discount_percent: '40%',
            large_capacity: false,
            sold_out: false
        },
        {
            id: 5,
            src: '/images/repurchase_5.png',
            title: '퓨어 클렌징 오일 200ml(+손거울 증정)',
            price: '29,000원',
            discount_value: true,
            discount_price: '17,400원',
            discount_percent: '40%',
            large_capacity: false,
            sold_out: false
        },
        {
            id: 6,
            src: '/images/repurchase_6.png',
            title: '블렉헤드 퓨어 클렌징 오일 킬패드 50매(+손거울 증정)',
            price: '20,000원',
            discount_value: true,
            discount_price: '11,000원',
            discount_percent: '45%',
            large_capacity: false,
            sold_out: false
        },
        {
            id: 7,
            src: '/images/repurchase_7.png',
            title: '퓨어&딥 클렌징 폼 200ml(+손거울 증정)',
            price: '18,000원',
            discount_value: true,
            discount_price: '9,900원',
            discount_percent: '45%',
            large_capacity: false,
            sold_out: false
        },
        {
            id: 8,
            src: '/images/repurchase_8.png',
            title: '비피다 바이옴 컨센트레이트 크림 50ml(+손거울 증정)',
            price: '40,000원',
            discount_value: true,
            discount_price: '20,000원',
            discount_percent: '50%',
            large_capacity: false,
            sold_out: false
        }
    ]

    // 비건 라인 특가
    const vegan = [
        {
            id: 1,
            src: '/images/vegan_1.png',
            title: '히더 카밍 에센스 패드 60매',
            price: '28,000원',
            discount_value: true,
            discount_price: '19,600원',
            discount_percent: '30%',
            large_capacity: false,
            sold_out: false
        },
        {
            id: 2,
            src: '/images/vegan_2.png',
            title: '히더 카밍 에센스 50ml',
            price: '32,000원',
            discount_value: true,
            discount_price: '22,400원',
            discount_percent: '30%',
            large_capacity: false,
            sold_out: false
        },
        {
            id: 3,
            src: '/images/vegan_3.png',
            title: '판테토인 에센스 토너 200ml',
            price: '32,000원',
            discount_value: true,
            discount_price: '17,600원',
            discount_percent: '45%',
            large_capacity: false,
            sold_out: false
        },
        {
            id: 4,
            src: '/images/vegan_4.png',
            title: '판테토인 크림 80ml',
            price: '42,000원',
            discount_value: true,
            discount_price: '23,000원',
            discount_percent: '45%',
            large_capacity: false,
            sold_out: false
        },
        {
            id: 5,
            src: '/images/vegan_5.png',
            title: '아워 비건 어성초 시카 마스크 10매(+추가 3장 증정)',
            price: '30,000원',
            discount_value: true,
            discount_price: '15,000원',
            discount_percent: '50%',
            large_capacity: false,
            sold_out: false
        },
        {
            id: 6,
            src: '/images/vegan_6.png',
            title: '아원 비건 어성초 시카 토너 400ml',
            price: '24,000원',
            discount_value: true,
            discount_price: '14,000원',
            discount_percent: '41%',
            large_capacity: false,
            sold_out: false
        },
        {
            id: 7,
            src: '/images/vegan_7.png',
            title: '아원 비건 어성초 시카 크림 100ml',
            price: '28,000원',
            discount_value: true,
            discount_price: '16,000원',
            discount_percent: '42%',
            large_capacity: false,
            sold_out: true
        },
        {
            id: 8,
            src: '/images/vegan_8.png',
            title: '아워 비건 알로에 95 수딩 젤 500ml',
            price: '18,000원',
            discount_value: true,
            discount_price: '10,000원',
            discount_percent: '44%',
            large_capacity: false,
            sold_out: false
        },
        {
            id: 9,
            src: '/images/vegan_9.png',
            title: '아워 비건 오곡라떼 스크럽 폼 120ml',
            price: '16,000원',
            discount_value: true,
            discount_price: '9,000원',
            discount_percent: '43%',
            large_capacity: false,
            sold_out: false
        },
        {
            id: 10,
            src: '/images/vegan_10.png',
            title: '[1+1]판테카밍 선크림 50ml',
            price: '48,000원',
            discount_value: true,
            discount_price: '24,000원',
            discount_percent: '50%',
            large_capacity: false,
            sold_out: false
        },
        {
            id: 11,
            src: '/images/vegan_11.png',
            title: '[1+1]파데크림 선크림 모이스처 50ml',
            price: '56,000원',
            discount_value: true,
            discount_price: '28,000원',
            discount_percent: '50%',
            large_capacity: false,
            sold_out: false
        },
        {
            id: 12,
            src: '/images/vegan_12.png',
            title: '판테토인 인리치드 밤 80ml',
            price: '51,000원',
            discount_value: true,
            discount_price: '28,050원',
            discount_percent: '45%',
            large_capacity: false,
            sold_out: false
        },
        {
            id: 13,
            src: '/images/vegan_13.png',
            title: '[1+1]파데프리 선크림 50ml',
            price: '56,000원',
            discount_value: true,
            discount_price: '28,000원',
            discount_percent: '50%',
            large_capacity: false,
            sold_out: true
        }
    ]

    // 선케어 특가
    const suncare = [
        {
            id: 1,
            src: '/images/suncare_1.png',
            title: '[1+1]파데프리 선크림 모이스처 50ml',
            price: '56,000원',
            discount_value: true,
            discount_price: '28,000원',
            discount_percent: '50%',
            large_capacity: false,
            sold_out: false
        },
        {
            id: 2,
            src: '/images/suncare_2.png',
            title: '[1+1]판테카밍 선크림 50ml',
            price: '48,000원',
            discount_value: true,
            discount_price: '24,000원',
            discount_percent: '50%',
            large_capacity: false,
            sold_out: false
        },
        {
            id: 3,
            src: '/images/suncare_3.png',
            title: '[1+1]아워 비선 선크림 베이직 50ml',
            price: '52,000원',
            discount_value: true,
            discount_price: '26,000원',
            discount_percent: '50%',
            large_capacity: false,
            sold_out: false
        },
        {
            id: 4,
            src: '/images/suncare_4.png',
            title: '[1+1]올인원 데일리 선 로션 포맨 50ml',
            price: '44,000원',
            discount_value: true,
            discount_price: '22,000원',
            discount_percent: '50%',
            large_capacity: false,
            sold_out: false
        },
        {
            id: 5,
            src: '/images/suncare_5.png',
            title: '[1+1]파데프리 선크림 50ml',
            price: '56,000원',
            discount_value: true,
            discount_price: '28,000원',
            discount_percent: '50%',
            large_capacity: false,
            sold_out: true
        },
    ]

    // 어워드 수상템
    const award = [
        {
            id: 1,
            src: '/images/award_1.png',
            title: '갈라토닉 나이아신 에센스',
            price: '29,000원',
            discount_value: true,
            discount_price: '17,400원',
            discount_percent: '40%',
            large_capacity: false,
            sold_out: false
        },
        {
            id: 2,
            src: '/images/award_2.png',
            title: '[대용량] 퓨어 클렌징 오일 400ml',
            price: '49,000원',
            discount_value: true,
            discount_price: '21,330원',
            discount_percent: '56%',
            large_capacity: true,
            sold_out: false
        },
        {
            id: 3,
            src: '/images/award_3.png',
            title: '[대용량] 비피다 바이옴 앰플 토너',
            price: '30,000원',
            discount_value: true,
            discount_price: '15,250원',
            discount_percent: '49%',
            large_capacity: true,
            sold_out: false
        },
        {
            id: 4,
            src: '/images/award_4.png',
            title: '[기획세트] 퓨어&딥 클렌징 폼 100mlX3',
            price: '42,000원',
            discount_value: true,
            discount_price: '17,280원',
            discount_percent: '58%',
            large_capacity: false,
            sold_out: false
        },
        {
            id: 5,
            src: '/images/award_5.png',
            title: '갈락토미 나이아신 에센스 50ml(+손거울 증정)',
            price: '29,000원',
            discount_value: true,
            discount_price: '17,400원',
            discount_percent: '40%',
            large_capacity: false,
            sold_out: false
        },
        {
            id: 6,
            src: '/images/award_6.png',
            title: '비피다 바이옴 콤플렉스 엠플 50ml(+손거울 증정)',
            price: '35,000원',
            discount_value: true,
            discount_price: '21,000원',
            discount_percent: '40%',
            large_capacity: false,
            sold_out: false
        },
        {
            id: 7,
            src: '/images/award_7.png',
            title: '판테토인 에센스 토너',
            price: '32,000원',
            discount_value: true,
            discount_price: '17,600원',
            discount_percent: '45%',
            large_capacity: false,
            sold_out: false
        },
        {
            id: 8,
            src: '/images/award_8.png',
            title: '판테토인 크림 80ml',
            price: '42,000원',
            discount_value: true,
            discount_price: '23,000원',
            discount_percent: '45%',
            large_capacity: false,
            sold_out: false
        },
        {
            id: 9,
            src: '/images/award_9.png',
            title: '[1+1]파데프리 선클미 모이스처 50ml',
            price: '56,000원',
            discount_value: true,
            discount_price: '28,000원',
            discount_percent: '50%',
            large_capacity: false,
            sold_out: false
        },
        {
            id: 10,
            src: '/images/award_10.png',
            title: '갈락토미 엔자임 필링젤 75ml',
            price: '12,000원',
            discount_value: true,
            discount_price: '9,600원',
            discount_percent: '20%',
            large_capacity: false,
            sold_out: false
        },
        {
            id: 11,
            src: '/images/award_11.png',
            title: '바이옥실 안티 헤어로스 트리트먼트 200ml',
            price: '28,000원',
            discount_value: true,
            discount_price: '22,400원',
            discount_percent: '20%',
            large_capacity: false,
            sold_out: false
        },
        {
            id: 12,
            src: '/images/award_12.png',
            title: '바이옥실 안티 헤어로스 샴푸 480ml(+손거울 증정)',
            price: '33,000원',
            discount_value: true,
            discount_price: '18,200원',
            discount_percent: '44%',
            large_capacity: false,
            sold_out: false
        },
        {
            id: 13,
            src: '/images/award_13.png',
            title: '히더 카밍 에센스 패드 60매',
            price: '28,000원',
            discount_value: true,
            discount_price: '19,600원',
            discount_percent: '30%',
            large_capacity: false,
            sold_out: false
        },
        {
            id: 14,
            src: '/images/award_14.png',
            title: '갈락토미 클리어스킨 패드 60매',
            price: '22,000원',
            discount_value: true,
            discount_price: '15,400원',
            discount_percent: '30%',
            large_capacity: false,
            sold_out: false
        },
        {
            id: 15,
            src: '/images/award_15.png',
            title: '아워 비건 어성초 시카 크림 100ml',
            price: '28,000원',
            discount_value: true,
            discount_price: '16,000원',
            discount_percent: '42%',
            large_capacity: false,
            sold_out: false
        },
        {
            id: 16,
            src: '/images/award_16.png',
            title: '갈락토미 에센스 크림 50ml',
            price: '35,000원',
            discount_value: true,
            discount_price: '24,500원',
            discount_percent: '30%',
            large_capacity: false,
            sold_out: false
        },
        {
            id: 17,
            src: '/images/award_17.png',
            title: '블랙헤드 퓨어 클렌징 오일 킬패드 50매(+손거울 증정)',
            price: '20,000원',
            discount_value: true,
            discount_price: '11,000원',
            discount_percent: '45%',
            large_capacity: false,
            sold_out: false
        },
        {
            id: 18,
            src: '/images/award_18.png',
            title: '소다폼 150ml(+손거울 증정)',
            price: '20,000원',
            discount_value: true,
            discount_price: '11,000원',
            discount_percent: '45%',
            large_capacity: false,
            sold_out: false
        },
        {
            id: 19,
            src: '/images/award_19.png',
            title: '비피다 시카 허브 토너 210ml',
            price: '19,000원',
            discount_value: true,
            discount_price: '11,400원',
            discount_percent: '40%',
            large_capacity: false,
            sold_out: false
        },
        {
            id: 20,
            src: '/images/award_20.png',
            title: '퓨어 엔자임 클렌징 워터 400ml',
            price: '22,000원',
            discount_value: true,
            discount_price: '13,200원',
            discount_percent: '40%',
            large_capacity: false,
            sold_out: false
        }
    ]

    const [key, setKey] = useState('repurchase');

    return(
        <div className={styles.container}>
            <Tabs
                id="controlled-tab-example"
                activeKey={key}
                onSelect={(k) => setKey(k)}
                className="mb-3"
            >
                <Tab eventKey="repurchase" title="재구매 BEST 기획전" className={styles.repurchase}>
                    <div className={styles.container}>
                        <div className={styles.total_content}>
                            <img src="/images/repurchase.jpeg" alt="repurchase" style={{width : "1500px", margin : "0 0 50px 0"}}/>
                            {repurchase.map((repurchase)=>(
                                <Repurchase repurchase={repurchase} key={repurchase.id}/>
                            ))}
                        </div>
                    </div>
                </Tab>
                <Tab eventKey="vegan" title="비건 라인 특가" className={styles.vegan}>
                    <div className={styles.container}>
                        <div className={styles.total_content}>
                                <img src="/images/vegan.jpeg" alt="vegan" style={{width : "1500px", margin : "0 0 50px 0"}}/>
                                {vegan.map((vegan)=>(
                                    <Vegan vegan={vegan} key={vegan.id}/>
                                ))}
                        </div>
                    </div>
                </Tab>
                <Tab eventKey="suncare" title="선케어 특가">
                    <div className={styles.container}>
                        <div className={styles.total_content}>
                            {suncare.map((suncare)=>(
                                <Suncare suncare={suncare} key={suncare.id}/>
                            ))}
                        </div>
                    </div>
                </Tab>
                <Tab eventKey="award" title="어워드 수상템">
                    <div className={styles.container}>
                        <div className={styles.total_content}>
                            {award.map((award)=>(
                                <Award award={award} key={award.id}/>
                            ))}
                        </div>
                    </div>
                </Tab>
            </Tabs>
        </div>
    )
}

export default SpecialPricePage;
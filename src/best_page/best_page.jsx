import React from "react";
import styles from "./best_page.module.css";
function Best({best}){
    return(
        <div className={styles.total_item} style={{opacity:best.sold_out? "0.5" : "1"}}>
            <img src={best.src} alt="{best.title}"/>
            <h1 style={{display:best.large_capacity? "block" : "none"}}>대용량</h1>
            <h2 style={{display:best.sold_out? "block" : "none"}}>sold out</h2>
            <h3>{best.title}</h3>
            <div>
                <h2 style={{textDecoration:best.discount_value? "line-through" : "none"}}>{best.price}</h2>
                <div>
                    <h4 style={{display:best.discount_value? "block" : "none"}}>{best.discount_price}</h4>
                    <span style={{display:best.discount_value? "block" : "none"}}>{best.discount_percent}</span>     
                </div>
            </div>
        </div>
    )
}

function BestPage(){
    const best = [
        {
            id: 1,
            src: '/images/best_1.png',
            title: '갈라토닉 나이아신 에센스 50ml(+손거울 증정)',
            price: '29,000원',
            discount_value: true,
            discount_price: '17,400원',
            discount_percent: '40%',
            large_capacity: false,
            sold_out: false
        },
        {
            id: 2,
            src: '/images/best_2.png',
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
            src: '/images/best_3.png',
            title: '퓨어 클렌징 오일 200ml(+손거울 증정)',
            price: '29,000원',
            discount_value: true,
            discount_price: '17,400원',
            discount_percent: '40%',
            large_capacity: false,
            sold_out: false
        },
        {
            id: 4,
            src: '/images/best_4.png',
            title: '비피다 바이옴 콤플렉스 앰플 50ml(+손거울 증정)',
            price: '35,000원',
            discount_value: true,
            discount_price: '21,000원',
            discount_percent: '40%',
            large_capacity: false,
            sold_out: false
        },
        {
            id: 5,
            src: '/images/best_5.png',
            title: '[대용량] 비피다 바이옴 애플 토너 500ml',
            price: '30,000원',
            discount_value: true,
            discount_price: '15,250원',
            discount_percent: '49%',
            large_capacity: true,
            sold_out: false
        },
        {
            id: 6,
            src: '/images/best_6.png',
            title: '비피다 바이옴 애플 토너 400ml',
            price: '25,000원',
            discount_value: true,
            discount_price: '17,500원',
            discount_percent: '30%',
            large_capacity: false,
            sold_out: false
        },
        {
            id: 7,
            src: '/images/best_7.png',
            title: '[1+1]파데프리 선크림 모이스처 50ml',
            price: '56,000원',
            discount_value: true,
            discount_price: '28,000원',
            discount_percent: '50%',
            large_capacity: false,
            sold_out: false
        },
        {
            id: 8,
            src: '/images/best_8.png',
            title: '히더 카밍 에센스 패드 60매',
            price: '28,000원',
            discount_value: true,
            discount_price: '19,600원',
            discount_percent: '30%',
            large_capacity: false,
            sold_out: false
        },
        {
            id: 9,
            src: '/images/best_9.png',
            title: '히더 카밍 에센스 50ml',
            price: '32,000원',
            discount_value: true,
            discount_price: '22,400원',
            discount_percent: '30%',
            large_capacity: false,
            sold_out: false
        },
        {
            id: 10,
            src: '/images/best_10.png',
            title: '판테토인 에센스 토너 200ml',
            price: '32,000원',
            discount_value: true,
            discount_price: '17,600원',
            discount_percent: '45%',
            large_capacity: false,
            sold_out: true
        },
        {
            id: 11,
            src: '/images/best_11.png',
            title: '퓨어&딥 클렌징 폼 200ml(손거울 증정)',
            price: '18,000원',
            discount_value: true,
            discount_price: '9,900원',
            discount_percent: '45%',
            large_capacity: false,
            sold_out: false
        },
        {
            id: 12,
            src: '/images/best_12.png',
            title: '갈락토미 클리어스킨 패드 60매',
            price: '22,000원',
            discount_value: true,
            discount_price: '15,400원',
            discount_percent: '30%',
            large_capacity: false,
            sold_out: false
        },
        {
            id: 13,
            src: '/images/best_13.png',
            title: '갈락 나이아신 에센스 패드 80매',
            price: '28,000원',
            discount_value: true,
            discount_price: '19,600원',
            discount_percent: '30%',
            large_capacity: false,
            sold_out: false
        },
        {
            id: 14,
            src: '/images/best_14.png',
            title: '비피다 바이옴 아쿠아 베리어 크림 80ml',
            price: '24,500원',
            discount_value: false,
            discount_price: '',
            discount_percent: '',
            large_capacity: false,
            sold_out: false
        },
        {
            id: 15,
            src: '/images/best_15.png',
            title: '판테토인 크림 80ml',
            price: '42,000원',
            discount_value: true,
            discount_price: '23,000원',
            discount_percent: '45%',
            large_capacity: false,
            sold_out: false
        },
        {
            id: 16,
            src: '/images/best_16.png',
            title: 'V콜라겐 하트핏 앰플 500ml',
            price: '35,000원',
            discount_value: true,
            discount_price: '24,500원',
            discount_percent: '30%',
            large_capacity: false,
            sold_out: false
        },
        {
            id: 17,
            src: '/images/best_17.png',
            title: 'V콜라겐 하트핏 크림 50ml',
            price: '38,000원',
            discount_value: false,
            discount_price: '',
            discount_percent: '',
            large_capacity: false,
            sold_out: false
        },
        {
            id: 18,
            src: '/images/best_18.png',
            title: '바이옥실 안티 헤어로스 트리트먼트 200ml',
            price: '28,000원',
            discount_value: true,
            discount_price: '22,400원',
            discount_percent: '20%',
            large_capacity: false,
            sold_out: false
        },
        {
            id: 19,
            src: '/images/best_19.png',
            title: '바이옥실 안티 헤어로스 샴푸 480ml(+손거울 증정)',
            price: '33,000원',
            discount_value: true,
            discount_price: '18,200원',
            discount_percent: '44%',
            large_capacity: false,
            sold_out: false
        },
        {
            id: 20,
            src: '/images/best_20.png',
            title: '[1+1]파데프리 선크림 50ml',
            price: '56,000원',
            discount_value: true,
            discount_price: '28,000원',
            discount_percent: '50%',
            large_capacity: false,
            sold_out: true
        }
    ]

    return(
        <div className={styles.container}>
            <h2>베스트</h2>
            <div className={styles.total_content}>
                {best.map((best)=>(
                    <Best best={best} key={best.id}/>
                ))}
            </div>
        </div>
    );
}

export default BestPage;
import React, {useReducer, createContext, useContext} from "react";

// 전체
const product = [
    {
        id: 1,
        src: '/images/total_1.png',
        title: '갈락토미 나이아신 에센스 50ml',
        price: '29,000원',
        discount_value: true,
        discount_price: '20,300원',
        discount_percent: '30%',
        large_capacity: false,
        sold_out: false
    },
    {
        id: 2,
        src: '/images/total_2.png',
        title: '[대용량] 퓨어 클렌징 오일 400ml',
        price: '49,000원',
        discount_value: true,
        discount_price: '23,400원',
        discount_percent: '52%',
        large_capacity: true,
        sold_out: false
    },
    {
        id: 3,
        src: '/images/total_3.png',
        title: '퓨어 클렌징 오일 200ml',
        price: '29,000원',
        discount_value: true,
        discount_price: '17,200원',
        discount_percent: '40%',
        large_capacity: false,
        sold_out: false,
    },
    {
        id: 4,
        src: '/images/total_4.png',
        title: '퓨어&딥 클렌징 폼 200ml',
        price: '18,000원',
        discount_value: true,
        discount_price: '10,800원',
        discount_percent: '40%',
        large_capacity: false,
        sold_out: true
    },
    {
        id: 5,
        src: '/images/total_5.png',
        title: '비피다 바이옴 콤플렉스 앰플 50ml',
        price: '70,000원',
        discount_value: true,
        discount_price: '36,900원',
        discount_percent: '47%',
        large_capacity: false,
        sold_out: false
    },
    {
        id: 6,
        src: '/images/total_6.png',
        title: '[1+1]파데프리 선크림 모이스처 50ml',
        price: '56,000원',
        discount_value: true,
        discount_price: '28,000원',
        discount_percent: '50%',
        large_capacity: false,
        sold_out: false
    },
    {
        id: 7,
        src: '/images/total_7.png',
        title: '판테토인 에센스 토너 200ml',
        price: '32,000원',
        discount_value: true,
        discount_price: '22,400원',
        discount_percent: '30%',
        large_capacity: false,
        sold_out: true
    },
    {
        id: 8,
        src: '/images/total_8.png',
        title: '파데프리 선크림 50ml',
        price: '28,000원',
        discount_value: true,
        discount_price: '14,000원',
        discount_percent: '50%',
        large_capacity: false,
        sold_out: true
    },
    {
        id: 9,
        src: '/images/total_9.png',
        title: '갈락 나이아신 에센스 패드 80매',
        price: '28,000원',
        discount_value: true,
        discount_price: '19,600원',
        discount_percent: '30%',
        large_capacity: false,
        sold_out: false
    },
    {
        id: 10,
        src: '/images/total_10.png',
        title: '판테토인 크림 80ml',
        price: '42,000원 ',
        discount_value: true,
        discount_price: '29,400원',
        discount_percent: '30%',
        large_capacity: false,
        sold_out: false
    },
    {
        id: 11,
        src: '/images/total_11.png',
        title: '블랙헤드 퓨어 클렌징 오일 킬패드 50매',
        price: '20,000원 ',
        discount_value: true,
        discount_price: '15,000원',
        discount_percent: '25%',
        large_capacity: false,
        sold_out: false
    },
    {
        id: 12,
        src: '/images/total_12.png',
        title: '비피다 바이옴 아쿠아 베리어 크림 80ml',
        price: '24,500원',
        discount_value: false,
        discount_price: '',
        discount_percent: '',
        large_capacity: false,
        sold_out: false
    },
    {
        id: 13,
        src: '/images/total_13.png',
        title: '히더 카밍 에센스 패드 60매',
        price: '28,000원 ',
        discount_value: true,
        discount_price: '22,400원',
        discount_percent: '20%',
        large_capacity: false,
        sold_out: false
    },
    {
        id: 14,
        src: '/images/total_14.png',
        title: '소다폼 150ml',
        price: '20,000원',
        discount_value: true,
        discount_price: '14,000원',
        discount_percent: '30%',
        large_capacity: false,
        sold_out: false
    },
    {
        id: 15,
        src: '/images/total_15.png',
        title: '히더 카밍 에센스 50ml',
        price: '32,000원',
        discount_value: true,
        discount_price: '25,600원',
        discount_percent: '20%',
        large_capacity: false,
        sold_out: false
    },
    {
        id: 16,
        src: '/images/total_16.png',
        title: '허브그린 클렌징 오일 200ml',
        price: '29,000원',
        discount_value: true,
        discount_price: '17,400원',
        discount_percent: '40%',
        large_capacity: false,
        sold_out: false
    },
    {
        id: 17,
        src: '/images/total_17.png',
        title: '갈락토미 클리어스킨 패드 60매',
        price: '22,000원',
        discount_value: true,
        discount_price: '15,400원',
        discount_percent: '30%',
        large_capacity: false,
        sold_out: false
    },
    {
        id: 18,
        src: '/images/total_18.png',
        title: '[1+1]판테카밍 선크림 50ml',
        price: '48,000원',
        discount_value: true,
        discount_price: '24,000원',
        discount_percent: '50%',
        large_capacity: false,
        sold_out: false
    },
    {
        id: 19,
        src: '/images/total_19.png',
        title: '갈락토미 모이스처 로션 100ml',
        price: '20,000원',
        discount_value: true,
        discount_price: '13,000원 ',
        discount_percent: '35%',
        large_capacity: false,
        sold_out: false
    },
    {
        id: 20,
        src: '/images/total_20.png',
        title: 'V콜라겐 하트핏 앰플 50ml',
        price: '35,000원 ',
        discount_value: true,
        discount_price: '19,900원',
        discount_percent: '43%',
        large_capacity: false,
        sold_out: false
    }
]

function stateReducer(){

}

const StateContext = createContext()

export function TextProvider({children}){
     const [state , dispatch] =useReducer(stateReducer, product)

    return(
        <div>
             <StateContext.Provider value={state}>
               {children}
             </StateContext.Provider> 
        </div>
    )
}

export function useTextState(){
    const context = useContext(StateContext);
    if(!context){
        throw new Error('TodoProvider를 찾을 수 없음');
    }
    return context;
}
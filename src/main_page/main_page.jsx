import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import styles from "./main_page.module.css";
import Carousel from 'react-bootstrap/Carousel';

function Best1({best}){
    return(
        <div className={styles.total_item} style={{opacity:best.sold_out? "0.5" : "1", display:best.id < 6 ? "block" : "none"}}>
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
function Best2({best}){
    return(
        <div className={styles.total_item} style={{opacity:best.sold_out? "0.5" : "1", display:best.id > 5 && best.id < 11? "block" : "none"}}>
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
function Best3({best}){
    return(
        <div className={styles.total_item} style={{opacity:best.sold_out? "0.5" : "1", display:best.id > 10 && best.id < 16? "block" : "none"}}>
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


function MainPage (){
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
        }
    ]

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };

    return(
        <div className={styles.container}>
            {/* mainPage_slider */}
            <div className={styles.section01}>
                <Carousel className={styles.slider}>
                    <Carousel.Item className={styles.slider_1}>
                        <img
                        src="/images/first_slide.jpeg"
                        alt="First slide"
                        />
                        <Carousel.Caption className={styles.slider_1_text}>
                        <h3>단 1주일,<br/>
                        New 남성라인 런칭이벤트</h3>
                        <p>최대 70%의 할인으로 만나보세요!</p>
                        <span>2023.05.18 10:00am - 2023.05.24 11.59pm</span>
                        <button>자세히 보기</button>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className={styles.slider_2}>
                        <img
                        src="/images/second_slide.jpeg"
                        alt="Second slide"
                        />
                        <Carousel.Caption className={styles.slider_2_text}>
                        <h3>열여덟 어른에게<br/>
                        좋은 어른이 되어주세요</h3>
                        <p>성년의 날 맞이 자립준비청년 지원 캠페인</p>
                        <span>2023.03.15 10:00am - 05.22 11:59pm</span>
                        <button>자세히 보기</button>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className={styles.slider_3}>
                        <img
                        src="/images/third_slide.jpeg"
                        alt="Third slide"
                        />
                        <Carousel.Caption className={styles.slider_3_text}>
                        <h3>월간 헤택 5월호<br/>
                        COUPON BOOK</h3>
                        <p>지금 공식몰 단독 혜택을 확인하세요!</p>
                        <span>2023.05.03 10:00am - 05.31 11:59pm</span>
                        <button>자세히 보기</button>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className={styles.slider_4}>
                        <img
                        src="/images/fourth_slide.jpeg"
                        alt="Fourth slide"
                        />
                        <Carousel.Caption className={styles.slider_4_text}>
                        <h3>파데 한 듯 안 한 듯<br/>
                        수분 톤업 비건 선크림</h3>
                        <p>파데프리 선크림 모이스터</p>
                        <span>Foundation-Free Sun Cream Moisture</span>
                        <button>자세히 보기</button>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className={styles.slider_5}>
                        <img
                        src="/images/fifth_slide.jpeg"
                        alt="Fifth slide"
                        />
                        <Carousel.Caption className={styles.slider_5_text}>
                        <h3>칙칙한 피부톤을<br/>
                        구원하는 미백 광채 에센스</h3>
                        <p>갈라토닉 나이아신 에센스</p>
                        <span>Galactomy Niacin Essence</span>
                        <button>자세히 보기</button>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className={styles.slider_6}>
                        <img
                        src="/images/sixth_slide.jpeg"
                        alt="sixth slide"
                        />
                        <Carousel.Caption className={styles.slider_6_text}>
                        <h3>그 어떤 자극 순간에도<br/>
                        히더 진정 비건 패드</h3>
                        <p>New 히더 카밍 에센스 패드</p>
                        <span>Heather Calming Essence Pad</span>
                        <button>자세히 보기</button>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>

            {/* best */}
            <div className={styles.section02}>
                <h2>best seller :</h2>
                <Swiper
                    pagination={{
                    type: "progressbar",
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className={styles.best_swiper}
                >
                    <SwiperSlide className={styles.best_swiper_in}>
                        <div className={styles.total_content}>
                            {best.map((best)=>(
                                <Best1 best={best} key={best.id}/>
                            ))}
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={styles.best_swiper_in}>
                        <div className={styles.total_content}>
                            {best.map((best)=>(
                                <Best2 best={best} key={best.id}/>
                            ))}
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={styles.best_swiper_in}>
                        <div className={styles.total_content}>
                            {best.map((best)=>(
                                <Best3 best={best} key={best.id}/>
                            ))}
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>

            {/* event */}
            <div className={styles.section03}>
                <div>
                    <h2>event :</h2>
                    <button>전체보기</button>
                </div>
                <Swiper
                    slidesPerView={"auto"}
                    spaceBetween={30}
                    pagination={{
                    clickable: true,
                    }}
                    modules={[Pagination]}
                    className={styles.my_swiper}
                >
                    <SwiperSlide className={styles.first}>
                        <div className={styles.event_swiper}>
                            <img src="/images/event_swiper_1.jpeg" alt="event_swiper_1" />
                            <div className={styles.event_swiper_sub}>
                                <div className={styles.event_text}>
                                    <h3>단 1주일,<br/>
                                    New 남성라인 런칭 이벤트</h3>
                                    <p>최대 70%의 할인으로 만나보세요!</p>
                                    <span>2023.05.18 10:00am - 05.24 11.59 pm</span>
                                </div>
                                <div className={styles.event_img}>
                                    <img src="/images/event_swiper_1_in1.png" alt="black" />
                                    <img src="/images/event_swiper_1_in2.png" alt="white" />
                                    <img src="/images/event_swiper_1_in3.png" alt="blue" />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={styles.second}>
                        <div className={styles.event_swiper}>
                            <img src="/images/event_swiper_2.jpeg" alt="event_swiper_2" />
                            <div className={styles.event_swiper_sub}>
                                <div className={styles.event_text}>
                                    <h3>지구와 피부 모두를 위한<br/>
                                    Vegan Beauty</h3>
                                    <p>비건 뷰티 기획전 ~50% OFF</p>
                                    <span>2023.05.22 10:00am - 05.29 10.00 am</span>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={styles.third}>
                        <div className={styles.event_swiper}>
                            <img src="/images/event_swiper_3.jpeg" alt="event_swiper_3" />
                            <div className={styles.event_swiper_sub}>
                                <div className={styles.event_text}>
                                    <h3>열여덟 어른에게<br/>
                                    좋은 어른이 되어주세요</h3>
                                    <p>성년의 날 맞이 자립준비청년 지원 캠페인</p>
                                    <span>2023.05.15 10:00am - 05.22 11.59 pm</span>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={styles.fourth}>
                        <div className={styles.event_swiper}>
                            <img src="/images/event_swiper_4.jpeg" alt="event_swiper_4" />
                            <div className={styles.event_swiper_sub}>
                                <div className={styles.event_text}>
                                    <h3>월간 혜택 5월호<br/>
                                    COUPON BOOK</h3>
                                    <p>지금 공식몰 단독 혜택을 확인하세요!</p>
                                    <span>2023.05.03 10:00am - 05.31 11.59 pm</span>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={styles.fifth}>
                        <div className={styles.event_swiper}>
                            <img src="/images/event_swiper_5.jpeg" alt="event_swiper_5" />
                            <div className={styles.event_swiper_sub}>
                                <div className={styles.event_text}>
                                    <h3>쏟아지는 혜택</h3>
                                    <p>마녀공장 카카오 플친 추가 시<br/>
                                    2,000원 할인 쿠폰 증정</p>
                                    <span>2023.05.01 10:00am - 05.31 11.59 am</span>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
            
            {/* special_price */}
            <div className={styles.section04}>
                <h2>special price :</h2>
                <Carousel activeIndex={index} onSelect={handleSelect}>
                    <Carousel.Item className={styles.special_price}>
                        <img
                        className="d-block w-100"
                        src="/images/repurchase.jpeg"
                        alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item className={styles.special_price}>
                        <img
                        className="d-block w-100"
                        src="/images/vegan.jpeg"
                        alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item className={styles.special_price}>
                        <img
                        className="d-block w-100"
                        src="/images/special_price.jpg"
                        alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>

            {/* brand */}
            <div className={styles.section05}>
                <div className={styles.section05_text}>
                    <h2>brand :</h2>
                    <h3>마녀공장을 만나는 순간<br/>
                    시작되는 사로운 당신.</h3>
                    <button>전체보기</button>
                </div>
                <div className={styles.section05_img}>
                    <Swiper
                        slidesPerView={"auto"}
                        spaceBetween={10}
                        pagination={{
                        clickable: true,
                        }}
                        modules={[Pagination]}
                        className={styles.my_swiper}
                    >
                        <SwiperSlide className={styles.brand_first}>
                            <div className={styles.brand_swiper}>
                                <img src="/images/brand_story1.jpeg" alt="event_swiper_1" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className={styles.brand_second}>
                            <div className={styles.brand_swiper}>
                                <img src="/images/brand_about1.png" alt="event_swiper_2" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className={styles.brand_third}>
                            <div className={styles.brand_swiper}>
                                <img src="/images/brand_with1.png" alt="event_swiper_3" />
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default MainPage;
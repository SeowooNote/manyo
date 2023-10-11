import React, { useState } from "react";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import styles from './brand_page.module.css';

function BrandPage(){
    const [key, setKey] = useState('home');
    return(
        <div className={styles.container}>
            <Tabs
            id="controlled-tab-example"
             activeKey={key}
            onSelect={(k) => setKey(k)}
            className="mb-3"
            >
                <Tab eventKey="home" title="aboout ma:nyo   브랜드 스토리">
                    <div className={styles.brand_story1}>
                        <img src="/images/brand_story1.jpeg" alt="brand_story1" />
                        <h2>as you wish, <span>skin wizard</span></h2>
                        <h3>피부 고민, 원하는 대로. 스킨 위저드 마녀공장</h3>
                    </div>
                    <div className={styles.brand_story2}>
                        <h2>brand story</h2>
                        <h2>당신이 원하는 대로 마법 같은 피부 변화를 만드는 곳<br/>
                        이곳은 피부에 진심인 위저들의 마녀공장입니다.</h2>
                        <h2>타협하지 않는 까다로운 성분 원칙과 섬세한 차이가 주는 확실한 효과</h2>
                        <h2>바로 이 순간 나를 위해 준비된 듯한 놀라운 제품을 만나는 경이로움,<br/>
                        한 사람 한 사람을 위한 마녀공장의 진심을 담아 당신이 꿈꿔왔던 아름다움을 이루어 드릴게요</h2>
                    </div>
                    <div className={styles.brand_story3}>
                        <h2>promise | 01</h2>
                        <h2>우리는 당신이 원하는<br/>
                        피부를 실현하는 스킨 위저드입니다.</h2>
                        <h2>we are skin wizards</h2>
                    </div>
                    <div className={styles.brand_story4}>
                        <div>
                            <img src="/images/brand_story4-1.jpeg" alt="brand_story4-1" />
                            <img src="/images/brand_story4-2.jpeg" alt="brand_story4-2" />
                        </div>
                        <h2>마녀공장의 모든 것에는 고객이 원하는<br/>
                        피부를 실현하기 위한 피부를 향한 진심이 담겨 있습니다</h2>
                        <p>마녀공장만의 풍부한 인사이트를 통해 안전하고 효과적인 맞춤 솔루션을<br/>
                        제안하여 고객이 원하는 이상적인 피부를 실현하는데 온 노력을 기울입니다<br/>
                        우리는 고객들의 각각의 라이프 스타일과 피부 고민에 꼭 맞는 베네핏을 제안하고 눈에 보이는<br/>
                        효과를 줄 수 있는 검증된 원료를 선택한 후 그 효능을 최적화하는 성분 프로포션을 조율합니다<br/>
                        계절, 피부 타입, 텍스처의 감도, 사용상의 효용성을 따져 디테일한 처방 개선을 통한 제품을 선보입니다</p>
                    </div>
                    <div className={styles.brand_story5}>
                        <h2>promise | 02</h2>
                        <h2>우리는 경이로움을 만듭니다</h2>
                        <h2>we do wonders</h2>
                        <div>
                            <img src="/images/brand_story5-1.jpeg" alt="brand_story5-1" />
                            <img src="/images/brand_story5-2.jpeg" alt="brand_story5-2" />
                        </div>
                        <div className={styles.brand_story5_plus}>
                            <h2>wonder01 | 성분</h2>
                            <h2>마녀공장은 섬세한 차이가 경이로움을 만들어낸다는 믿음으로<br/>
                            제품 하나 하나에 마녀공장만의 까다로운 성분 원칙을 적용합니다</h2>
                            <p>마녀공장의 탄생부터 지금까지 그리고 앞으로도 좋은 성분에 대한 원칙은 변하지 않습니다<br/>
                            논란이 되는 유해 성분을 제품에 넣지 않으며 자극은 줄이되 효능은 극대화하는<br/>
                            대체 성분을 찾는 노력을 기울이고 있습니다<br/>
                            이러한 엄격한 원칙으로 만든 마녀공장 제품은<br/>
                            당신의 피부에 편안함과 경이로운 변화를 동시에 선사합니다</p>
                        </div>
                        <div className={styles.brand_story6}>
                            <img src="/images/brand_story6.jpeg" alt="brand_story6" />
                            <div className={styles.brand_story6_plus}>
                                <h2>wonder02 | 친환경</h2>
                                <h2>마녀공장은 자연과 지구의 부담을 줄이고<br/>
                                오래도록 함께 하기 위한 방법을 연구합니다</h2>
                                <p>전 제품의 테이프-리스(tape-less) 포장재 유통을 실시하고 있으며, 친환경 제지와<br/>
                                플라스틱 배출을 줄인 용기, 제거하기 쉬운 라벨, 분리배출이 쉽고 리필 가능한 패키징 등<br/>
                                지구를 생각한 eco-packaging 시스템을 적극적으로 실시합니다<br/>
                                이러한 노력들은 우리를 살아갈 수 있게 하는<br/>
                                자연과 지구에 경의를 표하는 마녀공장의 마음입니다</p>
                            </div>
                        </div>
                        <div className={styles.brand_story7}>
                            <img src="/images/brand_story7.png" alt="brand_story7" />
                            <div className={styles.brand_story7_plus}>
                                <h2>wonder03 | 일상</h2>
                                <h2>마녀공장은 매일의 일상 속에서 기분 좋은<br/>
                                놀라움을 드리기 위해 노력합니다</h2>
                                <p>소중한 일상의 경험을 존중하며 하루 중 문득 새어 나오는 미소의 가치를 알기에<br/>
                                당신에게 그런 일상 속 행복을 선사하기 위해 고민합니다<br/>
                                예고 없이 싱그러운 꽃다발로 우울한 마음을 위로하고<br/>
                                마음을 울리는 깜짝 공연으로 아름다운 하루를 선물합니다<br/>
                                한 사람 한 사람의 일상 속 설레는 변화,<br/>
                                마법 같은 행복을 위해 오늘도 마녀공장은 세심한 경이로움을 만들고 있습니다</p>
                            </div>
                        </div>
                        <div className={styles.brand_story8}>
                            <h2>promise | 02</h2>
                            <h2>작은 실천이 우리의 세상에<br/>
                            가져올 기적을 믿습니다</h2>
                            <h2>we believe in miracles for the world</h2>
                        </div>
                        <div className={styles.brand_story9}>
                        <div>
                            <img src="/images/brand_story9-1.jpeg" alt="brand_story9-1" />
                            <img src="/images/brand_story9-2.jpeg" alt="brand_story9-2" />
                        </div>
                        <div className={styles.brand_story9_plus}>
                            <h2>마녀공장은 작은 실천이 쌓여 큰 기적을 일으킨다고 믿기에<br/>
                            우리의 주위를 세심하게 살피고 적극적으로 실천하겠습니다</h2>
                            <h2>이웃, 취약계층, 동물, 사회, 자연, 지구 …<br/>
                            우리를 둘러싼 세상의 아름다운 가치를 존중하고 배려하며<br/>
                            미처 시선이 닿지 못한 곳은 없는지 매달 적극적으로 주위를 살피며 마음을 쏟겠습니다<br/>
                            우리는 마녀공장과 함께 하는 당신의 삶이 보다 가치 있다고 느끼길 바랍니다</h2>
                            <h2>우리가 살아가는 이 세상이 매일 조금씩 더 아름다워질 수 있도록<br/>
                            작지만 정직한 걸음을 멈추지 않겠습니다</h2>
                        </div>
                        <div className={styles.brand_story10}>
                            <img src="/images/brand_story10.jpeg" alt="brand_story10" style={{width : '1500px'}}/>
                            <h3 className={styles.first}>피부 고민, 원하는 대로</h3>
                            <h2 className={styles.second}>ma:nyo</h2>
                            <h3 className={styles.third}>as you wish, <span>skin wizard</span></h3>
                            <h3 className={styles.fourth}>스킨 위저드 마녀공장</h3>
                        </div>
                    </div>
                    </div>
                    
                </Tab>
                <Tab eventKey="profile" title="of ma:nyo    성분철학">
                    <div className={styles.brand_about1}>
                        <img src="/images/brand_about1.png" alt="brand_about1" />
                        <h2>we do <span>wonders</span></h2>
                        <h3>우리는 경이로움을 만듭니다</h3>
                    </div>
                    <div className={styles.brand_about2}>
                        <h2>마녀공장만의 성분철학</h2>
                        <h3>섬세한 차이가 경이로움으로</h3>
                        <p>마녀공장은 섬세한 차이가 경이로움으로 만들어 낸다는 믿음으로,<br/>
                        제품 하나하나에 마녀공장만의 까다로운 성분 원칙을 적용합니다</p>
                    </div>
                    <div className={styles.brand_about3}>
                        <img src="/images/brand_about3.png" alt="brand_about3" />
                        <div className={styles.brand_about3_textarea}>
                            <div>
                                <h2>변함 없는 성분 원칙.</h2>
                                <h3>엄격함이 편안함으로 ㅡ</h3>
                            </div>
                            <div>
                                <p className={styles.sub_num}>[01]</p>
                                <p className={styles.sub_title}>마녀공장만의 無첨가 원칙</p>
                                <p>피부에 부담을 주는 성분을 끊임없이 연구하며<br/>
                                엄격한 기준으로 배제합니다 예민한 피부도 걱정 없이 빠르고<br/>
                                직관적인 효과를 누렸으면 좋겠습니다</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.brand_about4}>
                        <div className={styles.brand_about4_textarea}>
                            <p className={styles.sub_num}>[02]</p>
                            <p className={styles.sub_title}>마녀공장만의 無첨가 원칙</p>
                            <p>피부에 부담을 주는 성분을 끊임없이 연구하며<br/>
                            엄격한 기준으로 배제합니다 예민한 피부도 걱정 없이 빠르고<br/>
                            직관적인 효과를 누렸으면 좋겠습니다</p>
                        </div>
                        <img src="/images/brand_about4.png" alt="brand_about4" />
                    </div>
                    <div className={styles.brand_about5}>
                        <img src="/images/brand_about5.png" alt="brand_about5" />
                        <div className={styles.brand_about5_textarea}>
                            <p className={styles.sub_num}>[03]</p>
                            <p className={styles.sub_title}>피부를 위한 비건 레시피</p>
                            <p>동물 원료를 사용하지 않은 100% 비건 레시피<br/>
                            100% 비건 레시피 적용 제품을 늘려나가며 동물뿐만 아니라<br/>
                            피부에도 좋은 영향을 미치도록 연구하겠습니다</p>
                            <p>*프랑스 이브 비건 인증을 받은 일부 제품에 한함</p>
                        </div>
                    </div>
                    <div className={styles.brand_about6}>
                        <div>
                            <h2>임상 시험으로 입증한 효능&효과.</h2>
                            <h3>정확함이 기분 좋은 아름다움으로 ㅡ</h3>
                        </div>
                        <div>
                            <div className={styles.brand_about6_left}>
                                <img className={styles.brand_about6_1} src="/images/brand_about6-1.png" alt="brand_about6-1" />
                                <img className={styles.brand_about6_2} src="/images/brand_about6-1_in.png" alt="brand_about6-1_in" />
                                <div>
                                    <p>[01]</p>
                                    <p>임상 시험 진행</p>
                                    <p>명확한 효능 효과 입증을 위해 지금까지<br/>
                                    총 36건*의 임상 시험을 진행했으며, 좋은 화장품을 위한<br/>
                                    마녀공장의 노력과 도전은 계속될 것입니다</p>
                                    <p>*2022sus 5월 기준</p>
                                </div>
                            </div>
                            <div className={styles.brand_about6_right}>
                                <img src="/images/brand_about6-2.png" alt="brand_about6-2" />
                                <p>[02]</p>
                                <p>전제품 저자극 테스트 완료</p>
                                <p>예민한 피부도 걱정 없이 좋은 제품을 쓰도록<br/>
                                마녀공장의 모든 제품은 저자극 테스트를 마쳤습니다</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.brand_about7}>
                        <h2>이러한 성분 철학으로 담아냈습니다</h2>
                        <h3>마녀공장의 대표 성분</h3>
                        <p>다양한 연구로 찾아낸 명확한 효과,<br/>
                        마녀공장의 대표 성분을 통해 경험해 보세요</p>
                    </div>
                    <div className={styles.brand_about8}>
                        <img src="/images/brand_about8.png" alt="brand_about8" />
                        <div className={styles.brand_about8_textarea}>
                            <p className={styles.sub_num}>[01]</p>
                            <p className={styles.sub_title}>예민할수록 피부 장벽 강화</p>
                            <p>마녀공장만의 성분 배합, 비피다 바이옴TM</p>
                            <p>비피다 바이옴TM은 비피다발효용해물과 마이크로바이옴을<br/>
                            배합한 마녀공장만의 레시피입니다<br/>
                            피부 장벽 강화를 돕는 비피다발효용해물과<br/>
                            건강한 피부 환경을 담은 마이크로바이옴의 배합<br/>
                            피부에 건강함과 쫀쫀한 탄력을 전할 수 있는 비결입니다</p>
                        </div>
                    </div>
                    <div className={styles.brand_about9}>
                        <div className={styles.brand_about9_textarea}>
                            <p className={styles.sub_num}>[02]</p>
                            <p className={styles.sub_title}>맑고 투명한 피부의 시작</p>
                            <p>경이로운 발견, 갈락토미세스</p>
                            <p>나이 든 주조사의 고운 손에서 발견된 효모<br/>
                            갈락토미세스발효여과물 속 비타민, 아미노산 등의 유효성분은<br/>
                            피부 본연의 빛과 결을 케어해줍니다<br/>
                            갈락토미 라인 제품으로 맑고 투명한 피부를 완성하세요</p>
                        </div>
                        <img src="/images/brand_about9.png" alt="brand_about9" />
                    </div>
                    <div className={styles.brand_about10}>
                        <img src="/images/brand_about10.png" alt="brand_about10" />
                        <div className={styles.brand_about10_textarea}>
                            <p className={styles.sub_num}>[03]</p>
                            <p className={styles.sub_title}>식물에서 찾은 땅김 없는 클렌징 비결</p>
                            <p>14가지 식물 유래 오일 레시피</p>
                            <p>아르간커넬오일, 돌콩오일 등 보습 효과가 있는<br/>
                            14가지 식물 유래 오일 레시피, 14가지 식물성 오일이<br/>
                            딥 클렌징 이후에도 피부가 촉촉하도록 수분 장벽을 지켜줍니다<br/>
                            퓨어 클렌징 오일로 메이크업, 블랙헤드는 씻어내고<br/>
                            딥 클렌징 이후에도 피부 수분은 지켜주세요</p>
                        </div>
                    </div>
                    <div className={styles.brand_about11}>
                        <h2>ma:nyo</h2>
                        <h3>as you wish, skin wizard</h3>
                    </div>
                </Tab>
                <Tab eventKey="contact" title="with ma:nyo  사회 공헌">
                    <div className={styles.brand_with1}>
                        <img src="/images/brand_with1.png" alt="brand_with1" />
                        <h2>miracle for the world</h2>
                        <h3>작은 실천이 우리의 세상에 가져올 기적을 믿습니다</h3>
                    </div>
                    <div className={styles.brand_with2}>
                        <h3>마녀공장과 함께 하는 당신의 삶이 보다 가치 있다고 느끼길 바랍니다.<br/>
                        우리가 살아가는 이 세상이 매일 조금씩 더 아름다워질 수 있도록</h3>
                        <h3>작지만 정직한 걸음을 멈추지 않겠습니다</h3>
                        <img src="/images/brand_with2.png" alt="brand_with2" />
                        <h3>마녀공장은 브랜드 설립 이후<br/>
                        ‘초록우산어린이재단’, ‘동물권 행동 카라’를 통해 어린아이는 물론<br/>
                        동물들에게 긍정적인 영향을 주기 위해 노력했습니다</h3>
                        <h3>이러한 노력의 일환으로 2022년부터는<br/>
                        월마다 작지만 의미 있는 실천들을 이어나가려 합니다</h3>
                    </div>
                    <div className={styles.brand_with3}>
                        <img src="/images/brand_with3.png" alt="brand_with3" />
                        <h2><span>monthly</span> CSR</h2>
                        <h3>매달 관심과 배려가 필요한 곳에 작은 실천을 전합니다<br/>
                        이웃, 취약계층, 동물, 사회, 자연, 지구…<br/>
                        우리를 둘러싼 세상의 아름다운 가치를 존중하고 배려하며,</h3>
                        <h3>미처 시선이 닿지 못한 곳은 없는지<br/>
                        매달 적극적으로 주위를 살피며 마음을 쏟겠습니다</h3>
                    </div>
                    <div className={styles.brand_with4}>
                        <h2>ma:nyo</h2>
                        <h3>as you wish, skin wizard</h3>
                    </div>
                </Tab>
            </Tabs>
        </div>
    )
}

export default BrandPage;
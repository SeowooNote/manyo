import React, { useState } from "react";
import { useTextState } from "../total_data";
import styles from "./total_page.module.css";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function Item({item}){
    return(
        <div className={styles.total_item} style={{opacity:item.sold_out? "0.5" : "1"}}>
            <img src={item.src} alt="{item.title}"/>
            <h1 style={{display:item.large_capacity? "block" : "none"}}>대용량</h1>
            <h2 style={{display:item.sold_out? "block" : "none"}}>sold out</h2>
            <h3>{item.title}</h3>
            <div>
                <h2 style={{textDecoration:item.discount_value? "line-through" : "none"}}>{item.price}</h2>
                <div>
                    <h4 style={{display:item.discount_value? "block" : "none"}}>{item.discount_price}</h4>
                    <span style={{display:item.discount_value? "block" : "none"}}>{item.discount_percent}</span>     
                </div>
            </div>
        </div>
    )
}

function TotalPage(){
    const items = useTextState();
    const [key, setKey] = useState('total');

    return(
        <div className={styles.container}>
            <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            className="mb-3"
            >
                <Tab eventKey="total" title="전체">
                    <div className={styles.container}>
                        <div className={styles.total_content}>
                            {items.map((item) =>(
                                <Item item={item} key={item.id}/>
                            ))}
                        </div>
                    </div>
                </Tab>
                <Tab eventKey="cleansing" title="클렌징 오일 & 폼">
                    <div className={styles.container}>
                        <div className={styles.total_content}>
                            {items
                                .filter(item => [2, 3, 4, 14, 16].includes(item.id))
                                .map((item) => (
                                    <Item item={item} key={item.id}/>
                                ))
                            }
                        </div>
                    </div>
                </Tab>
                <Tab eventKey="ample" title="엠플 & 에센스" className={styles.ample}>
                    <div className={styles.container}>
                        <div className={styles.total_content}>
                            {items
                                .filter(item => [1, 5, 15, 20].includes(item.id))
                                .map((item) => (
                                    <Item item={item} key={item.id}/>
                                ))
                            }
                        </div>
                    </div>
                </Tab>
                <Tab eventKey="suncream" title="썬크림" className={styles.suncream}>
                    <div className={styles.container}>
                        <div className={styles.total_content}>
                        {items
                            .filter(item => [6, 8, 18].includes(item.id))
                            .map((item) => (
                                <Item item={item} key={item.id}/>
                            ))
                        }
                        </div>
                    </div>
                </Tab>
                <Tab eventKey="tonner" title="토너">
                        <div className={styles.container}>
                            <div className={styles.total_content}>
                                {items
                                    .filter(item => [7].includes(item.id))
                                    .map((item) => (
                                        <Item item={item} key={item.id}/>
                                    ))
                                }
                            </div>
                        </div>
                </Tab>
                <Tab eventKey="pad" title="패드" className={styles.pad}>
                    <div className={styles.container}>
                        <div className={styles.total_content}>
                            {items
                                .filter(item => [9, 11, 13, 17].includes(item.id))
                                .map((item) => (
                                    <Item item={item} key={item.id}/>
                                ))
                            }
                        </div>
                    </div>
                </Tab>
                <Tab eventKey="lotion_cream" title="로션 & 크림" className={styles.lotion_cream}>
                    <div className={styles.container}>
                        <div className={styles.total_content}>
                            {items
                                .filter(item => [10, 12, 19].includes(item.id))
                                .map((item) => (
                                    <Item item={item} key={item.id}/>
                                ))
                            }
                        </div>
                    </div>
                </Tab>
            </Tabs>
        </div>
        
    );

        

}

export default TotalPage;
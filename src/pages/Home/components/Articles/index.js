import React from 'react';
import { List, Tag } from 'antd';
import styles from './index.module.less';
import ArticleListContent from '../ArticleListContent';
import {StarTwoTone, LikeOutlined,MessageFilled} from '@ant-design/icons';

const IconText = ({icon,text}) => (
    <span>
        {icon} {text}
    </span>
)


const Articles = ({list}) =>{
    return (
        <List
            size = "large"
            className = {styles.articleList}
            rowKey = "id"
            itemLayout = "vertical"
            dataSource = {list}   
            renderItem = {(item) => (
                <List.item
                    key = {item.id}
                    actions = {[
                    <IconText key = "star" icon  = {<StarTwoTone />} text = {item.star} />,
                    <IconText key = "like" icon  = {<LikeOutlined />} text = {item.like} />,
                    <IconText key = "message" icon  = {<MessageFilled />} text = {item.message} />
                    ]}
                >
                    <List.Item.Meta
                        title={
                            <a className={styles.listItemMetaTitle} href={item.href}>
                                {item.title}
                            </a>
                        }
                        description = {
                            <span>
                                <Tag>Ant Design</Tag>
                                <Tag>设计语言</Tag>
                                <Tag>蚂蚁金服</Tag>
                            </span>
                        }
                    />
                    <ArticleListContent data={item} />
                </List.item>
            )}
        />
    );
};

export default Articles;
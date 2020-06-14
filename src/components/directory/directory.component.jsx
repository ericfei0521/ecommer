import React from 'react';
import MenuItem from '../menu-item/menu-item.comoponent'
import './directory.style.scss'
class Directory extends React.Component {
    constructor() {
        super();

        this.state = {
            sections:[
                {
                    title: 'hats',
                    imageUrl: 'https://cf.shopee.tw/file/71628093df677fd1ae820c9d6e39f711',
                    id: 1,
                    linkUrl: 'shop/hats'
                },
                {
                    title: 'jackets',
                    imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                    id: 2,
                    linkUrl: 'shop/jackets'
                },
                {
                    title: 'sneakers',
                    imageUrl: 'https://sneakernews.com/wp-content/uploads/2020/02/best-selling-shoes-of-2019.jpg',
                    id: 3,
                    linkUrl: 'shop/sneakers'
                },
                {
                    title: 'womens',
                    imageUrl: 'https://www.beautimode.com/upload/media/54a345f96f43f5aeead098d33ed311fe.jpg',
                    size: 'large',
                    id: 4,
                    linkUrl: 'shop/womens'
                },
                {
                    title: 'mens',
                    imageUrl: 'https://www.uweekly.sg/wp-content/uploads/2016/06/20160701_RyuJunYeol_HH.jpg',
                    size: 'large',
                    id: 5,
                    linkUrl: 'shop/mens'
                }
            ]
        }
    }
    render() {
        return (
            <div className="directory-menu">
                {
                    this.state.sections.map(({id ,...sectionProps}) => (
                        <MenuItem key={id} {...sectionProps}/>
                    ))
                }
            </div>
        )
    }
}
export default Directory;
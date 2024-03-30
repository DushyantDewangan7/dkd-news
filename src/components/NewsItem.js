import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {
    let {title,description, imageUrl} = this.props;
    return (
      <div className='my-3'>
        <div className="card" >
            <img src={!imageUrl?"https://img.etimg.com/thumb/msid-108834413,width-1200,height-630,imgsize-31926,overlay-etmarkets/photo.jpg":imageUrl} className="card-img-top" alt="..."/>
                    <div className="card-body">
                 <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                 <a href="/newsdetail" className="btn btn-sm btn-dark">Go somewhere</a>
         </div>
    </div>
        </div>
    )
  }
}

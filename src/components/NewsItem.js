import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {
    let {title,description, imageUrl, articleUrl , author , date} = this.props;
    return (
      <div className='my-3'>
        <div className="card" >
            <img src={!imageUrl?"https://img.etimg.com/thumb/msid-108834413,width-1200,height-630,imgsize-31926,overlay-etmarkets/photo.jpg":imageUrl} className="card-img-top" alt="..."/>
                    <div className="card-body">
                 <h5 className="card-title">{title} <span class="badge bg-secondary">New</span></h5>
                <p className="card-text">{description}</p>
                <p className='card-text'><small className='text-muted'>By {!author?"Unknown" :author} on {new Date(date).toGMTString()} </small></p>
                 <a href={`${articleUrl}`} className="btn btn-sm btn-dark">Go somewhere</a>
         </div>
    </div>
        </div>
    )
  }
}

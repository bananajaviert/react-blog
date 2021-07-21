import Truncate from 'react-truncate'

import '../css/Post.css'

const Post = () => {
  return (
    <div className='post'>

      <img 
      className='post-image'
      src="https://keyframemagazine.org/wp-content/uploads/2021/02/Abelle-Hayford-2-scaled.jpg" alt="" 
      />

      <div className="post-info">
        <div className="post-categories">
          <span className='post-category'>Music</span>
          <span className='post-category'>Life</span>
        </div>
        <span className="post-title">
          Lorem ipsum dolor sit amet.
        </span>
        <hr />
        <span className="post-date">
          1 hour ago
        </span>
      </div>
      
      <Truncate
      lines={4} 
      ellipsis={
        <span>... <a href='/link/to/article' style={{color: 'steelblue', textDecoration: 'none'}}>Read more</a></span>
      }
      className='post-description'>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa, ullam molestiae! Placeat, impedit. Iusto laborum tempore ducimus officiis consequuntur hic fugiat nostrum nemo labore. Deleniti nesciunt minus quisquam hic laborum reprehenderit quae repellendus expedita? Et earum ab aliquam sint voluptatem, vero minima corrupti maxime illum porro ut voluptatibus atque odio.
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa, ullam molestiae! Placeat, impedit. Iusto laborum tempore ducimus officiis consequuntur hic fugiat nostrum nemo labore. Deleniti nesciunt minus quisquam hic laborum reprehenderit quae repellendus expedita? Et earum ab aliquam sint voluptatem, vero minima corrupti maxime illum porro ut voluptatibus atque odio.
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa, ullam molestiae! Placeat, impedit. Iusto laborum tempore ducimus officiis consequuntur hic fugiat nostrum nemo labore. Deleniti nesciunt minus quisquam hic laborum reprehenderit quae repellendus expedita? Et earum ab aliquam sint voluptatem, vero minima corrupti maxime illum porro ut voluptatibus atque odio.
      </Truncate>

    </div>
  )
}

export default Post

import '../css/SinglePost.css'

const SinglePost = () => {
  return (
    <div className='single-post'>
      <div className="single-post-wrapper">

        <img 
        src="https://keyframemagazine.org/wp-content/uploads/2021/02/Abelle-Hayford-2-scaled.jpg"
        alt=""/>

        <h1 className='single-post-title'>
          Lorem ipsum dolor sit amet.
          <div className="single-post-edit">
            <i className="single-post-icon far fa-edit"></i>
            <i className="single-post-icon far fa-trash-alt"></i>
          </div>
        </h1>

        <div className="single-post-info">
          <span className='single-post-author'>Author: <b>Marco</b></span>
          <span className='single-post-date'>1 hour ago</span>
        </div>
        <p className='single-post-description'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem dolor quidem, nemo similique at eligendi dolorem quia eaque repudiandae porro tempore cupiditate inventore eum unde sunt iste soluta odio optio. Voluptate praesentium atque illum sapiente laboriosam eius numquam magni blanditiis harum, exercitationem vel suscipit, esse iure maxime quis beatae quisquam!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem dolor quidem, nemo similique at eligendi dolorem quia eaque repudiandae porro tempore cupiditate inventore eum unde sunt iste soluta odio optio. Voluptate praesentium atque illum sapiente laboriosam eius numquam magni blanditiis harum, exercitationem vel suscipit, esse iure maxime quis beatae quisquam!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem dolor quidem, nemo similique at eligendi dolorem quia eaque repudiandae porro tempore cupiditate inventore eum unde sunt iste soluta odio optio. Voluptate praesentium atque illum sapiente laboriosam eius numquam magni blanditiis harum, exercitationem vel suscipit, esse iure maxime quis beatae quisquam!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem dolor quidem, nemo similique at eligendi dolorem quia eaque repudiandae porro tempore cupiditate inventore eum unde sunt iste soluta odio optio. Voluptate praesentium atque illum sapiente laboriosam eius numquam magni blanditiis harum, exercitationem vel suscipit, esse iure maxime quis beatae quisquam!
        </p>
      </div>
    </div>
  )
}

export default SinglePost

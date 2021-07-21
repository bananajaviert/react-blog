import "../css/Write.css"

const Write = () => {
  return (
    <div className='write'>

      <img
        className='write-image'
        src="https://keyframemagazine.org/wp-content/uploads/2021/02/Abelle-Hayford-2-scaled.jpg"
        alt="" />

      <form className='write-form'>
        <div className='write-form-group'>
          <label htmlFor='file-input'>
            <i className='write-icon fas fa-plus'></i>
          </label>

          <input
            type='file'
            id='file-input'
            style={{ display: "none" }} />

          <input
            type='text'
            placeholder='Title'
            className='write-input'
            autoFocus={true}
          />
        </div>

        <div className="write-form-group">
          <textarea
            type='text'
            placeholder='Tell your story...'
            className='write-input write-text'>
          </textarea>
        </div>
        <button className='write-submit'>Publish</button>
      </form>
    </div>
  )
}

export default Write

import { useRef, useState } from 'react'
import PropTypes from 'prop-types'

import { ImageConfig } from '../../config/index'
import uploadIcon from '../../assets/icons/uploadicon.svg'
import { Button } from '../../mentorComponents'

import './style.css'

const Upload = (props) => {
  const wrapperRef = useRef(null)

  const [fileList, setFileList] = useState([])

  const onDragEnter = () => wrapperRef.current.classList.add('dragover')

  const onDragLeave = () => wrapperRef.current.classList.remove('dragover')

  const onDrop = () => wrapperRef.current.classList.remove('dragover')

  const onFileDrop = (e) => {
    const newFile = e.target.files[0]
    if (newFile) {
      const updatedList = [...fileList, newFile]
      setFileList(updatedList)
      props.onFileChange(updatedList)
    }
  }

  const fileRemove = (file) => {
    const updatedList = [...fileList]
    updatedList.splice(fileList.indexOf(file), 1)
    setFileList(updatedList)
    props.onFileChange(updatedList)
  }

  return (
    <>
      <div
        ref={wrapperRef}
        className="upload_area mr-5"
        onDragEnter={onDragEnter}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
      >
        <img className="pt-5 text-center" src={uploadIcon} alt="" />

        <p className="mt-3 first">Drag & Drop</p>

        <p className="mt-3 last">Drag files or click here to upload</p>

        <input type="file" value="" onChange={onFileDrop} />

        <button className="assignment_upload mt-3">Upload Files</button>
      </div>
      {fileList.length > 0 ? (
        <div className="upload_preview">
          <p className="upload_preview_title mt-2">Ready to upload</p>
          {fileList.map((item, index) => (
            <div key={index} className="upload_preview_item mr-5">
              <img
                src={
                  ImageConfig[item.type.split('/')[1]] || ImageConfig['default']
                }
                alt=""
              />
              <div className="upload_preview_item_info">
                <p>{item.name}</p>
                <p>{item.size}bytes</p>
              </div>
              <span
                className="upload_preview_item_del"
                onClick={() => fileRemove(item)}
              >
                x
              </span>
            </div>
          ))}
        </div>
      ) : null}
    </>
  )
}

Upload.propTypes = {
  onFileChange: PropTypes.func,
}

export default Upload

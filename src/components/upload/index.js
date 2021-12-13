import { useRef, useState } from 'react'
import PropTypes from 'prop-types'

import { ImageConfig } from '../../config/index'
import uploadIcon from '../../assets/uploadicon.svg'
import { AddCircleOutline } from '@material-ui/icons'
import { Button } from '../../components'

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
        <img className="ml-5" src={uploadIcon} alt="" />

        <p className="ml-3 mt-3">You can also drag and drop your file here</p>

        <input type="file" value="" onChange={onFileDrop} />

        <Button className="btn-upload" style={{ background: '#787AFF' }}>
          <AddCircleOutline className="pr-1" />
          Upload
        </Button>
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

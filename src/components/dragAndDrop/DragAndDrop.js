import React from 'react';
import './drop.css';

function DragDropFile({ setFiles, image, index }) {
  // drag state
  const [dragActive, setDragActive] = React.useState(false);

  // ref
  const inputRef = React.useRef(null);

  // handle drag events
  const handleDrag = function (e) {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  // triggers when file is dropped
  const handleDrop = function (e) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFiles(e.dataTransfer.files[0], index);
    }
  };

  // triggers when file is selected with click
  const handleChange = function (e) {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      setFiles(e.target.files[0], index);
    }
  };

  // triggers the input when the button is clicked
  const onButtonClick = (e) => {
    e.preventDefault();
    inputRef.current.click();
  };

  return (
    <div
      id='form-file-upload'
      onDragEnter={handleDrag}
      onSubmit={(e) => e.preventDefault()}
      style={{ backgroundImage: `url(${image})` }}
    >
      <input
        ref={inputRef}
        type='file'
        id='input-file-upload'
        multiple={true}
        onChange={handleChange}
      />
      <label
        id='label-file-upload'
        htmlFor='input-file-upload'
        className={dragActive ? 'drag-active' : ''}
      >
        <div className='drag'>
          <p>Drag and drop your file here or</p>
          <button className='upload-button' onClick={onButtonClick}>
            Upload a file
          </button>
        </div>
        {image && (
          <img
            className='image'
            src={image}
            alt='image'
            height={70}
            width={70}
          />
        )}
      </label>

      {dragActive && (
        <div
          id='drag-file-element'
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        ></div>
      )}
    </div>
  );
}

export default DragDropFile;

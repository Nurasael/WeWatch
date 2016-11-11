import React from 'react'
import Modal from 'react-modal'
const AddVideoModal = (props) => {
  return (
    <Modal isOpen={props.modalIsOpen} onRequestClose={() => props.onRequestClose()}>
      <div>
        <input type="text" onChange={ event => props.handleVideoSearchChange(event.target.value)} value={props.selectedVideo}/>
        <button type="button" onClick={() => props.selectVideo()}>Add Video</button>
      </div>
    </Modal>
  )
}

export default AddVideoModal

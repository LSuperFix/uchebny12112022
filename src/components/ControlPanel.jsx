import { useState } from "react"
import AddForm from "./AddForm"
import Modal from "./UI/Modal"
import MyButton from "./UI/MyButton"

const ControlPanel = () => {
  const [modalActive, setModalActive] = useState('modal')
  const modalActivation = () => {
    setModalActive('modal active')
  }
  return(
    <div>
      <MyButton onClick = {modalActivation}>Добавить задание</MyButton>
      <Modal modalActive = {modalActive}>
        <AddForm />
      </Modal>
    </div>
  )
}

export default ControlPanel
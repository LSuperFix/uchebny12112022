//В компоненте все фильтры сообщенний и кнопка добавления сообщения
import { useState } from "react"
import AddForm from "./AddForm"
import Modal from "./UI/Modal"
import MyButton from "./UI/MyButton"

const ControlPanel = ({addNewMassageInBase}) => {
  const [modalActive, setModalActive] = useState('modal')//открыто или закрыто модальное окно

  const modalActivation = () => {
    setModalActive('modal active')
  }
  const modalPacivation = () => {
    setModalActive('modal')
  }

  return(
    <div>
      <MyButton onClick = {modalActivation}>Добавить задание</MyButton>
      <Modal modalActive = {modalActive} modalPacivation = {modalPacivation}>
        <AddForm setModalActive = {setModalActive} addNewMassageInBase = {addNewMassageInBase}/>
      </Modal>
    </div>
  )
}

export default ControlPanel
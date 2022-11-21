//Модальное окно в которое вставляем форму добавления сообщения
const Modal = ({modalActive, modalPacivation, children}) => {
  const dontDisappearForm = (event) => {
    event.stopPropagation()
  } 
  return(
    <div onClick = {modalPacivation} className  = {modalActive}>
      <div onClick = {dontDisappearForm} className="modal__body">
        {children}
      </div>
    </div>
  )
}

export default Modal
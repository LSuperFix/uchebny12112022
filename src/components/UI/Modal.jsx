
const Modal = ({modalActive, children}) => {

  return(
    <div className={modalActive}>
      <div className="modal__body">
        {children}
      </div>
    </div>
  )
}

export default Modal
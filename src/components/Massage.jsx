//Компонент отдельного сообщения
import MyButton from "./UI/MyButton"

const Massage = ({massage, number, delateMassage}) => {
  const delateMassageById = () => {
    delateMassage(massage.id)
  }
  return(
    <div className="massage-conteyner">
      <div className="massage-conteyner__textblock">
        <p className="massage-conteyner__title">{number}. {massage.title}</p>
        <p className="massage-conteyner__text">{massage.text}</p>
      </div>
      <MyButton onClick = {delateMassageById}>Удалить</MyButton>
    </div>
  )
}
export default Massage
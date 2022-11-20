import MyButton from "./UI/MyButton"

const Massage = ({massage, number}) => {
  return(
    <div className="massage-conteyner">
      <div className="massage-conteyner__textblock">
        <p className="massage-conteyner__title">{number}. {massage.title}</p>
        <p className="massage-conteyner__text">{massage.text}</p>
      </div>
      <MyButton>Удалить</MyButton>
    </div>
  )
}
export default Massage
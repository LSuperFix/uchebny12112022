//Блок с сообщениями
import ControlPanel from "./ControlPanel"
import Massage from "./Massage"

const Massageblock = ({massages}) => {
  return(
    <div>
      <div className="bassageblock">
        <ControlPanel />
        <h1>Список Покупок</h1>
        {massages.map((massage, i) => (
        <Massage key={massage.id} massage = {massage} number = {i + 1} />
      ))}
      </div>
    </div>
  )
}
export default Massageblock
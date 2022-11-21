//Блок с сообщениями
import ControlPanel from "./ControlPanel"
import Massage from "./Massage"

const Massageblock = ({massages, setMassages}) => {
  const addNewMassageInBase = (newMassage) => {
    setMassages([...massages, newMassage])
  }
  const delateMassage = (delMasId) => { //удаляем сообщение по нажатия кнопки удалить по ID сообщения
    setMassages(massages.filter((massage) => massage.id !== delMasId))
  }
  return(
    <div>
      <div className="bassageblock">
        <ControlPanel addNewMassageInBase = {addNewMassageInBase} />
        {massages.length ? <h1>Список заданий</h1>: <h1>Заданий пока нет</h1>}
        {massages.map((massage, i) => (
          <Massage key={massage.id} massage = {massage} number = {i + 1} delateMassage = {delateMassage}/>
        ))}
      </div>
    </div>
  )
}
export default Massageblock
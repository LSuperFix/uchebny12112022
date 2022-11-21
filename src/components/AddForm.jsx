import MyButton from "./UI/MyButton"
import MyInput from "./UI/MyInput"
import { useState } from "react"

const AddForm = ({addNewMassageInBase, setModalActive}) => {
  const [newMassage, setNewMassage] = useState({
    id:"", 
    title:"", 
    text:""
  })
  const newMassageAdd = () => {
    let dateId = Date.now()
    setNewMassage({...newMassage, id: dateId})
    console.log(newMassage)
    addNewMassageInBase(newMassage)//передаем сформированное сообщение для записи в базу
    setModalActive('modal')
  }

  return(
    <div>
        <MyInput value = {newMassage.title} onChange = {(e) => setNewMassage({...newMassage, title: e.target.value})} placeholder = "Тема"/>      
        <MyInput value = {newMassage.text} onChange = {(e) => setNewMassage({...newMassage, text: e.target.value})} placeholder = "Сообщение"/>
        <MyButton onClick = {newMassageAdd} >Создать сообщение</MyButton>
    </div>
  )
}

export default AddForm
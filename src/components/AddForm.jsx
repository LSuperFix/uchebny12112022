import MyButton from "./UI/MyButton"
import MyInput from "./UI/MyInput"

const AddForm = () => {
  return(
    <div>
        <MyInput placeholder = "Тема"/>
        <MyInput placeholder = "Сообщение"/>
        <MyButton >Создать сообщение</MyButton>
    </div>
  )
}

export default AddForm
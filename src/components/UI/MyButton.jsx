const MyButton = ({children, ...props}) => {
  return(
    <div>
      <button className="my-button " {...props}>
        {children}
      </button>
    </div>
  )
}
export default MyButton
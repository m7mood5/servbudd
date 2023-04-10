import style from "../styles/Btn.module.css"

export default function Btn({children}) {
  return(
    <>
        <button className={style.sbutton}>
          {children}
        </button>
      
    </>
  )
}

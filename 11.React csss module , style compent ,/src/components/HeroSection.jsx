
import style from './HeroSection.module.css'
export default function HeroSection() {
  return (
    <>
         <div  className={style['main-hero']}>
           <div className={style.text}>
            <h3>Aoa Everyone my name is Muhammad Junaid hassan.</h3>
            <p>I am a Full an passonoate Ful Stack web Developer</p>
           </div>
           <div className={style.image}>
            <img style={{borderRadius:"40%"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQgcKobBFPpq4cwbSe6AlJ1gp23tMY3E3sGw&s" alt="" />
           </div>
         </div>
    </>
  )
}

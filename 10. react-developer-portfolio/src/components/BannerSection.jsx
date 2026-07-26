import '../BannerSection.css'
export default function BannerSection() {
   
  return (
    <>

     <div  className="main-banner">
         <h2 style={{textAlign:"center"}}>My Project </h2>
          <div className="banner-Cards">
              {/* //card 1  */}
                <div className="card1">
                     <h3>View Project</h3>
                     <p>Plz View My project and  Give me Rating </p>
                </div>
                <div className="card2">
                     <h3>View Project</h3>
                     <p>Plz View My project and  Give me Rating </p>
                </div>
                <div  className="card3">
                     <h3>View Project</h3>
                     <p>Plz View My project and  Give me Rating </p>
                </div>
          </div>
     </div>
      
    </>
  )
}

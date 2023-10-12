import pic1 from '../../assets/images/welcome-hero/3439731.png'
import pic2 from '../../assets/images/welcome-hero/846329.png'
import pic3 from '../../assets/images/welcome-hero/1743700.png'
import './style.scss'
const Service =()=>{

   let  service_list =[
        {
            name:"Largest Dealership of Car",
            image:pic1,
            description:'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut den fugit sed quia.'
        },
        {
            name:"Largest Dealership of Car",
            image:pic2,
            description:'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut den fugit sed quia.'
        },
        {
            name:"Largest Dealership of Car",
            image:pic3,
            description:'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut den fugit sed quia.'
        }
    ]

    return(
        <div className="service-container">
            {
               service_list.map((el)=>{
                return(
                    <div className='servic'>
                        <img src={el.image} alt="" />
                        <h3>{el.name}</h3>
                        <p>{el.description}</p>
                        <div className='line'></div>
                    </div>
                )
               }) 
            }
        </div>
    )
}

export default Service
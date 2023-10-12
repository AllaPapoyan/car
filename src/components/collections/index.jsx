import './style.scss'
import { useState } from 'react'
import img1 from  '../../assets/images/featured-cars/fc1.png'
import img2 from  '../../assets/images/featured-cars/fc2.png'
import img3 from  '../../assets/images/featured-cars/fc3.png'
import img4 from  '../../assets/images/featured-cars/fc4.png'
import img5 from  '../../assets/images/featured-cars/audi-r8.png'
import img6 from  '../../assets/images/featured-cars/11528.jpg'
import img7 from  '../../assets/images/featured-cars/bmw-m8coupe.jpg'
import img8 from  '../../assets/images/featured-cars/fc8.png'
const Collections=()=>{
    let arr = [
        {
            id: 1,
            Image: img1,
            title: "BMW 6-Series Gran Coupe",
            desc: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non.",
            price: "$89,395",
            type:"bmw",
           

        },

        {
            id: 2,
            Image: img2,
            title: "Chevrolet Camaro WMV20",
            desc: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non",
            price: "$66,575",
            type: "chevrolet",
        
        },

        {
            id: 3,
            Image: img3,
            title: "Lamborghini V520",
            desc: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non",
            price: "$125,250",
            type: "lamba",
            
           
           
        },

        {
            id: 4,
            Image: img4,
            title: "Audi A3 Sedan",
            desc: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non.",
            price: "$95,500",
            type: "audi",
          
            
        },
        
        {
            id: 5,
            Image: img5,
            title: "Audi R8",
            desc: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non.",
            price: "$95,500",
            type: "audi",
          
            
        },

        {
            id: 6,
            Image: img6,
            title: "Lamborghini Aventador",
            desc: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non.",
            price: "$195,500",
            type: "lamba",
          
            
        },
        {
            id: 7,
            Image: img7,
            title: "BMW М8 Coupe",
            desc: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non.",
            price: "$166,767",
            type: "bmw",
          
            
        },
        {
            id: 8,
            Image: img8,
            title: "Audi A3 Sedan",
            desc: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non.",
            price: "$95,500",
            type: "bmw",
          
            
        },

       
    ]
    let [data, setData] = useState(arr)
    let [buttons, setButtons] = useState([])

    let filter = (type) => {
        if(type==="" ){
            setData(arr)
            return
        }
        
        let x = arr.filter((par) => {
            return par.type.includes(type)
        }).reverse()

        setData(x)
    }
    return(
        <section className='section2'>

            <div className="title-part">
                <p>Checkout the Featured Cars</p>
                <h2>Featured Cars</h2>
                <div className="line"></div>
            </div>
             <div className='buttons'>
             <button className='btn0' button={buttons}
                    onClick={()=>{
                        filter("")
                    }}

                >All</button>
                <button className='btn0' button={buttons}
                    onClick={()=>{
                        filter("bmw")
                    }}

                >BMW</button>

                 <button className='btn0' button={buttons}
                    onClick={()=>{
                        filter("audi")
                    }}
                   
                >Audi</button>
                <button className='btn0'  button={buttons}
                    onClick={()=>{
                        filter("chevrolet")
                    }}> Chevrolet</button>

                <button className='btn0'  button={buttons}
                    onClick={()=>{
                        filter("lamba")
                    }}>Lamborghini </button>
            </div>
            <div className='Gal'>

                {
                    data.map((par) => {
                        return (
                            <div className='product' key={par.id}>

                               <div className='imggg'><img src={par.Image}  alt='hjkl'></img></div>
                                <h4 className='product-name'>{par.title}</h4>
                                <p className='ingrediets'>{par.desc}</p>
                                <p className='price'>{par.price}</p>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}
export default Collections
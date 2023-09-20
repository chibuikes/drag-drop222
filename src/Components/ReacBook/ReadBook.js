import React ,{useState}from 'react'
import classes from  './ReadBook.module.css'
// import {DragSource , DropTarget} from 'react-dnd'
import Card from '../Card/Card'
import { Link } from 'react-router-dom'
import search from './Search.svg'
import img1 from './AMERICA_Book_14x11_Hardcover_Angled_1d16f3f6-cda1-4d10-908a-990e06e869aa_720x.jpg'
import img2 from './1 (1).jpg'
import img3 from './1 (2).jpg'
import img4 from './1.jpg'
import img5 from './Book-of-Banned-Books-Front-Cover-scaled-768x1003.jpg'
import img6 from './Choose-to-Change.png'
import img7 from './DannyLeeJohnsonStoutBookFC.webp'
import img8 from './endless_summer_beauty_surf-art-alders-web4.jpg'
import img9 from './Frida-Kahlo-The-Complete-Paintings.jpeg'
import img10 from './Gibson-LOTB-Cover-with-awards.png'
import img11 from './Hilborn-TF-Cover-with-badge.jpg'
import img12 from './Ice-Cold-a-Hip-Hop-Jewerly-History.jpeg'
import img13 from './Kaur-MAH-cover.jpg'
import img14 from './Singer-FYTT-marketing-cover-673x1024.png'
import img15 from './YBBL-Award-Cover-1.png'
import img16 from './focal_press_9780415722902_book_photography_and_its_1423495224_1114027.jpg'
import img17 from './focal_press_9780815369783_the_insiders_guide_to_1679498483_1758422.jpg'
import img18 from './focal_press_978_0_240_82517_5_book_video_shooter_mastering_1390826142_1026000.jpg'
import img19 from './rocky_nook_9781681988153_the_complete_guide_to_1672221666_1742321.jpg'
import {DndContext,closestCenter } from '@dnd-kit/core'
import {arrayMove, SortableContext, verticalListSortingStrategy} from '@dnd-kit/sortable'

import logo from './logo.svg'
const ReadBook=()=>{
    const [val,setVal]= useState('')
  
   const arr=[{image:`${img1}`,title:'the america monolith'},
   {image:`${img2}`,title:'Children world encyclopedia'},{image:`${img3}`,title:'atomic habits'},{image:`${img4}`,title:'How to win Friends $ influence people'},{image:`${img5}`,title:'A book of banned books'},{image:`${img6}`,title:'Choose to change'},
   {image:`${img7}`,title:'Danny Lee Johnson Stout Book'},{image:`${img8}`,title:'endless summer beauty surf'},{image:`${img9}`,title:'Frida Kahlo The Complete Paintings'},{image:`${img10}`,title:'lord of the butterflies'},
   {image:`${img11}`,title:'the future'},{image:`${img12}`,title:'ice cold'},{image:`${img13}`,title:'milk and honey'}, {image:`${img14}`,title:'forgive yourself'},
   {image:`${img15}`,title:'you better be lightning '}, {image:`${img16}`,title:'photography and its origin'},{image:`${img17}`,title:'The inside guide to factual filmmaking'},{image:`${img18}`,title:'Video shooter'},{image:`${img19}`,title:'Food photography'},
]
const dragEnd=(e)=>{
  const {active, over}=e
  console.log(active.id, over.id)
  if(active.id!== over.id){
    setBooks((items)=>{
      const actIndex=items.indexOf(active.id)
      const overIndex=items.indexOf(over.id)
    return arrayMove(items, actIndex,overIndex)
    })

  }

 }
const titles= arr.map((data)=>{return data.title})
const [books, setBooks]= useState([...arr])

const Change=(e)=>{
    setVal(e.target.value)
    if(e.target.value===''){
        const  movie2= arr.map((data, index)=>{
          return data
        
             })
             setBooks(()=>{
              return [...movie2]
             })
      }
  
   }
   const Search=()=>{
    console.log(titles)
    const mam=titles.map((data)=>{
        if(data.toLowerCase().indexOf(val.toLowerCase())>=0){
          console.log(data)
          return data
        }
    })
    const filter1=arr.filter((data)=>{return mam.indexOf(data.title)>=0 })
  console.log(filter1)

     setBooks(()=>{return [...filter1]})

}

    return <React.Fragment>
        <header className={classes.header}>
         
          <nav className={classes.nav2}>
        <div> <img src={logo} alt='logo' className={classes.img11}/></div>
        <div className={classes.nav1}>
        <Link to='/login' className={classes.a1}> Login</Link>
        <Link to=''  className={classes.a1}>Home</Link>
        </div>
       
    </nav>
            <div className={classes.div2}>
                <h1 className={classes.h1}>Welcome back!</h1>
                <p className={classes.p1}>Here's a list of all your favorite books that you have read on our app. You can utilise the search feature we recently incoporated to our design. Thank you and welcome once again.</p>
            </div>
            <div className={classes.div1}>
<input type='text'  onChange={Change} value={val} placeholder='What do you want to read again?' className={classes.input}/>
<img src={search} alt='search'  onClick={Search}  className={classes.img2}/>
</div>
        </header>






     <main className={classes.main}>
      <DndContext collisionDetection={closestCenter} onDragEnd={dragEnd}> 

<SortableContext
items={books}
strategy={verticalListSortingStrategy}
>

        {books.length?books.map((data , index)=>{
            return   <Card key={index} id={data} title={data.title} image={data.image}/>
        
        }):<p className={classes.nof}>No Books Found</p>}
</SortableContext>

      </DndContext>
        
        </main>
     

   
        </React.Fragment>
}
export default ReadBook
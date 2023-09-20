import React from "react";
import classes from './Card.module.css'
import {  useSortable} from '@dnd-kit/sortable'
import {CSS} from '@dnd-kit/utilities'

const Card=(data)=>{
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition
        }=useSortable({id:data.id})


        const style={
            transform:CSS.Transform.toString(transform),
            transition
        }
    return <React.Fragment>
<div  className={classes.div} ref={setNodeRef} style={style} {...attributes} {...listeners}>
            <img src={data.image} className={classes.img1} alt={`${data.title}`}/>
    
            <p  className={classes.title}> {data.title} </p>
    
        </div>
    </React.Fragment>
}
export default Card
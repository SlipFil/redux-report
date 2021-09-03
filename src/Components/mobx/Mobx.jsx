import React from 'react'
import Count from '../../mobx/countStore.js'
import {Button} from 'react-bootstrap'
import {observer} from 'mobx-react'

const Mobx = observer(() => {
    return (
        <div>
            {'count = ' + Count.count}
            <br/>
            <Button onClick={()=>{Count.increment()}} >Добавить</Button> {''}
            <Button onClick={()=>{Count.decrement()}} >Отнять</Button>
            
        </div>
    )
}) 

export default Mobx

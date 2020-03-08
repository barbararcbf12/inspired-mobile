import React from 'react'
import styled from 'styled-components'
import { ListItem } from './List'

const StyledItem = styled.div`
    border-radius: 24px;
    padding: 5px 10px;
    font-size: 16px;
    color: #fff;
    margin: 1rem;
    width: auto;
`

type Props = {
    list: ListItem[],
    item: ListItem,
    drawnNameIndex: number | null
}

function Item(props: Props){
    const { list, item, drawnNameIndex } = props
    return <StyledItem style={{background: `${drawnNameIndex!==null && list[drawnNameIndex].value === item.value ? "#33aa33" : "#282c34"}`}}>{item.value}</StyledItem>
}

export default Item


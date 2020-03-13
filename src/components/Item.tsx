import React from 'react'
import styled from 'styled-components'
import { ListItem } from './List'

const StyledItem = styled("div")<Props>`
    background: ${ ({ list, item, drawnNameIndex }) => drawnNameIndex!==null && list[drawnNameIndex].value === item.value ? `#33aa33` : `#282c34`};
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
    return <StyledItem list={list} item={item} drawnNameIndex={drawnNameIndex}>{item.value}</StyledItem>
}

export default Item

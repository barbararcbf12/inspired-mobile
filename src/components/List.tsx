import React, { useRef, useState } from 'react'
import Item from './Item'
import styled from 'styled-components'
import { Box, Button, Grid, IconButton, Input, Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import DeleteIcon from '@material-ui/icons/HighlightOff'
import AddIcon from '@material-ui/icons/AddCircleOutline'

const StyledIcon = withStyles({
    root: {
        top: '26px',
        right: '35px',
        borderRadius: '50%',
        color: '#fff',
        position: 'relative',
    }
})(DeleteIcon)

const StyledIconButton = withStyles({
    root: {
        position: 'absolute',
        top: '-14px',
        right: '-23px',
        backgroundColor: 'transparent',
        '&:hover': {
            background: 'transparent',
        }
    },
    label: {
    },
})(IconButton)

const WrapperList = withStyles({
    root:{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        borderTop: '1px solid #ccc',
        marginTop: '2rem',
    }
})(Box)

const ContainerInput = withStyles({
    root:{
        display: 'flex',
        width: '50%',
        minWidth: '360px',
        borderRadius: '24px',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '10px auto 20px auto',
    }
})(Box)

const ContainerPickNumber = withStyles({
    root:{
        display: 'flex',
        width: '50%',
        minWidth: '360px',
        borderRadius: '24px',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '35px auto',
        border: '1px solid #ccc',
        position: 'relative',
        height: '70px',
    }
})(Box)

const WrapperInputAndButton = withStyles({
    root:{
        background: 'transparent',
        display: 'flex',
        border: '2px solid #282c34',
        boxShadow: 'none',
        width: '100%',
        borderRadius: '24px',
        zIndex: 3,
        margin: '10px auto 2px auto',
    }
})(Box)

const StyledInput = withStyles({
    root:{
        backgroundColor: 'transparent',
        border: 'none',
        margin: '2px 0 0 10px',
        padding: '6px 20px 0 20px',
        wordWrap: 'break-word',
        outline: 'none',
        display: 'flex',
        flex: '100%',
        height: '34px',
        fontSize: '16px',
        color: '#282c34'
    },

})(Input)

const StyledButton = withStyles({
    root:{
        background: '#282c34',
        borderRadius: '24px',
        padding: '5px 30px',
        fontSize: '16px',
        color: '#fff',
        minWidth: '110px',
        '&:hover': {
            background: '#666',
        }
    }
})(Button)

const DrawButton = withStyles({
    root:{
        background: '#282c34',
        borderRadius: '24px',
        padding: '5px 30px',
        fontSize: '16px',
        color: '#fff',
        minWidth: '64px',
        top: '-20px',
        '&:hover': {
            background: '#666',
        }
    }
})(Button)

const StyledMessage = withStyles({
    root:{
        fontSize: '15px',
        color: '#ff0000',
        height: '15px',
    }
})(Typography)

const DrawTypography = styled.h1`
    margin: -17px 0;
    color: #33aa33;
`


export type ListItem = {
    id: number,
    value: string
}

function List(){
    const refInput = useRef<HTMLInputElement | null>(null)
    const [inputValue, setInputValue] = useState<string>('')
    const [list, setItemToList] = useState<ListItem[]>([])
    const [isInputValid, setIputValid] = useState<string>('')
    const [pickedIndex, setPickedIndex] = useState<number | null>(null)

    function handleFocus(){
        if(refInput && refInput.current){
            refInput.current.focus()
        }
    }

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault()
        setIputValid('')
        setInputValue(event.target.value)
    }

    const addItem = () => {
        if(inputValue !== '') {
            //Check if name is already in the list
            const repeatedItems = list.filter(item => {
                if(item.value === inputValue) return item
                return null
            })
            //If name is in the list, the msg below is displayed
            if(repeatedItems.length !== 0) {
                setIputValid("You have already added this name. Try another one!")
            }
            //If NOT in the list, name is added to it
            else{
                setItemToList([ ...list, {
                    id: list.length,
                    value: inputValue
                }])
                setInputValue('')
                setPickedIndex(null)
                handleFocus()
            }
        }else{
            //If user didn't type anything in the input field, the msg below is displayed
            setIputValid("You forgot to type a name!")
        }
    }

    const removeItem = (itemId: number) => {
        setItemToList(list.filter(item => item.id !== itemId))
        handleFocus()
        setPickedIndex(null)
    }
    
    //Add name to list on press "Entey" key on keyboard
    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if(event.key === 'Enter'){
            addItem()
        }
    }

    function pickRandomNumber() {
        setItemToList(list)
        const min: number = 0
        const max: number = list.length
        const randomNumber: number = Math.floor(min + Math.random() * (max - min))
        return randomNumber
    }
    
    const drawRandomName = () => {
        //Get a random number
        const randomNumber = pickRandomNumber()
        //Only allows to draw a random name if list has at least 2 items
        if(pickedIndex === null && list.length > 1) {
            setPickedIndex(randomNumber)
        }
        //Make sure that same item is not drawn twice in a row
        else if(pickedIndex !== null && list[pickedIndex].id !== list[randomNumber].id) {
            setPickedIndex(randomNumber)
        //If same item is randomly drawn, draw again
        }else{
            drawRandomName()
        }
    }
    
    return(
        <main>
            <ContainerInput>
                <WrapperInputAndButton>
                    <StyledInput
                        type="text"
                        placeholder="Type a name to add to the list..."
                        onChange={handleOnChange}
                        value= {inputValue}
                        ref={refInput}
                        onKeyPress={handleKeyPress}
                    />
                    <StyledButton
                        variant="contained"
                        color="primary"
                        onClick={addItem}
                        endIcon={<AddIcon />}
                    >
                        Add
                    </StyledButton>
                </WrapperInputAndButton>
                <StyledMessage>{isInputValid}</StyledMessage> 
            </ContainerInput>

            <ContainerPickNumber>
                <DrawButton onClick={drawRandomName} disabled={ list.length > 1 ? false : true } style={{background: `${list.length > 1 ? "#282c34" : "#ccc" }`}}>DRAW A NAME</DrawButton>
                <DrawTypography >{pickedIndex !== null && list[pickedIndex] && list.length > 0 && (list[pickedIndex].value)}</DrawTypography>
            </ContainerPickNumber>

            <WrapperList>
                <Typography variant="h4">Your list of names</Typography>
                <Grid container spacing={2}>
                    { list.map( item => {
                        return(
                            <Grid item xs={6} sm={2} key={item.id + item.value} style={{position: "relative"}}>
                                <Item list={list} item={item} drawnNameIndex={pickedIndex} />
                                <StyledIconButton 
                                    color="secondary" 
                                    aria-label="add an alarm"
                                    onClick={() => removeItem(item.id)}
                                >
                                    <StyledIcon />
                                </StyledIconButton>
                            </Grid>
                        )
                    } ) }
                </Grid>
            </WrapperList>
        </main>
    )
}

export default List
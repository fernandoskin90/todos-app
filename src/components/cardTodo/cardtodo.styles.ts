import styled from '@emotion/styled'
import { ListItem, ListItemText } from '@mui/material/'
import CheckIcon from '@mui/icons-material/Check'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'

interface TextProps {
  completed: boolean | undefined
}

export const Todo = styled(ListItem)`
  box-sizing: border-box;
  height: 90px;
  width: 70%;
  background-color: #fff;
`

export const TodoText = styled(ListItemText)<TextProps>`
  .css-10hburv-MuiTypography-root {
    font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
    line-height: 24px;
    font-weight: 400;
    text-decoration: ${(props) => (props.completed ? 'line-through' : 'none')};
  }
`

export const ActionsTodo = styled.div`
  height: 100%;
  width: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`

export const CheckButton = styled(CheckIcon)`
  color: #8ddb9f;
  cursor: pointer;
`

export const TrashButton = styled(DeleteOutlineIcon)`
  color: #ff5353;
  cursor: pointer;
`

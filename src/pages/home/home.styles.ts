import styled from '@emotion/styled'
import { Button, Container, List } from '@mui/material'

export const ContainerHome = styled(Container)`
  box-sizing: border-box;
  margin: 0;
  height: calc(100% - 100px);
  display: flex;
  flex-direction: column;
  background-color: #f4f4f4;
`

export const HomeTitle = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
`

export const ButtonNewTodo = styled(Button)`
  background-color: #ff5353;
  color: #fff;
  font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
  line-height: 24px;
  font-weight: 600;
  &:hover {
    /* background-color: rgba(255, 100, 83, 0.5); */
    background-color: #ffa7a7;
    color: #fff;
  }
`

export const ListItems = styled(List)`
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 15px;
`

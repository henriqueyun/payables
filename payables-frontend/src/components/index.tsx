import styled from "styled-components"

// TODO: change styles to refer theme styles
export const FormMain = styled.main`
  display: flex;
  flex-flow: column wrap;
  gap: 16px;
  height: 600px;
  min-width: 600px;
  align-items: center;
  justify-content: center;
  background-color: white;
  box-shadow 0 0 4px rgba(0,0,0, 0.2);
  border-radius: 4px;
  @media (max-width: 600px) {
    min-width: 350px;
  }
`

export const FormFieldSpan = styled.span`
  display: flex;
  flex-flow: column wrap;
  gap: 8px;
  width: 100%;
  padding: 0 30%;
`

export const Title = styled.h1`
  font-size: 36px;
  margin: 24px 0;
  font-weight: 800;
`

export const Subtitle = styled.h2`
  font-size: 24px;
  font-weight: 700;
  margin: 8px 0;
`

export const AppMain = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`

export const List = styled.ul`
  display: flex;
  height: 600px;
  min-width: 600px;
  gap: 32px;
  flex-flow: column nowrap;
  overflow-y: scroll;
  border-radius: 5px;
  padding: 16px;
  background-color: white;
  box-shadow: 0 4px 4px rgba(0,0,0,.2);
`

export const ListItem = styled.li`
  display: flex;
  flex-flow: column;
  gap: 16px;
  padding: 16px;
  margin: 0 auto;
  width: 90%;
`

export const ListItemActions = styled.span`
  display: flex;
  padding-top: 8px;
  gap: 8px;
  justify-content: end;
  font-weight: 600;
`

export const FormActions = styled.span`
  display: flex;
  padding-top: 8px;
  gap: 20px;
  font-weight: 500;
  justify-content: center;
`

export const FormButton = styled.button`
  background: #0a36b0d9;
  border: none;
  color: white;
  padding: 4px 16px;
  border-radius: 4px;
  border: 2px solid transparent;

  &:hover {
    color: lightgreen;
    cursor: pointer;
  }
  &:active {
    border-radius: 2px;
    border-color: lightgray;
  }
`

export const ListItemButton = FormButton

export const Button = styled.button`
  background: #0a36b0d9;
  border: none;
  color: white;
  padding: 12px 64px;
  font-weight: 600;
  border-radius: 4px;
  border: 2px solid transparent;

  &:hover {
    color: lightgreen;
    cursor: pointer;
  }
  &:active {
    border-radius: 2px;
    border-color: lightgray;
  }
`

export const ListDivider = styled.div`
  width: 100%;
  height: 2px;
  background-color: #0a36b0d9;
  display: inline;
`


export const BlankListItem = styled.li`
  display: flex;
  justify-content: center;
`


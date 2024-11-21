import styled from "styled-components"

// TODO: change styles to refer theme styles
export const FormMain = styled.main`
  display: flex;
  flex-flow: column wrap;
  gap: 16px;
  height: 600px;
  width: 600px;
  align-items: center;
  justify-content: center;
  border: 4px solid #0a36b0d9;
  border-radius: 4px;
`
export const FormFieldSpan = styled.span`
  display: flex;
  flex-flow: column wrap;
  gap: 8px;
  width: 300px;
`


export const Title = styled.h1`
  font-size: 36px;
  margin: 36px 0;
`

export const AppMain = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`
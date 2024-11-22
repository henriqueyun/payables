import styled from "styled-components"
import BankMeLogotype from '../../assets/bank-me-logotype.png'

export const Navbar = styled.nav`
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-between;
    padding: 0 40px;
    background: white;
    box-shadow:0 0 32px -16px rgba(0,0,0,.32);
`

export const BankMeLogotypeImg = styled.img`
    width: 156px;
    height: 104px;
`

export const Logotype = styled.h2`
    font-weight: bold;
`
export const NavLogotype = styled.span`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
`

export const NavMenu = styled.ul`
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    list-style-type: none;
    gap: 16px;
    justify-content: center;
    align-items: center;
`

export const NavUserMenu = NavMenu

export const NavMenuItem = styled.li`
    text-decoration: none;
    color: inherit;
    font-weight: 600;
    padding: 4px;
    border-bottom: solid 2px transparent;
    &:hover {
        border-color: #0a36b0d9;
    }
`

export const MainMenu = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    gap: 48px;
`

export const NavUserMenuItem = NavMenuItem

export const NavLogotypeComponent = () => {
    return (
        <NavLogotype>
            <BankMeLogotypeImg src={BankMeLogotype} />
            <Logotype>Payables</Logotype>
        </NavLogotype>
    )
}
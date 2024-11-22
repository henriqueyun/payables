import styled from "styled-components"
import BankMeLogotype from '../../assets/bank-me-logotype.png'
import { Link } from "@tanstack/react-router"

const Navbar = styled.nav`
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-between;
    padding: 0 40px;
    background: white;
    box-shadow:0 0 32px -16px rgba(0,0,0,.32);
`

const BankMeLogotypeImg = styled.img`
    width: 156px;
    height: 104px;
`

const Logotype = styled.h2`
    font-weight: bold;
`

const NavLogotype = styled.span`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
`


const NavMenu = styled.ul`
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    list-styke-type: none;
    gap: 16px;
    justify-content: center;
    align-items: center;
`

const NavUserMenu = NavMenu

const NavMenuItem = styled.li`
    text-decoration: none;
    color: inherit;
    font-weight: 600;
    padding: 4px;
    border-bottom: solid 2px transparent;
    &:hover {
        border-color: #0a36b0d9;
    }
`

const MainMenu = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    gap: 48px;
`

const NavUserMenuItem = NavMenuItem

const Nav = () => {
    return (
        <Navbar>
            <MainMenu>
                <Link to="/">
                    <NavLogotype>
                        <BankMeLogotypeImg src={BankMeLogotype} />
                        <Logotype>Payables</Logotype>
                    </NavLogotype>
                </Link>
                <NavMenu>
                    <NavMenuItem><Link to="/payable/list">List</Link></NavMenuItem>
                    <NavMenuItem><Link to="/payable/create">New Payable</Link></NavMenuItem>
                    <NavMenuItem><Link to="/assignor/create">New Assignor</Link></NavMenuItem>
                </NavMenu>
            </MainMenu>
            <NavUserMenu>
                <NavUserMenuItem><Link to="/payable/create">Sair</Link></NavUserMenuItem>
            </NavUserMenu>
        </Navbar>
    )

}

export default Nav
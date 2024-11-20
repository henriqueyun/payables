import styled from "styled-components"

const Navbar = styled.nav`
    background: lightgreen;
    padding: 20px;
`

const NavLogotype = styled.span`
    font-weight: 900;
    color: white;
    font-size: 24px;
    text-shadow: 1px 0 lightgrey;
`

const Nav = () => {
    return (
        <Navbar>
            <NavLogotype>
                PAYABLES
            </NavLogotype>
        </Navbar>
    )

}

export default Nav
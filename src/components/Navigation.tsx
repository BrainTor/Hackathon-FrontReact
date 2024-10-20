import { cont, jcSb, contLinkdBottom, logo, btn } from "../styles/globals";
import { useAuth } from "../features/tokenContext";
import { useNavigate } from "react-router";
import { css } from "@emotion/react";
import Container from "./Container";
import React from "react";
import { ThemeContext } from "../features/theming";

const btns = css`

display: flex; 
flex-direction: row;
padding:0.6rem
`

const NavigationBar = () => {
    const auth = useAuth();
    const navigate = useNavigate();
    const theme = React.useContext(ThemeContext)


    return <Container css={[jcSb, contLinkdBottom]}>
        <p css={logo} onClick={() => navigate("/create")} style={{color: theme.theme.text}}>статейник</p>
        {auth.is_authenticated
        ? (
        
            <div css={btns}>
                <div css={btn} onClick={() => navigate("/profile")} style={{color: theme.theme.input}}>
                Профиль
                </div>
                <div css={btn} onClick={() => {localStorage.clear(); location.reload()}} style={{color: theme.theme.input}}>
                Выход&nbsp;
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 48 48">
                    <path d="M 11.5 6 C 8.4802259 6 6 8.4802259 6 11.5 L 6 36.5 C 6 39.519774 8.4802259 42 11.5 42 L 29.5 42 C 32.519774 42 35 39.519774 35 36.5 A 1.50015 1.50015 0 1 0 32 36.5 C 32 37.898226 30.898226 39 29.5 39 L 11.5 39 C 10.101774 39 9 37.898226 9 36.5 L 9 11.5 C 9 10.101774 10.101774 9 11.5 9 L 29.5 9 C 30.898226 9 32 10.101774 32 11.5 A 1.50015 1.50015 0 1 0 35 11.5 C 35 8.4802259 32.519774 6 29.5 6 L 11.5 6 z M 33.484375 15.484375 A 1.50015 1.50015 0 0 0 32.439453 18.060547 L 36.878906 22.5 L 15.5 22.5 A 1.50015 1.50015 0 1 0 15.5 25.5 L 36.878906 25.5 L 32.439453 29.939453 A 1.50015 1.50015 0 1 0 34.560547 32.060547 L 41.560547 25.060547 A 1.50015 1.50015 0 0 0 41.560547 22.939453 L 34.560547 15.939453 A 1.50015 1.50015 0 0 0 33.484375 15.484375 z"></path>
                </svg>
                </div>
            </div>
        )
        : <div css={btn} onClick={() => navigate("/login")}>Вход</div>}
    </Container>
}

export default NavigationBar;
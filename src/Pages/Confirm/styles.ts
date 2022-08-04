import styled from "styled-components"

export const Container = styled.div`
    p {
        font-size: 13px;
        color: #B8B8D4;
    }
    h1 {
        margin: 0;
        padding: 0;
        font-size: 26px;
    }
    hr {
        height: 1px;
        border: 0;
        background-color: #16195C;
        margin: 30px 0;
    }
    span {
        font-weight: normal;
    }

    button {
        background-color: #25CD89;
        color: #FFF;
        font-size: 14px;
        font-weight: bold;
        padding: 20px 40px;
        border: 0;
        border-radius: 30px;
        cursor: pointer;
        margin-top: 30px;
    }

    .formCard {
        width: 500px;
        border: 1px solid #16195C;
        border-radius: 6px;
        padding: 10px;
    }

    .backButton {
        font-size: 16px;
        text-decoration: none;
        padding: 20px 40px;
        color: #B8B8D4;
        margin-right: 15px;
        border-radius: 30px;
        
        &:hover {
            background-color: #B8B8D4;
            color: white;
            transition: 0.3s;
        }
    }
`
import styled from "styled-components";
export const Wrapper = styled.section`
    background-color: #f3f0ec;

    height: 100vh;
`;
export const Title = styled.h2`
    font-size: 42px;
    letter-spacing: 0;
    font-weight: 600;
    color: #383e45;
    margin-bottom: 8px;
    line-height: 46px;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
`;
export const Text = styled.p`
    max-width: 800px;
    font-size: 22px;
    font-weight: 400;
    color: #383e45;
    letter-spacing: 0;
    margin: 0 auto 8px;
    line-height: 32px;
    padding: 6px 24px 30px;
`;
export const Driver = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    margin-left: 4px;
    a {
        background: #e5322d;
        height: 30px;
        width: 30px;
        border-radius: 100%;
        margin: 4px;
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: 0 3px 6px 0 rgb(0 0 0 / 14%);
    }
`;
export const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const Button = styled.button`
    min-height: 80px;

    background: #e5322d;
    padding: 24px 56px;
    font-weight: 600;
    font-size: 28px;
    line-height: 32px;
    border-radius: 8px;
    color: #fff;
    text-decoration: none;
    /* margin-bottom: 12px; */
    box-shadow: 0 3px 6px 0 rgb(0 0 0 / 14%);
    transition: all 0.5 ease;
    &:hover {
        background-color: #161616;
    }
`;

export const Suptitle = styled.p`
    text-align: center;
    color: #383e45;
    font-size: 20px;
`;
export const Container = styled.div`
    display: flex;
`;
export const Left = styled.div`
    width: 78vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    div {
        width: 198px;
        height: 244px;
        background: #f6f6f8;
        box-shadow: 0 0 4px 0 rgb(0 0 0 / 20%);
        border: 1px solid rgba(0, 0, 0, 0);
    }
    p {
        width: 42px;
        height: 42px;
        background: #e5322d;
        color: #fff;
        position: absolute;
        right: 20px;
        border-radius: 100%;
        top: 32%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;
export const Right = styled.div`
    width: 22vw;
    height: 100vh;
    background: linear-gradient(0deg, #fff, #fff 70%, hsla(0, 0%, 100%, 0.5));
    h3 {
        font-size: 24px;
        font-weight: 600;
        line-height: 34px;
        letter-spacing: 0;
        color: #383e45;
        margin-bottom: 0;
        text-transform: uppercase;
        text-align: center;
        padding: 21px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    }
    p {
        border-radius: 2px;
        text-align: left;
        background-position: 12px;
        background-repeat: no-repeat;
        padding: 24px;
        color: #383e45;
        background-color: #d9edf7;
        margin-bottom: 16px;
        border: 0;
        border-radius: 4px;
        margin: 16px 24px;
        letter-spacing: 0.3px;
    }
    button {
        position: fixed;
        bottom: 24px;
        margin: 0px 24px;
        background: #e5e5e9;
        border-radius: 4px;
        color: #fff;
        width: 19vw;
        padding: 21px;
        box-shadow: 0 2px 8px 0 rgb(50 50 50 / 30%);
        font-size: 24px;
        font-weight: 600;
        line-height: 34px;
        letter-spacing: 0;
        span {
            height: 24px;
            display: inline-flex;
            align-items: center;
            padding: 4px;
            margin-left: 8px;
        }
    }
`;

import React, {useState} from "react";
import {
    Button,
    ButtonWrapper,
    Container,
    Driver,
    Left,
    Right,
    Suptitle,
    Text,
    Title,
    Wrapper,
} from "./styled";

const Merge = () => {
    const [loading, setloading] = useState(false);
    const handleClick = () => {
        setloading(true);
    };
    return (
        <Wrapper>
            {!loading && (
                <div>
                    <Title>Merge PDF files</Title>
                    <Text>
                        Combine PDFs in the order you want with the easiest PDF
                        merger available.
                    </Text>
                    <ButtonWrapper>
                        <Button onClick={() => handleClick()}>
                            Select PDF files
                        </Button>
                        <Driver>
                            <a href="#">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 1443.061 1249.993">
                                    <path
                                        fill="#fff"
                                        d="M240.525 1249.993l240.492-416.664h962.044l-240.514 416.664z"
                                    />
                                    <path
                                        fill="#fff"
                                        d="M962.055 833.329h481.006L962.055 0H481.017z"
                                    />
                                    <path
                                        fill="#fff"
                                        d="M0 833.329l240.525 416.664 481.006-833.328L481.017 0z"
                                    />
                                </svg>
                            </a>
                            <a href="#">
                                <svg
                                    id="Layer_1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 42.4 39.5"
                                    width="25"
                                    height="23">
                                    <path
                                        class="st0"
                                        fill="#fff"
                                        d="M10.6 1.7L0 8.5l10.6 6.7 10.6-6.7zm21.2 0L21.2 8.5l10.6 6.7 10.6-6.7zM0 22l10.6 6.8L21.2 22l-10.6-6.8zm31.8-6.8L21.2 22l10.6 6.8L42.4 22zM10.6 31l10.6 6.8L31.8 31l-10.6-6.7z"
                                    />
                                </svg>
                            </a>
                        </Driver>
                    </ButtonWrapper>
                    <Suptitle>or drop PDFs here</Suptitle>
                </div>
            )}
            {loading && (
                <Container>
                    <Left>
                        <div></div>
                        <p>
                            <span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="26"
                                    height="26"
                                    fill="#fff"
                                    class="bi bi-plus-lg"
                                    viewBox="0 0 16 16">
                                    <path d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z" />
                                </svg>
                            </span>
                        </p>
                    </Left>
                    <Right>
                        <h3>Merge PDF </h3>
                        <p>
                            Please, select more PDF files by clicking again on
                            ’Select PDF files’. <br /> Select multiple files by
                            mantaining pressed ’Ctrl’
                        </p>
                        <button disabled="disabled">
                            <span>Merge PDF</span>
                            <span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    class="bi bi-arrow-right-circle"
                                    viewBox="0 0 16 16">
                                    <path
                                        fill-rule="evenodd"
                                        d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"
                                    />
                                </svg>
                            </span>
                        </button>
                    </Right>
                </Container>
            )}
        </Wrapper>
    );
};

export default Merge;

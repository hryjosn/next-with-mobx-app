import React from 'react';
import {
    ModalContainer, InputContainer,
    InputDiv,
    LoginContent,
    LoginDescription,
} from "./LoginModal.styles";
import { Modal, Button, Input } from "@components";
import { useStores } from "@store";
import { observer } from "mobx-react";

const LoginModal = () => {
    const { visible, closeModal, onSubmit, params, paramsUpdate } = useStores()['LoginModalStore']
    const { email, password } = params

    return (
        <Modal open={visible} onClose={closeModal}>
            <div>
                <ModalContainer/>
                <LoginContent>
                    <div>
                        <span style={{ fontSize: "40px" }}>Login</span>
                    </div>
                    <div>
                        <LoginDescription> This is something you would never read</LoginDescription>
                        <LoginDescription style={{ fontWeight: "normal" }}> But if it exist would make page looks
                            professional</LoginDescription>
                    </div>
                    <form onSubmit={(e) => {
                        onSubmit(e)
                    }}>
                        <InputContainer>
                            <InputDiv>
                                <Input fullWidth placeholder={"Email"} value={email} onChange={e => {
                                    paramsUpdate("email", e.target.value)
                                }}/>
                            </InputDiv>

                            <InputDiv>
                                <Input fullWidth placeholder={"Password"} type="password" value={password} onChange={e => {
                                    paramsUpdate("password", e.target.value)
                                }}/>
                            </InputDiv>
                        </InputContainer>
                        <Button onClick={(e) => {
                            onSubmit(e)
                        }}>Login</Button>
                    </form>

                </LoginContent>
            </div>


        </Modal>
    );
};

export default observer(LoginModal);

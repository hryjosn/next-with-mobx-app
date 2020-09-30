import React, { useState } from 'react';
import {
    InputContainer,
    InputDiv,
    IssueContent,
} from "./IssueModal.styles";
import { Modal, Button, TitleInput } from "@components";
import { useStores } from "@store";
import { observer } from "mobx-react";
import styled from "@emotion/styled";
// import { Editor, EditorState, convertToRaw } from 'draft-js';

const IssueModal = () => {
    const { visible, closeModal, onSubmit, params, paramsUpdate } = useStores()['IssueModalStore']
    const { title, description } = params;
    return (
        <Modal open={visible} onClose={closeModal}>
            <div>
                <IssueContent>

                    <div>
                        <span style={{ fontSize: "20px" }}>Describe your question</span>
                    </div>

                    <form onSubmit={(e) => {
                        onSubmit(e)
                    }}>
                        <InputContainer>
                            <InputDiv>
                                <TitleInput rows={1} fullWidth title={"Issue Title"} value={title} onChange={e => {
                                    paramsUpdate("title", e.target.value)
                                }}/>
                            </InputDiv>
                            {/*<InputDiv>*/}
                            {/*    <TitleInput title={"Related Tag"} placeholder={"(webSocket)"} value={email} onChange={e => {*/}
                            {/*        paramsUpdate("email", e.target.value)*/}
                            {/*    }}/>*/}
                            {/*</InputDiv>*/}
                            <div>Describe detail info of your issue</div>
                            <TextArea value={description} onChange={(e) => {
                                paramsUpdate("description", e.target.value)
                            }}/>
                        </InputContainer>
                        <Button onClick={(e) => {
                            onSubmit(e)
                        }}>Post</Button>
                    </form>

                </IssueContent>
            </div>


        </Modal>
    );
};

export default observer(IssueModal);
const TextArea = styled.textarea`
    resize: none;
    width: 100%;
    height: 10rem;
`

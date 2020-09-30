import React from 'react';
import { Modal } from "@components";
import { useStores } from "@store";
import { observer } from "mobx-react";
import styled from "@emotion/styled";
import {IssueContent} from './IssueDetailModal.styles'

const IssueDetailModal = () => {
    const { visible, closeModal, title, description } = useStores()['IssueDetailModalStore']
    return (
        <Modal open={visible} onClose={closeModal}>
            <IssueContent>
                <div>
                    Title :
                </div>
                <div>
                    {title}
                </div>
                <div>
                    Info:
                </div>
                <div>
                    {description}
                </div>

            </IssueContent>

        </Modal>
    );
};

export default observer(IssueDetailModal);
const TextArea = styled.textarea`
    resize: none;
    width: 100%;
    height: 10rem;
`

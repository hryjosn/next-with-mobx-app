import styled from "@emotion/styled";

export const ModalContainer = styled.div`
   background-image: url(/image/snowMountain_bg.jpg); 
   background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    opacity: 0.7;
    z-index: -1;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    
`
export const IssueContainer = styled.div`
    padding: 0px 30px;
    min-width: 80%;
    box-sizing: border-box;
    background-color: rgba(255,255,255,0.7);
`
export const IssueContent = styled.div` 
    text-align: center;
    box-sizing: border-box;
    padding: 60px 3rem;
   
`
export const InputContainer = styled.div`
    margin: 25px 0;
`
export const InputDiv = styled.div` 
    margin: 20px 0;
    text-align: initial;
`
export const BackButton = styled.div` 
    cursor: pointer;
`
export const IssueDescription = styled.div` 
    font-size: 10px;
    color: gray;
`
export const IssueSpan = styled.div`
   margin-right: 20px;
   cursor: pointer;
`

import styled from 'styled-components';

export const Container = styled.div`
    width: 100%; height: 100vh;
    background-color: #0B3C49;

    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Content = styled.div`
    width: 400px; min-height: 450px;
    // background-image: linear-gradient(15deg, #13547a 0%, #80d0c7 100%);
    background-color: #CBD2D0;
    padding: 6px;
    border-radius: 20px;
    border: 8px solid #FFFFFF;
    box-shadow: rgba(50, 50, 93, 0.7) 0px 30px 60px -12px, rgba(0, 0, 0, 0.2) 0px 18px 36px -18px inset;

    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
`;

export const ButtonsContent = styled.div`
    width: 100%; min-height: 330px;
    display: grid;
    grid-template-rows: 1fr 4fr;
    grid-gap: 5px;

    .top_actions {
        width: 100%; height: auto;
        display: grid;
        grid-gap: 5px;
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }

    .equal {
        background-color: #00916E;
        color: #FFFFFF;
        font-size: 20pt;
        height: 48px;
        line-height: 70px;

        &:hover {
            background-color: #4A9D84;
        }
    }

    .bottom {
        width: 100%; height: 100%;
        display: grid;
        grid-template-columns: 3fr 1fr;
        grid-gap: 5px;

        .numbers {
            width: 100%; height: 100%;
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            grid-template-rows: 1fr 1fr 1fr 1fr;
            grid-gap: 5px;
        }
        
        .zero {
            grid-column-start: 1;
            grid-column-end: 4;
        }

        .not_zero, .zero {
            border-radius: 50px;
        }
        
        .side_actions {
            width: 100%; height: 100%;
            display: grid;
            grid-gap: 5px;
        }
    }

`;
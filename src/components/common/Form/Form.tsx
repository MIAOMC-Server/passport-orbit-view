import styled from '@emotion/styled'

const Form = ({ children }: { children: React.ReactNode; width?: string; height?: string }) => {
    return <StyledForm>{children}</StyledForm>
}

export default Form

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 75%;
    margin-top: 20px;

    input {
        width: calc(85% - 30px);
        margin: 0 auto;
        margin-bottom: 15px;
        padding: 15px;
        border: none;
        background-color: var(--bg-secondary);
        border-radius: 4px;
        color: var(--text-primary);
        transition: all 0.3s ease;
    }

    input::placeholder {
        color: var(--text-secondary);
    }

    input:hover {
        transform: scale(1.02);
        outline: none;
        box-shadow: 0 2px 16px rgba(0, 0, 0, 0.1);
    }

    input:focus {
        transform: scale(1.05);
        outline: none;
        box-shadow: 0 2px 16px rgba(0, 0, 0, 0.1);
    }

    button {
        margin-top: 20px;
        width: 85%;
        padding: 10px;
        background-color: var(--btn-primary-bg);
        color: var(--btn-primary-text);
        border: none;
        border-radius: 4px;
        cursor: pointer;
        text-align: center;
        transition: all 0.3s ease;
    }

    button:hover {
        background-color: var(--btn-primary-hover);
        transform: scale(1.05);
        box-shadow: var(--card-hover-shadow);
    }

    button:active {
        transform: scale(0.98);
        box-shadow: var(--card-active-shadow);
    }
`

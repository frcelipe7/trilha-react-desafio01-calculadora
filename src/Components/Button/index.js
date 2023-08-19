import { ButtonContainer } from './styles';

const Button = ({label, className, onClick}) => {
    return (
        <ButtonContainer onClick={onClick} className={className}>
            {label}
        </ButtonContainer>
    );
};

export default Button;

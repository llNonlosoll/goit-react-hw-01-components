import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const IsOnline = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${props => {
    switch (props.isOnline) {
      case true:
        return 'green';
      case false:
        return 'red';

      default:
        return 'transparent';
    }
  }};
`;

export const Image = styled.img`
  display: block;
  width: 80px;

  background-color: #faff95;
  border: 1px solid #111111;
  border-radius: 4px;
`;

export const Name = styled.p`
  font-size: 30px;
`;

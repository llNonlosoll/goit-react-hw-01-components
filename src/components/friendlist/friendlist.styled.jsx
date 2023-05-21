import styled from 'styled-components';

export const Container = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;

  width: 300px;
  padding: 10px;

  list-style: none;
  background-color: #ffeaea;
  border: 1px solid black;
  border-radius: 4px;
`;

export const Element = styled.li`
  padding: 10px;

  background-color: #ffffff;
  border: 1px solid black;
  border-radius: 4px;
`;

export const Image = styled.img`
  display: block;
  width: 48px;
`;

export const Name = styled.p`
  font-size: 30px;
`;

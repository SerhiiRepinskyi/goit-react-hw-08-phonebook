import styled from 'styled-components';

export const ContactsList = styled.ul`
  max-width: 100%;
  width: 600px;

  display: flex;
  gap: 10px;
  flex-direction: column;
`;

export const ContactItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: #f4efef;
  padding: 2px 16px;

  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: scale(1.01);
`;

export const Span = styled.span`
  display: flex;
  gap: 4px;
  justify-content: space-between;
  align-items: center;
`;

export const Btn = styled.button`
  cursor: pointer;
  display: flex;
  gap: 4px;
  justify-content: center;
  align-items: center;

  width: 100%;
  max-width: 75px;
  height: 26px;
  padding: 2px 8px;

  color: #fff;
  background-color: #62ada0;
  font-size: 14px;
  font-weight: 500;

  border: none;
  border-radius: 6px;
  box-shadow: rgba(0, 0, 0, 0.24) 5px 5px 5px 0px;

  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    color: #010101;
    background-color: #c8e9e3;
    box-shadow: rgb(255, 255, 255) -2px -2px 5px,
      rgba(0, 0, 0, 0.24) 2px 2px 5px;
  }
`;

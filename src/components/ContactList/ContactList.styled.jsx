import styled from 'styled-components';

export const ContactsList = styled.ul`
  background-color: #f4efef;
  padding: 32px;

  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 100%;
  width: 400px;
`;

export const ContactItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Btn = styled.button`
  cursor: pointer;
  display: block;

  width: 100%;
  max-width: 65px;
  height: 26px;
  padding: 2px 5px;

  color: #fff;
  background-color: #62ada0;
  font-size: 14px;
  font-weight: 700;

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

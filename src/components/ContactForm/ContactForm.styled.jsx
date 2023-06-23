import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  gap: 25px;
  flex-direction: column;
  padding: 30px;

  border: 1px solid #62ada0;
  border-radius: 6px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
`;

export const FormInput = styled.input`
  width: 300px;
  font-size: 14px;
  padding: 4px;
`;

export const FormLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;

  font-size: 16px;
  font-weight: 500;
`;

export const FormBtn = styled.button`
  cursor: pointer;

  display: block;
  margin: 0 auto;
  margin-top: 6px;

  width: 100%;
  max-width: 180px;
  height: 30px;
  padding: 2px 5px;

  color: #fff;
  background-color: #62ada0;
  font-size: 14px;
  font-weight: 700;

  border: none;
  border-radius: 6px;
  box-shadow: rgba(0, 0, 0, 0.24) 10px 10px 5px 0px;

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

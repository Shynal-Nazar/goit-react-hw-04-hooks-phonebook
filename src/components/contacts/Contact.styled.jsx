import styled from '@emotion/styled';

export const ContactsSection = styled.div`
  width: 400px;
  border: 2px solid #9e9e9e;
  border-radius: 4px;
  margin-top: 10px;
  padding: 10px;
  box-shadow: 0px 4px 4px hsla(0, 0%, 0%, 0.15);
`;

export const ContactsList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const ContactsItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #9e9e9e;
  border-radius: 10px;
  padding: 0 10px;
`;

export const ContactsItemName = styled.p`
  margin-bottom: 8px;
  font-weight: 600;
  font-size: 20px;
`;

export const ContactsBtn = styled.button`
  display: inline-flex;
  margin: 0 4px;
  padding: 10px 20px;
  border: none;
  border-radius: 10px;

  font-family: sans-serif;
  font-size: 16px;

  background-color: #2196f3;
  color: #fff;
  cursor: pointer;

  :hover,
  :focus {
    background-color: #1976d2;
  }
`;

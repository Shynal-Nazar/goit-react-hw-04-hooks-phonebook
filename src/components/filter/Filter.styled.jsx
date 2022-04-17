import styled from '@emotion/styled';

export const FilterSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 400px;
  border: 2px solid #9e9e9e;
  border-radius: 50%;
  margin-bottom: 15px;
  padding: 10px;
  box-shadow: 0px 4px 4px hsla(0, 0%, 0%, 0.15);
`;

export const FilterName = styled.p`
  margin-bottom: 8px;
  font-weight: 600;
  font-size: 20px;
`;

export const FilterInput = styled.input`
  padding: 8px;
  font-family: inherit;
`;

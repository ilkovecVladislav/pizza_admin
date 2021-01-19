import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
`;

export const Title = styled.h3`
  margin-bottom: 16px;
  font-weight: 800;
  font-size: 20px;
  line-height: 28px;
  color: #1f1f33;
`;

export const Form = styled.form`
  padding: 16px;
  display: flex;
  flex-direction: column;
  background: #ffffff;
  box-shadow: 0px 8px 16px rgba(75, 75, 124, 0.05);
  border-radius: 16px;
`;

export const SubmitButton = styled.button`
  border: unset;
  background: #00a896;
  border-radius: 16px;
  font-weight: 800;
  font-size: 16px;
  line-height: 16px;
  color: #ffffff;
  height: 40px;
  margin-bottom: 16px;
  cursor: pointer;
  &:disabled {
    background: #f9f9fb;
    color: #8181b1;
    cursor: not-allowed;
  }
`;

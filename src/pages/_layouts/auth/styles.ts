import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100%;
  background: #FD79A8;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 385px;
  text-align: center;
  background: rgba(255, 255, 255, 1);
  padding: 30px;
  border-radius: 4px;
  box-shadow: 3px 3px 13px #666;

  img {
    width: 150px;
  }

  form {
    display: flex;
    flex-direction: column;
    margin-top: 10px;

    input {
      background: rgba(240, 240, 240, 1);
      border: 1px solid #ddd;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #444;
      margin: 0 0 10px;
      transition: all 2s ease;

      &:hover {
        background: rgba(255, 255, 255, 1);
        border: 1px solid #ddd;
        transition: all 1s ease;
        box-shadow: 3px 3px 13px #999;
      }
    }

    span {
      text-align: left;
      color: #ee4d64;
      font-size: 10px;
      font-weight: bold;
    }

    label {
      text-align: left;
      margin-bottom: 10px;
      margin-top: 20px;
      font-weight: bold;
      font-size: 14px;
      color: #444;
      font-size: 14px;
    }

    button {
      font-size: 16px;
      color: #fff;
      background: #FD79A8;
      height: 44px;
      border: 1px solid #FD79A8;
      border-radius: 4px;
      font-weight: bold;
      font-size: 16px;
      margin-top: 15px;
      transition: all 2s ease;

      &:hover {
        background: #b6063a;
        border: 1px solid #b6063a;
        transition: all 1s ease;
        box-shadow: 3px 3px 13px #666;
      }
    }
  }
`;

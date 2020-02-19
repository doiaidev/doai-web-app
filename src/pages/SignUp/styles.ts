import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 1350px;
  width: 100%;
  padding: 0 30px;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

export const Aside = styled.aside`
  display: flex;
  width: 60%;
  height: 700px;
  align-items: center;
  justify-content: center;

  background-image: linear-gradient(to right bottom, rgb(253,121,168, 0.8), rgb(253,121,168, 0.8)),
  url('https://images.pexels.com/photos/754769/pexels-photo-754769.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940');
  background-size: cover;
  background-position: center;

  & div {;
    font-size: 2rem;
    color: #fff;
    align-items: center;
    justify-content: center;
  }

  & div strong {
    width: 50px;
    font-size: 4rem;
    color: #fff;
  }

  & div strong:last-of-type {
    margin-bottom: 10px;
  }

  @media (max-width: 900px) {
    width: 90%;
    height: 400px;
    align-items: center;
    justify-content: center;

    background-image: linear-gradient(to right bottom, rgb(253,121,168, 0.8), rgb(253,121,168, 0.8)),
    url('https://images.pexels.com/photos/754769/pexels-photo-754769.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940');
    background-size: cover;
    background-position: center;
  }

  @media (max-width: 720px) {
    width: 0px;
    display: none;
  }

`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  background: #fff;
  width: 40%;
  padding: 40px;
  align-items: center;
  justify-content: center;
  text-align: center;

  & div {
    color: #222;
    font-size: 1rem;
    margin-top: 20px;
  }

  @media (max-width: 720px) {
    background: #fff;
    width: 90%;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 900px) {
    background: #fff;
    width: 50%;
    align-items: center;
    justify-content: center;
    text-align: 0 auto;
  }

  & img {
    width: 150px;
  }

  & input {
    width: 100%;
    align-items: center;
    justify-content: center;
    width: 300px;
  }

  & label {
    padding-bottom: 40px;
    font-size: 1.5rem;
  }

  & button {
    margin-top: 70px;
    background: rgb(253,121,168);
    border-radius: 22px;
    width: 250px;
    text-align: center;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover {
      cursor: pointer;
      transition: all 0.3s ease-in-out;
      background: rgb(132,14,65, 1);
    }
  }
`;


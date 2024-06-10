import styled from "styled-components";

export const StyledForm = styled.form`
  margin-top: 200px;
  margin-left: 200px;
  input {
    display: block;
    box-sizing: border-box;
    width: 30%;
    border-radius: 4px;
    border: 1px solid white;
    padding: 30px 10px;
    margin-bottom: 5px;
    font-size: 14px;
  }
  `

  export const StyledButton= styled.button`
    display: inline;
    box-sizing: border-box;
    border-radius: 4px;
    padding: 10px;
    width: 150px;
    justify-content: center;
    color: #fff;
    margin: 60px;
    cursor: pointer;
  
  label {
    color: black;
    display: block;
    width: 150px;
    float: left;
  }
  `

  export const StyledContainer= styled.div`
  display: grid;
  column-gap: 4px;
  padding-top: 90px;

  input {
    padding: 25px;
    width: 400px;
    margin-left: 20%;
    align-items: center;
    justify-content: center;
    margin-top: 100px;
    font-size: 14px;
    position: relative;
    background: #ffddf4;
    border-radius: 20px;
  }

  button {
    align-items: center;
    justify-content: center;
    border-radius: 4;
    elevation: 3;
    margin-top: 200px;
    width: 150px;
    padding: 15px;
    margin: 40px;
  }

  Box {
    margin-top: 60px;
  }
  `

  export const StyledBox= styled.div`
  display: flex;
  min-width: 300;
  width: 100%;
  padding-top: 160px;
  `

  export const StyledDetailsContainer =styled.div`
  display: grid;
  column-gap: 4px;
  padding-top: 90px;

  input {
    padding: 25px;
    width: 400px;
    margin-left: 20%;
    align-items: center;
    justify-content: center;
    margin-top: 100px;
    font-size: 14px;
    position: relative;
    background: #ffddf4;
    border-radius: 20px;
  }

  button {
    align-items: center;
    justify-content: center;
    border-radius: 4;
    elevation: 3;
    margin-top: 200px;
    width: 150px;
    padding: 15px;
    margin: 40px;
  }

  Box {
    margin-top: 60px;
  }
`;




  
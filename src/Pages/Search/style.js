import styled from "styled-components";

export const Style = styled.div`
  margin-top: 120px;
  input {
    color: rgb(241, 241, 241);
    background: rgb(53, 53, 53);
    border: 1px solid rgb(53, 53, 53);
    border-radius: 10px;
    width: 50%;
    padding: 10px;
  }
  .input-container {
    margin-top: 9rem;
  }
  h2 {
    color: white;
    display: inline;
    padding: 10px 30px;
    margin-left: 30px;
    margin-bottom: 30px;
  }
  ul.list {
    display: flex;
    gap: 2px;
    flex-wrap: wrap;
    justify-content: start;
  }
  
  ul.list li {
    width: 240px;
  }
  .search-container {
    margin-bottom: 15rem;
  }
  ul.list li a {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    color: rgb(212, 212, 212);
    font-size: 15px;
  }
  
  ul.list li a img {
    width: 212px;
    height: 353px;
    border-radius: 15px;
  }
  
  ul.list li a h3 {
    height: 50px;
  }
  .mb-9{
    margin-bottom:9rem;
  }
  .not{
    color:transparent;
    margin:20px 0;
  }
  
  @media (max-width: 767px) {
    ul.list {
      justify-content: center;
    }
  }
  
`;

export default Style;

import styled from 'styled-components';
import { Link } from 'react-router-dom';

const AddListBox = styled.div`
  margin: 5%;
  padding: 5%;
  height: auto;
  background-color: ${(props) => props.theme.color.lightBlue};
  border-radius: 10px;
  font-weight: bold;
  width: 500px;
`;
const AddListWriter = styled.div`
  width: 450px;
`;
const AddListTitle = styled.div`
  width: 450px;
`;

const WorkingStyle = styled.div`
  font-weight: bold;
  padding: 0px 10px;
  margin: 10px;
  border-radius: 10px;
`;
const WorkingListStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1em;
  align-items: center;
  padding: 0px 10px;
`;
const WorkingComponentSytle = styled.div`
  margin: 5px 0px;
  padding: 10px;
  border: 4px solid #bbe2ec;
  border-radius: 5px;
  flex-grow: 0;
  background-color: ${(props) => props.theme.color.lightBlue};
`;

const StyledLink = styled(Link)`
  display: grid;
  color: black;
  text-decoration-line: none;
  justify-items: end;
`;

const DetailBox = styled.div`
  /* border: 2px solid ${(props) => props.theme.color.ligtOrange}; */
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
const Detail = styled.div`
  /* border: 2px solid ${(props) => props.theme.color.ligtOrange}; */
  background-color: ${(props) => props.theme.color.lightBlue};
  width: 500px;
  height: 400px;
  border-radius: 5px;
`;
const DetailHeader = styled.div`
  padding: 0px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const DetailTitle = styled.div`
  font-weight: bold;
  padding: 0px 10px;
  margin: 10px;
  font-size: 30px;
`;
const DetailContent = styled.div`
  border: 1px solid ${(props) => props.theme.color.blue};
  width: 450px;
  height: 150px;
  font-weight: bold;
  text-align: left;
  padding: 10px;
  border-radius: 5px;
`;

const DetailToListButton = styled.button`
  padding: 10px 30px;
  background-color: white;
  font-weight: bold;
  width: 120px;
  border-radius: 5px;
`;
const DetailContentSection = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin: 10px;
`;

const ContentTextarea = styled.textarea`
  border: 1px solid black;
  width: 450px;
  height: 150px;
  resize: none;
  font-weight: bold;
  padding: 10px;
`;

export {
  AddListBox,
  AddListWriter,
  AddListTitle,
  WorkingStyle,
  WorkingListStyle,
  WorkingComponentSytle,
  StyledLink,
  DetailBox,
  Detail,
  DetailHeader,
  DetailTitle,
  DetailContent,
  DetailContentSection,
  DetailToListButton,
  ContentTextarea,
};

import React from 'react';
import styled from 'styled-components';
import { darken } from 'polished';
import MsgListSectionItem from './MsgListSectionItem';
import MsgListSectionNone from './MsgListSectionNone';

const MsgListSectionMain = ({ hasMsgs, filteredMsgs }) => {
  // MsgListNone과 MsgLists
  return (
    <MsgListSectionMainWrapper>
      {hasMsgs ? (
        <>
          <MsgLists>
            {filteredMsgs.map(msg => (
              <MsgListSectionItem key={msg.id} msg={msg} />
            ))}
          </MsgLists>
        </>
      ) : (
        <MsgListSectionNone />
      )}
    </MsgListSectionMainWrapper>
  );
};

const MsgListSectionMainWrapper = styled.div`
  /* width: 37.5rem; */
  /* min-width: 37.5rem; */
  height: 100vh;
  max-height: calc(100vh - 15.5rem);
  border-right: 1px solid ${({ theme }) => darken(0.1, theme.color.lightGray)};
  padding: 1.2rem 1.4rem;
  overflow: scroll;
`;

const MsgLists = styled.ul`
  display: flex;
  flex-direction: column;
  & > li + li {
    margin-top: 0.5rem;
  }
`;

export default MsgListSectionMain;

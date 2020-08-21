/* eslint-disable react/display-name */
import React, { forwardRef } from 'react';
import styled from 'styled-components';
import Popup from '../Global/Popup';
import { FaMapMarkerAlt } from 'react-icons/fa';
const StSearchLocationPopupWrapper = styled.div`
  position: relative;
`;

const StSearchLocationPopup = styled(Popup)`
  top: 14px;
  left: 0;
  border-radius: 20px;
  padding: 10px 0;
  min-height: 0;
  min-width: 400px;
  color: ${({ theme }) => theme.color.black};
`;

const StSearchLocationList = styled.ul`
  display: flex;
  flex-direction: column;
`;

const StSearchLocationIconWrapper = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  min-width: 40px;
  font-size: 14px;
  margin-right: 10px;
  background: ${({ theme }) => theme.color.line};
  border: 1px solid ${({ theme }) => theme.color.gray};
  border-radius: 8px;
`;

const StSearchLocationItem = styled.li`
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 10px 20px;
  &:hover {
    background: ${({ theme }) => theme.color.lightGray};
  }
`;

const StItemText = styled.span`
  white-space: nowrap;
`;

const SearchLocationPopup = forwardRef(
  ({ type, locationResult, changeSearchData }, ref) => {
    console.log(
      '[popup...result]',
      locationResult,
      locationResult.length,
      !!locationResult.length,
    );
    return (
      <StSearchLocationPopupWrapper ref={ref}>
        <StSearchLocationPopup
          popupState={locationResult.length && type === 'location'}
        >
          <StSearchLocationList>
            {locationResult.map((item, index) => {
              return (
                <StSearchLocationItem
                  key={index}
                  onClick={() => {
                    changeSearchData('location', item);
                  }}
                >
                  <StSearchLocationIconWrapper>
                    <FaMapMarkerAlt></FaMapMarkerAlt>
                  </StSearchLocationIconWrapper>
                  <StItemText>{item}</StItemText>
                </StSearchLocationItem>
              );
            })}
          </StSearchLocationList>
        </StSearchLocationPopup>
      </StSearchLocationPopupWrapper>
    );
  },
);

export default SearchLocationPopup;
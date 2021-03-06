import React from 'react';
import { useSelector } from 'react-redux';
import TripsUpcomingCardItem from '../../Components/Trips/TripsUpcomingCardItem';

const TripsUpcomingCardItemContainer = ({ trip }) => {
  // ! redux
  const { data } = useSelector(state => state.trips);

  // ! variable
  const { title, homeImage, addr, withGuest, guest, checkin, checkout } = trip;
  const myInfo = data.upcoming;
  const { lastName: myLastName, profileImg: myProfileImg } = myInfo;

  const ciDate = new Date(checkin);
  const coDate = new Date(checkout);
  const options = { month: 'long', day: 'numeric' };
  const ci = ciDate.toLocaleDateString('ko-KR', options);
  const co = coDate.toLocaleDateString('ko-KR', options);
  const dateDiff = (coDate - ciDate) / 86400000;

  // TODO: guest를 직접 넘겨주는 것이 아니라 구조분해하여 guestLastName, guestProfileImg로 넘겨준다

  return (
    <TripsUpcomingCardItem
      title={title}
      homeImage={homeImage}
      addr={addr}
      withGuest={withGuest}
      guest={guest}
      ci={ci}
      co={co}
      dateDiff={dateDiff}
      myLastName={myLastName}
      myProfileImg={myProfileImg}
    />
  );
};

export default TripsUpcomingCardItemContainer;

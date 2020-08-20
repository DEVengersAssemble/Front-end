import React, { useEffect, useState, useRef } from 'react';
import {
  RefundPopup,
  RoomTypePopup,
  PricePopup,
  SetDatePopup,
} from '../../Components/Search/FilterPopup';
import { useSelector } from 'react-redux';

const RefundPopupContainer = ({ popupState, size, onClose }) => {
  const [toggle, setToggle] = useState(false);
  const handleClick = () => setToggle(!toggle);
  const onReset = () => setToggle(false);

  const popup = useRef();
  const closePopup = ({ target }) => {
    if (!popupState || popup.current.contains(target)) return;
    onClose();
    onReset();
  };

  useEffect(() => {
    document.addEventListener('click', closePopup);
    return () => {
      document.removeEventListener('click', closePopup);
    };
  }, [closePopup]);

  return (
    <div ref={popup}>
      <RefundPopup
        popupState={popupState}
        onClose={onClose}
        size={size}
        toggle={toggle}
        handleClick={handleClick}
        onReset={onReset}
      />
    </div>
  );
};

const RoomTypePopupContainer = ({ popupState, size, onClose }) => {
  const [check, setCheck] = useState({
    house: false,
    private: false,
    shared: false,
  });
  const onChange = type => setCheck({ ...check, [type]: !check[type] });
  const onReset = () =>
    setCheck({ house: false, private: false, shared: false });

  const popup = useRef();
  const closePopup = ({ target }) => {
    if (!popupState || popup.current.contains(target)) return;
    onClose();
    onReset();
  };

  useEffect(() => {
    document.addEventListener('click', closePopup);
    return () => {
      document.removeEventListener('click', closePopup);
    };
  }, [closePopup]);

  return (
    <div ref={popup}>
      <RoomTypePopup
        popupState={popupState}
        onClose={onClose}
        size={size}
        check={check}
        onChange={onChange}
        onReset={onReset}
      />
    </div>
  );
};

const PricePopupContainer = ({ popupState, size, onClose }) => {
  const [priceFrom, setPriceFrom] = useState(12000);
  const [priceTo, setPriceTo] = useState(1000000);
  const onChangePriceFrom = ({ target }) => setPriceFrom(target.value);
  const onChangePriceTo = ({ target }) => setPriceTo(target.value);
  const onReset = () => {
    setPriceFrom(12000);
    setPriceTo(1000000);
  };

  const { priceArray, averagePrice } = useSelector(state => state.search);
  const popup = useRef();
  const closePopup = ({ target }) => {
    if (!popupState || popup.current.contains(target)) return;
    onClose();
    onReset();
  };

  useEffect(() => {
    document.addEventListener('click', closePopup);
    return () => {
      document.removeEventListener('click', closePopup);
    };
  }, [closePopup]);

  return (
    <div ref={popup}>
      <PricePopup
        priceArray={priceArray}
        averagePrice={averagePrice}
        popupState={popupState}
        onClose={onClose}
        priceFrom={priceFrom}
        priceTo={priceTo}
        onChangePriceFrom={onChangePriceFrom}
        onChangePriceTo={onChangePriceTo}
        size={size}
        onReset={onReset}
      />
    </div>
  );
};

const SetDatePopupContainer = ({ popupState, size, onClose }) => {
  const popup = useRef();
  const closePopup = ({ target }) => {
    if (!popupState || popup.current.contains(target)) return;
    onClose();
  };

  useEffect(() => {
    document.addEventListener('click', closePopup);
    return () => {
      document.removeEventListener('click', closePopup);
    };
  }, [closePopup]);

  return (
    <div ref={popup}>
      <SetDatePopup popupState={popupState} onClose={onClose} size={size} />
    </div>
  );
};

export {
  RefundPopupContainer,
  RoomTypePopupContainer,
  PricePopupContainer,
  SetDatePopupContainer,
};

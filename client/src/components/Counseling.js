import React from 'react';
import styled from 'styled-components';

const CounselingContainer = styled.div`
  background-color: #f4f4f4;
  padding: 20px;
  border-radius: 5px;
  margin: 10px 0;
`;

const CounselingTitle = styled.h2`
  color: #333;
`;

const CounselingText = styled.p`
  color: #666;
`;

const Counseling = () => {
  return (
    <CounselingContainer>
      <CounselingTitle>Counselling Services</CounselingTitle>
      <CounselingText>Get support and guidance from our counseling services for academic and personal matters.</CounselingText>
    </CounselingContainer>
  );
};

export default Counseling;
import styled from 'styled-components';

export const TagContainer = styled.div`
  display: flex;
  width: 45%;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  align-items: bottom;

  &:hover {
    cursor: pointer;
    color: red !important;
  }
`;

export const SelectedTagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

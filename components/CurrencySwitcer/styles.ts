import styled from "styled-components";

export const DropdownContainer = styled.div`
  display: inline-block;
  position: relative;
`;

export const Select = styled.select`
  appearance: none; /* Remove default arrow icon */
  background-color: #f7f7f7; /* Background color */
  border: 1px solid #ccc; /* Border color */
  padding: 8px; /* Padding */
  font-size: 14px; /* Font size */
  width: 120px; /* Width of the dropdown */
  border-radius: 5px; /* Rounded corners */
  outline: none; /* Remove outline on focus */

  &:hover {
    background-color: #e0e0e0; /* Hover background color */
  }

  &:focus {
    border-color: #007bff; /* Border color on focus */
  }
`;

export const ArrowIcon = styled.span`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
`;

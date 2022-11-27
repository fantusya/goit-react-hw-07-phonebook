import styled from 'styled-components';

export const ContactListTable = styled.table`
  text-align: center;

  border-collapse: separate;
  border-spacing: ${p => p.theme.space[1]}px;
`;

export const ContactListThead = styled.thead`
  background-color: ${p => p.theme.colors.tableHead};

  th {
    padding: ${p => p.theme.space[4]}px ${p => p.theme.space[5]}px;
    width: 320px;
  }
`;

export const ContactListTbody = styled.tbody`
  td {
    padding: ${p => p.theme.space[3]}px ${p => p.theme.space[4]}px;

    font-size: ${p => p.theme.fontSizes.m};
    font-family: ${p => p.theme.fonts.body};
    line-height: ${p => p.theme.lineHeights.body};

    color: ${p => p.theme.colors.accent};
    background-color: ${p => p.theme.colors.tableBody};
  }

  td:nth-of-type(3n + 3) {
    background-color: ${p => p.theme.colors.transparent};
  }
`;

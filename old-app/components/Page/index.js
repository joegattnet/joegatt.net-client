import styled from 'styled-components';
import { DESKTOP_BREAKPOINT, LINE_HEIGHT, PAGE_COLUMNS_SPAN, TAB } from 'variables';

const Page = styled.div`
  padding: 0 ${TAB} ${LINE_HEIGHT};

  @media screen and (min-width: ${DESKTOP_BREAKPOINT}) {
    display: grid;
    grid-column-gap: ${TAB};
    grid-template-columns: repeat(${PAGE_COLUMNS_SPAN}, 1fr);
  }
`;

export default Page;

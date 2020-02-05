import styled from 'styled-components';

export const Wrapper = styled.div`
  min-height: 100%;
  background: #eee;

  table {
    color: #444;
    width: 100%;
    border-collapse: collapse;

    thead {
      tr {
        margin-bottom: 20px;
        text-align: left;
      }

      th {
        padding-bottom: 10px;
        text-transform: uppercase;
      }
    }

    tbody {
      tr {
        border-top: 1px solid #ddd;
        background: #fff;
        transition: all 1s ease;
        padding-left: 5px;

        &:hover {
          background: #eee;
          transition: all 0.5s ease;
          padding-left: 10px;
        }
      }

      td {
        padding: 14px 0;
        transition: all 1s ease;

        &:last-of-type {
          text-align: right;
        }
      }

      a {
        color: #4d85ee;
      }
    }
  }
`;

import styled, { css } from "styled-components";
import { font, theme } from "./config";



export const BaseFlex = styled.div`
  display: flex;
  justify-content: ${(props) => props.justify || 'flex-start'};
  align-items: ${(props) => props.align || 'flex-start'};
  width: ${(props) => props.width || '100%'};
  height: ${(props) => props.height || 'unset'};
  box-sizing: border-box;
  gap: ${(props) => props.gap || '0'}rem;
  padding: ${(props) => props.padding || '0rem'};
  margin: ${(props) => props.margin || '0rem'};
  flex: ${(props) => props.flex || 1};
`;

export const Row = styled(BaseFlex)`
  flex-direction: row;
`;

export const Column = styled(BaseFlex)`
  flex-direction: column;
`;

export const FileUploadBase = styled(Column)`
  border-radius: 0.25rem;
  border: 0.3rem dashed #e6e7e9;
  padding: 1.5rem;
`;
export const ToFull = styled(Row)`
  @media (max-width: 1024px) {
    width: 100%;
  }
`;

export const FilesContainer = styled(Row)`
  gap: 1.5rem;
  position: relative;
  min-height: 20rem;
  max-height: 21rem;
  flex-wrap: wrap;
  overflow: auto;
  padding: 1rem;
`;

export const FileHolder = styled.div`
 img{
  object-fit: contain;
  width: 100%;
 };
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  background-color: white;
  border-radius: 0.25rem;
  box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.1);
`;

export const Text = styled.span`
  font-size: ${(props) => font.sizes[props.size ?? 'base']};
  color: ${(props) => props.color || theme.grey[100]};
  font-weight: ${(props) => props.weight || font.weights.normal};
  text-align: ${(props) => props.align || 'left'};
  margin: ${(props) => props.margin || '0.5rem 0'};
`;

export const Paragraph = styled.p`
  font-size: ${(props) => font.sizes[props.size ?? 'base'] || font.sizes.base};
  color: ${(props) => props.color || theme.black[100]};
  font-weight: ${(props) =>
    font.weights[props.weight ?? 'normal'] || font.weights.normal};
  text-align: ${(props) => props.align || 'left'};
  margin: ${props => props.margin || '0.5rem 0'};
  max-width: 100%;
`;

export const Button = styled.button`
  ${({ variant, background = 'blue', color = 'white' }) => {
    const bg = Object.keys(theme).includes(background)
      ? theme[background][500]
      : background;
    const col = Object.keys(theme).includes(color)
      ? theme[color][100]
      : color;

    switch (variant) {
      case 'solid':
        return css`
          border: none;
          background-color: ${bg};
          color: ${col};
          svg,
          path,
          * {
            stroke: ${col};
            color: ${col};
          }
        `;
      case 'outlined':
        return css`
          background-color: transparent;
          color: ${bg};
          border: 1px solid ${bg};
          svg,
          path,
          * {
            color: ${col};
            stroke: ${bg};
          }
        `;
      case 'text':
        return css`
          background-color: transparent;
          border: none;
          color: ${bg};
          svg,
          path,
          * {
            color: ${col};
            stroke: ${bg};
          }
        `;
      default:
        return css`
          border: none;
          background-color: ${bg};
          color: ${col};
          svg,
          path,
          * {
            color: ${col};
            stroke: ${col};
          }
        `;
    }
  }};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  font-family: inherit;
  font-size: ${font.sizes.base};
  font-weight: ${font.weights.semibold};
  width: 100%;
  cursor: pointer;
  :active {
    transform: scale(0.97);
    transition: all 0.5s;
  }
`;

export const UploadButton = styled(Button)`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  height: 2.5rem;
  width: 2.5rem;
  padding: 0;
  border-radius: 50%;
  background-color: #f5f5f5;
  border: 0.1rem solid #f5f5f5;
  box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.1);
  cursor: pointer;
`;

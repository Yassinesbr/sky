import styled from "styled-components";

export const ErrorContainer = styled.div`
  padding: 60px 20px;
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const ErrorTitle = styled.h2`
  font-size: 24px;
  font-weight: 700;
  margin: 0 0 16px 0;
  color: var(--text);
`;

export const ErrorMessage = styled.p`
  color: var(--muted);
  font-size: 16px;
  margin: 0 0 24px 0;
  line-height: 1.5;
`;

export const ReloadButton = styled.button`
  background: var(--accent);
  border: none;
  color: white;
  padding: 12px 24px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 15px;
  font-weight: 500;
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(79, 140, 255, 0.3);
  }
`;

import styled from "styled-components";

export const Bar = styled.header`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 32px;
  padding-bottom: 20px;
  border-bottom: 1px solid var(--border);
`;

export const Title = styled.h1`
  font-size: clamp(24px, 4vw, 36px);
  font-weight: 800;
  letter-spacing: -0.5px;
  margin: 0;
  background: linear-gradient(135deg, var(--text) 0%, var(--accent) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

export const Controls = styled.div`
  display: grid;
  grid-template-columns: 1fr auto auto;
  gap: 16px;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 12px;
  }
`;

export const Input = styled.input`
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 12px 16px;
  color: var(--text);
  outline: none;
  font-size: 15px;
  transition: all 0.2s ease;

  &::placeholder {
    color: var(--muted);
  }

  &:focus {
    border-color: var(--accent);
    box-shadow: 0 0 0 3px rgba(79, 140, 255, 0.15);
  }
`;

export const Toggle = styled.button`
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 12px 16px;
  color: var(--muted);
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  white-space: nowrap;
  transition: all 0.2s ease;

  &:hover {
    border-color: var(--accent);
    color: var(--text);
    background: rgba(79, 140, 255, 0.1);
  }

  @media (max-width: 768px) {
    padding: 10px 14px;
    font-size: 13px;
  }
`;

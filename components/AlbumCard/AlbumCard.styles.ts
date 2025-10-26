import styled from "styled-components";

export const Card = styled.article`
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 16px;
  display: grid;
  grid-template-columns: 100px 1fr auto;
  gap: 16px;
  align-items: center;
  transition: all 0.2s ease;

  &:hover {
    border-color: var(--accent);
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(79, 140, 255, 0.15);
  }
`;

export const CoverWrapper = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 12px;
  border: 1px solid var(--border);
  overflow: hidden;
  position: relative;
  transition: transform 0.2s ease;

  ${Card}:hover & {
    transform: scale(1.05);
  }

  img {
    border-radius: 11px;
    object-fit: cover;
  }
`;

// Keep the old Cover for backward compatibility if needed
export const Cover = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 12px;
  object-fit: cover;
  border: 1px solid var(--border);
  transition: transform 0.2s ease;

  ${Card}:hover & {
    transform: scale(1.05);
  }
`;

export const Meta = styled.div`
  display: grid;
  gap: 4px;
`;

export const Title = styled.h3`
  font-size: 17px;
  font-weight: 600;
  margin: 0;
  line-height: 1.3;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const Artist = styled.p`
  margin: 0;
  color: var(--muted);
  font-size: 15px;
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const Actions = styled.div`
  display: grid;
  gap: 8px;
`;

export const Button = styled.button`
  background: transparent;
  border: 1px solid var(--border);
  color: var(--text);
  padding: 10px 14px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 13px;
  font-weight: 500;
  transition: all 0.2s ease;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 80px;

  &:hover {
    border-color: var(--accent);
    background: rgba(79, 140, 255, 0.1);
    transform: translateY(-1px);
  }

  &[aria-pressed="true"] {
    background: var(--accent);
    border-color: var(--accent);
    color: white;
  }
`;

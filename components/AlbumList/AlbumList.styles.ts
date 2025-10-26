import styled from "styled-components";

export const Grid = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 16px;
  margin-top: 24px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 12px;
  }
`;

export const Sentinel = styled.div`
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
`;

export const Empty = styled.p`
  color: var(--muted);
  text-align: center;
  margin-top: 24px;
`;

// Loading skeleton styles
const shimmer = `
  @keyframes shimmer {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }
`;

export const LoadingCard = styled.article`
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 16px;
  display: grid;
  grid-template-columns: 100px 1fr auto;
  gap: 16px;
  align-items: center;
  ${shimmer}
`;

export const LoadingSkeleton = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 12px;
  background: var(--border);
  position: relative;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.1),
      transparent
    );
    animation: shimmer 1.5s infinite;
  }
`;

export const LoadingMeta = styled.div`
  display: grid;
  gap: 8px;
`;

export const LoadingTitle = styled.div`
  height: 20px;
  background: var(--border);
  border-radius: 4px;
  width: 80%;
  position: relative;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.1),
      transparent
    );
    animation: shimmer 1.5s infinite;
  }
`;

export const LoadingArtist = styled.div`
  height: 16px;
  background: var(--border);
  border-radius: 4px;
  width: 60%;
  position: relative;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.1),
      transparent
    );
    animation: shimmer 1.5s infinite;
  }
`;

export const LoadingActions = styled.div`
  display: grid;
  gap: 8px;
`;

export const LoadingButton = styled.div`
  height: 36px;
  width: 80px;
  background: var(--border);
  border-radius: 8px;
  position: relative;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.1),
      transparent
    );
    animation: shimmer 1.5s infinite;
  }
`;

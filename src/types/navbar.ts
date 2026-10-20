export interface NavLinksProps {
  activeId: string;
  onNavigate?: () => void;
  variant?: 'desktop' | 'mobile';
}

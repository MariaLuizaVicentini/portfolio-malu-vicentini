import Tag from './Tag';
import { cn } from '@/utils/cn';

interface TagListProps {
  tags: string[];
  size?: 'sm' | 'md';
  className?: string;
}

export default function TagList({ tags, size = 'md', className }: TagListProps) {
  return (
    <div className={cn('flex flex-wrap gap-2', className)}>
      {tags.map((tag) => (
        <Tag key={tag} size={size}>
          {tag}
        </Tag>
      ))}
    </div>
  );
}

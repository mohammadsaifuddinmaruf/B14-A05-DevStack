export interface CardItem {
  id: string;
  icon: string;
  name: string;
  description: string;
  category: 'Frontend' | 'Backend' | 'Database' | 'Language' | 'Styling' | 'DevOps' | 'Tools';
  difficulty: 'Beginner-Friendly' | 'Intermediate' | 'Advanced';
  rating: number;
  badge: string;
}
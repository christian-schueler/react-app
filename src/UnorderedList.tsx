import './UnorderedList.css';
import ListItem from './ListItem';

export default function UnorderedList({ items }: { items: Array<{isPacked: boolean, name: string}> }) {
  return (
    <ul className="unordered-list">
      {items.map((item, index) => (
        <ListItem key={index} {...item} />
      ))}
    </ul>
  );
}

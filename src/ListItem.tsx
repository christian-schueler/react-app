import './ListItem.css';

export default function ListItem({ isPacked, name }: { isPacked: boolean; name: string }) {
  return (
    <li className={isPacked ? 'packed' : 'unpacked'}><span>{name}</span> {isPacked ? <span className="checkmark">✅</span> : <span className="crossmark">❌</span>}</li>
  );
}

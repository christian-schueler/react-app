import './Profile.css';
import Avatar from './Avatar';

export default function Profile({ id, name, avatar, profession, awards, discoveries }: { id: number; name: string; avatar: { id: number, size: number }; profession: string; awards: string[]; discoveries: string[] }) {
  return (
    <div className="profile" key={id}>
      <h2>{name}</h2>
      <Avatar id={avatar.id} size={avatar.size} alt={`${name}'s avatar`} />
      <div className='grid'>
        <div className='label'>Profession:</div>
        <div className='value'>{profession}</div>
        <div className='label'>Awards:</div>
        <div className='value'><strong>{awards.length}</strong> ({awards.join(', ')})</div>
        <div className='label'>Discovered:</div>
        <div className='value'>{discoveries.join(', ')}</div>
      </div>
    </div>
  );
}

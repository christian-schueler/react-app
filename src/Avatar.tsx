import './Avatar.css';
import { getImgSrc } from './utils';

export default function Avatar({ id, size, alt }: { id: number; size: number; alt: string }) {
  // open the avatar in a new window
  const clickHandler = () => {
    window.open(getImgSrc(id, size * 2), '_blank');
  };

  return <img className="avatar" src={getImgSrc(id, size)} alt={alt} onClick={clickHandler} />;
}

import './App.css';
import Profile from './Profile';
import UnorderedList from './UnorderedList';

const App = ({ title, description }: { title: string; description: string }) => {

  // data for the component Profile
  const profiles: Array<{
    id: number;
    name: string;
    avatar: { id: number, size: number };
    profession: string;
    awards: string[];
    discoveries: string[];
  }> = [
    { id: 1,
      name: 'Maria Skłodowska-Curie',
      avatar: { id: 1024, size: 100 },
      profession: 'physician',
      awards: ['Nobel Prize in Physics', 'Nobel Prize in Chemistry', 'Davy Medal', 'Matteucci Medal'],
      discoveries: ['polonium (chemical element)'] },
    { id: 2,
      name: 'Katsuko Saruhashi',
      avatar: { id: 1023, size: 100 },
      profession: 'geochemist',
      awards: ['Miyake Prize for geochemistry', 'Tanaka Prize'],
      discoveries: ['a method for measuring carbon dioxide in seawater'] },
  ];

  // data for the component UnorderedList
  const packageList: Array<{isPacked: boolean, name: string}> = [
    { isPacked: true, name: 'Laptop' },
    { isPacked: false, name: 'Headphones' },
    { isPacked: true, name: 'Charger' },
  ];

  return (
    <div className="content">
      <h1>{title}</h1>
      <p>{description}</p>
      {profiles.map((profile) => (
        <Profile key={profile.id} {...profile} />
      ))}
      <UnorderedList items={packageList} />
    </div>
  );
};

export default App;

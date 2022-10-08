
import './App.css';
import Banner from './Components/Banner/Banner';
import Navbar from './Components/Navbar/Navbar';
import Rowpost from './Components/Rowpost/Rowpost';
import {
  ACTION_MOVIES,
  ORIGINALS,
  COMEDY_MOVIES,
  HORROR_MOVIES,
  ROMANCE_MOVIES,
  THRILLER_MOVIES,
  SCIFI_MOVIES,
  DOCUMENTARIES_MOVIES,
  ACTION_ADVENTURE_SERIES,
  COMEDY_SERIES,
  ROMANCE_SERIES,
  TALK,
  KIDS_SERIES,
  ANIMATION_SERIES,
  SCIFI_SERIES,
  MYSTERY_SERIES,
  CRIME_SERIES,
  DOCUMENTARIES_SERIES} from './urls'
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <Rowpost url={ORIGINALS}  title='Netflix Original'/>
      <div className='section-heading'>
      <h2>Movies</h2>
      </div>
      <Rowpost url={ACTION_MOVIES} title='Action' isSmall />
      <Rowpost url={COMEDY_MOVIES} title='Comedy' isSmall />
      <Rowpost url={HORROR_MOVIES} title='Horror' isSmall />
      <Rowpost url={THRILLER_MOVIES} title='Thriller' isSmall />
      <Rowpost url={SCIFI_MOVIES} title='Science Fiction' isSmall />
      <Rowpost url={ROMANCE_MOVIES} title='Romance' isSmall />
      <Rowpost url={DOCUMENTARIES_MOVIES} title='Documentaries' isSmall />
      <div className='section-heading'>
      <h2>TV Series</h2>
      </div>
      <Rowpost url={ACTION_ADVENTURE_SERIES} title="Action & Adventure" isSmall />
      <Rowpost url={SCIFI_SERIES} title='Science Fiction' isSmall />
      <Rowpost url={MYSTERY_SERIES} title='Mystery' isSmall />
      <Rowpost url={CRIME_SERIES} title='Crime' isSmall />
      <Rowpost url={KIDS_SERIES} title='Kids' isSmall />
      <Rowpost url={ANIMATION_SERIES} title='Animation' isSmall />
      <Rowpost url={COMEDY_SERIES} title='Comedy' isSmall />
      <Rowpost url={ROMANCE_SERIES} title='Romance' isSmall />
      <Rowpost url={TALK} title='Romance' isSmall />
      <Rowpost url={DOCUMENTARIES_SERIES} title='Documentaries' isSmall />
    </div>
  );
}

export default App;

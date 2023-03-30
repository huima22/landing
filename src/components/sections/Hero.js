import React, { useEffect,useState } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';
import Image from '../elements/Image';
import Modal from '../elements/Modal';
import Input from '../elements/Input';
import CarouselInterval from '../elements/CarouselInterval';
import dashboards from '../../dashboards.json'
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import SearchResultPanel from './SearchResultPanel';
import Catalog from './Catalog';
import CatalogBrowse from './CatalogBrowse';
import NewsFeeds from './NewsFeed';
import KeyNumbers from './KeyNumbers';
import MyFavouriteDashboards from './MyFavouriteDashboards';

const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {

  const [videoModalActive, setVideomodalactive] = useState(false);

  const openModal = (e) => {
    e.preventDefault();
    setVideomodalactive(true);
  }

  const closeModal = (e) => {
    e.preventDefault();
    setVideomodalactive(false);
  }   

  const outerClasses = classNames(
    'hero section center-content',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

 const CardStyle = {
   border: "1px solid black",
   padding: "20px",
   margin: "20px",
   width: "160px",
   height: "250px"
 };
  const innerClasses = classNames(
    'hero-inner section-inner',
    'padding-removal',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  /*const [allPokemons, setAllPokemons] = useState([]);
    const [loadPoke, setLoadPoke] = useState(
      "https://pokeapi.co/api/v2/pokemon?limit=20"
    );
  const getAllPokemons = async () => {
        const res = await fetch(loadPoke);
        const data = await res.json();
        setLoadPoke(data.next);

        function createPokemonObject(result) {
          result.forEach(async (pokemon) => {
            const res = await fetch(
              `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
            );
            const data = await res.json();
            setAllPokemons((currentList) => [...currentList, data]);
          });
        }
        createPokemonObject(data.results);
        await console.log(allPokemons);

      };



*/


 const[search,setSearch] = useState('')
 const[focus,setFocus] = useState(false)
 const[upkeynumber,setUpkeynumber] = useState(true)
  //const navigate = useNavigate()

  function selectSearch(e){
    console.log(e.id)
    setFocus(false)

    //navigate(`/pokemon/${e.id}`)
  }
  function handleSetSearch (e) {
         setSearch(e)
         setFocus(false)
         setUpkeynumber(true);
  }
  const handleOnFocus = () => {
     setFocus(true)
     console.log(focus)
     setUpkeynumber(false);
   }


  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <div className="hero-content ">
              <h1>
             <span className="reveal-rotate-from-left"  data-reveal-delay="1000">All insights in one </span>
                <span className="text-color-corporate reveal-scale-up" data-reveal-delay="1600">Box</span>

              </h1>

                      <div className="container-xs override-wrapper ">
                           <ReactSearchAutocomplete
                            placeholder='Search Dashboards'
                            fuseOption ={{ keys: ["id", "name", "description"] }}
                            resultStringKeyName="name"
                            items={dashboards}
                            styling={{height: "50px", zIndex: "1"}}
                            onSearch={e => handleSetSearch(e)}
                            onFocus={handleOnFocus}
                            onSelect={selectSearch}

                            />

                </div>


                <CatalogBrowse style={{marginBottom: "80px"}} showCatalog={focus}  allDashboards={dashboards} />
              {/*  <Catalog showCatalog={focus} topDivider/>*/}
                <SearchResultPanel  allDashboards={dashboards} search={search} topDivider/>

              <KeyNumbers  showNumbers={upkeynumber} />



          </div>


         <div className="container mb-5">
                <NewsFeeds/>
          </div>



          <div className="container">
          <div className="hero-figure reveal-from-bottom illustration-element-01" data-reveal-value="20px" data-reveal-delay="800">


          <CarouselInterval />
          </div>
          </div>


        </div>
      </div>


    </section>
  );
}

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;
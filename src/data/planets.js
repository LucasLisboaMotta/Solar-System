import MercurioImg from '../images/Mercurio.png';
import VenusImg from '../images/Venus.png';
import TerraImg from '../images/Terra.png';
import MarteImg from '../images/Marte.png';
import JupiterImg from '../images/Jupiter.png';
import SaturnoImg from '../images/Saturno.png';
import Uranoimg from '../images/Urano.png';
import Netunoimg from '../images/Netuno.png';

const Planets = [
  { name: 'Mercúrio', image: MercurioImg, classe: 'pequeno' },
  { name: 'Vênus', image: VenusImg, classe: 'medio' },
  { name: 'Terra', image: TerraImg, classe: 'medio' },
  { name: 'Marte', image: MarteImg, classe: 'pequeno' },
  { name: 'Júpiter', image: JupiterImg, classe: 'extra-grande' },
  { name: 'Saturno', image: SaturnoImg, classe: 'extra-grande' },
  { name: 'Urano', image: Uranoimg, classe: 'grande' },
  { name: 'Netuno', image: Netunoimg, classe: 'grande' },
];

export default Planets;

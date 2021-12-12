import { Company } from './components/Company';
import { User } from './components/User';
import { CustomMap } from './components/CustomMap';

const user = new User();
const company = new Company();
const customMap = new CustomMap('map');
customMap.addMarker(user);
customMap.addMarker(company);
import { User } from './User';
import { Company } from './Company';
import { CustomMap } from './CustomMap';

const customMap = new CustomMap('map');

const customUser = new User();
const customCompany = new Company();

customMap.addMarker(customUser);
customMap.addMarker(customCompany);

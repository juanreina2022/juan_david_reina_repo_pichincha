
interface IObj {
  [key: string]: any;
}

interface IOrganization {
  name: string;
  status: number;
}

interface ITribe {
  id_organization: number;
  name: string;
  status: number;
}

interface IRepository {
  create_time: string;
  id_tribe: number;
  name: string;
  state: string;
  status: string;
}

interface IMetric {
  bugs: number;
  code_smells: number;
  coverage: number;
  hotspot: number;
  id_repository: number;
  vulnerabilities: number;
}
